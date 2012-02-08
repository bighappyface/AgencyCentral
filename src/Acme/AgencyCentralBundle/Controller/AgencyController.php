<?php

namespace Acme\AgencyCentralBundle\Controller;

use Acme\AgencyCentralBundle\Document\Agency;
use Acme\AgencyCentralBundle\Document\User;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Acme\AgencyCentralBundle\Form\Type\AgencyType;
use Acme\AgencyCentralBundle\Form\Model as FormModel;

/**
  * @Route("/agency")
  */
class AgencyController
extends AbstractController
{
	protected $_dmRepo = 'AcmeAgencyCentralBundle:Agency';
	/**
	 * @Route("/create")
	 */
	public function createAction()
	{
		
	}
	/**
	 * @Route("/update")
	 * @Method({"POST"})
	 */
	public function updateAction()
	{
		$result = array('success' => false, 'field' => array());
		$form = $this->createForm(new AgencyType(), new Agency());
		$form->bindRequest($this->getRequest());
		if ($form->isValid()) {
			$formAgency = $form->getData();
			$this->getDm()->persist($formAgency);
			$this->getDm()->flush();
			$result['success'] = true;
		}else{
			$formData = $form->getData();
		}
		return $this->jsonResponse($result);
	}
	/**
	 * @Route("/list")
	 */
	public function listAction()
	{
	    $agencies = $this->prepareMongoDataForJson( $this->getRepo()->findAll() );
	    return $this->jsonResponse($agencies);
	}
    /**
      * @Route("/", defaults={"id" = 0})
 	  * @Route("/{id}")
 	  * @Template()
      */
    public function indexAction($id)
    {
	    $agency = array();
    	if($id){
    		$agency = $this->getRepo()->find($id);
    		if($agency){
    			$agency = $agency->toArray();
    			$agency['allowEdit'] = false;
    			$sessionUser = $this->getRequest()->getSession()->get('user');
    			if($sessionUser){
    				$agency['allowEdit'] = ($sessionUser->getAgency() == $agency['id']);
    				$userRepo = $this->getDm()->getRepository('AcmeAgencyCentralBundle:User');
    				$users = $userRepo->findByAgency($agency['id']);
    				if($users->count() > 0){
    					while($users->hasNext()){
    						$agency['users'][] = $users->getNext()->toArray();
    					}
    				}
    			}
    		}
    	}
    	return $this->jsonResponse($agency);
    }
}

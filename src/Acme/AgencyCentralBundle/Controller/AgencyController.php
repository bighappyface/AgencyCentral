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
			die(var_dump($form->getErrors()));
		}
		return $this->jsonResponse($result);
	}
	/**
	 * @Route("/list")
	 */
	public function listAction()
	{
	    $agencies = $this->prepareMongoDataForJson( $this->getRepo()->findAll() );
	    $sessionUser = $this->getRequest()->getSession()->get('user');
	    if ($sessionUser) {
	    	$userRepo = $this->getDm()
	    					 ->getRepository('AcmeAgencyCentralBundle:User');
		    foreach($agencies as &$agency){
		    	$agency['allowEdit'] = ($sessionUser->getAgency() == $agency['id']);
		    }
	    }
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
    		$agency = ($agency) ? $agency : array();
    	}
    	return $this->jsonResponse($agency);
    }
}

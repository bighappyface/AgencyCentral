<?php
namespace Acme\AgencyCentralBundle\Controller;

use Acme\AgencyCentralBundle\Document\Agency;
use Acme\AgencyCentralBundle\Document\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Acme\AgencyCentralBundle\Form\Type\RegistrationType;
use Acme\AgencyCentralBundle\Form\Model\Registration;

/**
  * @Route("/user")
  */
class UserController
extends AbstractController
{
	protected $_dmRepo = 'AcmeAgencyCentralBundle:User';
	/**
	 * @Route("/create")
	 */
	public function createAction()
	{
		$result = array('success' => false);
		$form = $this->createForm(new RegistrationType(), new Registration());
    	$form->bindRequest($this->getRequest());
    	if ($form->isValid()) {
    		$registration = $form->getData();
    		$this->getDm()->persist($registration->getUser());
    		$this->getDm()->flush();
    		$result['success'] = true;
    	}else{
    		$formData = $form->getData();
    		if($this->getRepo()->findOneByEmail($formData->getUser()->getEmail())){
    			$result['errors']['field'] = array(
    				'id' => 'email',
    				'msg' => 'E-mail address already registered'
    			);
    		}
    	}
    	return $this->jsonResponse($result);
	}
	
	/**
	 * @Route("/list")
	 */
	public function listAction()
	{
		$users = $this->getRepo()->findAll();
	    if (!$users) {
	        throw $this->createNotFoundException('No users found');
	    }
	    $out = array();
	    while($users->hasNext()){
	    	$itemArr = (array) $users->getNext();
	    	$itemArrFinal = array();
	    	foreach($itemArr as $k => $v){
	    		$k = \trim(\str_replace('*', '', $k));
	    		$itemArrFinal[$k] = $v;
	    	}
	    	$out[] = $itemArrFinal;
	    }
	    return $this->jsonResponse($out);
	}
    /**
	 * @Route("/register")
	 */
    public function registerAction()
    {
    	$form = $this->createForm(new RegistrationType(), new Registration());
    	return $this->render('AcmeAgencyCentralBundle:User:register.html.twig', array('form' => $form->createView()));
    }
    
    /**
     * @Route("/", defaults={"id" = 1})
     * @Route("/{id}")
     * @Template()
     */
    public function indexAction($id)
    {
    	die('get user');
    }
}

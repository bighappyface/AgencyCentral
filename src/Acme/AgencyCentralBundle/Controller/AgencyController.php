<?php

namespace Acme\AgencyCentralBundle\Controller;

use Acme\AgencyCentralBundle\Document\Agency;
use Acme\AgencyCentralBundle\Document\User;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;

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
	 * @Route("/list")
	 */
	public function listAction()
	{
		$agencies = $this->getRepo()->findAll();
		
	    if (!$agencies) {
	        throw $this->createNotFoundException('No agencies found');
	    }
	    $agencies = $this->prepareMongoDataForJson($agencies);
	    $sessionUser = $this->getRequest()->getSession()->get('user');
	    if ($sessionUser) {
	    	$userRepo = $this->getDm()
	    					 ->getRepository('AcmeAgencyCentralBundle:User');
		    foreach($agencies as &$agency){
		    	$users = $userRepo->findByAgency($agency['id']);
		    	if($users->count() > 0){
		    		$users = $this->prepareMongoDataForJson($users);
		    		foreach($users as &$user){
		    			$user['allowEdit'] = ($sessionUser->getAgency() == $agency['id']);
		    			unset($user['password']);
		    		}
		    		$agency['users'] = $users;
		    	}
		    }
	    }
	    return $this->jsonResponse($agencies);
	}
    /**
      * @Route("/", defaults={"id" = 1})
 	  * @Route("/{id}")
 	  * @Template()
      */
    public function indexAction($id)
    {
	    die('get agency');
    }
}

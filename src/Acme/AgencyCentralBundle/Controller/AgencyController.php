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
	    if (!$this->get('security.context')->isGranted('ROLE_USER')) {
	    	$userRepo = $this->get('doctrine.odm.mongodb.document_manager')
	    					 ->getRepository('AcmeAgencyCentralBundle:User');
		    foreach($agencies as &$agency){
		    	$users = $userRepo->findByAgency($agency['id']);
		    	if($users->count() > 0){
		    		$agency['users'] = $this->prepareMongoDataForJson($users);
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

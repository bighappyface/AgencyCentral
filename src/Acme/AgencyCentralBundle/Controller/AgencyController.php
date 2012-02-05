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
class AgencyController extends AbstractController
{
	/**
	* @Route("/create")
	*/
	public function createAction()
	{
		$agency = new Agency();
		$agency->setName('Third');
		
		$dm = $this->get('doctrine.odm.mongodb.document_manager');
		$dm->persist($agency);
		$dm->flush();
		
		$user = new User();
		$user->setName('David Porter');
		$user->setEmail('anomalous20@gmail.com');
		$user->setPassword('password');
		$user->setAgency($agency);
		
		$dm->persist($user);
		$dm->flush();
	
		return new Response('Created agency id '.$agency->getId());
	}
	
	/**
	* @Route("/list")
	*/
	public function listAction()
	{
		$agencies = $this->get('doctrine.odm.mongodb.document_manager')
	        			->getRepository('AcmeAgencyCentralBundle:Agency')
	        			->findAll();
		
	    if (!$agencies) {
	        throw $this->createNotFoundException('No agencies found');
	    }
	    $agencies = $this->prepareMongoDataForJSON($agencies);
	    $userRepo = $this->get('doctrine.odm.mongodb.document_manager')
	    	             ->getRepository('AcmeAgencyCentralBundle:User');
	    foreach($agencies as &$agency){
	    	$users = $userRepo->findByAgency($agency['id']);
	    	if($users->count() > 0){
	    		$agency['users'] = $this->prepareMongoDataForJSON($users);
	    	}
	    }
	    return new Response(json_encode($agencies), 200, array('Content-Type' => 'application/json'));
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

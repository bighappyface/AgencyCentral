<?php

namespace Acme\AgencyCentralBundle\Controller;

use Acme\AgencyCentralBundle\Document\Agency;
use Acme\AgencyCentralBundle\Document\User;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;

/**
  * @Route("/user")
  */
class UserController extends Controller
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
		$users = $this->get('doctrine.odm.mongodb.document_manager')
	        		  ->getRepository('AcmeAgencyCentralBundle:User')
	        		  ->findAll();
		
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
	    return new Response(json_encode($out), 200, array('Content-Type' => 'application/json'));
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

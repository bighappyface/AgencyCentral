<?php

namespace Acme\AgencyCentralBundle\Controller;

use Acme\AgencyCentralBundle\Document\Agency;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;

/**
  * @Route("/agency")
  */
class AgencyController extends Controller
{
	/**
	* @Route("/create")
	*/
	public function createAction()
	{
		$agency = new Agency();
		$agency->setName('Mills');
	
		$dm = $this->get('doctrine.odm.mongodb.document_manager');
		$dm->persist($agency);
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
	    $out = array();
	    while($agencies->hasNext()){
	    	$itemArr = (array) $agencies->getNext();
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
	    die('get agency');
    }
    
    
}

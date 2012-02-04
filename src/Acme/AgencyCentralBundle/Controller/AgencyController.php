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
		$agency->setName('David');
	
		$dm = $this->get('doctrine.odm.mongodb.document_manager');
		$dm->persist($agency);
		$dm->flush();
	
		return new Response('Created agency id '.$agency->getId());
	}
	
    /**
      * @Route("/", defaults={"id" = 1})
 	  * @Route("/{id}")
 	  * @Template()
      */
    public function indexAction($id)
    {
        return array('id' => $id);
    }
    
    
}

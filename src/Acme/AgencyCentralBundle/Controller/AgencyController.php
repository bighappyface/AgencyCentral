<?php

namespace Acme\AgencyCentralBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
  * @Route("/agency")
  */
class AgencyController extends Controller
{
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

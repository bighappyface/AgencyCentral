<?php

namespace Acme\AgencyCentralBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


abstract class AbstractController extends Controller
{
    public function prepareMongoDataForJSON($data)
    {
    	$out = array();
    	while($data->hasNext()){
    		$item = (array) $data->getNext();
    		$itemOut = array();
    		foreach($item as $k => $v){
    			$k = \trim(\str_replace('*', '', $k));
    			$itemOut[$k] = $v;
    		}
    		$out[] = $itemOut;
    	}
    	return $out;
    }
}

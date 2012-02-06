<?php
namespace Acme\AgencyCentralBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class AbstractController
extends Controller
{
	protected $_dm;
	protected $_repo;
	protected $_dmRepo;
	public function getDm()
	{
		if(!isset($this->_dm)){
			$this->_dm = $this->get('doctrine.odm.mongodb.document_manager');
		}
		return $this->_dm;
	}
	public function getRepo()
	{
		if(!isset($this->_repo)){
			$this->_repo = $this->getDm()
								->getRepository($this->_dmRepo);
		}
		return $this->_repo;
	}
	/**
	 * Prepare Mongo Data for JSON
	 * @param array $data
	 * @return array
	 */
    public function prepareMongoDataForJson($data = array())
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
    /**
     * JSON Response
     * @param Symfony\Component\HttpFoundation\Response $data
     */
    public function jsonResponse($data = array())
    {
    	return new Response(\json_encode($data), 200, array('Content-Type' => 'application/json'));
    }
}

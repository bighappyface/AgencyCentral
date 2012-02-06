<?php
namespace Acme\AgencyCentralBundle\Controller;

use Acme\AgencyCentralBundle\Document\Agency;
use Acme\AgencyCentralBundle\Document\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Acme\AgencyCentralBundle\Form\Type\RegistrationType;
use Acme\AgencyCentralBundle\Form\Model\Registration;
use Acme\AgencyCentralBundle\Form\Type\LoginType;
use Acme\AgencyCentralBundle\Form\Model\Login;

/**
  * @Route("/user")
  */
class UserController
extends AbstractController
{
	protected $_dmRepo = 'AcmeAgencyCentralBundle:User';
	/**
	* @Route("/login")
	*/
	public function loginAction()
	{
		if ($this->getRequest()->getMethod() == 'POST'){
			$result = array(
				'success' => false,
				'field' => array(
    		    	'id' => 'email',
    		    	'msg' => 'No user registered with that e-mail'
				)
			);
			$form = $this->createForm(new LoginType(), new Login());
			$form->bindRequest($this->getRequest());
			if($form->isValid()){
				$formData = $form->getData();
				$user = $this->getRepo()->findOneByEmail( $formData->getEmail() );
				if($user){
					if($user->getPassword() == $formData->getPassword()){
						$this->getRequest()->getSession()->set('user', $user);
						$result['success'] = true;
					}
				}
			}
			return $this->jsonResponse($result);
		}
		$form = $this->createForm(new LoginType(), new Login());
		return $this->render('AcmeAgencyCentralBundle:User:login.html.twig', array('form' => $form->createView()));
	}
	/**
	 * @Route("/login-check")
	 */
	public function loginCheckAction()
	{
		$sessionUser = $this->getRequest()->getSession()->get('user');
		$sessionUser = ($sessionUser == null) ? false : $sessionUser->toArray();
		return $this->jsonResponse(array('user' => $sessionUser));
	}
	/**
	 * @Route("/logout")
	 */
	public function logoutAction()
	{
		$this->getRequest()->getSession()->set('user', null);
		$result = array('success' => true);
		return $this->jsonResponse($result);
	}
	/**
	 * @Route("/create")
	 */
	public function createAction()
	{
		$result = array('success' => false, 'field' => array());
		$form = $this->createForm(new RegistrationType(), new Registration());
    	$form->bindRequest($this->getRequest());
    	if ($form->isValid()) {
    		$registration = $form->getData();
    		$user = $registration->getUser();
    		$this->getDm()->persist($user);
    		$this->getDm()->flush();
    		$result['success'] = true;
    		$this->getRequest()->getSession()->set('user', $user);
    	}else{
    		$formData = $form->getData();
    		if($this->getRepo()->findOneByEmail( $formData->getUser()->getEmail() )){
    			$result['field'] = array(
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

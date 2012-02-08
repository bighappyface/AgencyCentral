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
use Acme\AgencyCentralBundle\Form\Type\UserType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

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
					}else{
						$result['field'] = array(
		    		    	'id' => 'password',
		    		    	'msg' => 'Incorrect Password'
						);
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
	 * @Route("/update")
	 * 
	 */
	public function updateAction()
	{
		$form = $this->createForm(new UserType(), new User());
		if($this->getRequest()->getMethod() == 'POST'){
			$result = array('success' => false, 'field' => array());
			$form->bindRequest($this->getRequest());
			if ($form->isValid()) {
				$formUser = $form->getData();
				$this->getDm()->persist($formUser);
				$this->getDm()->flush();
				$result['success'] = true;
			}else{
				die(var_dump( $form->isValid() ));
				$formData = $form->getData();
			}
			return $this->jsonResponse($result);
		}
		return $this->render('AcmeAgencyCentralBundle:User:update.html.twig', array('form' => $form->createView()));
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
     * @Route("/", defaults={"id" = 0})
     * @Route("/{id}")
     * @Template()
     */
    public function indexAction($id)
    {
    	$user = array();
    	if($id){
    		$user = $this->getRepo()->find($id);
    		if($user){
    			$user = $user->toArray();
    			$user['allowEdit'] = false;
    			$sessionUser = $this->getRequest()->getSession()->get('user');
    			if($sessionUser){
    				$user['allowEdit'] = ($sessionUser->getAgency() == $user['agency']);
    			}
    		}
    	}
    	return $this->jsonResponse($user);
    }
}

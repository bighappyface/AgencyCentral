<?php
namespace Acme\AgencyCentralBundle\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;
use Acme\AgencyCentralBundle\Document\User;

class Registration
{
	/**
	 * @Assert\Type(type="Acme\AgencyCentralBundle\Document\User")
	 */
	protected $user;

	public function setUser(User $user)
	{
		$this->user = $user;
	}

	public function getUser()
	{
		return $this->user;
	}
}
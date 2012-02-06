<?php
namespace Acme\AgencyCentralBundle\Form\Model;
use Symfony\Component\Validator\Constraints as Assert;

class Login
{
	/**
	 * @Assert\NotBlank()
	 * @Assert\Email()
	 */
	protected $email;
	/**
	 * @Assert\NotBlank()
	 */
	protected $password;

	/**
	 * Set email
	 *
	 * @param string $email
	 */
	public function setEmail($email)
	{
		$this->email = $email;
	}
	/**
	 * Get email
	 *
	 * @return string $email
	 */
	public function getEmail()
	{
		return $this->email;
	}
	/**
	 * Set password
	 *
	 * @param string $password
	 */
	public function setPassword($password)
	{
		$this->password = \md5($password);
	}
	/**
	 * Get password
	 *
	 * @return string $password
	 */
	public function getPassword()
	{
		return $this->password;
	}
}
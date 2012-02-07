<?php
namespace Acme\AgencyCentralBundle\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;
use Acme\AgencyCentralBundle\Document;

class Agency
{
	/**
	 * @Assert\Type(type="Acme\AgencyCentralBundle\Document\Agency")
	 */
	protected $agency;

	public function setAgency(Document\Agency $agency)
	{
		$this->agency = $agency;
	}

	public function getAgency()
	{
		return $this->agency;
	}
}
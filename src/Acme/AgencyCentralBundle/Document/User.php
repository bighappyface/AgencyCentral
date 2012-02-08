<?php
namespace Acme\AgencyCentralBundle\Document;

use Acme\AgencyCentralBundle\Document;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Bundle\DoctrineMongoDBBundle\Validator\Constraints\Unique as MongoDBUnique;
use Symfony\Component\Validator\Constraints as Assert;

/**
* @MongoDB\Document(collection="user")
* @MongoDBUnique(path="email")
*/
class User
extends Document
{
	/**
	* @MongoDB\String
	*/
	protected $agency;
	/**
	 * @MongoDB\String
	 */
	private $password;
    /**
     * Set agency
     *
     * @param string $agency
     */
    public function setAgency(Agency $agency)
    {
    	$this->agency = $agency->getId();
    }
    /**
     * Get agency
     *
     * @return string $agency
     */
    public function getAgency()
    {
    	return $this->agency;
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

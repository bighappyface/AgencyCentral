<?php
namespace Acme\AgencyCentralBundle\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Bundle\DoctrineMongoDBBundle\Validator\Constraints\Unique as MongoDBUnique;
use Symfony\Component\Validator\Constraints as Assert;

/**
* @MongoDB\Document(collection="user")
* @MongoDBUnique(path="email")
*/
class User
{
	/**
	 * @MongoDB\Id
	 */
	protected $id;
	/**
	* @MongoDB\String
	*/
	protected $agency;
	/**
	 * @MongoDB\String
	 */
	protected $name;
	/**
	 * @MongoDB\String
	 * @Assert\NotBlank()
	 * @Assert\Email()
	 */
	protected $email;
	/**
	 * @MongoDB\String
	 * @Assert\NotBlank()
	 */
	protected $password;
    /**
     * Get id
     *
     * @return id $id
     */
    public function getId()
    {
        return $this->id;
    }
    
    public function getAgency()
    {
    	return $this->agency;
    }
    
    public function setAgency(Agency $agency)
    {
    	$this->agency = $agency->getId();
    }
    /**
     * Set name
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }
    /**
     * Get name
     *
     * @return string $name
     */
    public function getName()
    {
        return $this->name;
    }
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

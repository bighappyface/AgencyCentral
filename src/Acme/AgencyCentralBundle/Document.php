<?php
namespace Acme\AgencyCentralBundle;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Bundle\DoctrineMongoDBBundle\Validator\Constraints\Unique as MongoDBUnique;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @MongoDB\Document
 */
class Document
{
	/**
	* @MongoDB\Id
	*/
	protected $id;
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
	 */
	protected $phone;
	/**
	 * @MongoDB\String
	 */
	protected $address;
	/**
	 * @MongoDB\String
	 */
	protected $city;
	/**
	 * @MongoDB\String
	 */
	protected $state;
	/**
	 * @MongoDB\Int
	 */
	protected $zip;
	
	/**
	 * Set name
	 *
	 * @param string $name
	 */
	public function setId($id)
	{
		$this->id = $id;
	}
	
	/**
	 * Get id
	 *
	 * @return id $id
	 */
	public function getId()
	{
		return $this->id;
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
	 * Set phone
	 *
	 * @param string $phone
	 */
	public function setPhone($phone)
	{
		$this->phone = $phone;
	}
	
	/**
	 * Get phone
	 *
	 * @return string $phone
	 */
	public function getPhone()
	{
		return $this->phone;
	}
	
	/**
	 * Set address
	 *
	 * @param string $address
	 */
	public function setAddress($address)
	{
		$this->address = $address;
	}
	
	/**
	 * Get address
	 *
	 * @return string $address
	 */
	public function getAddress()
	{
		return $this->address;
	}
	
	/**
	 * Set city
	 *
	 * @param string $city
	 */
	public function setCity($city)
	{
		$this->city = $city;
	}
	
	/**
	 * Get city
	 *
	 * @return string $city
	 */
	public function getCity()
	{
		return $this->city;
	}
	
	/**
	 * Set state
	 *
	 * @param string $state
	 */
	public function setState($state)
	{
		$this->state = $state;
	}
	
	/**
	 * Get state
	 *
	 * @return string $state
	 */
	public function getState()
	{
		return $this->state;
	}
	
	/**
	 * Set zip
	 *
	 * @param int $zip
	 */
	public function setZip($zip)
	{
		$this->zip = $zip;
	}
	
	/**
	 * Get zip
	 *
	 * @return int $zip
	 */
	public function getZip()
	{
		return $this->zip;
	}
	/**
	 * To Array
	 *
	 * @return array
	 */
	public function toArray()
	{
		$ref = new \ReflectionClass($this);
		$arr = array();
		foreach($ref->getProperties( \ReflectionProperty::IS_PROTECTED ) as $prop){
			$arr[ $prop->getName() ] = $this->{'get' . \ucfirst($prop->getName())}();
		}
		return $arr;
	}
}

<?php
namespace Acme\AgencyCentralBundle\Document;

use Acme\AgencyCentralBundle\Document;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;


/**
* @MongoDB\Document(collection="agency")
*/
class Agency
extends Document
{
	/**
	 * @MongoDB\String
	 */
	protected $url;

    /**
     * Set url
     *
     * @param string $url
     */
    public function setUrl($url)
    {
        $this->url = $url;
    }

    /**
     * Get url
     *
     * @return string $url
     */
    public function getUrl()
    {
        return $this->url;
    }
}

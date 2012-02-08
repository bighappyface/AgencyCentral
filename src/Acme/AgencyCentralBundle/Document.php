<?php

namespace Acme\AgencyCentralBundle;

class Document
{
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

<?php
namespace Acme\AgencyCentralBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class AgencyType
extends AbstractType
{
	public function buildForm(FormBuilder $builder, array $options)
	{
		$builder->add('id', 'text');
		$builder->add('name', 'text');
		$builder->add('email', 'email');
		$builder->add('url', 'url');
		$builder->add('phone', 'text');
		$builder->add('address', 'text');
		$builder->add('city', 'text');
		$builder->add('state', 'text');
		$builder->add('zip', 'text');
	}
	
	public function getDefaultOptions(array $options)
	{
		return array(
			'data_class' => 'Acme\AgencyCentralBundle\Document\Agency',
			'csrf_protection' => false
		);
	}
	
	public function getName()
	{
		return 'agency';
	}
}
<?php
namespace Acme\AgencyCentralBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilder;

class UserType
extends AbstractType
{
	public function buildForm(FormBuilder $builder, array $options)
	{
		$builder->add('name', 'text');
		$builder->add('email', 'email');
		$builder->add('password', 'repeated', array(
	           'first_name' => 'password',
	           'second_name' => 'confirm',
	           'type' => 'password'
		));
		$builder->add('agency', 'document', array(
			'class' => 'Acme\AgencyCentralBundle\Document\Agency',
			'property' => 'name',
		    'label' => 'Agency',
			'empty_value' => 'Choose and Agency'
		));
	}
	
	public function getDefaultOptions(array $options)
	{
		return array(
			'data_class' => 'Acme\AgencyCentralBundle\Document\User',
			'csrf_protection' => false
		);
	}
	
	public function getName()
	{
		return 'user';
	}
}
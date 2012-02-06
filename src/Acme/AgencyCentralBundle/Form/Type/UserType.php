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
	}
	
	public function getDefaultOptions(array $options)
	{
		return array('data_class' => 'Acme\AgencyCentralBundle\Document\User');
	}
	
	public function getName()
	{
		return 'user';
	}
}
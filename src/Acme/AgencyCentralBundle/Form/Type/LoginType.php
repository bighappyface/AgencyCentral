<?php
namespace Acme\AgencyCentralBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class LoginType
extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder->add('email', 'email');
		$builder->add('password', 'password');
    }
    
    public function getDefaultOptions(array $options)
    {
    	return array(
    		'csrf_protection' => false
    	);
    }

    public function getName()
    {
        return 'login';
    }
}
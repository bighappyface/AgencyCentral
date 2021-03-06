<?php
namespace Acme\AgencyCentralBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilder;

class RegistrationType
extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder->add('user', new UserType());
    }
    
    public function getDefaultOptions(array $options)
    {
    	return array(
    		'csrf_protection' => false
    	);
    }

    public function getName()
    {
        return 'registration';
    }
}
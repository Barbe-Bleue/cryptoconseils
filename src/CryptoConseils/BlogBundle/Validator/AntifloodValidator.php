<?php

// src/CryptoConseils/BlogBundle/Validator/AntifloodValidator.php

namespace CryptoConseils\BlogBundle\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class AntifloodValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if (strlen($value) < 3) {
            $this->context->addViolation($constraint->message);
        }
    }
}
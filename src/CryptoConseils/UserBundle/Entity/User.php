<?php

namespace CryptoConseils\UserBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use FOS\UserBundle\Model\User as BaseUser;

/**
 * User
 *
 * @ORM\Table(name="users")
 * @ORM\Entity
 */
class User extends BaseUser
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var integer
     * @ORM\Column(name="premiumLevel", type="integer")
     */
    private $premiumLevel;

    /**
     * @var boolean
     * @ORM\Column(name="isEmailValidated", type="boolean")
     */
    private $isEmailValidated;

    /**
     * @return string
     */
    public function getUniqueTokenForEmail()
    {
        return $this->uniqueTokenForEmail;
    }

    /**
     * @param string $uniqueTokenForEmail
     */
    public function setUniqueTokenForEmail($uniqueTokenForEmail)
    {
        $this->uniqueTokenForEmail = $uniqueTokenForEmail;
    }

    /**
     * @var string
     * @ORM\Column(name="uniqueTokenForEmail", type="string", nullable=true)
     */
    private $uniqueTokenForEmail;

    /**
     * @var @var string
     * @ORM\Column(name="uniqueTokenForForgottenPassword", type="string", nullable=true)
     */
    private $uniqueTokenForForgottenPassword;

    /**
     * @return bool
     */
    public function isEmailValidated()
    {
        return $this->isEmailValidated;
    }

    /**
     * @param bool $isEmailValidated
     */
    public function setIsEmailValidated($isEmailValidated)
    {
        $this->isEmailValidated = $isEmailValidated;
    }

    /**
     * @return int
     */
    public function getPremiumLevel()
    {
        return $this->premiumLevel;
    }

    /**
     * @param int $premiumLevel
     */
    public function setPremiumLevel($premiumLevel)
    {
        $this->premiumLevel = $premiumLevel;
    }


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }


    /**
     * @var string
     * @ORM\Column(name="imageId", type="string", nullable=true)
     */
    private $imageId;

    /**
     * @return int
     */
    public function getImageId()
    {
        return $this->imageId;
    }

    /**
     * @param int $imageId
     */
    public function setImageId($imageId)
    {
        $this->imageId = $imageId;
    }

}

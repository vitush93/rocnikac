<?php

namespace App\Model\Entities;


use Kdyby\Doctrine\Entities\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use DateTime;
use Doctrine\ORM\Mapping\ManyToOne;

/**
 * @ORM\Entity
 * @ORM\Table(name="quotations")
 */
class Quote extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var integer
     */
    private $id;

    /**
     * @ManyToOne(targetEntity="User", inversedBy="quotations")
     * @var User
     */
    private $user;

    // TODO entities & relationships
    private $teacher;
    private $subject;
    private $comments;
    private $ratings;
    private $tags;

    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $year;

    /**
     * @ORM\Column(type="datetime")
     * @var DateTime
     */
    private $date;

    /**
     * @ORM\Column(type="datetime")
     * @var DateTime
     */
    private $posted;

    /**
     * @ORM\Column(type="text")
     * @var string
     */
    private $text;

    /**
     * @ORM\Column(type="string", nullable=true)
     * @var string
     */
    private $user_comment;

    /**
     * @ORM\Column(type="string", nullable=true)
     * @var string
     */
    private $user_email;

    public function __construct()
    {
        $this->posted = new DateTime();
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param \DateTime $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }

    /**
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param \DateTime $posted
     */
    public function setPosted($posted)
    {
        $this->posted = $posted;
    }

    /**
     * @return \DateTime
     */
    public function getPosted()
    {
        return $this->posted;
    }

    /**
     * @param string $text
     */
    public function setText($text)
    {
        $this->text = $text;
    }

    /**
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param string $user_comment
     */
    public function setUserComment($user_comment)
    {
        $this->user_comment = $user_comment;
    }

    /**
     * @return string
     */
    public function getUserComment()
    {
        return $this->user_comment;
    }

    /**
     * @param string $user_email
     */
    public function setUserEmail($user_email)
    {
        $this->user_email = $user_email;
    }

    /**
     * @return string
     */
    public function getUserEmail()
    {
        return $this->user_email;
    }

    /**
     * @param string $year
     */
    public function setYear($year)
    {
        $this->year = $year;
    }

    /**
     * @return string
     */
    public function getYear()
    {
        return $this->year;
    }


} 
import Link from 'next/link'
import React from 'react'

const services = [
  {
    href: 'chandelier-cleaning',
    icon: 'https://img.icons8.com/?size=100&id=SYs4RuvwBu7y&format=png&color=000000',
    alt: 'chandelier',
    title: 'Chandelier Cleaning Services',
    desc: 'Restore the sparkle of every crystal, safely and thoroughly.',
  },
  {
    href: 'home-cleaning',
    icon: 'https://img.icons8.com/?size=100&id=iJzm3AFQCS4W&format=png&color=000000',
    alt: 'home',
    title: 'Home Cleaning Services',
    desc: 'Deep cleaning for every room, top to bottom.',
  },
  {
    href: 'water-tank-cleaning',
    icon: 'https://img.icons8.com/?size=100&id=vV7aJbTd9T9Z&format=png&color=000000',
    alt: 'water tank',
    title: 'Water Tank Cleaning',
    desc: 'Hygienic, contaminant-free water for your family.',
  },
  {
    href: 'window-cleaning',
    icon: 'https://img.icons8.com/?size=100&id=mgvawsY3nFyp&format=png&color=000000',
    alt: 'window',
    title: 'Window Cleaning Services',
    desc: 'Streak-free glass that lets the light in.',
  },
  {
    href: 'home-interior',
    icon: 'https://img.icons8.com/?size=100&id=WG2VAXzjULHJ&format=png&color=000000',
    alt: 'home interior',
    title: 'Home Interior Services',
    desc: 'Design and maintenance for pristine living spaces.',
  },
  {
    href: 'house-painting',
    icon: 'https://img.icons8.com/?size=100&id=9fS8epYOUvtK&format=png&color=000000',
    alt: 'house painting',
    title: 'House Painting Services',
    desc: 'Fresh, vibrant walls with quality eco-friendly paint.',
  },
  {
    href: 'gym-trainers',
    icon: 'https://img.icons8.com/?size=100&id=dClvTNYgYOkj&format=png&color=000000',
    alt: 'gym trainer',
    title: 'Home Fitness Gym Trainers',
    desc: 'Certified trainers with personalised workout plans.',
  },
  {
    href: 'house-keeping-contract',
    icon: 'https://img.icons8.com/?size=100&id=13246&format=png&color=000000',
    alt: 'housekeeping',
    title: 'Housekeeping / Office Boy Contract',
    desc: 'Reliable staffing contracts for homes & offices.',
  },
]

const Service = () => {
  return (
    <>
      <h4 className='servicetitle'>Our Services</h4>
      <div className='service_page'>
        <div className='service_box'>
          {services.map((service) => (
            <Link href={service.href} key={service.href}>
              <div className='features_service'>
                <img width="64" height="64" src={service.icon} alt={service.alt} />
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Service

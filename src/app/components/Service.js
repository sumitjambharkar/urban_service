import Link from 'next/link'
import { getServiceTiles } from '@/libs/serviceTiles'
import {
  sectionTitleClass,
  servicePageClass,
  serviceBoxClass,
  featuresServiceClass,
  featuresServiceImgClass,
  featuresServiceTitleClass,
  featuresServiceTextClass,
  galleryEmptyClass,
} from '../uiClasses'

const Service = async () => {
  const services = await getServiceTiles()

  return (
    <>
      <h4 className={sectionTitleClass}>Our Services</h4>
      <div className={servicePageClass}>
        <div className={serviceBoxClass}>
          {services.length === 0 && (
            <p className={galleryEmptyClass}>Services coming soon.</p>
          )}
          {services.map((service) => (
            <Link href={service.href} key={service._id} className="block h-full">
              <div className={`group ${featuresServiceClass}`}>
                <img src={service.icon} alt={service.title} className={featuresServiceImgClass} />
                <h5 className={featuresServiceTitleClass}>{service.title}</h5>
                <p className={featuresServiceTextClass}>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Service

import Service from '@/app/components/Service'

export const metadata = {
  title: "Services | Sustainable Cleaning Solutions by Chandelite",
  description: "Explore Chandelite's professional cleaning, painting and home services, combining eco-friendly techniques and sustainable practices to ensure spotless spaces and a healthier environment.",
}

export const revalidate = 60

const page = () => {
  return <Service />
}

export default page

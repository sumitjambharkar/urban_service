import config from "@/config"

export async function generateMetadata({ params }) {
    const id = params.id
   
    const result = await fetch(`${config}/api/blog/${id}`)
    const blog = await result.json()
    return {
      title: blog.seoTitle,
      description: blog.seoDescription,
      date:blog.createdAt,
      author:"sumkesh jambharkar"
      
    }
  }
   

  
export default function Layout ({children}) {
  return <>{children}</>
}
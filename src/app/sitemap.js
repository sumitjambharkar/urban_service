

export default async function sitemap() {
    // Fetch blog data from API endpoint
    const response = await fetch("https://cleannation.in/blog");
    const blogData = await response.json();
  
    // Map fetched blog data to sitemap format
    const sitemapData = blogData.map((blog) => ({
      url: `https://cleannation.in/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt),
    }));
  
    // Add other static URLs to the sitemap
    const staticUrls = [
        {
        
            url:"https://cleannation.in",
            lastModified:new Date(),
        },{
            
            url:"https://cleannation.in/about",
            lastModified:new Date(),
        },{
            
            url:"https://cleannation.in/blog",
            lastModified:new Date(),
        }
        ,{
            
            url:"https://cleannation.in/service",
            lastModified:new Date(),
        }
        ,{
            
            url:"https://cleannation.in/contact",
            lastModified:new Date(),
        }
    ];
  
    // Combine dynamic and static URLs
    const allUrls = [...staticUrls, ...sitemapData];
  
    return allUrls;
  }
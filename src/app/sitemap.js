export default async function sitemap() {
    try {
      // Fetch blog data from API endpoint
      const response = await fetch("https://cleannation.in/api/blog");
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Failed to fetch blog data: ${response.statusText}`);
      }
  
      // Parse the response to JSON
      const blogData = await response.json();
  
      // Map fetched blog data to sitemap format
      const sitemapData = blogData.map((blog) => ({
        url: `https://cleannation.in/blog/${blog.slug}`,
        lastModified: new Date(blog.updatedAt).toISOString(), // Ensure proper date format
      }));
  
      // Add other static URLs to the sitemap
      const staticUrls = [
        { url: "https://cleannation.in", lastModified: new Date().toISOString() },
        { url: "https://cleannation.in/about", lastModified: new Date().toISOString() },
        { url: "https://cleannation.in/blog", lastModified: new Date().toISOString() },
        { url: "https://cleannation.in/service", lastModified: new Date().toISOString() },
        { url: "https://cleannation.in/contact", lastModified: new Date().toISOString() },
      ];
  
      // Combine dynamic and static URLs
      const allUrls = [...staticUrls, ...sitemapData];
  
      return allUrls;
    } catch (error) {
      console.error("Error generating sitemap:", error);
      return [];
    }
  }
  
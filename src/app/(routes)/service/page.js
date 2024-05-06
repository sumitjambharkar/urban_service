import Link from "next/link";
const arr= [1,2,3,4,5,6.4,3,4,4,4,4,4]

const page = () => {


  return (
    <>
   
      <div className="blog_section">
        <div className="blog_row">
          {arr.map((doc)=>(
            <div className="post_image_card">
              <div className="post_image_header">
                <a
                  href="https://getcleanact.com.au/wp-content/uploads/2021/10/end-of-lease-pic-1000x667.jpg"
                  class="elementskit-entry-thumb"
                >
                  <img
                    width="100%"
                    decoding="async"
                    src="https://getcleanact.com.au/wp-content/uploads/2021/10/end-of-lease-pic-1000x667.jpg"
                    alt="What is work"
                  />
                </a>
              </div>
              <div class="post_body ">
                <Link href="/">
                Home Cleanning
                </Link>
                <p>…</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default page;

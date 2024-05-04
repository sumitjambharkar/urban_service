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
                  href="https://modafinia.com/what-is-modafine-how-its-work/"
                  class="elementskit-entry-thumb"
                >
                  <img
                    width="100%"
                    decoding="async"
                    src="https://modafinia.com/wp-content/uploads/2023/04/nootropics-supplement.jpg"
                    alt="What is MODAFINE: How it’s work"
                  />
                </a>
              </div>
              <div class="post_body ">
                <Link href="/">
                  What is MODAFINE: How it’s work{" "}
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

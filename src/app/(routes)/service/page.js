import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="show_service">
        <div className="single_service">
          <div className="post_service">
            <img className="post_image"
              
              src="https://p.w3layouts.com/demos_new/template_demo/20-03-2021/cleanfreshly-liberty-demo_Free/1414300734/web/assets/images/ab1.jpg"
              alt=""
            />
          </div>
          <div className="post_service">
           <p> SERVICES FOR YOU House Cleaning Well trained technician. A hassle
            free Service Using Best Quality tools. Money is on safe Hand</p>
            <div className="read">
							<Link className="btn mt-4" href="services.html">Read More</Link>
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

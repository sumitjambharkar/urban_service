import Link from "next/link";

const Slider = () => {
  return (
    <div className="slider_one">
      <div className="banner-info-bg">
        <h6>Fast and efficient</h6>
        <h5>Quality service for quality homes</h5>
        <div class="read">
							<Link class="btn mt-4" href="services.html">Read More</Link>
				</div>
      </div>
    </div>
  );
};

export default Slider;

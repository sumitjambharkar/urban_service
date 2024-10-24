import Link from "next/link";

const Slider = () => {
  return (
    <div className="slider_one">
      <div className="banner-info-bg">
        <h6>Fast and efficient</h6>
        <h5>Quality service for quality home</h5>
        <div className="read">
							<Link className="btn mt-4" href="/service">Get Quote</Link>
				</div>
      </div>
    </div>
  );
};

export default Slider;

import MySwiper from "../Swiper/MySwiper";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
	return (
		<div className=" text-white flex gap-16 mt-32">
			<div className="flex w-2/5 flex-col gap-6 pl-36">
				<div className=" text-8xl">
					<h1>Cox&apos;s bazar</h1>
				</div>
				<p>
					Cox&apos;s Bazar is a city, fishing port, tourism centre and district
					headquarters in southeastern Bangladesh. It is famous mostly for its
					long natural sandy beach, and it ...
				</p>
				<div>
					<button className="px-7 py-2 bg-amber-500 rounded hover:bg-amber-600 duration-300 ease-in">
						Booking{" "}
						<BsArrowRight className=" text-lg inline-block"></BsArrowRight>
					</button>
				</div>
			</div>
			<div className=" w-3/5">
				<MySwiper></MySwiper>
			</div>
		</div>
	);
};

export default Banner;

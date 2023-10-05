import image1 from "../../assets/images/image (1).jpg";
import image2 from "../../assets/images/image (2).jpg";
import image3 from "../../assets/images/image (3).jpg";
import image5 from "../../assets/images/image (5).jpg";
//import useEffect and useRef to add proprties to the swiper container dynamically
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

const MySwiper = () => {
	return (
		<>
			<Swiper
				spaceBetween={20}
				slidesPerView={3}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation]}
				className="mySwiper"
			>
				<SwiperSlide className=" border-4 rounded-md border-amber-500">
					<img className=" h-[500px]" src={image1} alt="" />
				</SwiperSlide>
				<SwiperSlide className=" border-4 rounded-md border-amber-500">
					<img className=" h-[500px]" src={image2} alt="" />
				</SwiperSlide>
				<SwiperSlide className=" border-4 rounded-md border-amber-500">
					<img className=" h-[500px]" src={image3} alt="" />
				</SwiperSlide>
				<SwiperSlide className=" border-4 rounded-md border-amber-500">
					<img className=" h-[500px]" src={image5} alt="" />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default MySwiper;

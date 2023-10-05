import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
	return (
		<div
			className="relative h-screen bg-cover bg-no-repeat bg-center"
			style={{ backgroundImage: "url('/herobg.jpeg')" }}
		>
			<div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-70"></div>
			<div className="relative z-10 container mx-auto px-2 md:px-5">
				<Navbar></Navbar>
			</div>
		</div>
	);
};

export default Home;

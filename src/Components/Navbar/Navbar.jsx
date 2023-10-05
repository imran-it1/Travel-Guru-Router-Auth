import logo from "../../assets/SVG/logo.svg";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
	return (
		<nav className=" flex justify-between items-center text-white pt-8">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div className=" relative flex items-center justify-center flex-1">
				<BiSearch className=" text-lg relative left-10"></BiSearch>
				<input
					className="bg-gray-50 bg-opacity-10 pl-12 placeholder-white text-white w-1/2 rounded-lg
					
					border border-white focus:border-orange-500 focus:outline-none focus:ring-transparent
					
					"
					type="text"
					placeholder="Search your Destination..."
				/>
			</div>
			<ul className=" flex items-center font-medium">
				<li className=" mr-16">News</li>
				<li className=" mr-16">Destinatuion</li>
				<li className=" mr-16">Blog</li>
				<li className=" mr-16">Contact</li>
				<button className=" px-7 py-2 bg-amber-500 rounded-lg hover:bg-amber-600 duration-300 ease-in">
					Login
				</button>
			</ul>
		</nav>
	);
};

export default Navbar;

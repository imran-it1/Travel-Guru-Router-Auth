import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className=" font-Montserrat">
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;

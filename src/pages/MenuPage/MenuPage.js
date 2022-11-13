import React from 'react';
import Menu from "./Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const MenuPage = () => {
	return (
		<>
		<div>
		<Navbar />
        <Menu/>    
		</div>
		<Footer />
		</>
	);
};

export default MenuPage;
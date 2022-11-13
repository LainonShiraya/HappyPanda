import React,{ useState, useEffect} from 'react';
import Swipe from "./Swiper/Swipe";
import {getPromotions} from "../../../utils/GraphqlApiCalls";
import "./Menu.scss";
const Menu = () => {
	const [promotions,setPromotions] = useState([]);
	useEffect(() =>  {
		getPromotions().then( result => {setPromotions(result)});
	},[]);

	return (
		<div className="menu-container">
			<div className="menu-container-swiper-container">
			<Swipe promotionsData={promotions}/>
			</div>
			<div className="menu-container-categories-container">
				promocja
			</div>
		</div>
	);
};

export default Menu;
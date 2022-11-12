import React,{ useState, useEffect} from "react";
import "../../../../styles/components/Promotions.scss";
import Swipe from "../Swiper/Swipe";
import pandaPromotionsIcon from "../../../../assets/food/panda-promotions-icon.png";
import pandaPromotionsIconSleep from "../../../../assets/food/panda-promotions-icon-sleep.png";
import PandaOnText from "../../../../components/PandaOnText/PandaOnText";
import {getPromotions} from "../../../../utils/GraphqlApiCalls";
const Promotions = () => {
	const [promotions,setPromotions] = useState([]);
	useEffect(() =>  {
		getPromotions().then( result => {setPromotions(result)});
	},[]);

  return (
    <div className="promotions-container">
      {promotions.length < 1 && (
        <PandaOnText
          image={pandaPromotionsIconSleep}
          title={"Empty Bank"}
          text={
            "Sadly at this moment we are out of promotions, but stay tuned !"
          }
        />
      )}

      {promotions.length > 0 && (
        <>
          {" "}
          <PandaOnText
            image={pandaPromotionsIcon}
            title={"Promotions"}
            text={"Most popular among the clients"}
          />{" "}
          <Swipe promotionsData={promotions} />
        </>
      )}
    </div>
  );
};

export default Promotions;

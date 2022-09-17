import React from "react";
import "../../../../styles/components/Promotions.scss";
import Swipe from "../Swiper/Swipe";
import { promotionsData } from "../../../../data/PromotionsData";
import pandaPromotionsIcon from "../../../../assets/food/panda-promotions-icon.png";
import pandaPromotionsIconSleep from "../../../../assets/food/panda-promotions-icon-sleep.png";

import PandaOnText from "../../../../components/PandaOnText/PandaOnText";
const Promotions = () => {
  return (
    <div className="promotions-container">
      {promotionsData.length < 1 && (
        <PandaOnText
          image={pandaPromotionsIconSleep}
          title={"Empty Bank"}
          text={
            "Sadly at this moment we are out of promotions, but stay tuned !"
          }
        />
      )}

      {promotionsData.length > 0 && (
        <>
          {" "}
          <PandaOnText
            image={pandaPromotionsIcon}
            title={"Promotions"}
            text={"Most popular among the clients"}
          />{" "}
          <Swipe promotionsData={promotionsData} />
        </>
      )}
    </div>
  );
};

export default Promotions;

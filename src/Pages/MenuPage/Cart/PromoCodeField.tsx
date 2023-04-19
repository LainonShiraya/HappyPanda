import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Utils/Redux/Hooks/Hooks";
import { usePromoCode, clearCart } from "../../../Utils/Redux/Slices/ShopCart";
import { getPromotionCodeProducts } from "../../../Utils/GraphQL/GraphQLPromotionCodeProducts";
import { CategoryWithProductsDTO } from "../../../Shared/DTOs/CategoryWithProductsDTO";
import { getCategoriesWithProducts } from "../../../Utils/GraphQL/GraphQLCategoryWithProducts";
import Alert from "@mui/material/Alert";
const PromoCodeField = ({
  setCategoriesWithProducts,
}: {
  setCategoriesWithProducts: Dispatch<
    SetStateAction<CategoryWithProductsDTO[] | undefined>
  >;
}) => {
  const promoCode = useAppSelector((state) => state.shopCart.coupon);
  const [codeErrorState, setCodeErrorState] = useState<{
    codeUsed: boolean;
    type: "warning" | "success" | "error";
    text: string;
  }>({
    codeUsed: false,
    type: "warning",
    text: "Unexpected error",
  });
  const dispatch = useAppDispatch();
  const submitPromoCode = async () => {
    const CouponResult = await getPromotionCodeProducts(promoCode);
    if (!CouponResult) {
      getCategoriesWithProducts().then((response) => {
        setCategoriesWithProducts(response);
      });
      setCodeErrorState({
        codeUsed: true,
        type: "error",
        text: "Promo code does not exist !",
      });
    } else {
      setCategoriesWithProducts([
        {
          id: CouponResult.id,
          categoryName: CouponResult.productCategory.categoryName,
          products: CouponResult.products.map((result) => {
            return {
              ...result,
              productPrice:
                result.productPrice -
                Math.round(
                  (CouponResult.priceReducedBy *
                    0.01 *
                    result.productPrice *
                    100) /
                    100
                ),
              productOldPrice: result.productPrice,
              maximumQuantity: CouponResult.maximumProductCopies,
              promoProduct: true,
              productDescription:
                result.productDescription +
                "Maximum quantity of : " +
                CouponResult.maximumProductCopies,
            };
          }),
        },
      ]);
      setCodeErrorState({
        codeUsed: true,
        type: "success",
        text: "Successfuly used promo code !",
      });
    }
    dispatch(clearCart());
  };
  return (
    <>
      <TextField
        label="Promotion Code"
        size="small"
        onChange={(e) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          dispatch(usePromoCode(e.target.value));
        }}
        value={promoCode}
        InputProps={{
          endAdornment: (
            <IconButton
              size="small"
              onClick={() => {
                submitPromoCode();
              }}
            >
              <ArrowCircleRightIcon sx={{ color: "hsl(28, 100%, 50%)" }} />
            </IconButton>
          ),
        }}
        sx={{ width: "90%" }}
        color="secondary"
      />
      {codeErrorState.codeUsed && (
        <Alert
          variant="filled"
          severity={codeErrorState.type}
          sx={{ width: "90%" }}
        >
          {codeErrorState.text}
        </Alert>
      )}
    </>
  );
};

export default PromoCodeField;

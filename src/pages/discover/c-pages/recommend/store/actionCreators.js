import * as actionsTypes from "./constants";
import { getBanner } from "@/services/recommend";

//更改topBanner
export const setTopBanner = (data) => {
   return {
     type:actionsTypes.GET_BANNER,
     payload:data
   }
};

//获取topBanner
export const getTopBanner = () => async (dispatch) => {
  let data = await getBanner();
  dispatch(setTopBanner(data.banners))
};

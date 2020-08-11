import React, { memo, useState, useEffect,useRef,useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBanner } from "../../store/actionCreators";

import { Wrapper, LeftWrapper, BannerRight,BannerControl } from "./styled";

//导入组件
import { Carousel } from "antd";

export default memo(function TopBanner(props) {
  const crouselRef = useRef()
  const [bigImgIndex,setBigImgIndex] = useState(0)


  const { topBanners } = useSelector((state) => {
    return {
      topBanners: state.recommendReducers.topBanners,
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    //获取轮播图数据
    dispatch(getTopBanner());
  }, [dispatch]);
  console.log(topBanners);

  const bigImgSrc = topBanners[bigImgIndex] && (topBanners[bigImgIndex].imageUrl+'?imageView&blur=40x20')

  const changeCrousel=useCallback((from,to)=>{
    setBigImgIndex(to)
  },[])

  return (
    <Wrapper bigImg={bigImgSrc}>
      <div className="content wrap-v2">
        <LeftWrapper>
          <Carousel autoplay effect="fade" ref={crouselRef} beforeChange={changeCrousel}>
            {
              topBanners.map((item,index)=>{
                return (
                  <div className="img-item" key={item.imageUrl}>
                      <img src={item.imageUrl} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
        </LeftWrapper>
        <BannerRight></BannerRight>
       {/* 轮播图控制器 */}
        <BannerControl className="control">
          <button className="btn left" onClick={e=>crouselRef.current.next()}></button>
          <button className="btn right" onClick={e=>crouselRef.current.prev()}></button>
        </BannerControl>
      </div>
    </Wrapper>
  );
});

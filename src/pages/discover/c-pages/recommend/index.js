import React, { memo } from "react";


//导入组件
import TopBanner from './c-comps/top-banner'

export default memo(function Recommend(props) {

  return <div>
      {/* 轮播图组件 */}
      <TopBanner/>
  </div>;
});

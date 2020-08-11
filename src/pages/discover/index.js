import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

//导入css
import {Wrapper} from './styled'
//导入静态数据
import {dicoverMenu} from '@/services/local-data'

export default memo(function Discover(props) {
  console.log(props)
  return (
    <Wrapper>
        <div className="tab-bar">
           <div className="wrap-v1 tab-bar_inner">
             {
               dicoverMenu.map((item,index)=>{
                 return (
                    <NavLink to={item.link} key={item.title} className="link-a">
                        {item.title}
                    </NavLink>
                 )
               })
             }
           </div>
        </div>
        {/* 路由 */}
        {renderRoutes(props.route.routes)}
    </Wrapper>
  )
})

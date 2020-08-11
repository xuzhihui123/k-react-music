import React, { memo } from 'react'
//导入路由
import {routes} from '@/router'
import {renderRoutes} from 'react-router-config'


//导入组件
import PageHeader from '@/components/page-header'
import PageFooter from '@/components/page-footer'



export default memo(function Main() {
  return (
    <div>
        <PageHeader/>
        {renderRoutes(routes)}
        <PageFooter/>
    </div>
  )
})

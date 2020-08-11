import React, { memo } from 'react'



//导入组件
import PageHeader from '@/components/page-header'
import PageFooter from '@/components/page-footer'



export default memo(function Main() {
  return (
    <div>
        <PageHeader/>
        <PageFooter/>
    </div>
  )
})

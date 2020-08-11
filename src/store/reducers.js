import {combineReducers} from 'redux'

//导入推荐的reducer
import recommendReducers from '@/pages/discover/c-pages/recommend/store'




const reducers = combineReducers({
  recommendReducers
})

export default reducers
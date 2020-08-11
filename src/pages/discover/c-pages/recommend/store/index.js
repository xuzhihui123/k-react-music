import * as actionsTypes from './constants'

const recommendState = {
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
  settleSongs: [],
}

export default (state = recommendState, action) => {
  switch (action.type) {
    case actionsTypes.GET_BANNER:
      return {
        ...state, topBanners: action.payload
      };
    default:
      return state
  }
}
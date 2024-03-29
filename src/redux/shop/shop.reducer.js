import  ShopActionTypes  from './shop.types';
// import SHOP_DATA from './shop-data'

const INITIAL_STATE	 = {
	collections: null
}

const shopReducer = (state = INITIAL_STATE , action = {}) => {
	switch (action.type) {
		case ShopActionTypes.UPDATE_COLLECTIONS :
			return Object.assign({} , state , { collections : action.payload });	
		default :
			return state;	
	}
}

export default shopReducer;
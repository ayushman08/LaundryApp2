import ACTION_TYPES from '../../../App/Action/ActionsType';
const INITIAL_STATE = {
	productVariation: '',
	isScreenLoading:false
}

export default (state = INITIAL_STATE, action) => {
    console.log("action type"+JSON.stringify(action.productCategoryList));
	switch (action.type) {

		case ACTION_TYPES.PRODUCT_LIST_FETCHING_DATA:
			return { ...state, isScreenLoading: true }
		
        case ACTION_TYPES.GET_PRODUCT_DETAILS:
    //    console.log("product category list",action.payload);
			return { ...state, productVariation: action.payload,isScreenLoading:false }

		case ACTION_TYPES.LOGIN_USER_RES_CLEAR:
			return { ...state, loginRes:'' }

		default:
			return state;
	}

};
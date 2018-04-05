import { put, call, takeEvery, takeLatest, select, cps } from 'redux-saga/effects';
import API from '../Constants/APIUrls';
import API_CONST from '../Constants/APIConstants';
import ACTION_TYPES from '../Action/ActionsType';
import Api from "../WooCommerce/Api";
//import RNFetchBlob from 'react-native-fetch-blob';


//Call for fetching data from api
const _apiCall = (url, data) => {
	console.log('Api request',data);
	return fetch(url, data)
		.then((res) => {
			console.log('Api response',res);
			return { res: res, res_json: res.json() };
		})
		.catch((e) => {
			throw e;
		});
};

//woocommerce api to call 
const _woocomerce = (url) => {
	console.log('Api request',url);
	return Api.get(url)
	.then((data) => {
		console.log("DATA>>>>> "+JSON.stringify(data));
		return data;
	})
	.catch((e) => {
		throw e;
	});
}

//get response json
const _extJSON = (p) => {
	return p.then((res) => res);
};


//
function* getProductCategory() {
	try {

		let response = yield call(_woocomerce, API.GET_PRODUCT_CATEGORY);
		//console.log('1. getPropertyDetail res: ' + JSON.stringify(response));
		//var responseJSON = yield call(_extJSON, response.res_json);
		//console.log('getPropertyDetail res: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.GET_PRODUCT_CATEGORY_LIST,
			payload: response
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}

//get Details
function* getProductDetails(action) {
	try {
		var postData = action.data;
		console.log("postdata>>>"+JSON.stringify(postData));
		const URL = 'products/'+postData.productId+'/variations';
		console.log('Url>>'+URL);
		let response = yield call(_woocomerce,URL);
		console.log('Product detail res>>>>>>>: ' + JSON.stringify(response))
		yield put({
			type: ACTION_TYPES.GET_PRODUCT_DETAILS,
			payload: response
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}



function* getProductCategoryList(action) {
try {
		let response = yield call(_apiCall, API.GET_PRODUCT_CATEGORY_LIST, {
			method: 'POST',
			headers: {
				Accept:'application/json'
			}
			
		});
		var responseJSON = yield call(_extJSON, response.res_json);
		console.log('userRegistration rolse: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.GET_PRODUCT_LIST,
			payload: responseJSON
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}


function* getUserDetails() {
	try {
		var postData = action.data;
		const url = 'customers';

		let response = yield call(_woocomerce,url);
		yield put({
			type: ACTION_TYPES.GET_USER_DETAILS,
			payload: response
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}

function* userLogin(action) {
	var postData = action.data;
	const formData = new FormData();
	  formData.append('username', postData.username);
	  formData.append('password', postData.password);

	try {
		let response = yield call(_apiCall, API.USER_LOGIN, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data'
			},
			body: formData
		});
		var responseJSON = yield call(_extJSON, response.res_json);
		console.log('Response: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.LOGIN_USER_RES,
			payload: responseJSON
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}

function* userRegistration(action) {

	var postData = action.data;
	const formData = new FormData();
	  formData.append('email_address', postData.email_address);
	  formData.append('password', postData.password);
	  formData.append('phone_number', postData.phone_number);
	  formData.append('username', postData.username);
try {
		let response = yield call(_apiCall, API.USER_REGISTRATION, {
			method: 'POST',
			headers: {
				Accept:'application/json'
			},
			body: formData
		});
		var responseJSON = yield call(_extJSON, response.res_json);
		console.log('userRegistration rolse: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.SIGNUP_USER_RES,
			payload: responseJSON
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}

  //user logout
function* userLogout(action) {
	var postData = action.data;
	const formData = new FormData();
	  formData.append('token', postData.token);

	try {
		let response = yield call(_apiCall, API.USER_LOGOUT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data'
			},
			body: formData
		});
		var responseJSON = yield call(_extJSON, response.res_json);
		console.log('Response: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.LOGOUT_USER_RES,
			payload: responseJSON
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}


//
function* forgotPassword(action) {
	var postData = action.data;
	const formData = new FormData();
	  formData.append('user_email', postData.email);

	try {
		let response = yield call(_apiCall, API.FORGOT_PASSWORD, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data'
			},
			body: formData
		});
		var responseJSON = yield call(_extJSON, response.res_json);
		console.log('Response: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.FORGOT_PASS_RES,
			payload: responseJSON
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}


function* rootSaga() {
   //Login
	yield takeLatest(API_CONST.N_USER_LOGIN, userLogin);
	//Registerations
	yield takeLatest(API_CONST.N_USER_REGISTRATION, userRegistration);
	yield takeLatest(API_CONST.N_GET_PRODUCT_CATEGORY, getProductCategory);
	yield takeLatest(API_CONST.N_GET_USER_DETAILS, getUserDetails);
	yield takeLatest(API_CONST.N_USER_LOGOUT, userLogout);
	yield takeLatest(API_CONST.N_USER_FORGOT_PASSWORD, forgotPassword);
	yield takeLatest(API_CONST.N_GET_PRODUCT_DETAIL, getProductDetails);
	yield takeLatest(API_CONST.N_GET_PRODUCT_CATEGORY_LIST, getProductCategoryList);

}

export default rootSaga;

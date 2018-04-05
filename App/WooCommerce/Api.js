import WooCommerceAPI from "./WooCommerceAPI";
import Constants from './Config';

var Api = new WooCommerceAPI({
    url: Constants.URL.root,
    consumerKey: Constants.Keys.ConsumerKey,
    consumerSecret: Constants.Keys.ConsumerSecret,
    wp_api: true,
    version: 'wc/v2',
    query_string_auth: true,
    key_permissions:'read-write'
});

export default Api;

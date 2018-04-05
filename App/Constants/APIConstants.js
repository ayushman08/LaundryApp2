const API_CONST = {

	 N_USER_LOGIN 						: 'N_USER_LOGIN',
	 N_GET_PRODUCT_CATEGORY				: 'N_GET_PRODUCT_CATEGORY',
	 N_GET_PRODUCT_CATEGORY_LIST		: 'N_GET_PRODUCT_CATEGORY_LIST',
	 N_GET_PRODUCT_DETAIL				: 'N_GET_PRODUCT_DETAIL',
	 N_GET_USER_DETAILS					: 'N_GET_USER_DETAILS',
	N_USER_FORGOT_PASSWORD 				: 'N_USER_FORGOT_PASSWORD',
	N_USER_REGISTRATION 				: 'N_USER_REGISTRATION', 
	N_USER_LOGOUT 						: 'N_USER_LOGOUT',
	N_GET_PROPERTY 						: 'N_GET_PROPERTY',
	N_GET_AMENITIES 					: 'N_GET_AMENITIES',
	N_GET_USER_ROLES 					: 'N_GET_USER_ROLES',
	N_USER_RESEND_PASSWORD				: 'N_USER_RESEND_PASSWORD',
	N_ADD_PROPERTY 						: 'N_ADD_PROPERTY',
	N_UPLOAD_PROPERTY_IMAGE 			: 'N_UPLOAD_PROPERTY_IMAGE',
	N_PROPERTY_OWNER_LIST 				: 'N_PROPERTY_OWNER_LIST',
	N_GET_TENANT_LIST 					: 'N_GET_TENANT_LIST',
	N_GET_TRADERS_LIST 					: 'N_GET_TRADERS_LIST',
	N_SEND_MESSAGE 						: 'N_SEND_MESSAGE',
	N_GET_PROPERTY_BY_AGENT 			: 'N_GET_PROPERTY_BY_AGENT',
	N_ADD_TENANT 						: 'N_ADD_TENANT',
	N_GET_TENANT_PROFILE 				: 'N_GET_TENANT_PROFILE',
	N_GET_TRADERS_PROFILE 				: 'N_GET_TRADERS_PROFILE',
	N_ADD_PROPERTY_OWNER 				: 'N_ADD_PROPERTY_OWNER',
	N_GET_PROPERTY_DETAIL 				: 'N_GET_PROPERTY_DETAIL',
	N_GET_USER_ROLES_SWITCH_PROFILE 	: 'N_GET_USER_ROLES_SWITCH_PROFILE',
	N_UPLOAD_USER_IMAGE 			    : 'N_UPLOAD_USER_IMAGE',
	N_LIKE_PROPERTY 			    	: 'N_LIKE_PROPERTY',
	N_GET_USER_PERMISSION 			    : 'N_GET_USER_PERMISSION',
	N_GET_USER_PROFILE 			    	: 'N_GET_USER_PROFILE',
	N_SAVE_PROPERTY_AS_DRAFT 			: 'N_SAVE_PROPERTY_AS_DRAFT',

	N_UPDATE_USER_IMAGE 			    : 'N_UPDATE_USER_IMAGE',
	N_GET_USER_IMAGE 				    : 'N_GET_USER_IMAGE',
	N_GET_USER_DETAILS 				    : 'N_GET_USER_DETAILS',
	N_UPDATE_USER_DETAILS 			    : 'N_UPDATE_USER_DETAILS',
	N_CHANGE_PASSWORD 				    : 'N_CHANGE_PASSWORD',
	N_CHANGE_NOTIFICATION 			    : 'N_CHANGE_NOTIFICATION',

	N_GET_PROPERTY_DETAIL_FOR_UPDATE 	: 'N_GET_PROPERTY_DETAIL_FOR_UPDATE',
	N_GET_MAINTENANCE_REQUEST_LIST 		: 'N_GET_MAINTENANCE_REQUEST_LIST',

	N_GET_TRADERS_OPTION_LIST			: 'N_GET_TRADERS_OPTION_LIST',
	N_GET_AGENCY_PROPERTY_LIST			: 'N_GET_AGENCY_PROPERTY_LIST',
	N_GET_WATCHER_LIST					: 'N_GET_WATCHER_LIST',
	N_GET_MAINTENANCE_REQ_BY_TENANT		: 'N_GET_MAINTENANCE_REQ_BY_TENANT',
	N_UPLOAD_MAINTENANCE_IMAGE			: 'N_UPLOAD_MAINTENANCE_IMAGE',
	N_ADD_MAINTENANCE_REQ				: 'N_ADD_MAINTENANCE_REQ',
	N_SAVE_USER_MULTI_ROLE				: 'N_SAVE_USER_MULTI_ROLE',
	N_GET_NOTICE_BOARD_LIST 			: 'N_GET_NOTICE_BOARD_LIST',
	N_GET_MAINTENANCE_DETAIL 			: 'N_GET_MAINTENANCE_DETAIL',
	N_GET_NOTIFICATION_LIST 			: 'N_GET_NOTIFICATION_LIST',
	
	N_GET_UPLOADED_DOCUMENTS 			: 'N_GET_UPLOADED_DOCUMENTS',
	N_GET_FAV_UPLOADED_DOCUMENTS 		: 'N_GET_FAV_UPLOADED_DOCUMENTS',
	N_ADD_DOCUMENT_TO_FAV 				: 'N_ADD_DOCUMENT_TO_FAV',
	N_GET_AGREEMENT_LIST 				: 'N_GET_AGREEMENT_LIST',
	N_GET_AGREEMENT_PROPERTY_LIST 		: 'N_GET_AGREEMENT_PROPERTY_LIST',
	N_GET_PROPERTY_OWNER_LIST 			: 'N_GET_PROPERTY_OWNER_LIST',
	N_GET_PROPERTY_TENANT_LIST 			: 'N_GET_PROPERTY_TENANT_LIST',
	N_ADD_AGREEMENT 					: 'N_ADD_AGREEMENT',
	N_GET_STATISTICS 					: 'N_GET_STATISTICS',
	N_GET_AGREEMENT_DETAIL 				: 'N_GET_AGREEMENT_DETAIL',
	N_UPLOAD_MYFILE_DOC 				: 'N_UPLOAD_MYFILE_DOC',
	N_UPLOAD_AGREEMENT_DOC 				: 'N_UPLOAD_AGREEMENT_DOC',
	N_DELETE_AGREEMENT 					: 'N_DELETE_AGREEMENT',
	N_FORWARD_MAINTENANCE_REQ			: 'N_FORWARD_MAINTENANCE_REQ',
	N_GET_AGREEMENT_BY_PROPERTY			: 'N_GET_AGREEMENT_BY_PROPERTY',
	N_GET_USER_ACTIVE_ROLES 			: 'N_GET_USER_ACTIVE_ROLES',
	N_GET_TENANCIES_HISTORY 			: 'N_GET_TENANCIES_HISTORY',
	N_GET_AGREEMENT_PROPERTY_OWNER_LIST : 'N_GET_AGREEMENT_PROPERTY_OWNER_LIST',
	N_GET_AGREEMENT_FOR_PROPERTY 		: 'N_GET_AGREEMENT_FOR_PROPERTY',
	N_GET_MAINTENANCE_HISTORY_RES 		: 'N_GET_MAINTENANCE_HISTORY_RES',
	N_GET_MESSAGE_LIST					: 'N_GET_MESSAGE_LIST',
	N_GET_UNREAD_MESSAGE_LIST			: 'N_GET_UNREAD_MESSAGE_LIST',
	N_GET_NOTICE_BOARD_DETAIL_LIST_RES	: 'N_GET_NOTICE_BOARD_DETAIL_LIST_RES',
	N_ADD_REVIEW						: 'N_ADD_REVIEW',
	N_GET_USER_REVIEW					: 'N_GET_USER_REVIEW',
	N_FILTER_PROPERTY					: 'N_FILTER_PROPERTY',

	N_GET_MESSAGE_LIST					: 'N_GET_MESSAGE_LIST',
	N_ADD_USER_AS_FAV					: 'N_ADD_USER_AS_FAV',
	//For chat module
	N_SHARE_IMAGE_FOR_CHAT 			    : 'N_SHARE_IMAGE_FOR_CHAT',
	N_GET_ALL_PROPERTY 					: 'N_GET_ALL_PROPERTY',
	N_GET_ALL_USER_REVIEW 				: 'N_GET_ALL_USER_REVIEW',
	N_ADD_EDIT_PROPERTY					: 'N_ADD_EDIT_PROPERTY',
	N_GET_USER_ROLE_REVIEW 				: 'N_GET_USER_ROLE_REVIEW',

	N_GET_MAINTENANCE_THREAD_LIST 		: 'N_GET_MAINTENANCE_THREAD_LIST',
	N_GET_GENERAL_THREAD_LIST 	 		: 'N_GET_GENERAL_THREAD_LIST',

	N_UPLOAD_BANNER_IMG 	 			: 'N_UPLOAD_BANNER_IMG',
	N_UPDATE_AGREEMENT 	 				: 'N_UPDATE_AGREEMENT',
	N_CANCEL_MAINTENANCE_REQ 	 		: 'N_CANCEL_MAINTENANCE_REQ',
	N_ALL_AGENT_LIST 			 		: 'N_ALL_AGENT_LIST',
	N_ALL_AGENT_LIST_WITHI_IN_AGENCY	: 'N_ALL_AGENT_LIST_WITHI_IN_AGENCY',
	N_TRADERS_JOB_HISTORY				: 'N_TRADERS_JOB_HISTORY',
	N_GET_AGREEMENT_FOR_TENANT_PROFILE	: 'N_GET_AGREEMENT_FOR_TENANT_PROFILE',
	N_GET_FAV_TRADERS					: 'N_GET_FAV_TRADERS',
	N_GLOBAL_SEARCH						: 'N_GLOBAL_SEARCH',
	N_ADD_AGENT_BY_AGENCY				: 'N_ADD_AGENT_BY_AGENCY',
	N_FILTER_MY_FILE					: 'N_FILTER_MY_FILE',
	N_GET_AGENCY_PROPERTY				: 'N_GET_AGENCY_PROPERTY',

	N_ALL_AGENCY_LIST 			 		: 'N_ALL_AGENCY_LIST',
	N_ASSOCIATE_WITH_AGENCY 		    : 'N_ASSOCIATE_WITH_AGENCY',
}
export default API_CONST



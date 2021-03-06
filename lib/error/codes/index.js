/* lib/framework/routerbase/error/codes/index.js */

module.exports = {

	"BAD_REQUEST":400,
	"BAD_REQUEST_USER":400.2,
	"USER_NOT_EXISTS":400.21,
	"USER_ALREADY_EXISTS":400.22,
	"ALREADY_LOGGED_IN":400.23,
	"NOT_LOGGED_IN":400.24,

	"BAD_HEADER":400.3,
	"NOT_ACCEPT_JSON":400.31,
	"NOT_FORMENCODED_OR_APPJSON":400.33,
	"NOT_APP_JSON":400.34,

	"REQ_PARAM":400.4,
	"USER_EMAIL_REQUIRED":400.41,
	"USER_PASSWORD_REQUIRED":400.42,
	"INVALID_JSON":400.43,

	"INVALID_TOKEN":400.5,
	"FB_TOKEN_SESSION_EXPIRED":400.51,

	"BAD_REQUEST_PARAMS":400.6,

	"LOGIN_ERROR":401.1,
	"NO_USER_MATCH":401.11,
	"PASSWORD_WRONG":401.12,
	"FB_LOGIN_ERROR":401.13,
	"UNAUTHORIZED_ERROR":401.3,

	"JWT_CREDS_REQUIRED":401.21,
	"JWT_CREDS_BAD_SCHEME":401.22,
	"JWT_CREDS_BAD_FORMAT":401.23,
	"JWT_UNSUPPORTED_ALGORITHM":401.24,
	"JWT_TOKEN_NOT_ACTIVE":401.25,
	"JWT_TOKEN_EXPIRED":401.26,
	"JWT_SIG_VERIFY_FAILED":401.27,
	"JWT_PAYLOAD_CORRUPT":401.28,

	"FORBIDDEN":403.1,

	"RESOURCE_NOT_FOUND":404.0,

	"UNSUPPORTED_MEDIA":415.0,
	"UNSUPPORTED_CHARSET":415.1,

	"SERVER_ERROR":500.1,
	"CACHE_SERVER_ERROR":500.2,
	"DB_ERROR":500.3,
	"EXT_SERVER_ERROR":500.9,
	"AWS_ERROR":500.91,
	"FB_ERROR":500.92,

	"UPDATING_CACHE":503.101

};

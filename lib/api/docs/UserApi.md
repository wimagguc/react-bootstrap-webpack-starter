# DemoApi.UserApi

All URIs are relative to *https://demo-api.herokuapp.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userPartialUpdate**](UserApi.md#userPartialUpdate) | **PATCH** /user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
[**userRead**](UserApi.md#userRead) | **GET** /user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
[**userUpdate**](UserApi.md#userUpdate) | **PUT** /user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.


<a name="userPartialUpdate"></a>
# **userPartialUpdate**
> UserDetails userPartialUpdate(data)

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.UserApi();

var data = new DemoApi.UserDetails(); // UserDetails | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPartialUpdate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**UserDetails**](UserDetails.md)|  | 

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userRead"></a>
# **userRead**
> UserDetails userRead()

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userRead(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUpdate"></a>
# **userUpdate**
> UserDetails userUpdate(data)

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.UserApi();

var data = new DemoApi.UserDetails(); // UserDetails | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUpdate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**UserDetails**](UserDetails.md)|  | 

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


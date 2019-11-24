# DemoApi.LogoutApi

All URIs are relative to *https://demo-api.herokuapp.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logoutCreate**](LogoutApi.md#logoutCreate) | **POST** /logout/ | Calls Django logout method and delete the Token object assigned to the current User object.
[**logoutList**](LogoutApi.md#logoutList) | **GET** /logout/ | Calls Django logout method and delete the Token object assigned to the current User object.


<a name="logoutCreate"></a>
# **logoutCreate**
> logoutCreate()

Calls Django logout method and delete the Token object assigned to the current User object.

Accepts/Returns nothing.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.LogoutApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logoutCreate(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logoutList"></a>
# **logoutList**
> logoutList()

Calls Django logout method and delete the Token object assigned to the current User object.

Accepts/Returns nothing.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.LogoutApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logoutList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


# DemoApi.LoginApi

All URIs are relative to *https://demo-api.herokuapp.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginCreate**](LoginApi.md#loginCreate) | **POST** /login/ | 


<a name="loginCreate"></a>
# **loginCreate**
> Login loginCreate(data)



Check the credentials and return the REST Token if the credentials are valid and authenticated. Calls Django Auth login method to register User ID in Django session framework  Accept the following POST parameters: username, password Return the REST Framework Token Object's key.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.LoginApi();

var data = new DemoApi.Login(); // Login | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Login**](Login.md)|  | 

### Return type

[**Login**](Login.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


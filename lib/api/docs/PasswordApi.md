# DemoApi.PasswordApi

All URIs are relative to *https://demo-api.herokuapp.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**passwordChangeCreate**](PasswordApi.md#passwordChangeCreate) | **POST** /password/change/ | Calls Django Auth SetPasswordForm save method.
[**passwordResetConfirmCreate**](PasswordApi.md#passwordResetConfirmCreate) | **POST** /password/reset/confirm/ | Password reset e-mail link is confirmed, therefore this resets the user's password.
[**passwordResetCreate**](PasswordApi.md#passwordResetCreate) | **POST** /password/reset/ | Calls Django Auth PasswordResetForm save method.


<a name="passwordChangeCreate"></a>
# **passwordChangeCreate**
> PasswordChange passwordChangeCreate(data)

Calls Django Auth SetPasswordForm save method.

Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.PasswordApi();

var data = new DemoApi.PasswordChange(); // PasswordChange | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.passwordChangeCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**PasswordChange**](PasswordChange.md)|  | 

### Return type

[**PasswordChange**](PasswordChange.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="passwordResetConfirmCreate"></a>
# **passwordResetConfirmCreate**
> PasswordResetConfirm passwordResetConfirmCreate(data)

Password reset e-mail link is confirmed, therefore this resets the user's password.

Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.PasswordApi();

var data = new DemoApi.PasswordResetConfirm(); // PasswordResetConfirm | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.passwordResetConfirmCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**PasswordResetConfirm**](PasswordResetConfirm.md)|  | 

### Return type

[**PasswordResetConfirm**](PasswordResetConfirm.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="passwordResetCreate"></a>
# **passwordResetCreate**
> PasswordReset passwordResetCreate(data)

Calls Django Auth PasswordResetForm save method.

Accepts the following POST parameters: email Returns the success/fail message.

### Example
```javascript
var DemoApi = require('demo_api');
var defaultClient = DemoApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new DemoApi.PasswordApi();

var data = new DemoApi.PasswordReset(); // PasswordReset | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.passwordResetCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**PasswordReset**](PasswordReset.md)|  | 

### Return type

[**PasswordReset**](PasswordReset.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


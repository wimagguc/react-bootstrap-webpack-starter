/*
 * Demo API
 * Demo
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DemoApi);
  }
}(this, function(expect, DemoApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('UserDetails', function() {
      beforeEach(function() {
        instance = new DemoApi.UserDetails();
      });

      it('should create an instance of UserDetails', function() {
        // TODO: update the code to test UserDetails
        expect(instance).to.be.a(DemoApi.UserDetails);
      });

      it('should have the property firstName (base name: "first_name")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "last_name")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property password1 (base name: "password1")', function() {
        // TODO: update the code to test the property password1
        expect(instance).to.have.property('password1');
        // expect(instance.password1).to.be(expectedValueLiteral);
      });

      it('should have the property password2 (base name: "password2")', function() {
        // TODO: update the code to test the property password2
        expect(instance).to.have.property('password2');
        // expect(instance.password2).to.be(expectedValueLiteral);
      });

    });
  });

}));

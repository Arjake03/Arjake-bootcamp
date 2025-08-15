/*global QUnit*/

sap.ui.define([
	"com/ui5/trng/cssactivity/controller/cssactivity.controller"
], function (Controller) {
	"use strict";

	QUnit.module("cssactivity Controller");

	QUnit.test("I should test the cssactivity controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

/*global QUnit*/

sap.ui.define([
	"com/ui5/trng/cssactivity/controller/css_activity.controller"
], function (Controller) {
	"use strict";

	QUnit.module("css_activity Controller");

	QUnit.test("I should test the css_activity controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

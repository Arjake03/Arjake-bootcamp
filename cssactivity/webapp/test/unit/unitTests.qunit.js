/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ui5/trng/cssactivity/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

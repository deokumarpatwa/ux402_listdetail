/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"studentdkcomsaptrainingux402listdetail/ux402_listdetail/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

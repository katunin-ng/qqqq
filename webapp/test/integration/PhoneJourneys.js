jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"a/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"a/test/integration/pages/App",
	"a/test/integration/pages/Browser",
	"a/test/integration/pages/Master",
	"a/test/integration/pages/Detail",
	"a/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "a.view."
	});

	sap.ui.require([
		"a/test/integration/NavigationJourneyPhone",
		"a/test/integration/NotFoundJourneyPhone",
		"a/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});


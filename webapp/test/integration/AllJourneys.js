jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 CarrierCollection in the list

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
		"a/test/integration/MasterJourney",
		"a/test/integration/NavigationJourney",
		"a/test/integration/NotFoundJourney",
		"a/test/integration/BusyJourney",
		"a/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});

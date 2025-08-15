sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function(Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.ui5.trng.cssactivity.controller.cssactivity", {
        onInit() {
        },
        onInfoPress: function () {
            MessageBox.information("Hello this is Arjake, Welcome!");
        },
        onNextPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView2");
        }
    });
});
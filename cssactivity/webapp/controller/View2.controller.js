sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function(Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.ui5.trng.cssactivity.controller.view2", {
        onInit() {
        },
        onBackPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Routecssactivity");
        },
        onExitPress: function () {
            MessageBox.information("Thank you, press back to be routed to landing page");
        }
    });
});
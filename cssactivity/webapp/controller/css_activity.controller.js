sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.ui5.trng.cssactivity.controller.css_activity", {
        onInit: function () {
            // Initialization logic if needed
        },

        onInfoPress: function () {
            MessageBox.information("This is an info message", {
                title: "Info",
                styleClass: "customMessageBox"
            });
        },

        onThanksPress: function () {
            MessageBox.success("Thank you! Come again!", {
                title: "Thanks",
                styleClass: "customMessageBox"
            });
        },

        onPage1ToPage2: function () {
            MessageBox.confirm("You are going to Page 2", {
                title: "Info",
                styleClass: "customMessageBox",
                actions: [MessageBox.Action.OK],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        this.getRouter().navTo("RouteView2");
                    }
                }.bind(this)
            });
        },

        onPage2ToPage1: function () {
            MessageBox.confirm("You are going back to Page 1", {
                title: "Info",
                styleClass: "customMessageBox",
                actions: [MessageBox.Action.OK],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        this.getRouter().navTo("RouteView1");
                    }
                }.bind(this)
            });
        },

        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        }
    });
});

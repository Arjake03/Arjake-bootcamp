sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.training.exer1corpuz.controller.MainView", {
        onInit: function () {
            // Initialization logic can go here
        },

        onAddItem: function () {

            // Comment this code for now

            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            // var sMsg = oTextBundle.getText("addButtonMsg");

            // this.fnDisplayMsg(sMsg);


            // Instantiate the fragment


            // create dialog lazily

            if (!this.oDialog) {

                // By using loadFragment, we are adding the fragment as a dependent to the View

                // By doing so, we can use the functions inside the view's controller

                this.oDialog = this.loadFragment({

                    name: "com.training.exer1corpuz.fragment.ProductDialog"

                });

            }

            this.oDialog.then(function (oDialog) {

                oDialog.open();

            });

        },
        fnDisplayMsg: function (sMsg) {
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var sSelectedText = oEvent.getParameter("selectedItem").getText();
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCCLabel = this.getView().byId("idLblCC");
            var oCCInput = this.getView().byId("idInputCC");

            oMobileLabel.setVisible(sSelectedKey === "GCASH");
            oMobileInput.setVisible(sSelectedKey === "GCASH");

            oCCLabel.setVisible(sSelectedKey === "CC");
            oCCInput.setVisible(sSelectedKey === "CC");

            var sToastMsg = oTextBundle.getText("selectedMOP", [sSelectedText]);
            MessageToast.show(sToastMsg);
        },
        
        onPressCheckout: function () {

            var oInputFName = this.getView().byId("idInptFName");

            var oInputLName = this.getView().byId("idInptLName");

            var oInputFNameValue = oInputFName.getValue();

            var oInputLNameValue = oInputLName.getValue();

            var oRouter = this.getOwnerComponent().getRouter();


            // Check if first name and last name is blank

            if (oInputFNameValue === "" || oInputLNameValue === "") {


                // set value state to Error

                oInputFName.setValueState("Error");

                oInputLName.setValueState("Error");

            } else {

                oInputFName.setValueState("None");

                oInputLName.setValueState("None");


                //Navigate to review page passing first

                oRouter.navTo("RouteReviewPage", {

                    firstName: oInputFNameValue

                });

            }

        },
        onCloseDialog: function () {

            this.getView().byId("idProductDialog").close();

        },
    });
});

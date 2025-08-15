sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.ui5.trng.exercise1.controller.exercise1", {
        onInit() {
            // Initialization logic can go here
        },

        onClickClear: function () {
            const oView = this.getView();

            oView.byId("input0").setValue("");
            oView.byId("input1").setValue("");
            oView.byId("input2").setValue("");
            oView.byId("input3").setValue("");
            oView.byId("input4").setValue("");
        }
    });
});

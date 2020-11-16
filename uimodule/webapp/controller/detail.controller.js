sap.ui.define( ["sap/ui/core/mvc/Controller"],
    function(Controller) {
        "use strict";

        return Controller.extend("Example1.controller.detail", {
            onInit: function() {
                this.getOwnerComponent().getRouter().getRoute("detail").attachMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function(oEvent) {
                
            },

            navigateBack: function(oEvent) {
                this.onMainPress();
            },

            onMainPress: function(oEvent) {
                this.getOwnerComponent().getRouter().navTo("main", true);
            }
        }
        
    );
});
sap.ui.define( [ "sap/ui/core/mvc/Controller" ],
    function(Controller) {
        "use strict";

        return Controller.extend("Example1.controller.main", {
            onInit: function() {
//                this.getRouter.getRoute("main").attachMatched(this._onRouteMatched, this);
                this.getOwnerComponent().getRouter().getRoute("main").attachMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function(oEvent) {
            },

            onDetailPress: function(oEvent) {
                this.getOwnerComponent().getRouter().navTo("detail", true);
            }
        }
        
    );
});
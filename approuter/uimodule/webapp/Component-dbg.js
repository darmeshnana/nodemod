// let fetch = require('node-fetch')


sap.ui.define( [ "sap/ui/core/UIComponent" ], function (UIComponent) {
    "use strict";


    return UIComponent.extend("Example1.Component", {
        metadata: {
            manifest: "json"
        },

        init : function() {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();

            // const url = `/nodeModule/be`
            // const headers = { "Content-Type": "application/json" }               
            // fetch(url, {method: 'GET', headers: headers})
            // .then((res) => {
            // })
            // .then((resp) => {
            // })  

            $.ajax({
                url: "../be"
            }).done(function (data, status, jqxhr) {
                            var user = "Welcome! " + data;
                            var oText = new sap.m.Text({
                            text:user
            })
            })
        }
    })

}, true);

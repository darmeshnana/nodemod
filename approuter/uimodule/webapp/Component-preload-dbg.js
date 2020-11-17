//@ui5-bundle Example1/Component-preload.js
sap.ui.require.preload({
	"Example1/Component-preload.js":function(){
},
	"Example1/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent"],function(t){"use strict";return t.extend("Example1.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);this.getRouter().initialize();$.ajax({url:"../be"}).done(function(t,e,n){var i="Welcome! "+t;var a=new sap.m.Text({text:i})})}})},true);
},
	"Example1/controller/detail.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("Example1.controller.detail",{onInit:function(){this.getOwnerComponent().getRouter().getRoute("detail").attachMatched(this._onRouteMatched,this)},_onRouteMatched:function(t){},navigateBack:function(t){this.onMainPress()},onMainPress:function(t){this.getOwnerComponent().getRouter().navTo("main",true)}})});
},
	"Example1/controller/main.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("Example1.controller.main",{onInit:function(){this.getOwnerComponent().getRouter().getRoute("main").attachMatched(this._onRouteMatched,this)},_onRouteMatched:function(t){},onDetailPress:function(t){this.getOwnerComponent().getRouter().navTo("detail",true)}})});
},
	"Example1/i18n/i18n.properties":'  \ntitle=Title\nappTitle=routing-sample\nappDescription=App Description',
	"Example1/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"Example1","type":"application","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"Northwind.svc.approuter":{"uri":"/northwind/V2/Northwind/Northwind.svc/","type":"OData"},"Northwind.svc":{"uri":"/V2/Northwind/Northwind.svc/","type":"OData"}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"dependencies":{"minUI5Version":"1.75.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.f":{},"sap.ui.unified":{}}},"contentDensities":{"compact":true,"cozy":true},"rootView":{"viewName":"Example1.view.App","type":"XML"},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sap.ui.demo.todo.i18n.i18n","supportedLocales":["en","de"],"fallbackLocale":"en"}},"":{"dataSource":"Northwind.svc.approuter","preload":true}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"Example1.view","controlAggregation":"pages","controlId":"rootControl"},"routes":[{"name":"main","pattern":"","target":"main"},{"name":"detail","pattern":"detail","target":"detail"}],"targets":{"main":{"viewName":"main"},"detail":{"viewName":"detail"}}}}}',
	"Example1/view/App.view.xml":'<view xmlns="sap.m"><App id="rootControl"></App></view>',
	"Example1/view/detail.view.xml":'<view   xmlns="sap.m"\n        controllerName="Example1.controller.detail"><Page   title="Example 1 - Detail"\n            showNavButton="true"\n            navButtonPress="navigateBack"><content></content><footer><OverflowToolbar id="otbFooter"><ToolbarSpacer/><Button text="Main" press="onMainPress"/></OverflowToolbar></footer></Page></view>',
	"Example1/view/main.view.xml":'<view   xmlns="sap.m"\n        controllerName="Example1.controller.main"><Page   title="Example 1 - Main"><content></content><footer><OverflowToolbar id="otbFooter"><ToolbarSpacer/><Button text="Detail" press="onDetailPress"/></OverflowToolbar></footer></Page></view>'
});
(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "line",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		iconUrl:'/Scripts/app/editor/symbols/ext/Icons/amcharts-line.png',
		getDefaultConfig: function(){ 
			return { 
				DataShape: "Table",
				Height: 150,
				Width: 150 
			} 
		}
	}

	function getConfig(){
		return {
			
	"type": "serial",
	"attributeField": "attribute",
	"startDuration": 1,
	"attributeAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[title]] of [[attribute]]:[[value]]",
			"bullet": "round",
			"id": "AmGraph-1",
			"title": "graph 1",
			"valueField": "value"
		},
		
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"title": "Axis title"
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"useGraphSettings": true
	},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": "Chart Title"
		}
	],
	"dataProvider": [
		{
			"attribute": "attribute 1",
			"value": 8,
			
		},
		{
			"attribute": "attribute 2",
			"value": 6,
			
		},
		{
			"attribute": "attribute 3",
			"value": 2,
			
		},
		{
			"attribute": "attribute 4",
			"value": 1,
			
		},
		{
			"attribute": "attribute 5",
			"value": 2,
			
		},
		{
			"attribute": "attribute 6",
			"value": 3,
			
		},
		{
			"attribute": "attribute 7",
			"value": 6,
			
		}
	]
}
	}
	
	symbolVis.prototype.init = function(scope, elem) { 
		var container = elem.find("#container")[0];
		container.id = "line_" + scope.symbol.Name;
		var chart = AmCharts.makeChart(container.id, getConfig());
		
		function convertoChart(data){
			
			return data.Rows.map(function(item){
				return {
					value: item.Value,
					attribute: item.Label
				}
			});
			
			
		}
		
		
		
			this.onDataUpdate=dataUpdate;
			function dataUpdate(data){
		
			var dataprovider = convertoChart(data);
			chart.dataProvider = dataprovider; 
			chart.validateData(); 
		}
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 

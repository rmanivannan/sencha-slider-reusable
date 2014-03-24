Ext.define('Customslider.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    requires: [
		'Customslider.view.CustomSliderOne',
    ],
    config: {
		xtype:'Container',
		items:[
			{
				xtype: 'CustomSliderOne',
				action: 'sliderOneIndex',
				sliderVal: 10,
				lableName:'Slider Value',
				minValue: 0,
				maxValue: 100,
				divition: 10,
			}
		],
	}
});


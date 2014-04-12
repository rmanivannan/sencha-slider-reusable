Ext.define('Customslider.view.Main', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  requires: [
	  'Customslider.view.CustomSliderOne',
  ],
  config: {
  	xtype:'Container',
    cls: 'cls555',
    scrollable: false,
  	items:[{
        xtype: 'titlebar',
        title:'Sliders'
      },{
        xtype: 'CustomSliderOne',
      },{
        xtype: 'CustomSliderOne',
        lableName:'Slider with label change',
      },{
        xtype: 'CustomSliderOne',

        /**Initial values to setup the slider**/
        lableName:'Slider with changes of lableName, sliderVal, minValue, maxValue, divition',
        sliderVal: 10,
        minValue: 0,
        maxValue: 100,
        divition: 2,
      }
    ],
	}
});


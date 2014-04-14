Ext.define('Customslider.view.Main', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  requires: [
	  'Customslider.view.CustomSlider',
  ],
  config: {
  	xtype:'Container',
    cls: 'cls555',
    scrollable: false,
  	items:[{
        xtype: 'titlebar',
        title:'Sliders'
      },{
        /**Adding slider with default values**/
        xtype: 'CustomSlider',
      },{
        /**Adding Slider with label change**/
        xtype: 'CustomSlider',
        lableName:'Slider with label change',
      },{
        /**Adding Slider changes of lableName, sliderVal, minValue, maxValue, division**/
        xtype: 'CustomSlider',

        /**Initial values to setup the slider**/
        lableName:'Slider with changes of lableName, sliderVal, minValue, maxValue, division',
        sliderVal: 10,
        minValue: 0,
        maxValue: 100,
        division: 2,
      }
    ],
	}
});


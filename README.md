Sencha Tuch Customized Slider Component with highlighted status
=======================================

This component supports the slider with Plus and minus buttons and allows developer to set label, min, max, initial values.

##How to add this component in a sencha touch view ?

### Example Usage
  
  requires: [
    'Customslider.view.CustomSlider'
  ],
  config: {
    xtype:'Container',
    cls: 'cls555',
    scrollable: false,
    items:[{
      xtype: 'CustomSlider',

      lableName:'Slider with changes of lableName, sliderVal, minValue, maxValue, division',
      sliderVal: 10,
      minValue: 0,
      maxValue: 100,
      division: 2
    }]
  }
  

=========================================

1] Add 'CustomSlider.js' on views folder.

2] Add the 'CustomSlider' on to your view file where required
requires: ['Customslider.view.CustomSlider']

3] Used xtype as 'CustomSlider' for adding the slider on view

###Customizable slider properties:
lableName - 'Slider name which will apply as label of the slider'
sliderVal - 'Slider initial value on rendering'
minValue  - 'Slider minimum value or lowest possible value of the slider'
maxValue  - 'Slider maximum value or highest possible value of the slider'
division  - 'Slider division value or lowest different between adjacent slider values'

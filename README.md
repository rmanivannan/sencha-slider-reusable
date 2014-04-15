Sencha Touch Customized Slider Component with highlighted status
=======================================

This component supports the slider with Plus and minus buttons and allows developer to set label, min, max, initial values.

##How to add this component in a sencha touch view ?

1] Add 'CustomSlider.js' into your project views folder.

2] Add 'CustomSliderOne.css' in to your css folder and include in your project as well.

3] Add the 'CustomSlider' on to your view file where required
requires: ['Customslider.view.CustomSlider']

4] Used xtype as 'CustomSlider' for adding the slider on view

### Example Usage

```  
  requires: [
    'Customslider.view.CustomSlider'
  ],
  config: {
    xtype:'Container',
    cls: 'cls555',
    scrollable: false,
    items:[{
      /**Adding Slider changes of lableName, sliderVal, minValue, maxValue, division**/
      xtype: 'CustomSlider',

      /**Initial values to setup the slider**/
      lableName:'Slider with changes of lableName, sliderVal, minValue, maxValue, division',
      sliderVal: 10,
      minValue: 0,
      maxValue: 100,
      division: 2
    }]
  }
```

=========================================

###Customizable slider properties:

1.lableName - 'Slider name which will apply as label of the slider'

2.sliderVal - 'Slider initial value on rendering'

3.minValue  - 'Slider minimum value or lowest possible value of the slider'

4.maxValue  - 'Slider maximum value or highest possible value of the slider'

5.division  - 'Slider division value or lowest different between adjacent slider values'

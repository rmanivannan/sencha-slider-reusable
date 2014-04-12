/**CustomSliderOne
 * @author Manivannan
 * $Id: CustomSliderOne.js manivannan13tnj@gmail.com $
 */
Ext.define('Customslider.view.CustomSliderOne', {
  extend: 'Ext.Container',
  xtype: 'CustomSliderOne',

  config: {
    cls: 'CustomSliderOne',
    items: [{
      html   : 'Lable Name',
      action : 'sliderLabel',
      cls    : 'sliderLabel',
    }, {
      html   : 'value',
      action : 'sliderLablelValue',
      cls    : 'sliderLablelValue',
    }, {
      action : 'decBtn',
      cls    : 'decBtn',
    }, {
      action : 'CustomSliderOneVisuls',
      cls    : 'CustomSliderOneVisuls',
      html   : [
                '<div class ="SliderBG"></div>',
                '<div class ="SliderHeighLightArea"></div>',
                '<div class ="SliderNob"></div>',
              ].join(''),
    }, {
      action : 'incBtn',
      cls    : 'incBtn'
    }],

    /**
     *  Default slider properties
     */
    minValue  : -10,
    maxValue  : 10,
    divition  : 1,
    sliderVal : 0,
    lableName : 'Slider with Default values',
  },

  /**
   * [initialize: seting up the slider event bindings]
   * @return {[type]} [description]
   */
  initialize: function () {
    this.addPageEvents([{
      'selector'     : 'decBtn',
      'eventType'    : 'touchstart',
      'functionName' : 'onSliderOneDec'
      }, {
      'selector'     : 'incBtn',
      'eventType'    : 'touchstart',
      'functionName' : 'onSliderOneInc'
      }, {
      'selector'     : 'CustomSliderOneVisuls',
      'eventType'    : 'touchstart',
      'functionName' : 'onSliderOneSeek'
      }, {
      'selector'     : 'CustomSliderOneVisuls',
      'eventType'    : 'touchend',
      'functionName' : 'onSliderOneSeek'
      }, {
      'selector'     : 'CustomSliderOneVisuls',
      'eventType'    : 'touchmove',
      'functionName' : 'onSliderOneSeek'
      }
    ])
  },

  addPageEvents: function (eventAr) {
    var self = this;
    for (var i in eventAr) {
      self.child(('container[action="' + eventAr[i].selector + '"]')).on(
        eventAr[i].eventType,
        eventAr[i].functionName,
        self, {
          'element': 'element'
        }
      );
    }
  },

  /**
   * [onSliderOneDec: decrease the slider value by one index on the click of '-'button]
   * @return {[type]}  [description]
   */
  onSliderOneDec: function () {
    this.setSliderVal(this.getSliderVal() - this.getDivition());
  },

  /**
   * [onSliderOneInc: increase the slider value by one index on the click of '+'button]
   * @return {[type]}   [description]
   */
  onSliderOneInc: function () {
    this.setSliderVal(this.getSliderVal() + this.getDivition());
  },

  /**
   * [onSliderOneSeek: setting up the slider value on slider nob move]
   * @param  {[type]} e [move event]
   * @return {[type]}   [description]
   */
  onSliderOneSeek: function (e) {
    console.log(e)
    var mousePosX            = e.touch.point.x;
    var sliderEl             = this.element.down('.CustomSliderOneVisuls');
    var sliderBarOffsetLeft  = sliderEl.dom.offsetLeft;
    var sliderBarOffsetWidth = sliderEl.dom.offsetWidth;
    
    var pos                  = Math.min((mousePosX - sliderBarOffsetLeft) / sliderBarOffsetWidth, 1) * 100;
    
    var labelValDiff         = this.getMaxValue() - this.getMinValue();
    var value1               = this.getMinValue() + labelValDiff * pos / 100;
    value1                   = value1 - value1 % this.getDivition();
    
    this.setSliderVal(value1);
  },


  /**
   * [applySliderVal: will make sure the value to be within the boundary]
   * @param  {[Number]} value [sliderValue]
   * @return {[Number]}       [sliderValue]
   */
  applySliderVal: function (value) {
    return value < this.getMinValue() ? this.getMinValue() : (value > this.getMaxValue() ? this.getMaxValue() : value);
  },

  /**
   * [updateSliderVal: updaing/setting the slider nob position and label value ]
   * @param  {[Number]} value [slider value]
   */
  updateSliderVal: function (value) {
    var sliderVal = value;
    sliderVal     = sliderVal - this.getMinValue();
    sliderVal     = sliderVal * 100 / (this.getMaxValue() - this.getMinValue());

    this.element.down('.SliderHeighLightArea').setStyle('width', sliderVal + '%');
    this.element.down('.SliderNob').setStyle('left', sliderVal + '%');

    var labelValDiff = this.getMaxValue() - this.getMinValue(),
    lablelValue      = this.getMinValue() + labelValDiff * sliderVal / 100;
    lablelValue      = lablelValue - lablelValue % this.getDivition();

    this.child('container[action ="sliderLablelValue"]').element.setHtml(lablelValue);
  },

  /**
   * [updateLableName: updating the slider headed/label]
   * @param  {[String]} value [slider label]
   * @return {[String]}       [slider label]
   */
  updateLableName: function (value) {
    this.child('container[action="sliderLabel"]').element.setHtml(value);
  },

});

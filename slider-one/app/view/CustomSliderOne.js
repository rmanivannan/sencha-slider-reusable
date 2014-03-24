/**CustomSliderOne
 * @author Manivannan
 * $Id: CustomSliderOne.js mani.jerry@gmail.com $
 */
 
 Ext.define('Customslider.view.CustomSliderOne', {
	extend: 'Ext.Container',
	xtype: 'CustomSliderOne',

	config: {
		cls: 'CustomSliderOne',
		items: [			
			{
				html:'Lable Name',
				action: 'sliderLabel',
				cls:'sliderLabel',
			},
			{
				html:'value',
				action: 'sliderLablelValue',
				cls:'sliderLablelValue',
			},
			{
				action: 'decBtn',
				cls: 'decBtn',			
			},
			{
				action: 'CustomSliderOneVisuls',
				cls: 'CustomSliderOneVisuls',
				html:[
					'<div class="SliderBG"></div>',
					'<div class="SliderHeighLightArea"></div>',
					'<div class="SliderNob"></div>',
				].join(''),
			},
			{
				action: 'incBtn',
				cls:'incBtn'
			}
		],
		
		/* sliderPos: 0, */
		minValue: -10,
		maxValue: 10,
		divition: 1,
		sliderVal: 0,
		lableName:'lableName',
		
	},
	
	
	applySliderVal:function(value){	
		if(value < this.getMinValue()){
			value = this.getMinValue();
		}
		
		if(value > this.getMaxValue()){
			value = this.getMaxValue();
		}
		return value;
	},
	updateSliderVal:function(value){
	
		var sliderVal = value;
		sliderVal = sliderVal - this.getMinValue();
		var sliderVal = sliderVal*100 / (this.getMaxValue() - this.getMinValue());
	
		this.element.down('.SliderHeighLightArea').setStyle('width', sliderVal+'%');
		this.element.down('.SliderNob').setStyle('left', sliderVal+'%');
				
		var labelValDiff = this.getMaxValue() - this.getMinValue();
		var value1 = this.getMinValue() + labelValDiff * sliderVal / 100 ;
		value1 = value1 - value1 %  this.getDivition();
		this.child('container[action="sliderLablelValue"]').element.setHtml(value1);
	},
	
	updateLableName:function(value){
		this.child('container[action="sliderLabel"]').element.setHtml(value);
	},
		
});


var currentPage;
Ext.define('Customslider.controller.Application', {
    extend: 'Ext.app.Controller',
	requires: [
    ],
    config: {
        refs: {
			sliderOne		:'[action="CustomSliderOneVisuls"]',
			sliderOneIndex	:'[action="sliderOneIndex"]',
			
			sliderDecBtn	:'[action="decBtn"]',
			sliderIncBtn	:'[action="incBtn"]',
        },
        control: {
        }
    },
	launch:function(){
		this.getSliderOne().element.on({
			touchstart: this.onSliderOneSeekStart,
			touchmove: this.onSliderOneSeekMove,
			touchend: this.onSliderOneSeekEnd,
			scope: this,
		});	
		this.getSliderDecBtn().element.on({
			touchend: this.onSliderOneDec,
		});
		this.getSliderIncBtn().element.on({
			touchend: this.onSliderOneInc,
		});
		currentPage = this;
	},
	onSliderOneSeekStart:function(e){
		this.onSliderOneSeekMove(e);
	},
	onSliderOneSeekMove:function(e){
		var mousePosX = e.touch.point.x;
		var sliderBarOffsetLeft = this.getSliderOne().element.dom.offsetLeft;
		var sliderBarOffsetWidth = this.getSliderOne().element.dom.offsetWidth;
		
		var pos = Math.min((mousePosX - sliderBarOffsetLeft) / sliderBarOffsetWidth, 1) * 100;
		
		var labelValDiff = this.getSliderOneIndex().getMaxValue() - this.getSliderOneIndex().getMinValue();
		var value1 = this.getSliderOneIndex().getMinValue() + labelValDiff * pos / 100 ;
		value1 = value1 - value1 %  this.getSliderOneIndex().getDivition();
		
		this.getSliderOneIndex().setSliderVal(value1);
	},
	
	onSliderOneSeekEnd:function(e){
		this.onSliderOneSeekMove(e);
	},
	
	onSliderOneDec:function(){
		currentPage.getSliderOneIndex().setSliderVal(currentPage.getSliderOneIndex().getSliderVal()-currentPage.getSliderOneIndex().getDivition());
	},
	onSliderOneInc:function(){
		currentPage.getSliderOneIndex().setSliderVal(currentPage.getSliderOneIndex().getSliderVal()+currentPage.getSliderOneIndex().getDivition());
	}
});

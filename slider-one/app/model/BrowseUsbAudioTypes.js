Ext.define('GarminAudio.model.BrowseUsbAudioTypes', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
				'browseType',
				'iconList',
				'isActive',
				'isPlay'
			]
	}
});

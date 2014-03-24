	Ext.define('GarminAudio.store.BrowseUsbAudioTypes', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GarminAudio.model.BrowseUsbAudioTypes',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/browseUsbTypes.json'
        }
    }
});

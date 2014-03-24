Ext.define('GarminAudio.store.ChangeSourceList', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GarminAudio.model.BrowseUsbAudioTypes',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/changeSourceList.json'
        }
    }
});

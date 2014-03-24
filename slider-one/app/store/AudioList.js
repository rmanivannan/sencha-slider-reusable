Ext.define('GarminAudio.store.AudioList', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GarminAudio.model.AudioList',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/songList.json'
        }
    }
});

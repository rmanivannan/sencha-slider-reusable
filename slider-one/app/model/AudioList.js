Ext.define('GarminAudio.model.AudioList', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'songName',
            'artist',
            'album',
            'albumThumbnail',
            'songUrl',
			'songDescription',
			'isPlay',
        ]
    }
});

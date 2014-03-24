Ext.application({
    name: 'Customslider',
    glossOnIcon: false,

    views: ['Main'],
    controllers: ['Application'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'Customslider.view.Main'
        });
    }
});

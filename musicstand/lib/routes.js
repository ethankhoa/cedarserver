Router.route('/musicstand', {
    name: 'musicstandmenu',
    waitOn: function () {
        return Meteor.subscribe('sets');
    }
});

Router.route('/musicstand/:_id', {
    name: 'musicstand',
    waitOn: function () {
        return [
            Meteor.subscribe('sets'),
            Meteor.subscribe('songs')
        ];
    },
    data: function () {
        return sets.findOne(this.params._id);
    }
});

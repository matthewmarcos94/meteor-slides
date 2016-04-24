import { Meteor } from 'meteor/meteor';

import { Session } from '/imports/collections/session.js';
import { Snippet } from '/imports/collections/snippet.js';

Meteor.startup(() => {
    // check if value exists
    if(Session.find().count() === 0) {
        Session.insert({
            index: 0
        });
    }
    if(Snippet.find().count() === 0) {
        Snippet.insert({
            code: ''
        });
    }
});
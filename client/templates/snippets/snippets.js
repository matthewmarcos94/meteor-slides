import { Session } from 'meteor/session';
import { Deps } from 'meteor/deps';
import { Snippet } from '/imports/collections/snippet.js';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.Snippets.helpers({
	"editorOptions": function() {
		return {
			lineNumbers: true,
			mode: "javascript"
		}
	},

	"varName": function() {
		return Session.get("varName"); // "varName" is variable name you provided to reactiveVar 
	}

});

Template.Snippets.onRendered(function() {
    Deps.autorun(() => {
        let snippet = Snippet.findOne().code;
        
        console.log(snippet);
        
        Session.set('varName', snippet);
    });
    
    $(document).on('keyup', (e) => {
        Snippet.update({
            _id: Snippet.findOne()._id
        }, {
            $set: {
                code: $('#some-id').val()
            }
        });
    });
});
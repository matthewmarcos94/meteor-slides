import { Mongo } from 'meteor/mongo';

export const Session = new Mongo.Collection('session');

export const SessionActions = {
    'decrement'() {
        let session = Session.findOne();

        if(session.index > 0) {
            Session.update({_id: session._id}, {
                $inc: {
                    index: -1
                }
            });
        }
    },
    'increment'() {
        let session = Session.findOne();

        if(session.index < 4) {
            Session.update({_id: session._id}, {
                $inc: {
                    index: 1
                }
            });
        }
    }
};

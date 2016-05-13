import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';

import './slides.html';

import { Session, SessionActions } from '/imports/collections/session.js';

Template.Slides.onCreated(function () {
});

Template.Slides.helpers({
    'index'() {
        if(Session.findOne()) {
            return Session.findOne().index;
        }
        else return 0;
    },

    'equal'(x, y) {
        return x === y;
    },

    'chepar'() {
        return window.location.pathname === '/chepar';
    }
});

Template.Slides.events({
});

Template.Slides.onRendered(function () {
    // action listeners
    $(document).on('keyup', (e) => {
        if(window.location.pathname == '/chepar') {
            if(e.keyCode == '37') {
                SessionActions.decrement();
            }
            else if(e.keyCode == '39' || e.keyCode == '32') {
                SessionActions.increment();
            }
        }
    });

    //particles
    particlesJS('slides-particles', {
        particles: {
            color: '#fff',
            color_random: false,
            shape: 'circle', // "circle", "edge" or "triangle"
            opacity: {
                opacity: 1,
                anim: {
                    enable: true,
                    speed: 1.5,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: 2,
            size_random: true,
            nb: 150,
            line_linked: {
                enable_auto: false,
            },
            anim: {
                enable: true,
                speed: 0.25
            }
        },
        /* Retina Display Support */
        retina_detect: true
    });

    $('#slides-particles').css('position', 'absolute');
});

/**
 * Source definition for
 *
 * @module    :: audience.js
 * @description :: defines service function that returns the volunteer supervisor email
 */
var _ = require('underscore');
var utils = require('./utils');

module.exports = {
  execute: function (fields, email, cb) {
  //placeholder while rest is worked out
  var supervisor = [
	{
    username: 'XXXXXXXXXX@example.com',
    name: 'Supervisor Proxy',
    title: 'Supervisor',
    bio: null,
    photoId: null,
    photoUrl: null,
    isAdmin: false,
    disabled: true,
    passwordAttempts: 0,
    id: 99999999,
    createdAt: 'Mon Sep 22 2014 15:56:17 GMT-0400 (EDT)',
    updatedAt: 'Mon Sep 22 2014 15:56:23 GMT-0400 (EDT)'
	}];

    return cb(null,supervisor);
  }
};

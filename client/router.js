var notFound = 'not-found';

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() {
      Meteor.subscribe('bands');
    },
    data: function() {
      $('h1').append('data');
      return {
        
      }
    }
  });

  this.route('users', {
    path: '/users'
  });

  this.route('bands', {
    path: '/bands',
    waitOn: function() {
      Meteor.subscribe('bands');
    },
    data: function() {
      return {
        
      }
    }
  });

  this.route('a', {
    path: '/a`'
  });

  this.route('b', {
    path: '/b'
  });

  this.route('test', {
    path: '/testing/test'
  });

  this.route('events', {
    path: '/events'
  });

  //this.route('user', {
  //  path: '/user/:id'
  //});

  this.route('band', {
    path : '/band/:name'
  });

  this.route('event', {
    path : '/event/:name'
  });

  this.route('not-found', {
    path: '*'
  });
});

Router.configure({
  layoutTemplate : 'layout',
  notFoundTemplate : notFound,
  before: function() {
    console.log('before router');
  }
});

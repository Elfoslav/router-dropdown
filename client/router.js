var notFound = 'not-found';

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() {
      Meteor.subscribe('bands');
    },
    data: function() {
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

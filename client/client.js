Template.users.helpers({
	users: function() {
		return Users.find();
	}
});


Template.bands.helpers({
	bands: function() {
		Bands.find();
	}
});

Template.home.helpers({

});

Template.home.rendered = function() {
	console.log('home rendered');
}

Template.home.events({
	'submit .add-band-form': function(e, t) {
		e.preventDefault();
		var $nameInput = $(t.find('input[name="name"]'));
		var name = $nameInput.val();
		console.log(name);
		if(!name) {
			alert('Name is required');
			return;
		}

		Meteor.call('addBand', name);
		Meteor.subscribe('bands', { name: name });

		$nameInput.val('');
	}
});

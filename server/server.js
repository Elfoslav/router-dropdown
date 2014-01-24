Meteor.publish('bands', function(query, opts) {
	query = query || {};
	opts = opts || {};
	return Bands.find(query, opts);
});

Meteor.methods({
	addBand: function(name) {
		Bands.insert({ name: name });
	}
});

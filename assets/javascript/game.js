var bikiniBottomCollector = {

	spongebobPoints: 4,
	squidwardPoints: 7,
	patrickPoints: 8,
	planktonPoints: 12,
	userScore: 0,


	whenSpongebobClicked: function() {
		$("#spongebob").on("click", function(){
			spongebobPoints = this.spongebobPoints++;
			console.log();
		});
	},
};
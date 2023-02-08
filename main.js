
var vaultCash;

var init = function(){	
	vaultCash = new vaultCash();
	
	vaultCash.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + vaultCash.cards.length);

			var source = $("#card-list-template").html();
			var template = Handlebars.compile(source);

			var context = {cards:vaultCash.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}

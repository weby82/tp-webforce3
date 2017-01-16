	var charger= $('#charger');
	// charge dans le tableau charger chaque element
	// boutons.each(function(i, element){
	var image = $(".img");
	

	var count = 0;
	$(charger).on('click',function(){
	    $('.img:eq('+count+')').addClass("show");
	    count++;
	});

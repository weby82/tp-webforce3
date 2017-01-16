	var charger= $('#charger');

	var count = 0;
	$(charger).on('click',function(){
	    $('.img:eq('+count+')').addClass("show");
	    count++;
	});

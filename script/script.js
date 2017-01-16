	var charger= $('#charger');
	// charge dans le tableau charger chaque element
	// boutons.each(function(i, element){
	var image = $(".img");
	console.log(image);
	charger.click( function(){
		
		for(var i = 0; i < image.length ; i++){
			$(image[i]).addClass('show');
			
		}
	});









		/*charger.each(function(i,element)
		{
		//pour chaque element du tableau boutons[] executer function
		$(element).click(function() 
	   {// au clic positionné sur element de tab/boutons[i] i  executer fonction () 

	   	for(var i = 0; i < 8 ; i++)
	   	{ 

	   		var img = ($(this).data('img-i'))[4];
	   		$('img-'+img + ".show").val('img'+i);
	   		alert (img);
	   	}
	   });        


	   
	});*/

// 	});
// });
// // Envoi vers les target id html --> remplir form...

// $('#bouton-sauver').click(function(){

// 	var nouveauNom = $('#nom').val();
// 	var nouveauPrenom = $('#prenom').val();
// 	var nouveauEmail = $('#email').val();
// 	var eleveId = $('#eleve-id').val();
// // au clic  sur bouton "sauver", executer fonction () qui place les valeurs en cours pour HTML dans des nouvelles variables locales pour les "sauver"
// 	var ligneId = '#ligne-' + eleveId;
// 		// et mise en forme par concatenation de la VAR... pour repérer l'ID de chaque ligne tableau d'eleve HTML
// 	$(ligneId + ' .nom').html(nouveauNom); 
// 	$(ligneId + ' .prenom').html(nouveauPrenom);
// 	$(ligneId + ' .email').html(nouveauEmail);
// 		// et chargement des classes ou éléments repérés par ligneId encore concaténés avec .class afin d'y placer le contenu de nouveau NOM....jAI compris le tour de passe passe par multiconcatenation CHAPEAU !!! afin d'obtenir la bonne ID de ligne et la bonne classe mais c'est COMPLIQUE et confus pour moi, des exercices à tête reposée ce sera mieux... 
// 	$(ligneId + ' .boutons-charger').data('nom', nouveauNom);
// 	$(ligneId + ' .boutons-charger').data('prenom', nouveauPrenom);
// 	$(ligneId + ' .boutons-charger').data('email', nouveauEmail);

// 	//vers target HTML par utilisation de variable de sauvegarde
// 	$('#img-1').val('');
// 	$('#img-2').val('');
// 	$('#img-3').val('');
// 	$('#img-4').val('');
// 	$('#img-5').val('');
// 	$('#img-1').val('');
// 	$('#img-1').val('');

// });


















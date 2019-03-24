$(function(){
  /*setInterval(function(){
    $("#Diapo ul").animate({marginLeft:-500},800,function(){
      $(this).css({marginLeft:0}).find("liDefilant:last").after($(this).find("liDefilant:first"));
    })
  }, 3500);
*/

  //Ici c'est pour le scroll et pour que le menu s'accroche en haut.
  addEventListener("scroll", scrolled, false);



  //Ajouter des Alinéas sur les paragraphes.
  $('p').prepend('&nbsp;&nbsp;&nbsp;&nbsp;');

  //Gérer le boutons en savoir plus de la partie "à propos de nous".
  $('.ensavoirplus').click(function()
  {
    //$('#blabla').css({'display':'block'});
    alert('fonctionnalité indisponible pour le moment');
  });


  /**
   * Script concernant la liste des produits
   *
   */

  var i=1;
  var nbProduits=$('#imagesDefilante li').length;
  //alert($('#imagesDefilante li').length);
  $('#Diapo .ulDefilant li:nth-child('+i+')').css({'display':'inline-block'});
  $('#flechedroite').click(function()
  {
    i=(i+1)%nbProduits;
    if(i<=0)
    {
      i=1;
    }
    $('#Diapo .ulDefilant li').css({'display':'none'});
    $('#Diapo .ulDefilant li:nth-child('+(i)+')').css({'display':'inline-block'});
  });

  $('#flechegauche').click(function()
  {
    i=(i-1);
    if(i<=0)
    {
      i=nbProduits;
    }
    $('#Diapo .ulDefilant li').css({'display':'none'});
    $('#Diapo .ulDefilant li:nth-child('+(i)+')').css({'display':'inline-block'});
  });



/*RECETTES*/

	$('.titreRecette').click(function()
	{
		//$(".contenuRecette").css({'display':'inline-block'});
        alert("ci git : la recette");
	})




    /*Responsive*/


});








function scrolled() {
    console.log(document.body.clientWidth)
  var windowHeight = document.body.clientHeight,
  currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

  //alert(currentScroll + " + " +  (header.offsetHeight) + " = ");
  if (currentScroll >= document.getElementById("bouttonsOnglets").offsetTop && document.body.clientWidth > 600)
  {
    $('#bouttonsOngletsAccrochés').css({'display':'block'})
    //window.scrollTo(0, document.getElementById("descriptif").offsetTop);
    //$('.onglets').css({'color':'white'});
  } else {
    $('#bouttonsOngletsAccrochés').css({'display':'none'})
  }

  if(currentScroll<document.getElementById("production").offsetTop)
  {
  	//$('html').css({'background-color':'blue'});
  	document.getElementById("propos2").className ="onglets selected";
  	document.getElementById("prod2").className ="onglets";
    document.getElementById("recettes2").className ="onglets";
    document.getElementById("contact2").className ="onglets";



  }
  else
  {


  	if(currentScroll>document.getElementById("production").offsetTop && currentScroll<document.getElementById("recette").offsetTop)
  	{
        document.getElementById("propos2").className ="onglets";
  		document.getElementById("prod2").className ="onglets selected";
  		document.getElementById("recettes2").className ="onglets";
        document.getElementById("contact2").className ="onglets";


    }
  	else
  	{
		if(currentScroll>document.getElementById("recette").offsetTop)
		{
            document.getElementById("propos2").className ="onglets";
            document.getElementById("prod2").className ="onglets";
            document.getElementById("recettes2").className ="onglets selected";
  			document.getElementById("contact2").className ="onglets";

  			//alert(window.innerHeight + " "  + currentScroll  + " et " + document.getElementById("fb").offsetTop);
		}
	//console.log("currentScroll " + currentScroll + " taille window "  + windowHeight + "le tout" )
	if(currentScroll+window.innerHeight>=windowHeight)
	{
        document.getElementById("propos2").className ="onglets";
        document.getElementById("prod2").className ="onglets";
		document.getElementById("recettes2").className ="onglets";
  		document.getElementById("contact2").className ="onglets selected";

		}
  	}
  }


    /*Regardez on gère ici le responsive, avec du java script*/
    if(document.body.clientWidth < 600)
    {
        $(".defiler").css({'float':'none', 'display':'block', 'width':'100%'});
        //$("html").css({'background-image':'linear-gradient(rgb(255,255,255), rgb(255, 242, 113))'});
        $("html").css({'background-size':'300%'});
        $('#bouttonsOnglets div').css({'width':'100%'})


    }
    else
    {

        $(".defiler").css({'float':'left', 'display':'inline-block', 'width':'50%'});
        //$("html").css({'background-image':'url(\'../img/back3.jpg\')'});
        $('#bouttonsOnglets div').css({'width':''});

        if(document.body.clientWidth < 1250)
        {
            $("html").css({'background-size':'200%'});
        }
        else
        {
            $("html").css({'background-size':'100%'});
        }
    }




};

function scrollToReference(ref) {
  var element = document.getElementById(ref);
  var tailleBandeau = document.getElementById("bouttonsOnglets").clientHeight;
  var currentScroll = window.scrollY;
  //alert(currentScroll);
  var destination = element.offsetTop-tailleBandeau;
  //window.scrollTo(0, destination);
  //alert('bouh ' + element.scrollTop + ' ' + document.documentElement.scrollTop );


  //document.documentElement.scrollTop = element.scrollTop;



  if(destination<0)
  {
    destination=0;
  }
  if(destination < currentScroll)
  {
    for(var i=currentScroll; i>= destination; i--)
    {
      window.scrollTo(0, i);
    }
    //alert('currentScroll>dest - scroll :  ' + currentScroll + ' et dest ' + destination );
    }
    else
    {
    for(var i=currentScroll; i<=destination; i++)
    {
      window.scrollTo(0, i);
    }
    //alert('dest>current - scroll :  ' + currentScroll + ' et dest ' + destination );

    }


};

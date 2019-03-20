$(function(){
  /*setInterval(function(){
    $("#Diapo ul").animate({marginLeft:-500},800,function(){
      $(this).css({marginLeft:0}).find("liDefilant:last").after($(this).find("liDefilant:first"));
    })
  }, 3500);
*/

  var i=11;
  $('#Diapo .ulDefilant li:nth-child('+i+')').css({'display':'block'});



  addEventListener("scroll", scrolled, false);
  $('p').prepend('&nbsp;&nbsp;&nbsp;&nbsp;');
  $('#ensavoirplus').click(function()
  {
    //$('#blabla').css({'display':'block'});
    alert('fonctionnalité indisponible pour le moment');
  });
});

function scrolled() {

  var windowHeight = document.body.clientHeight,
  currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

  //alert(currentScroll + " + " +  (header.offsetHeight) + " = ");
  if (currentScroll >=
    document.getElementById("descriptif").offsetTop - document.getElementById("bouttonsOnglets").clientHeight)
  {
    $('#bouttonsOnglets').css({'position': 'fixed', 'top': '0', 'width':'100%', 'background-color':'rgba(255, 255, 255, 1)'});
    //window.scrollTo(0, document.getElementById("descriptif").offsetTop);
    //$('.onglets').css({'color':'white'});
  } else {
                $('#bouttonsOnglets').css({'position': '', 'background-color':'white'});
                $('.onglets').css({'color':'green'});

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

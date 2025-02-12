//jQuery Fading Methods Example
//FadeIn(speed,callback), FadeOut(speed,callback), FadeToggle(speed,callback), FadeTo(speed,callback,opicity)
//speed => "slow","fast",3000 ->milliseconds
//Callback => this paramater is a function to be execute after fading completes.
//opicity => value at which the opicity level should be
//The jQuery fadeIn() method is used to fade in a hidden element.
//The jQuery fadeOut() method is used to fade Out a Visible element.
//The jQuery fadeToggle() method is used to toggle between fadeIn and fadeOut a element.
//The jQuery fadeTo() method is used to fade a element with given opicity.

$(document).ready(function(){
    $("#button1").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
    $("#button2").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
    $("#button3").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
    $("#button4").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
      });
  });

  //JQuery Sliding Method Example
  //slideDown(speed,callback), slideUp(speed,callback), slideToggle(speed,callback)
  //speed => "slow","fast",3000 ->milliseconds
  //Callback => this paramater is a function to be execute after sliding completes.
  //slideDown() method is used to slide down an element
  //slideUp() method is used to slide Up an element
  //slideToggle() method is used to toggle between slideDown and slideUp an element
  $(document).ready(function(){
    $("#flip1").click(function(){
      $("#panel").slideDown("slow");
    });
    $("#flip2").click(function(){
        $("#panel").slideUp();
    });
    $("#flip3").click(function(){
        $("#panel").slideToggle();
    }); 
  });

//jQuery Animations - The animate() Method
// Syntax :  $(selector).animate({params},speed,callback);
//The required params parameter defines the CSS properties to be animated.
//speed => are optional parameters "slow","fast",3000 ->milliseconds
//Callback => this paramater is a function to be execute after sliding completes.

$(document).ready(function(){
    $("#button_anim1").click(function(){
      $("#div_anim1").animate({left:'250px'});
    });
//animate with properties
    $("#button_anim2").click(function(){
        $("#div_anim2").animate({
            left: '250px',
            opacity:'0.5',
            height: '150px',
            width: '150px'
        });
    });
//animation using relative values
    $("#button_anim3").click(function(){
        $("#div_anim3").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
 //animation using Pre-defined Values   => "show","hide" or "toggle" 
  $("#button_anim4").click(function(){
    $("#div_anim4").animate({
      height:'toggle'
    });
  });
  //animation using Queue Functionality
  $("#button_anim5").click(function(){
    var div = $("#div_anim5");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
  $("#button_anim5_2").click(function(){
    var div = $("#div_anim5");  
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  });

  //jQuery stop() Method
  //The jQuery stop() method is used to stop an animation or effect before it is finished.
  //The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.
  //Syntax: $(selector).stop(stopAll,goToEnd);
  //---------------------for Event ------------------
  $(document).ready(function(){
    $("#flip_stop").click(function(){
      $("#panel_stop").slideDown(5000);
    });
    $("#stop_slide").click(function(){
      $("#panel_stop").stop();
    });
  });
  //--------------------for Animation-------
  $(document).ready(function(){
    $("#start").click(function(){
      $("#div_stop").animate({left: '100px'}, 5000);
      $("#div_stop").animate({fontSize: '3em'}, 5000);
    });
    
    $("#stop").click(function(){
      $("#div_stop").stop();
    });
  
    $("#stop2").click(function(){
      $("#div_stop").stop(true);
    });
  
    $("#stop3").click(function(){
      $("#div_stop").stop(true, true);
    }); 
  });

  //Jquery CAllback Function
  //The example below has a callback parameter that is a function that will be executed after the hide effect is completed:
  $(document).ready(function(){
  $("#btn_callback").click(function(){
    $("#hide_callback").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
  //The Example is of without callback function
  $("#btn_nocallback").click(function(){
    $("#hide_nocallback").hide(1000);
      alert("The paragraph is now hidden");
    });
  });

  //JQuery Chaining Technique
  $(document).ready(function(){
    $("#button_chain").click(function(){
      $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
  });
  });










//JQuery Get Content and Attributes
$(document).ready(function(){
    //text() and html() example to get value of the selector
    $("#btn1").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });

    //val() example to get the value of the selector
    $("#show_val").click(function(){
        alert("Value : " + $("#test_input").val());
    });

    //attr() example to get attribute values
    $("#btn_attr_get").click(function () {
        alert("Hyper link => "+ $("#link_get").attr("href"));
    
    });
  });

//Jquery Set Content and Attribute with call back
$(document).ready(function(){
    //Set text("") example
    $("#btn1_set").click(function(){
      $("#set_test1").text("Hello world!");
    });
    //Set html("") example
    $("#btn2_set").click(function(){
      $("#set_test2").html("<b>Hello world!</b>");
    });
    //Set val("") example
    $("#btn3_set").click(function(){
      $("#set_test3").val("Dolly Duck");
    });

    //with call back function first param is index of current element
    //second param is orignal old value
    $("#btn_oldText_set").click(function(){
    $("#test_oldText").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
      });
    });
  
    $("#btn_oldHTML_set").click(function(){
      $("#test_oldHtml").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
      });
    });

    //set attr value
    $("#btn_attrset").click(function(){
      $("#w3s").attr({
        "href" : "https://w3schools.com",
        "title" :"W3Schools Jquery Tutorial"
      });
    });

    //set arrt with callBack
    $("#btn_attrcallback").click(function(){
      $("#w3s_callback").attr("href",function(i,origVal){
        return origVal + "/jquery/" ;
      });
    });

  });

  // Jquery Add element
  $(document).ready(function(){
    //Append element
    $("#btn_append1").click(function(){
      $(".p_add1").append(" <b>Appended text</b>.");
    });
  
    $("#btn_append2").click(function(){
      $("#oi_add").append("<li>Appended item</li>");
    });

    //Prepend elements 
    $("#btn_prepend1").click(function(){
      $(".p_add1").prepend("<b>Prepended text</b>. ");
    });
    $("#btn_prepend2").click(function(){
      $("#oi_add").prepend("<li>Prepended item</li>");
    });
    //Add serveral new Elements with Appends
    $("#btn_append1").click(function(){
      var txt1 = "<p>Text with HTML. </p>";
      var txt2 = $("<p></p>").text("Text with JQuery");
      var txt3 = document.createElement("p");
      txt3.innerHTML = "Text with DOM";
      $(("body")).append(txt1,txt2,txt3);
    });
    //Add several new Elements with Prepends 
    $("#btn_prepend3").click(function(){
      var txt1 = "<p>Text with HTML. </p>";
      var txt2 = $("<p></p>").text("Text with JQuery");
      var txt3 = document.createElement("p");
      txt3.innerHTML = "Text with DOM";
      $(("body")).prepend(txt1,txt2,txt3);
    });

    //After and before
    $("#btn_before").click(function(){
      $("#p_after").before("<b>Before</b>");
    });
  
    $("#btn_after").click(function(){
      $("#p_after").after("<i>After</i>");
    });
    //Add serveral new Elements After and before 
    $("#btn_after2").click(function(){
      var txt1 = "<p>Text created with HTML. </p>";
      var txt2 = $("<p></p>").text("Text created with JQuery");
      var txt3 = document.createElement("p");
      txt3.innerHTML = "Text created with DOM";
      //$("#hr_after").before(txt1,txt2,txt3).after(txt1,txt2,txt3);
      // Use $.when() to handle sequencing if needed
      $.when(
      $("#hr_after").before(txt1, txt2, txt3)).done(function() {
      // Once before() is done, perform the after() action
      $("#hr_after").after(txt1, txt2, txt3);
      });
    });
  });

  //JQuery Remove Elements
  $(document).ready(function(){
    //Remove the complete element
    $("#btn_remove").click(function(){
      $("#div_remove").remove();
    });
    //Empty method for removing it's child only
    $("#btn_empty").click(function(){
      $("#div_empty").empty();
    });
    //Remove element with class name 
    $("#btn_class").click(function(){
      $("p").remove(".test");
    });
    //Remove element with multiple class name 
    $("#btn_class2").click(function(){
      $("p").remove(".test, .demo");
    });
  });

  //Jquery GET and SET CSS classes
  //Jquery Manipulating Css
  //addClass()- Adds one or more classes to the selected elements
  //removeClass() - removes one or more classes to the selected elements
  //toggleClass() - Toggles between adding/removing one or more classes to the selected elements
  //css() - Sets or return the style attribute
  //Return a CSS Property - Syntax: css("propertyname");
  //Set a CSS Property - Syntax :   css("propertyname","value");
  
  //AddClasses
  $(document).ready(function(){
    $("#btnAddCss").click(function(){
      $("#head1, #head2, #par1, #par2").addClass("blue");
      $("#divcss1").addClass("important");
    });
    //RemoveClass
    $("#btnRemCss").click(function(){
      $("#head1, #head2, #par1, #par2").removeClass("blue");
      $("#divcss1").removeClass("important");
    });
    //ToggleClass
    $("#btnTogCss").click(function(){
      $("#head1, #head2, #par1, #par2").toggleClass("blue");
      $("#divcss1").toggleClass("important");
    });
    //Return a CSS Property
    $("#btnGetCss").click(function(){
      alert("Background color of paragraph 1 is : "+
        $("#par3").css("background-color")
      );
    });
    //Set a CSS Property
    $("#btnSetCss").click(function(){
      $("#par4").css("background-color","yellow");
    });
    //Set a Multiple CSS Property
    $("#btnSetMulCss").click(function(){
      $("#par4").css({"background-color":"yellow","font-size":"200%"});
    });
  });

  //Jquery Dimension Methods
  //width()       : sets or returns the width of an element (excludes padding, border and margin)
  //height()      : sets or returns the height of an element (excludes padding, border and margin).
  //innerWidth()  : returns the width of an element (includes padding).
  //innerHeight() : returns the height of an element (includes padding).
  //outerWidth()  : returns the width of an element (includes padding and border).
  //outerHeight() : returns the height of an element (includes padding and border).

  $(document).ready(function(){
    // Witdh()-Height()
    $("#btn_dim").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div_dim").width() + "</br>";
      txt += "Height of div: " + $("#div_dim").height();
      $("#div_dim").html(txt);
    });

    //InnerWidth() and InnerHeight()
    $("#btn_innerdim").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div_dim2").width() + "</br>";
      txt += "Height of div: " + $("#div_dim2").height()+"</br>";
      txt +="Inner width of div: " + $("#div_dim2").innerWidth()+ "</br>";
      txt +="Inner height of div: "+ $("#div_dim2").innerHeight();
      $("#div_dim2").html(txt);
    });
    //OuterWidth() and OuterHeight()
    $("#btn_outerdim").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div_dim3").width() + "</br>";
      txt += "Height of div: " + $("#div_dim3").height()+"</br>";
      txt +="Outer width of div: " + $("#div_dim3").outerWidth()+ "</br>";
      txt +="Outer height of div: "+ $("#div_dim3").outerHeight();
      $("#div_dim3").html(txt);
    });
    //OutterWidth(True) and OutterHeight(True)
    //InnerWidth() and InnerHeight()
    $("#btn_outerdim2").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div_dim4").width() + "</br>";
      txt += "Height of div: " + $("#div_dim4").height()+"</br>";
      txt +="Outer width of div (margin included): " + $("#div_dim4").outerWidth(true)+ "</br>";
      txt +="Outer height of div (margin included): "+ $("#div_dim4").outerHeight(true);
      $("#div_dim4").html(txt);
    });
    //Check demision of window/document
    $("#btn_dim2").click(function(){
      var txt = "";
      txt += "Document width/height: " + $(document).width();
      txt += "x" + $(document).height() + "\n";
      txt += "Window width/height: " + $(window).width();
      txt += "x" + $(window).height();
      alert(txt);
    });
    //Set the dimension
    $("#btn_setdim").click(function(){
      $("#div_setdim").width(500).height(500);
    });
  });








  
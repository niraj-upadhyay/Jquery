// $(document).ready(function ()) => This line says first fall load the document and then load the javascript
$(document).ready(function () {
  // $ means jQuery
  // console.log(jQuery)
  console.log("Hello jquery");
  // Syntax of jQuery
  // $('selector').action()
  // $('p').click(); // click on the p

  // clicks on all the p elements.

  // $('p').click(); //click on p

//   $("p").click(function () {
//     console.log("you clicked on p", this);
//     //  $('#id').hide();
//     //  $('.class').hide();
//   }); //do this when we click on p

  //    $('p').dblclick(function () {
  //         console.log('you double clicked on p', this);
  //     });

  //     $('p').mouseenter(function () {
  //         console.log('you mouse enter on p', this);
  //     });

//   $("p").hover(
//     function () {
//       console.log("you hoverd on: ", this);
//     },

//     function () {
//       console.log("mouse is outside from p");
//     }
//   );

  // there are three main types of selectors in jQuery
  // 1. element selector
  // 2. id selector
  // 3. class selector

  // 1. Element selector -  This is an example of element selector which clicks on all p
  // $('p').click();

  // 2. Id selector - this is an example of id selector
  // $('#second').click();

  // 3. Class selector - this is an example of id selector
  // $('.odd').click();

  // other selectors
  // $('*').click() // clicks on all the elements
  // $('p.odd').click() // clicks on all the elements
  // $('p:first').click() // clicks on all the elements

  // Events in jQuery

  // Mouse events = click, dblclick, mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  // form events = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload

  // demoing the on method

  // $("p").on({
  //   click:
  //   function() {
  //     console.log("Thanks for clicking", this);
  //   },
  //   mouseleave: function(){
  //       console.log("mouseleave")
  //   }
  // });




  // $('#wiki').hide(1000, function(){
  //     console.log("hidden");
  // });

  // $('#wiki').show(1000, function(){
  //     console.log("showing");

  // $('#but').click(function(){
  //   $('#wiki').toggle(1000)
  // })

  $('#but').click(function(){
    $('#wiki').fadeOut(5000)
  })

    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // Slide methods - speed and callback parameters are optional
    
    // $('#wiki').slideUp(1000)
    // $('#wiki').slideDown(1000)
    // $('#wiki').slideDown(1000)
    // $('#wiki').slideUp(1000,function(){
    //   console.log("done")
    // })

    // Animate function in jQuery

    // $('#wiki').animate({

    //   opacity:0.3,
    //   height:'150px',
    //   width:'350px'

    // },fast)

    // $('#wiki').animate({ opacity: 0.3 }, 4000);
    // $('#wiki').animate({ opacity: 0.9 }, 4000);
    // $('#wiki').animate({ width: '350px' }, 6000);

    // $('#ta').val('setting it to niraj');
    // $('#ta').html('setting it to niraj');
    // $('#ta').html('setting it to niraj1');
    // $('#inp').html('setting it to niraj2');
    // $('#inp').val('setting it to niraj4');
    // $('#inp').empty()
    // $('#wiki').empty()
    // $('#wiki').text('you are good')
    // $('#wiki').remove()

    //     $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')
    // $('#wiki').css('background-color', 'red')
    // $('#wiki').css('background-color')
    

 


});


  
  




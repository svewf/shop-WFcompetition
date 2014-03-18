
$(document).ready(function(){
$(".classysocial").ClassySocial();
});
$(window).load(function() {
$("#flexiselDemo3").flexisel({
        visibleItems: 5,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });
});
simpleCart({
  
    checkout: {
      type: "PayPal",
      email: "you@yours.com"
    }
  });


simpleCart({
    cartColumns: [
		{ attr: "name" , label: "Name" , view:"name"} ,
        { view: "decrement" , label: false , text: "-" } ,
        { view: "increment" , label: false , text: "+" } ,
        { view: "remove" , text: "Remove" , label: false }
    ]
});




simpleCart({
  
    checkout: {
      type: "PayPal",
      email: "you@yours.com"
    }
  });


simpleCart({
    cartColumns: [
		{ attr: "name" , label: "Name" } ,
        { attr: "price" , label: "Price", view: 'currency' } ,
        { view: "decrement" , label: false , text: "-" } ,
        { view: "increment" , label: false , text: "+" } ,
		{ attr: "quantity" , label: "Qty" } ,
		{ attr: "total" , label: "SubTotal", view: 'currency' } ,
        { view: "remove" , text: "Remove" , label: false }
    ]
});



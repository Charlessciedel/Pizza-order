 
 $('.carousel-3d-autoplay-off').mdbCarousel3d({
    autoplay: false
  });
  $('.card').hover(function () {
    $(this).children('.card-1').fadeToggle(1000, 'linear');
  });
 function Pizza (size, stuffing,topping){
   this.size= size;
   this.stuffing = stuffing;
   this.topping = topping;
 };
let sizes=[ "Large", "Medium", "Small"];
let stuffings= [ "Crispy", "Crusty", "Gluten-Free"];
let toppings= [ "Onions", "Bacons", "Black-Olive", "Pepperoni", "Sausage", "Mushrooms"];
si
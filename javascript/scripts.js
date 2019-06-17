 
 $('.carousel-3d-autoplay-off').mdbCarousel3d({
    autoplay: false
  });
  $('.card').hover(function () {
    $(this).children('.card-1').fadeToggle(1000, 'linear');
  });
 
$("#large").click(function disable() {
  document.getElementById("medium", "small").disabled = true;

});
$("#medium").click(function disable() {
  document.getElementById("large", "small").disabled = true;

});
$("#small").click(function disable() {
  document.getElementById("medium", "large").disabled = true;

});
$("#crispy").click(function disable() {
  document.getElementById("crusty", "gluten-free").disabled = true;

});
$("#crusty").click(function disable() {
  document.getElementById("crispy", "gluten-free").disabled = true;

});
$("#gluten-free").click(function disable() {
  document.getElementById("crispy", "crusty").disabled = true;

});
function Pizza (size, stuffing,topping){
  this.size= size;
  this.stuffing = stuffing;
  this.topping = topping;
};
var large= getElementById("#large");
var medium= getElementById("#medium");
var small= getElementById("#small")
let sizes=[ "Large", "Medium", "Small"];
let stuffings= [ "Crispy", "Crusty", "Gluten-Free"];
let toppings= [ "Onions", "Bacons", "Black-Olive", "Pepperoni", "Sausage", "Mushrooms"]

for(i=0; i<array.length; i++){
  document.getElementById(array[i]).value = array[i];
  document.getElementById(array[i]).innerHTML = array[i];
}
if ( sizes.indexOf( 0 ) === 0 ) {
  

  
}
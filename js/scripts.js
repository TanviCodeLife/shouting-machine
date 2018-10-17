$(document).ready(function() {
$("#letterForm").submit(function(event) {
  var nameInput = $("input#inputName").val();
  console.log(nameInput);
  var foodInput = $("input#inputFood").val();

  $(".capsName").text(nameInput).toUpperCase();
  $(".capsFood").text(foodInput);

  $("#shout").show();

  event.preventDefault();
  });

});

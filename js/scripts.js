$(document).ready(function() {
$("#letterForm").submit(function(event) {
  var nameInput = $("input#inputName").val();
  console.log(nameInput);
  var foodInput = $("input#inputFood").val();


  var upperName = nameInput.toUpperCase();
  $(".capsName").text(upperName);
  var upperFood= foodInput.toUpperCase();
  $(".capsFood").text(upperFood);

  $("#shout").show();

  event.preventDefault();
  });

});

// Initially diable the button

$("button").prop("disabled", true);

// When there is atleast one character, enable the tweet button. 

$("textarea").on("input", function() {
  // If there's at least one character...
  if($(this).val().length > 0) {
    $("button").prop("disabled", false);
  }  else {
    $("button").prop("disabled", true);
  }  
});
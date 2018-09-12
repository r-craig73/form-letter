$(document).ready(function() {
  $("#letterForm").submit(function(event) {
    var dateInput = $("input#date").val();
    var senderInput = $("input#sender").val();
    var letterBodyInput= $("textarea#letterBody").val();
    var yourNameInput = $("input#yourName").val();

    $(".date").text(dateInput);
    $(".sender").text(senderInput);
    $(".letterBody").text(letterBodyInput);
    $(".yourName").text(yourNameInput);

    $("#returnLetter").show();

    event.preventDefault();
  });
});

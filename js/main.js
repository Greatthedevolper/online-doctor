$(document).ready(function () {
  $(".tab-button").click(function () {
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
  });
});


$(document).ready(function () {
  var form = $("#doctor-profile-form");
  var progressBar = $(".progress-bar");
  var totalSteps = $(".step").length;

  form.validate({
    errorClass: "text-danger",
    errorElement: "span",
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
      message: "required",
    },
    messages: {
      name: "Please enter your name",
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email",
      },
      message: "Please enter a message",
    },
  });

  $(".next").click(function () {
    var step = $(this).data("step");
    if (form.valid()) {
      $(".doctor-profile-step").hide();
      $("div[data-step='" + step + "']").show();
      updateProgressBar(step);
    }
  });

  $(".prev").click(function () {
    var step = $(this).data("step");
    $(".doctor-profile-step").hide();
    $("div[data-step='" + step + "']").show();
    updateProgressBar(step);
  });

//   function updateProgressBar(step) {
//     var progress = ((step - 1) / (totalSteps - 1)) * 100;
//     progressBar.css("width", progress + "%");
//     progressBar.attr("aria-valuenow", progress);
//     $(".step-number").text(step); // Update the step number
//   }
function updateProgressBar(step) {
  var progress = (step / totalSteps) * 100;
  progressBar.css("width", progress + "%");
  progressBar.attr("aria-valuenow", progress);
  $(".step-number").text(step); // Update the step number
}
});

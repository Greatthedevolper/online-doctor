$(document).ready(function () {
  $(".tab-button").click(function () {
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  var form = $("#doctor-profile-form");
  var progressBar = $(".progress-bar");
  var totalSteps = $(".doctor-profile-step").length;
  var stepCircles = $(".step-circle");

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

  // function updateProgressBar(step) {
  //   var progress = (step / totalSteps) * 100;
  //   $(".doctor-profile-page").css("width", progress + "%");
  //   progressBar.attr("aria-valuenow", progress);
  //   $(".step-number").text(step); // Update the step number
  //   $(".step-circle[]");
  // }

  function updateProgressBar(step) {
    stepCircles.filter("[data-circle='" + step + "']").addClass("active");
    var progress = ((step - 1) / 2) * 100;
    $(".progress-bar").css("width", progress + "%");
  }
});


// Right side bar js
$(document).ready(function () {
  var currentStep = 1;
  var totalSteps = $(".prescription-step").length;

  showStep(currentStep);

  $(".next-step").click(function () {
    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
    }
  });

  $(".prev-step").click(function () {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  $("#prescription-form").submit(function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });

  // Function to show the current step and update the indicator
  function showStep(step) {
    $(".prescription-step").hide();
    $(".indicator-step").removeClass("active");
    $(".prescription-step:nth-child(" + step + ")").show();
    $(".indicator-step:nth-child(" + step + ")").addClass("active");
  }
});

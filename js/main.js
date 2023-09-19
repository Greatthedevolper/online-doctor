$(document).ready(function () {
  $(".tab-button").click(function () {
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
  });
  $(".compile-btn").click(function () {
    $(".compile-wrapper").toggleClass("active");
    $(".inner-div").toggleClass("active");
    
  });

  $(".close-right-sidebar").click(function () {
    showLeftSidebar();
  });
  function showLeftSidebar() {
    $(".right-sidebar").removeClass("active");
    $(".left-sidebar").removeClass("active");
  }
  function hidwLeftSidebar() {
    $(".right-sidebar").addClass("active");
    $(".left-sidebar").addClass("active");
  }
});
// doctor portfolio step form
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

  function updateProgressBar(step) {
    stepCircles.filter("[data-circle='" + step + "']").addClass("active");
    var progress = ((step - 1) / 2) * 100;
    progressBar.css("width", progress + "%");
  }
});

// step form form Right side step form bar js
$(document).ready(function () {
  var currentStep = 1;
  var totalSteps = $(".prescription-step").length;

  showStep(currentStep);

  $(".next-step").click(function () {
    nextStep();
  });

  $(".prev-step").click(function () {
    preStep();
  });

  $("#prescription-form").submit(function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });

  function preStep() {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  }

  function nextStep() {
    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
    }
  }

  function showStep(step) {
    $(".prescription-step").hide();
    $(".indicator-step").removeClass("active");
    $(".prescription-step:nth-child(" + step + ")").show();
    $(".indicator-step:nth-child(" + step + ")").addClass("active");
  }
});

$(document).ready(function () {
  var bookStep = 1;
  var totalBookSteps = $(".book-appoinment-step").length;
  var appoinmentProgressBar = $(".appointment-wrapper .progress-bar");

  showBookStep(bookStep);

  $(".indicator-book-step").click(function () {
    nextBookStep();
  });
  $(".next-book-step").click(function () {
    nextBookStep();
  });

  // $(".indicator-book-step").click(function () {
  //   preBookStep();
  // });

  $("#prescription-form").submit(function (e) {
    e.preventDefault();
  });

  function preBookStep() {
    if (bookStep > 1) {
      bookStep--;
      showBookStep(bookStep);
    }
  }

  function nextBookStep() {
    if (bookStep < totalBookSteps) {
      bookStep++;
      showBookStep(bookStep);
      if (bookStep == 3) {
        hidwLeftSidebar();
      } else {
        showLeftSidebar();
        
      }
    }
  }
  function showLeftSidebar() {
    $(".right-sidebar").removeClass("active");
    $(".left-sidebar").removeClass("active");
  }
  function hidwLeftSidebar() {
    $(".right-sidebar").addClass("active");
    $(".left-sidebar").addClass("active");
  }
  function showBookStep(bookStep) {
    $(".book-appoinment-step").hide();
    // $(".indicator-book-step").removeClass("active");
    $(".book-appoinment-step:nth-child(" + bookStep + ")").show();
    $(".indicator-book-step:nth-child(" + bookStep + ")").addClass("active");

    var bookProgress = ((bookStep - 1) / 3) * 100;
    appoinmentProgressBar.css("width", bookProgress + "%");
  }
});

$(document).ready(function () {
  // Define a function to handle the chat message rendering
  function renderChatMessage() {
    let msg = $("#chat-input").val();
    let renderMsg = document.createElement("li");
    renderMsg.className = "chat-item doctor";
    renderMsg.innerHTML = `<div class="img-wrapper">
                    <img src="../images/doctor-profile.png" alt="img" />
                  </div>
                  <div class="content-wrapper">
                    <p>${msg}</p>
                    <small>11:41AM</small>
                  </div>
                  <div class="dropdown">
                    <button
                      class="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <img
                            src="../images/icons/reply-icon.svg"
                            alt=""
                          />
                          <span>Reply</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img
                            src="../images/icons/edit-2-icon.svg"
                            alt=""
                          />
                          <span>Edit Message</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img
                            src="../images/icons/trash-icon.svg"
                            alt=""
                          />
                          <span>Delete for everyone</span>
                        </a>
                      </li>
                    </ul>
                  </div>`;
    $(".chat-item-wrapper").append(renderMsg);

    $("#chat-input").val("");

     $(".chat-body-wrapper").scrollTop($(".chat-body-wrapper")[0].scrollHeight);
  }

  $(document).ready(function () {
    $(".input-wrapper").submit(function (event) {
      event.preventDefault();
      renderChatMessage();
    });

    // Trigger the same function on button click
    $("#chat-input-btn").click(function () {
      renderChatMessage();
    });
  });
});

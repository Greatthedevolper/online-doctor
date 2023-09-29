$(document).ready(function () {
  $(".toggle").click(function () {
    $(this).toggleClass("active");
    $(".main-header-menu").toggleClass("active");
    $("body").toggleClass("active");
  });
  $(".main-header-menu a").click(function () {
    $(".toggle").removeClass("active");
    $(".main-header-menu").removeClass("active");
    $("body").removeClass("active");
  });
});
$(document).ready(function () {
  $(".tab-button").click(function () {
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
  });
  $(".compile-btn").click(function () {
    $(".compile-wrapper").addClass("active");
    $(".inner-div").addClass("active");
    $(".done-btn").addClass("active");
  });
  $(".done-btn").click(function () {
    $(".compile-wrapper").removeClass("active");
    $(".inner-div").removeClass("active");
    $(this).removeClass("active");
    // $(".compile-btn").removeClass("active");
  });

  $(".close-right-sidebar").click(function () {
    var windowWidth = $(window).width();
    if (windowWidth > 767) {
      showLeftSidebar();
    }
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
$(document).ready(function () {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
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
    $(".compile-wrapper").removeClass("active");
    $(".inner-div").removeClass("active");
    $(".done-btn").removeClass("active");
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

// the below code is for chat functionality wjich append and done scroll
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

// the below code written by wasim akram  for search tag + functionality
$(document).ready(function () {
  // Reference to the search input field
  var $searchInput = $(".compile-search-input");

  // Reference to the list of items
  var $listItems = $(".content-wrapper .item");

  // Reference to the "Add New" button
  var $addNewButton = $(".no-result-wrapper");

  // Initially, hide the "Add New" button
  $addNewButton.hide();

  // Function to filter items based on search term
  function filterItems(searchTerm) {
    var resultsFound = false;

    $listItems.each(function () {
      var $span = $(this).find("span");
      var itemText = $span.text().toLowerCase();

      if (itemText.includes(searchTerm)) {
        $(this).show();
        resultsFound = true;
      } else {
        $(this).hide();
      }
    });

    // Show/hide the "Add New" button based on search results
    if (resultsFound) {
      $addNewButton.hide();
    } else {
      $addNewButton.show();
    }
  }

  // Trigger the input event on page load
  $searchInput.trigger("input");

  // Attach input event listener
  $searchInput.on("input", function () {
    var searchTerm = $(this).val().toLowerCase();
    filterItems(searchTerm);
  });

  $(".content-wrapper .item").click(function () {
    var selected_text = $(this).text();
    $(".compile-search-input").val(selected_text);
    $(".compile-search-input").trigger("input");
  });
});

// products carousel js start

if (jQuery(".products-wrapper").length) {
  jQuery(".products-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dotsEach: true,
    autoplay: false,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1700: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });
}
// products carousel js end

// team-card-wrapper carousel js start

if (jQuery(".team-card-wrapper").length) {
  jQuery(".team-card-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dotsEach: true,
    autoplay: false,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1700: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });
}
// team-card-wrapper carousel js end

// appoinment-card-wrapper carousel js start

if (jQuery(".appoinment-card-wrapper").length) {
  jQuery(".appoinment-card-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dotsEach: true,
    autoplay: false,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1700: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });
}
// appoinment-card-wrapper carousel js end

// blog-card-wrapper carousel js start

if (jQuery(".blog-card-wrapper").length) {
  jQuery(".blog-card-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dotsEach: true,
    autoplay: false,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1700: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });
}
// blog-card-wrapper carousel js end

// reviews-card-wrapper carousel js start

if (jQuery(".reviews-card-wrapper").length) {
  jQuery(".reviews-card-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dotsEach: true,
    autoplay: false,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1700: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });
}
// reviews-card-wrapper carousel js end

// consult-card-main-wrapper carousel js start

if (jQuery(".consult-card-main-wrapper").length) {
  jQuery(".consult-card-main-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dotsEach: true,
    autoplay: false,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1700: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });
}
// consult-card-main-wrapper carousel js end

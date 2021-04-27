// Scroll to top script
document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector(".up");

function handleScroll() {
  var scrolled = window.pageYOffset;
  if (scrolled > 400) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// End of script

// Sticky Top Nav
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      document.getElementById("header").classList.add("sticky-top");
    } else {
      document.getElementById("header").classList.remove("sticky-top");
    }
  });
});

// Trigger function on scroll to element
var element = document.getElementById("counting");
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener("scroll", count);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// trigger counting
function count() {
  // is element in view?
  if (inView()) {
    // element is in view, add class to element
    const counters = document.querySelectorAll(".counter");
    const speed = 10; // The lower the slower

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = Math.floor(target / speed);

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          counter.innerText = count + inc;
          // Call function every ms
          setTimeout(updateCount, 90);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }
}

// Set active class on menu links
var menuWrap = document.getElementById("menu-wrap");

// Get all the menu links with class = nav-item, inside the container
var link = menuWrap.getElementsByClassName("nav-item");

// Loop through the links and add the active class to the current/clicked button
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// For project gallery filter
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show-i");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show-i");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("project-filter");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activer");
    current[0].className = current[0].className.replace(" activer", "");
    this.className += " activer";
  });
}

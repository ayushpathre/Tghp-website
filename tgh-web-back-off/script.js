// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// // Scroll Animations
// window.addEventListener('scroll', function() {
//   let elements = document.querySelectorAll('.fade-in, .slide-up');
//   elements.forEach(el => {
//       let position = el.getBoundingClientRect().top;
//       let screenHeight = window.innerHeight;

//       if (position < screenHeight - 150) {
//           el.classList.add('visible');
//       }
//   });
// });
// let lastScrollTop = 0;
// window.addEventListener('scroll', function() {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Check if user scrolled past a certain point (50px in this case)
//     if (scrollTop > 50) {
//         document.body.classList.add('scrolled');
//         document.body.classList.remove('at-top');
//     } else {
//         document.body.classList.remove('scrolled');
//         document.body.classList.add('at-top');
//     }
// });

//screen loader
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})




// Function to show service details
function showServiceDetails(serviceId) {
    // Hide all service detail items
    const allDetails = document.querySelectorAll('.service-item');
    allDetails.forEach(detail => {
        detail.style.display = 'none'; // Hide each service item
    });
    
    // Show the selected service detail
    const selectedDetail = document.getElementById(serviceId);
    if (selectedDetail) {
        selectedDetail.style.display = 'block'; // Show the selected service item
    }
}

// Add event listeners to service list items
const serviceListItems = document.querySelectorAll('.services-list ul li a');
serviceListItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const serviceId = item.getAttribute('href').replace('#', ''); // Get service ID
        showServiceDetails(serviceId); // Show details for the selected service
    });
});

// Optionally show the first service by default
document.addEventListener('DOMContentLoaded', () => {
    showServiceDetails('service1'); // Show details for the first service on page load
});


// Show the first service detail by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showServiceDetails('service1');
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const state = document.getElementById("state").value.trim();
    
    if (!name || !phone || !email || !state) {
        alert("Please fill out all fields.");
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        // You can add more complex validation logic here if needed
    }
});

// // Footer visibility on scroll
// window.addEventListener("scroll", function() {
//   var menu = document.getElementById("menuList-footer");
//   var footer = document.querySelector("footer");

//   if (menu && footer) { // Ensure elements are found
//     var footerRect = footer.getBoundingClientRect();

//     // Check if the footer is visible in the viewport
//     if (footerRect.top < window.innerHeight && footerRect.bottom >= 0) {
//       menu.classList.add("visible"); // Show menu
//     } else {
//       menu.classList.remove("visible"); // Hide menu
//     }
//   }
// });
// JavaScript to toggle the footer visibility based on scroll direction
// JavaScript to toggle the footer visibility based on scroll direction



//scroll up % Dowm footer
let lastScrollY = window.scrollY;
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const scrolledToBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  const scrollingDown = window.scrollY > lastScrollY;

  if (scrolledToBottom || scrollingDown) {
    footer.classList.add("visible"); // Show footer when scrolling to bottom or scrolling down
  } else {
    footer.classList.remove("visible"); // Hide footer when scrolling up
  }

  lastScrollY = window.scrollY;
});




  function toggleMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

const navigation = document.getElementById('navigation');
const menuItems = navigation.getElementsByTagName('a');

// Function to change the menu background and font color when scrolled
function changeMenuOnScroll() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    navigation.style.backgroundColor = '#555'; // Change background color on scroll
    for (const item of menuItems) {
      item.style.color = '#fff'; // Change font color on scroll
    }
  } else {
    navigation.style.backgroundColor = '#333'; // Restore initial background color
    for (const item of menuItems) {
      item.style.color = '#fff'; // Restore initial font color
    }
  }
}

// Attach event listener for scrolling
window.addEventListener('scroll', changeMenuOnScroll);

// Function to change the menu item font color on hover
function changeFontColorOnHover() {
  for (const item of menuItems) {
    item.addEventListener('mouseenter', function() {
      this.style.color = '#ff6600'; // Change font color on hover
    });

    item.addEventListener('mouseleave', function() {
      this.style.color = '#fff'; // Restore initial font color on hover out
    });
  }
}

// Attach event listener for hover
changeFontColorOnHover();

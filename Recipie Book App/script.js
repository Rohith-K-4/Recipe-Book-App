// Add a smooth scrolling effect to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Toggle a "responsive" class to the navigation bar for small screens
function toggleNavbar() {
    const nav = document.querySelector('nav');
    if (nav.className === '') {
        nav.className = 'responsive';
    } else {
        nav.className = '';
    }
}
// Get references to the button and the recipe menu
const menuButton = document.getElementById('menuButton');
const recipeMenu = document.getElementById('recipeMenu');

// Add a click event listener to the menu button
menuButton.addEventListener('click', () => {
    // Toggle the visibility of the recipe menu
    if (recipeMenu.style.display === 'none' || recipeMenu.style.display === '') {
        recipeMenu.style.display = 'block';
    } else {
        recipeMenu.style.display = 'none';
    }
});


// Get all elements with the class "toggle-section"
const toggleSections = document.querySelectorAll('.toggle-section');

// Add click event listeners to toggle the visibility of ingredients and instructions
toggleSections.forEach((toggleSection) => {
    toggleSection.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Find the corresponding ingredients or instructions div
        const section = this.parentElement.nextElementSibling;

        // Toggle the "hidden" class to show/hide the section
        section.classList.toggle('hidden');
    });
});

// Function to search for recipes
function searchRecipes() {
    const searchTerm = document.getElementById('recipeSearch').value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        const recipeName = recipe.querySelector('h2').textContent.toLowerCase();
        if (recipeName.includes(searchTerm)) {
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none';
        }
    });
}
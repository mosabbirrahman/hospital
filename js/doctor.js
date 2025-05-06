  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Simple filter functionality (would be enhanced with JS framework in production)
document.getElementById('specialty').addEventListener('change', function() {
    const specialty = this.value;
    if(specialty) {
        alert(`Filtering by ${this.options[this.selectedIndex].text} - this would filter doctors in a real implementation`);
    }
});

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    if(searchTerm.length > 2) {
        alert(`Searching for "${searchTerm}" - this would search doctors in a real implementation`);
    }
});
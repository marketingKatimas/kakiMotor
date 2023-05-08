// Get the language toggle switch element
const languageToggle = document.getElementById('language-toggle');

// Add event listener to the language toggle switch
languageToggle.addEventListener('change', function() {
  // Store the selected language in local storage
  if (this.checked) {
    localStorage.setItem('language', 'BM'); // Bahasa Malaysia
  } else {
    localStorage.setItem('language', 'EN'); // English
  }
  
  // Load the appropriate language version
  if (localStorage.getItem('language') === 'BM') {
    window.location.href = 'index_BM.html'; // Bahasa Malaysia version
  } else {
    window.location.href = 'index.html'; // English version
  }
});

// Retrieve the selected language from local storage
const storedLanguage = localStorage.getItem('language');

if (storedLanguage === 'BM') {
  languageToggle.checked = true;
} else {
  languageToggle.checked = false;
}
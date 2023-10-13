const text = {
    en: {
     
      discoverTitle: "Discover Our Products",
      
    },
  
    el: {
      
      discoverTitle: "Ανακαλύψτε τα Προϊόντα μας",
    
    },
  };

  
/* PRODUCTS PAGE */

 function updateContent(language) {
  const discoverProductsElement = document.getElementById("discoverProducts");

  const selectedLanguage = text[language];

  discoverProductsElement.innerHTML = `

  <div class="section-heading" id="discoverProducts">
    
  <h2>${selectedLanguage.discoverTitle}</h2>
</div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleLanguageButton = document.getElementById("toggleLanguageShop");

  let currentLanguage = "en"; // Default to English

  toggleLanguageButton.addEventListener("click", function () {
    // Toggle between English and Greek
    currentLanguage = currentLanguage === "en" ? "el" : "en";

    // Call the updateContent function with the selected language
    updateContent(currentLanguage);
  });

  // Initialize content with the default language
  updateContent(currentLanguage);
});

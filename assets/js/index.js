const text = {
    en: {
      
      bestSellersTitle: "Explore Some Of The Best Sellers",
      productsTitle: "Products Currently In The Market",
    },
  
    el: {
     
      bestSellersTitle: "Εξερευνήστε Ορισμένα από τους Καλύτερους Πωλητές",
      productsTitle: "Προϊόντα Που Υπάρχουν Αυτή τη Στιγμή στην Αγορά",
    },
  };
/* index page */
function updateContent(language) {
  const bestSellerElement = document.getElementById("best-seller");  
  const inMarketElement = document.getElementById("in-market");

  const selectedLanguage = text[language];


  bestSellerElement.innerHTML = `

    <div class="section-heading" id="best-seller">
                  
    <h2>${selectedLanguage.bestSellersTitle}</h2>
  </div>
    `;

  inMarketElement.innerHTML = `
    <div class="section-heading" id="in-market">
                  
    <h2>${selectedLanguage.productsTitle}</h2>
  </div>

    `;
} 


document.addEventListener("DOMContentLoaded", function () {
  const toggleLanguageButton = document.getElementById("toggleLanguageIndex");

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

const text = {
    en: {
      
      bestSellersTitle: "Explore Some Of The Best Sellers",
      productsTitle: "Products Currently In The Market",
      home: 'Home',
      products: 'Products',
      company: 'Company',
      contact: 'Contact Us',
    },
  
    el: {
     
      bestSellersTitle: "Εξερευνήστε μερικά από τα Best Seller",
      productsTitle: "Προϊόντα Που Υπάρχουν Αυτή τη Στιγμή στην Αγορά",
      home: 'Αρχική',
      products: 'Προϊόντα',
      company: 'Εταιρεία',
      contact: 'Επικοινωνία',
    },
  };
/* index page */
function updateContent(language) {
  const bestSellerElement = document.getElementById("best-seller");  
  const inMarketElement = document.getElementById("in-market");
  const homeLink = document.getElementById('homeLink');
  const productsLink = document.getElementById('productsLink');
  const companyLink = document.getElementById('companyLink');
  const contactLink = document.getElementById('contactLink');

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
    homeLink.textContent = selectedLanguage.home;
   productsLink.textContent = selectedLanguage.products;
   companyLink.textContent = selectedLanguage.company;
   contactLink.textContent = selectedLanguage.contact;
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

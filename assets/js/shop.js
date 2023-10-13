const text = {
    en: {
     
      discoverTitle: "Discover Our Products",
      home: 'Home',
      products: 'Products',
      company: 'Company',
      contact: 'Contact Us',
      
    },
  
    el: {
      
      discoverTitle: "Ανακαλύψτε τα Προϊόντα μας",
      home: 'Αρχική',
      products: 'Προϊόντα',
      company: 'Εταιρεία',
      contact: 'Επικοινωνία',
    
    },
  };

  
/* PRODUCTS PAGE */

 function updateContent(language) {
  const discoverProductsElement = document.getElementById("discoverProducts");
  const homeLink = document.getElementById('homeLink');
  const productsLink = document.getElementById('productsLink');
  const companyLink = document.getElementById('companyLink');
  const contactLink = document.getElementById('contactLink');

  const selectedLanguage = text[language];

  discoverProductsElement.innerHTML = `

  <div class="section-heading" id="discoverProducts">
    
  <h2>${selectedLanguage.discoverTitle}</h2>
</div>
  `;

  homeLink.textContent = selectedLanguage.home;
   productsLink.textContent = selectedLanguage.products;
   companyLink.textContent = selectedLanguage.company;
   contactLink.textContent = selectedLanguage.contact;
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

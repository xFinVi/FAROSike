const text = {
    en: {
      contactTitle: 'Contact Us',
      contactFormTitle: 'Fill in The Contact Form',
      name: 'Name',
      surname: 'Last name',
      phoneNumber: 'Phone Number',
      yourFile: 'Your File',
      submit:'Send',
      home: 'Home',
      products: 'Products',
      company: 'Company',
      contact: 'Contact Us',
    },
  
    el: {
 
      contactTitle: "Επικοινωνήστε Μαζί μας",
      contactFormTitle: 'Συμπληρωσε την φορμα επικοινωνιας.',
      name: 'Ονομα',
      surname: 'Επιθετο',
      phoneNumber: 'Τηλέφωνο',
      yourFile: 'Αρχεία',
      submit: 'Αποστολη',
      home: 'Αρχική',
      products: 'Προϊόντα',
      company: 'Εταιρεία',
      contact: 'Επικοινωνία',
    },
  };

  
 function updateContent(language) {
  const contactElement = document.getElementById("contactus");
  const formContactElement = document.getElementById("form-contact");
  const nameLabelElement = document.getElementById("labelName");
  const lastNameLabelElement = document.getElementById("lastNameLabel");
  const yourFileElement = document.getElementById("yourFileLabel");
  const phoneLabelElement = document.getElementById("phoneLabel");
  const submitLabelElement = document.getElementById("form-submit");

  const homeLink = document.getElementById('homeLink');
  const productsLink = document.getElementById('productsLink');
  const companyLink = document.getElementById('companyLink');
  const contactLink = document.getElementById('contactLink');

  const selectedLanguage = text[language];

  // Update the text based on the selected language




  contactElement.innerHTML = `

  <div id="contactus"> <h2>${selectedLanguage.contactTitle}</h2></div>
  `;

  formContactElement.innerHTML = `
  
            <h2 id="form-contact">${selectedLanguage.contactFormTitle}</h2>
      
  `


  nameLabelElement.textContent = selectedLanguage.name;
  lastNameLabelElement.textContent = selectedLanguage.surname;
  phoneLabelElement.textContent = selectedLanguage.phoneNumber;
  yourFileElement.textContent = selectedLanguage.yourFile;
  submitLabelElement.textContent = selectedLanguage.submit;
  homeLink.textContent = selectedLanguage.home;
  productsLink.textContent = selectedLanguage.products;
  companyLink.textContent = selectedLanguage.company;
  contactLink.textContent = selectedLanguage.contact; 

      
  
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleLanguageButton = document.getElementById("toggleLanguageContact");

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


  
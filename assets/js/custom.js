(function ($) {
  "use strict";

  // Page loading animation
  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  });

  var width = $(window).width();
  $(window).resize(function () {
    if (width > 992 && $(window).width() < 992) {
      location.reload();
    } else if (width < 992 && $(window).width() > 992) {
      location.reload();
    }
  });

  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  $(".owl-features").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1800: {
        items: 4,
      },
    },
  });

  $(".owl-collection").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-banner").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          700
        );
        return false;
      }
    }
  });

  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".scroll-to-section a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 79,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  // Page loading animation
  $(window).on("load", function () {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1",
      });
    }

    $("#preloader").animate(
      {
        opacity: "0",
      },
      600,
      function () {
        setTimeout(function () {
          $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
      }
    );
  });

  const dropdownOpener = $(".main-nav ul.nav .has-sub > a");

  // Open/Close Submenus
  if (dropdownOpener.length) {
    dropdownOpener.each(function () {
      var _this = $(this);

      _this.on("tap click", function (e) {
        var thisItemParent = _this.parent("li"),
          thisItemParentSiblingsWithDrop = thisItemParent.siblings(".has-sub");

        if (thisItemParent.hasClass("has-sub")) {
          var submenu = thisItemParent.find("> ul.sub-menu");

          if (submenu.is(":visible")) {
            submenu.slideUp(450, "easeInOutQuad");
            thisItemParent.removeClass("is-open-sub");
          } else {
            thisItemParent.addClass("is-open-sub");

            if (thisItemParentSiblingsWithDrop.length === 0) {
              thisItemParent
                .find(".sub-menu")
                .slideUp(400, "easeInOutQuad", function () {
                  submenu.slideDown(250, "easeInOutQuad");
                });
            } else {
              thisItemParent
                .siblings()
                .removeClass("is-open-sub")
                .find(".sub-menu")
                .slideUp(250, "easeInOutQuad", function () {
                  submenu.slideDown(250, "easeInOutQuad");
                });
            }
          }
        }

        e.preventDefault();
      });
    });
  }
})(window.jQuery);



const text = {
	en: {
		companyTitle:"OUR HISTORY",
		companyInfo: "In the ancient city of Krinides, a crossroads of centuries, where tradition meets culture, the flavors and quality have been preserved like precious artifacts since ancient times. Close to the historic city where King Philippos once ruled, the essence of our flavors carries you back to sweeter days. Infused with seasons of love and nurtured through generations of cultivation, our fruits offer exquisite delight! Our recipes have stood the test of time and passed down through cherished generations. Even a mere teaspoonful allows you to savor the care and affection poured into each creation by Donna Anastasia. These flavors are unlike anything you've ever encountered. Selecting only the finest, ripest fruits, we begin with the utmost care. The excellence of our products originates from local producers and dedicated beekeepers who share with us a unique, delightful, and profoundly flavorful experience. Naturally, all our products, in keeping with tradition, are crafted without preservatives, dyes, or any artificial additives.",
		philosophyTitle: "AND OUR PHILOSOPHY",
		philosophy: "Our company, Donna Anastasia, purely Greek, has earned its excellent reputation thanks to the authentic homemade taste and the high content of selected Greek fruits and vegetables in its products. Our recipes have been handed down from generation to generation with love and care. This unparalleled taste has established itself as a favorite of our customers. We combine our talent in cooking, our passion for pure flavors, fresh ingredients, and proudly produce our jams with attention to detail. Each recipe, whether it's a new idea or traditional recipes, is meticulously created, leading to many award-winning products. The excellence of our products comes from local producers and dedicated beekeepers who share with us a unique, enjoyable, and deeply delicious experience. We are happy to state that, in our preparations, no dyes, preservatives, or any artificial additives are used. The composition of our products includes only selected fresh fruits and vegetables, which are processed safely and skillfully in order to preserve all their beneficial properties, including the elixir of life, honey, and other pure ingredients from the Greek land.",
	  },
	  
  el: {
	companyTitle:"Η ΙΣΤΟΡΙΑ ΜΑΣ",
    companyInfo: "Στην αρχαία πόλη των Κρηνιδών, στο σταυροδρόμι των αιώνων, η παράδοση συναντά τη γεύση. Η ποιότητα εδώ διατηρείται ως πολύτιμο δημιούργημα από την αρχαιότητα. Κοντά στην ιστορική πόλη όπου κάποτε κυβερνούσε ο Βασιλιάς Φίλιππος, οι παραδοσιακές, ποιοτικές και φυσικές γεύσεις μας, σας μεταφέρουν σε γλυκύτερες εποχές. Η εταιρεία μας, Donna Anastasia, αμιγώς Ελληνική, έχει κερδίσει την εξαιρετική της φήμη, χάρης στην αυθεντική σπιτική γεύση και την υψηλή περιεκτικότητα σε επιλεγμένα ελληνικά, φρούτα και λαχανικά, στα προϊόντα της. Οι συνταγές μας έχουν κληροδοτηθεί από γενιά σε γενιά με αγάπη και φροντίδα. Η απαράμιλλη αυτή γεύση, έχει καθιερωθεί ως αγαπημένη από τους πελάτες μας. Ενώνουμε το ταλέντο μας για τη μαγειρική, το πάθος μας για αγνές γεύσεις, ολόφρεσκα υλικά και περήφανα παράγουμε τις μαρμελάδες μας με έμφαση στη λεπτομέρεια.",
	philosophyTitle: "ΚΑΙ Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ",
    philosophy: "Στην αρχαία πόλη των Κρηνιδών, στο σταυροδρόμι των αιώνων, η παράδοση συναντά τη γεύση. Η ποιότητα εδώ διατηρείται ως πολύτιμο δημιούργημα από την αρχαιότητα. Κοντά στην ιστορική πόλη όπου κάποτε κυβερνούσε ο Βασιλιάς Φίλιππος, οι παραδοσιακές, ποιοτικές και φυσικές γεύσεις μας, σας μεταφέρουν σε γλυκύτερες εποχές. Η εταιρεία μας, Donna Anastasia, αμιγώς Ελληνική, έχει κερδίσει την εξαιρετική της φήμη, χάρης στην αυθεντική σπιτική γεύση και την υψηλή περιεκτικότητα σε επιλεγμένα ελληνικά, φρούτα και λαχανικά, στα προϊόντα της. Οι συνταγές μας έχουν κληροδοτηθεί από γενιά σε γενιά με αγάπη και φροντίδα. Η απαράμιλλη αυτή γεύση, έχει καθιερωθεί ως αγαπημένη από τους πελάτες μας. Ενώνουμε το ταλέντο μας για τη μαγειρική, το πάθος μας για αγνές γεύσεις, ολόφρεσκα υλικά και περήφανα παράγουμε τις μαρμελάδες μας με έμφαση στη λεπτομέρεια.",
  },
};



function updateContent(language) {
	// Select the elements where you want to display the content
	const companyInfoElement = document.getElementById("companyInfo");
	const philosophyElement = document.getElementById("philosophy");
  
	// Check the selected language
	const selectedLanguage = text[language];
  
	// Update the content
	companyInfoElement.innerHTML = `  
	
	<div class="section-heading">
	<div class="line-dec"></div>
	<h2>${selectedLanguage.companyTitle}</h2>
  </div>

	<div id="companyInfo">
	<p>${selectedLanguage.companyInfo}</p>
	  </div>`;
	  philosophyElement.innerHTML = `
	  
	  <div class="section-heading">
	  <div class="line-dec"></div>
	  <h2>${selectedLanguage.philosophyTitle}</h2>

	</div> <div id="companyInfo">
	  <p>${selectedLanguage.philosophy}</p>
		</div>`;
  }

  document.addEventListener("DOMContentLoaded", function () {
	const toggleLanguageButton = document.getElementById("toggleLanguage");
  
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
  
  
  
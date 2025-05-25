(function ($) {

    "use strict";

    // Tab Section
    var initTabs = function () {
        const tabs = document.querySelectorAll('[data-tab-target]')
        const tabContents = document.querySelectorAll('[data-tab-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabTarget)
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('active')
                })
                tabs.forEach(tab => {
                    tab.classList.remove('active')
                })
                tab.classList.add('active')
                target.classList.add('active')
            })
        });
    }


    // Responsive Navigation with Button
    var initHamburgerMenu = function () {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".menu-list");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("responsive");
        }

        const navLink = document.querySelectorAll(".item-anchor");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("responsive");
        }
    };

    var swiper = new Swiper(".product-swiper", {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            699: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });


    // document ready
    $(document).ready(function () {
        initTabs();
        initHamburgerMenu();
    });

})(jQuery);

(function ($) {

    "use strict";

    // init Chocolat light box
    var initChocolat = function () {
        Chocolat(document.querySelectorAll('.image-link'), {
            imageSize: 'contain',
            loop: true,
        })
    }


    $(document).ready(function () {


        // swiper
        var swiper = new Swiper(".residence-swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            navigation: {
                nextEl: ".residence-swiper-next",
                prevEl: ".residence-swiper-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                450: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });

        var swiper = new Swiper(".testimonial-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            freeMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });




        initChocolat();




    }); // End of a document

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    setTimeout(function () {
        preloader.style.display = "none";
    }, 3000);
});

$('.round').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});


window.addEventListener('scroll', toggleButtonVisibility);

function toggleButtonVisibility() {
  var button = document.getElementById("gototop");
  button.addEventListener("click", gototop);
  
  if (window.scrollY > 0) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
}

function gototop() {
    const scrollDuration = 500; 
    const scrollStep = -window.scrollY / (scrollDuration / 10); 
    
    const scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  }

//   paymentgage


// new Vue({
//     el: "#app",
//     data() {
//       return {
//         currentCardBackground: Math.floor(Math.random()* 25 + 1), // just for fun :D
//         cardName: "",
//         cardNumber: "",
//         cardMonth: "",
//         cardYear: "",
//         cardCvv: "",
//         minCardYear: new Date().getFullYear(),
//         amexCardMask: "#### ###### #####",
//         otherCardMask: "#### #### #### ####",
//         cardNumberTemp: "",
//         isCardFlipped: false,
//         focusElementStyle: null,
//         isInputFocused: false
//       };
//     },
//     mounted() {
//       this.cardNumberTemp = this.otherCardMask;
//       document.getElementById("cardNumber").focus();
//     },
//     computed: {
//       getCardType () {
//         let number = this.cardNumber;
//         let re = new RegExp("^4");
//         if (number.match(re) != null) return "visa";
  
//         re = new RegExp("^(34|37)");
//         if (number.match(re) != null) return "amex";
  
//         re = new RegExp("^5[1-5]");
//         if (number.match(re) != null) return "mastercard";
  
//         re = new RegExp("^6011");
//         if (number.match(re) != null) return "discover";
        
//         re = new RegExp('^9792')
//         if (number.match(re) != null) return 'troy'
  
//         return "visa"; // default type
//       },
//           generateCardNumberMask () {
//               return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
//       },
//       minCardMonth () {
//         if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
//         return 1;
//       }
//     },
//     watch: {
//       cardYear () {
//         if (this.cardMonth < this.minCardMonth) {
//           this.cardMonth = "";
//         }
//       }
//     },
//     methods: {
//       flipCard (status) {
//         this.isCardFlipped = status;
//       },
//       focusInput (e) {
//         this.isInputFocused = true;
//         let targetRef = e.target.dataset.ref;
//         let target = this.$refs[targetRef];
//         this.focusElementStyle = {
//           width: `${target.offsetWidth}px`,
//           height: `${target.offsetHeight}px`,
//           transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
//         }
//       },
//       blurInput() {
//         let vm = this;
//         setTimeout(() => {
//           if (!vm.isInputFocused) {
//             vm.focusElementStyle = null;
//           }
//         }, 300);
//         vm.isInputFocused = false;
//       }
//     }
//   });
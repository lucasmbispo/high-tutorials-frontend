
/* testimonial slider */

function testimonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne){ /* if the element exists*/
        carouselOne.addEventListener('slid.bs.carousel', function() {
            const activeItem = this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src =
            activeItem.getAttribute("data-js-testimonial-img");
        })
    }
}
testimonialSlider();

/* course preview video*/

function coursePreviewVideo(){
  const coursePreviewModal = document.querySelector(".js-course-preview-modal");
  if(coursePreviewModal){ /*if the element exists*/
  coursePreviewModal.addEventListener("shown.bs.modal", function () {
    this.querySelector(".js-course-preview-video").play();
    this.querySelector(".js-course-preview-video").currentTime = 0;
  });

  coursePreviewModal.addEventListener("hide.bs.modal", function (){
    this.querySelector(".js-course-preview-video").pause();
    });
  }
}
coursePreviewVideo();

/* style switcher*/

function styleSwitcherToggle(){
  const styleSwitcher = document.querySelector(".js-style-switcher")
  styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

  styleSwitcherToggler.addEventListener("click", function(){
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
}
styleSwitcherToggle();

/* Theme Colors*/
function themeColors(){
  const colorStyle = document.querySelector(".js-color-style"),
  themeColorsContainer = document.querySelector(".js-theme-colors");

  themeColorsContainer.addEventListener("click", ({
    target}) => {
    if(target.classList.contains("js-theme-color-item")){
      localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
      setColor();
    }

    function setColor() {
      let path = colorStyle.getAttribute("href").split("/");

    }
  });

}
themeColors();

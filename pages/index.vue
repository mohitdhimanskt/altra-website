<template>
  <div id="layout">
    
      
      <HeroSection></HeroSection>
    
    <FeaturedDeal></FeaturedDeal>

    <TreksCategories></TreksCategories>
    <TreksLead></TreksLead>

    <Inspiration></Inspiration>
    <TrekExplorersLove></TrekExplorersLove>
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  data: function() {
    return {
      scrollPosition: null
    };
  },
  computed: {
    logoSource() {
      return this.scrollPosition > 8
        ? require("../assets/uploads/text-logo.png")
        : require("../assets/uploads/text.png");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    myFunction() {
      var nav = document.getElementById("myHeader");
      // var sticky = header.offsetTop;
      window.onscroll = function() {
        if (this.scrollTop() > 8) {
          ".header-bg .logo img".attr("src", "uploads/text-logo.png");
        }
        if (this.scrollTop() < 8) {
          ".header-bg .logo img".attr("src", "uploads/text.png");
        }
        if (window.scrollTop()) {
          nav.classList.add("black");
        } else {  
          nav.classList.remove("black");
        }
      };
    }
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  }
};

//             $(document).ready(function() {
//             $(".menu-icon").on("click", function() {
//                   $("nav ul").toggleClass("showing");
//             });
//       });

//       // Scrolling Effect

//       $(window).on("scroll", function() {
//             if($(window).scrollTop()) {
//                   $('nav').addClass('black');
//             }

//             else {
//                   $('nav').removeClass('black');
//             }
//       })

// // image change effect

//       $(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 8) {
//             $('.header-bg .logo img').attr('src','img/text-logo.png');
//         }
//         if ($(this).scrollTop() < 8) {
//             $('.header-bg .logo img').attr('src','img/text.png');
//         }
//     })
// });
</script>
<script>
export default {
  layout:'default'
}
</script>
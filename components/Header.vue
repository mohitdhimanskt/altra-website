<template>
  
    <div class="header-logo header-bg">
                    <!-- <a href="index.html"><img src="~/assets/uploads/main-logo.png" class="img-responsive logo" alt="altra travels" /></a> -->
                    <!-- new header-->
                        <nav :class="{'black': scrollPosition > 0}">
                           <div class="menu-icon">
                              <i class="fa fa-bars fa-2x"></i>
                           </div>
                           <div class="logo">
                            <nuxt-link to="/">
                              <opti-image 
                              :src="logoSource"
                               class="text-logo img-responsive" alt="altra travels" /></nuxt-link>
                           </div>
                           <div class="menu"> 
                              <ul>
                                <li><nuxt-link to="treks">Treks</nuxt-link></li>
                                <li><nuxt-link to="leader">Trek Leads</nuxt-link></li>
                                <li><nuxt-link to="/">Blog</nuxt-link></li>
                               <li> <nuxt-link to="about">About Us</nuxt-link></li>
                                <li><nuxt-link to="contact">Contact Us</nuxt-link></li>
                                <li><nuxt-link to="sign"> Sign In</nuxt-link></li>
                              </ul>
                           </div>
                        </nav>

                    <!-- new header ends-->
                </div> <!-- header-logo ends-->
</template>
<script>
export default {
  name: "Header",
    data: function() {
      return {
    scrollPosition: null
      }

  },
  
  computed: {
    logoSource(){
    return this.scrollPosition > 8 ? require('../assets/uploads/text-logo.png') : require('../assets/uploads/text.png');
}
  },
  mounted() {
       window.addEventListener('scroll', this.updateScroll)
    },
    methods: {
        updateScroll() {
      this.scrollPosition = window.scrollY
    },
    getImageRequirePath(path){
      return require(path);
    },
      myFunction() {

        var nav = document.getElementById("myHeader");
        // var sticky = header.offsetTop;
         window.onscroll = function() {
            if ((this).scrollTop() > 8) { 
            ('.header-bg .logo img').attr('src','uploads/text-logo.png');
        }
        if ((this).scrollTop() < 8) { 
            ('.header-bg .logo img').attr('src','uploads/text.png');
        }
        if (window.scrollTop()) {
          nav.classList.add("black");
        } else {
          nav.classList.remove("black");
        }
        
         }
      }
    },
    destroy() {
  window.removeEventListener('scroll', this.updateScroll)
}
    };
     
</script>
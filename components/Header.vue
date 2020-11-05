<template>
  <div class="header">
    <div data-server-rendered="true">
      <div id="layout">
        <div class="home">
          <div class="header-logo">
            <img src="uploads/main-logo.png" class="img-responsive logo" />
          </div>

          <div class="alert-area grey" id="myHeader">
            <div class="container">
              <nuxt-link class="travel" to="Homepage">
                <img src="uploads/text-logo.jpg" alt="Alternate Travel logo" />
              </nuxt-link>
              <nav class="navbar justify-content-center">
                <ul class="nav navbar-nav">
                  <li><nuxt-link class="page" to="treks">Treks</nuxt-link></li>

                  <li>
                    <nuxt-link class="page" to="leader">Leader</nuxt-link>
                  </li>
                  <li><nuxt-link class="page" to="blog">Blog</nuxt-link></li>
                  <li>
                    <nuxt-link class="page" to="about">AboutUs</nuxt-link>
                  </li>

                  <li>
                    <nuxt-link class="page" to="contact">ContactUs</nuxt-link>
                  </li>

                  <li><nuxt-link class="page" to="sign">SignUp</nuxt-link></li>
                  <li><nuxt-link class="page" to="login"></nuxt-link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.header {
  
 background-color: white;
	box-shadow:0 1px 1px #ccc;
	padding: 20px 40px;
	height: 80px;
	color: #ffffff;
	box-sizing: border-box;
  top:0px;
}



.nav navbar-nav {
	color: #608bd2;
	pointer-events: none;
	opacity: 1;
}



</style>

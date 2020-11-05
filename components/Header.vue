<template>
  <div data-server-rendered="true">
    <div id="layout">
      <div class="home">
        <div class="header-logo">
          <a href="index.html"
            ><img src="img/main-logo.png" class="img-responsive logo"
          /></a>
        </div>

        <div class="alert-area grey" id="myHeader">
          <div class="container">
            <nuxt-link class="header" to="/">
              <img
                :src="img / text - logo.jpg"
                :alt="Alternate - Travel"
                class="logo"
              />
            </nuxt-link>
            <nav class="navbar justify-content-center">
              <ul class="nav navbar-nav">
                <li><a href="#">Treks</a></li>
                <li><a href="#">Leaders </a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="#"> Sign Up</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </nav>
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

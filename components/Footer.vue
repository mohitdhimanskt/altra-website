<template>
<div>
  <div class="home-newsletter">
    <div class="container">
      <div class="newsletter-box">
        <h2 class="altra-row-title text-center">Subscribe to stay connected</h2>
        <p class="altra-row-text text-center">
          Sign up and we’ll send you the details of upcoming treks
        </p>
        <form class="newsletter_frm">
          <input type="email" id="newsletter" placeholder="Enter your mail" />
          <input
            type="submit"
            class="button-color newsletter_btn"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  </div>

   <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
          <div class="widget">
            <h2>Useful Links</h2>
            <ul>
              <li><nuxt-link to="/">Lorem</nuxt-link></li>
              <li><nuxt-link to="/">Lorem</nuxt-link></li>
              <li><nuxt-link to="/">Lorem</nuxt-link></li>
              <li><nuxt-link to="/">Lorem</nuxt-link></li>
              <li><nuxt-link to="/">Lorem</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="widget">
            <h2>Service Links</h2>
            <ul>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 ">
          <div class="widget">
            <h2>Other Links</h2>
            <ul>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="widget">
            <h2>Useful Links</h2>
            <ul>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- row ends -->
      <div class="col-12 col-md-12 col-lg-12">
        <hr />
        <p class="copyright">
          2020-2021 Explore alternate travels Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<template>
  <div data-server-rendered="true">
    <!---->
    <div id="layout">
      <div class="home">
        <div v-bind:class="[showBackgroundLogo ? 'header-bg' : 'other-logo', 'header-logo']">
                    
                        <nav>
                           <div class="menu-icon">
                              <i class="fa fa-bars fa-2x"></i>
                           </div>
                           <div class="logo">
                            <nuxt-link to="/"><img src="~/assets/uploads/text-logo.png" class="text-logo img-responsive" alt="altra travels"/></nuxt-link>
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

                    
                </div> 

        <!-- header-logo ends-->

        <div class="leaders-page padding-top-1 altra-heading">
          <div class="container">
            <h2 class="altra-row-title text-left primary-color divider-text">
              <span>Trek Leaders </span>
            </h2>
            <h4 class="altra-row-text">Know Our Trek Leaders</h4>
            <div class="row">
              <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a href="#">
                  <div class="home-trekleader-card">
                    <img
                      src="~/assets/uploads/person.jpg"
                      alt="Lorem Ipsum"
                      title="Lorem Ipsum"
                      class="home-trekleader-image"
                    />
                    <div class="home-upcommingtrek-card-description">
                      <label class="home-upcommingtrek-card-label primary-color"
                        >Vikarm</label
                      >
                      <p class="trek-company">Farout Himalayas</p>
                      <div class="stars-box text-left">
                        <div class="stars-outer">
                          <div class="stars-inner">
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <p>4.6 Rating</p>
                      </div>
                      <h5 class="number-treks">150 Treks Completed</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor ab, officiis odit vero ut fugit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a href="#">
                  <div class="home-trekleader-card">
                    <img
                      src="~/assets/uploads/person.jpg"
                      alt="Lorem Ipsum"
                      title="Lorem Ipsum"
                      class="home-trekleader-image"
                    />
                    <div class="home-upcommingtrek-card-description">
                      <label class="home-upcommingtrek-card-label primary-color"
                        >Alexa</label
                      >
                      <p class="trek-company">Lorem Ipsum</p>
                      <div class="stars-box text-left">
                        <div class="stars-outer">
                          <div class="stars-inner">
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <p>4.6 Rating</p>
                      </div>
                      <h5 class="number-treks">150 Treks Completed</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor ab, officiis odit vero ut fugit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a href="#">
                  <div class="home-trekleader-card">
                    <img
                      src="~/assets/uploads/person.jpg"
                      alt="Lorem Ipsum"
                      title="Lorem Ipsum"
                      class="home-trekleader-image"
                    />
                    <div class="home-upcommingtrek-card-description">
                      <label class="home-upcommingtrek-card-label primary-color"
                        >Bella</label
                      >
                      <p class="trek-company">Lorem Ipsum</p>
                      <div class="stars-box text-left">
                        <div class="stars-outer">
                          <div class="stars-inner">
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <p>4.6 Rating</p>
                      </div>
                      <h5 class="number-treks">150 Treks Completed</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor ab, officiis odit vero ut fugit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a href="#">
                  <div class="home-trekleader-card">
                    <img
                      src="~/assets/uploads/person.jpg"
                      alt="Lorem Ipsum"
                      title="Lorem Ipsum"
                      class="home-trekleader-image"
                    />
                    <div class="home-upcommingtrek-card-description">
                      <label class="home-upcommingtrek-card-label primary-color"
                        >Emma</label
                      >
                      <p class="trek-company">Lorem Ipsum</p>
                      <div class="stars-box text-left">
                        <div class="stars-outer">
                          <div class="stars-inner">
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <p>4.6 Rating</p>
                      </div>
                      <h5 class="number-treks">150 Treks Completed</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor ab, officiis odit vero ut fugit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a href="#">
                  <div class="home-trekleader-card">
                    <img
                      src="~/assets/uploads/person.jpg"
                      alt="Lorem Ipsum"
                      title="Lorem Ipsum"
                      class="home-trekleader-image"
                    />
                    <div class="home-upcommingtrek-card-description">
                      <label class="home-upcommingtrek-card-label primary-color"
                        >Amanda</label
                      >
                      <p class="trek-company">Lorem Ipsum</p>
                      <div class="stars-box text-left">
                        <div class="stars-outer">
                          <div class="stars-inner">
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <p>4.6 Rating</p>
                      </div>
                      <h5 class="number-treks">150 Treks Completed</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor ab, officiis odit vero ut fugit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a href="#">
                  <div class="home-trekleader-card">
                    <img
                      src="~/assets/uploads/person.jpg"
                      alt="Lorem Ipsum"
                      title="Lorem Ipsum"
                      class="home-trekleader-image"
                    />
                    <div class="home-upcommingtrek-card-description">
                      <label class="home-upcommingtrek-card-label primary-color"
                        >Bella</label
                      >
                      <p class="trek-company">Lorem Ipsum</p>
                      <div class="stars-box text-left">
                        <div class="stars-outer">
                          <div class="stars-inner">
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <p>4.6 Rating</p>
                      </div>
                      <h5 class="number-treks">150 Treks Completed</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor ab, officiis odit vero ut fugit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a href="#">
                  <div class="home-trekleader-card">
                    <img
                      src="~/assets/uploads/person.jpg"
                      alt="Lorem Ipsum"
                      title="Lorem Ipsum"
                      class="home-trekleader-image"
                    />
                    <div class="home-upcommingtrek-card-description">
                      <label class="home-upcommingtrek-card-label primary-color"
                        >Amanda</label
                      >
                      <p class="trek-company">Lorem Ipsum</p>
                      <div class="stars-box text-left">
                        <div class="stars-outer">
                          <div class="stars-inner">
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <p>4.6 Rating</p>
                      </div>
                      <h5 class="number-treks">150 Treks Completed</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor ab, officiis odit vero ut fugit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a href="#">
                  <div class="home-trekleader-card">
                    <img
                      src="~/assets/uploads/person.jpg"
                      alt="Lorem Ipsum"
                      title="Lorem Ipsum"
                      class="home-trekleader-image"
                    />
                    <div class="home-upcommingtrek-card-description">
                      <label class="home-upcommingtrek-card-label primary-color"
                        >Emma</label
                      >
                      <p class="trek-company">Lorem Ipsum</p>
                      <div class="stars-box text-left">
                        <div class="stars-outer">
                          <div class="stars-inner">
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star checked"
                              aria-hidden="true"
                            ></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <p>4.6 Rating</p>
                      </div>
                      <h5 class="number-treks">150 Treks Completed</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor ab, officiis odit vero ut fugit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leader',
  props: {
    showBackgroundLogo: Boolean
  },
};
</script>

<template>
  <div data-server-rendered="true">
    <!---->
    <div id="layout">
      <div class="home">
        <div class="header-logo other-logo">
          <!-- new header-->
          <nav>
            <div class="menu-icon">
              <i class="fa fa-bars fa-2x"></i>
            </div>
            <div class="logo">
              <nuxt-link to="/"
                ><img
                  src="~/assets/uploads/text-logo.png"
                  class="text-logo img-responsive"
                  alt="altra travels"
              /></nuxt-link>
            </div>
            <div class="menu">
              <ul>
                <li><nuxt-link to="treks">Treks</nuxt-link></li>
                <li><nuxt-link to="leader">Trek Leads</nuxt-link></li>
                <li><nuxt-link to="/">Blog</nuxt-link></li>
                <li><nuxt-link to="about">About Us</nuxt-link></li>
                <li><nuxt-link to="contact">Contact Us</nuxt-link></li>
                <li><nuxt-link to="sign"> Sign In</nuxt-link></li>
              </ul>
            </div>
          </nav>

          <!-- new header ends-->
        </div>
        <!-- header-logo ends-->

        <div class="search-list-details padding-top-1 altra-heading">
          <div class="container">
            <h2 class="altra-row-title text-left primary-color divider-text">
              <span>Find Best Deals.. </span>
            </h2>
            <h4 class="altra-row-text">Know More About Deals</h4>
            <div class="col-12 col-md-4 col-lg-3 col-xl-3 sidebar">
              <div class="home-search-detail">
                <h2>Search</h2>
                <form>
                  <input
                    type="text"
                    id="search"
                    placeholder="Where to Go?"
                    name="search"
                  />
                  <input
                    type="month"
                    id="month"
                    placeholder="Month"
                    name="month"
                  />
                  <input
                    type="number"
                    id="people"
                    name="people"
                    placeholder="No. of People"
                  />
                  <input
                    type="button"
                    value="Search"
                    class="search-detail-btn button-color"
                  />
                </form>
              </div>
              <div class="search-box-filter">
                <form id="search-filter-data">
                  <fieldset>
                    <div class="filter-wrapper">
                      <h2 class="filter-by">Filter By:</h2>
                    </div>
                    <div class="filter-boxfirst" id="filter-price">
                      <div class="filter-category-title">
                        <h3>Price</h3>
                      </div>
                      <div class="filter-option">
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                "
                              >
                                ₹&nbsp;0 - ₹&nbsp;4,310 per night
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                    "
                              >
                                ₹&nbsp;0 - ₹&nbsp;4,310 per night
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                        "
                              >
                                ₹&nbsp;0 - ₹&nbsp;4,310 per night
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                            "
                              >
                                ₹&nbsp;0 - ₹&nbsp;4,310 per night
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                                "
                              >
                                ₹&nbsp;0 - ₹&nbsp;4,310 per night
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                      </div>
                    </div>

                    <div class="filter-boxfirst" id="filter-region-type">
                      <div class="filter-category-title">
                        <h3>Region</h3>
                      </div>
                      <div class="filter-option">
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                "
                              >
                                South
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                    "
                              >
                                North India
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                        "
                              >
                                East India
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                            "
                              >
                                West India
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                                "
                              >
                                North South
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                      </div>
                    </div>
                    <div class="filter-boxfirst" id="filter-region-type">
                      <div class="filter-category-title">
                        <h3>Type of Trek</h3>
                      </div>
                      <div class="filter-option">
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                    "
                              >
                                Easy
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                        "
                              >
                                Medium
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                            "
                              >
                                Challenging
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                                "
                              >
                                Hard
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                        <a class="filter-element " href="#" tabindex="-1">
                          <label class="filtercheckbox">
                            <input
                              class="filter-checkbox-input"
                              type="checkbox"
                            />
                            <div class="filter-item">
                              <span
                                class="filter-label
                                                                    "
                              >
                                Moderate
                              </span>
                              <span class="filter-count">
                                44
                              </span>
                            </div>
                          </label>
                        </a>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div class="col-12 col-md-8 col-lg-9 col-xl-9">
              <div class="search-list-box">
                <!--  -->
                <div class="search-deal-image">
                  <img
                    src="~/assets/uploads/lake.jpg"
                    class="img-responsive"
                    alt="lorem ipsum"
                  />
                  <div class="search-deal-content">
                    <h3 class="search-featured-deals-title">Chandratal Trek</h3>
                  </div>
                </div>
                <div class="search-deal-details">
                  <div class="search-data col-12 col-md-8 col-lg-8 col-xl-8">
                    <a href="../pages/serach-detail.html"
                      ><h2 class="search-list-title primary-color">
                        Farout Himalayas
                      </h2></a
                    >
                    <h4 class="search-trekleader">Vikram</h4>
                    <div class="search-stars-box">
                      <div class="stars-outer">
                        <div class="stars-inner">
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <p class="search-seats">24 seats available</p>
                    <div class="hastag">
                      <ul>
                        <li><a>Best View</a></li>
                        <li><a>Shooting Site</a></li>
                        <li><a>#Other tags</a></li>
                        <li><a>#More tags</a></li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="score-card-right text-right col-12 col-md-4 col-lg-4 col-xl-4"
                  >
                    <div class="search-score-card">
                      <h5 class="primary-color">Exceptional</h5>
                      <p class="review-text">1128 Reviews</p>
                    </div>
                    <div class="search-rating">
                      <h2>4.6</h2>
                    </div>
                    <div class="search-book-details">
                      <p class="number-people">2 aduts</p>
                      <p class="price-rate">4500 INR</p>
                      <p class="tax-rates">+ 300 Rs taxes</p>
                      <input
                        type="submit"
                        value="Book Now"
                        id="upcoming-trek-button"
                      />
                    </div>
                  </div>

                  <div class="clear"></div>
                </div>
                <div class="type-details">
                  <ul>
                    <li><a>3 days</a></li>
                    <li><a>Easy</a></li>
                    <li><a>Manali to Manali </a></li>
                  </ul>
                </div>
              </div>
              <!-- 2 -->
              <div class="search-list-box">
                <!--  -->
                <div class="search-deal-image">
                  <img
                    src="~/assets/uploads/lake.jpg"
                    class="img-responsive"
                    alt="lorem ipsum"
                  />
                  <div class="search-deal-content">
                    <h3 class="search-featured-deals-title">Trekking</h3>
                  </div>
                </div>
                <div class="search-deal-details">
                  <div class="search-data col-12 col-md-8 col-lg-8 col-xl-8">
                    <a href="../pages/serach-detail.html"
                      ><h2 class="search-list-title primary-color">
                        Farout Himalayas
                      </h2></a
                    >
                    <h4 class="search-trekleader">Vikram</h4>
                    <div class="search-stars-box">
                      <div class="stars-outer">
                        <div class="stars-inner">
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <p class="search-seats">24 seats available</p>
                    <div class="hastag">
                      <ul>
                        <li><a>Best View</a></li>
                        <li><a>Shooting Site</a></li>
                        <li><a>#Other tags</a></li>
                        <li><a>#More tags</a></li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="score-card-right text-right col-12 col-md-4 col-lg-4 col-xl-4"
                  >
                    <div class="search-score-card">
                      <h5 class="primary-color">Exceptional</h5>
                      <p class="review-text">1128 Reviews</p>
                    </div>
                    <div class="search-rating">
                      <h2>4.6</h2>
                    </div>
                    <div class="search-book-details">
                      <p class="number-people">2 aduts</p>
                      <p class="price-rate">4500 INR</p>
                      <p class="tax-rates">+ 300 Rs taxes</p>
                      <input
                        type="submit"
                        value="Book Now"
                        id="upcoming-trek-button"
                      />
                    </div>
                  </div>

                  <div class="clear"></div>
                </div>
                <div class="type-details">
                  <ul>
                    <li><a>3 days</a></li>
                    <li><a>Easy</a></li>
                    <li><a>Manali to Manali </a></li>
                  </ul>
                </div>
              </div>

              <!-- 3-->
              <div class="search-list-box">
                <!--  -->
                <div class="search-deal-image">
                  <img
                    src="~/assets/uploads/lake.jpg"
                    class="img-responsive"
                    alt="lorem ipsum"
                  />
                  <div class="search-deal-content">
                    <h3 class="search-featured-deals-title">Beas Kund Trek</h3>
                  </div>
                </div>
                <div class="search-deal-details">
                  <div class="search-data col-12 col-md-8 col-lg-8 col-xl-8">
                    <a href="../pages/serach-detail.html"
                      ><h2 class="search-list-title primary-color">
                        Farout Himalayas
                      </h2></a
                    >
                    <h4 class="search-trekleader">Vikram</h4>
                    <div class="search-stars-box">
                      <div class="stars-outer">
                        <div class="stars-inner">
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star checked" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <p class="search-seats">24 seats available</p>
                    <div class="hastag">
                      <ul>
                        <li><a>Best View</a></li>
                        <li><a>Shooting Site</a></li>
                        <li><a>#Other tags</a></li>
                        <li><a>#More tags</a></li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="score-card-right text-right col-12 col-md-4 col-lg-4 col-xl-4"
                  >
                    <div class="search-score-card">
                      <h5 class="primary-color">Exceptional</h5>
                      <p class="review-text">1128 Reviews</p>
                    </div>
                    <div class="search-rating">
                      <h2>4.6</h2>
                    </div>
                    <div class="search-book-details">
                      <p class="number-people">2 aduts</p>
                      <p class="price-rate">4500 INR</p>
                      <p class="tax-rates">+ 300 Rs taxes</p>
                      <input
                        type="submit"
                        value="Book Now"
                        id="upcoming-trek-button"
                      />
                    </div>
                  </div>

                  <div class="clear"></div>
                </div>
                <div class="type-details">
                  <ul>
                    <li><a>3 days</a></li>
                    <li><a>Easy</a></li>
                    <li><a>Manali to Manali </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-newsletter">
          <div class="container">
            <div class="newsletter-box">
              <h2 class="altra-row-title text-center">
                Subscribe to stay connected
              </h2>
              <p class="altra-row-text text-center">
                Sign up and we’ll send you the details of upcoming treks
              </p>
              <form class="newsletter_frm">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Enter your mail"
                />
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
                2020-2021 Explore alternate travels Pvt Ltd. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="midlight_purple-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-4 col-lg-3">
                            <h2 class="footer-logo">Altra Travels</h2>
                            </div>
                            <div class="col-12 col-md-8 col-lg-9">
                                <p class="copyright">2020-2021 Explore alternate travels Pvt Ltd. All Rights Reserved.</p>
                            </div>
                    </div>
                </div>
            </div> -->
      </div>
    </div>
  </div>
</template>

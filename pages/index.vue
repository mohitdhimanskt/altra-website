<template>
  <div id="layout">
            <div class="home">
                <div class="header-logo header-bg">
                    <!-- <a href="index.html"><img src="~/assets/uploads/main-logo.png" class="img-responsive logo" alt="altra travels" /></a> -->
                    <!-- new header-->
                        <nav :class="{'black': scrollPosition > 0}">
                           <div class="menu-icon">
                              <i class="fa fa-bars fa-2x"></i>
                           </div>
                           <div class="logo">
                            <nuxt-link to="/">
                              <img 
                              :src="logoSource"
                               class="text-logo img-responsive" alt="altra travels"/></nuxt-link>
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

                <div class="hero-section">
                    <div class="container">
                        <h2 class="altra-row-title text-center divider-text"><span>Find deals on Latest Treks and much more..</span></h2>
                        <div class="col-12">
                            <div class="home-search">
                                <form>
                                    <input type="text" id="search" placeholder="Where to Go?" name="search">
                                    <input type="month" id="month" placeholder="Month" name="month">
                                    <input type="number" id="people" name="people" placeholder="No. of People">
                                    <input type="search" value="Search" id="home_search" class="button-color"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
                <div class="home-featured-deals home-margin">
                    <div class="container">
                        <h2 class="altra-row-title text-center primary-color divider-text"><span>Featured Deals</span></h2>
                    <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center deals-box">
                        <div class="featured-deals featured-deals-image-1">
                            <div class="overlay-image"></div>
                        <div class="featured-deals-content">
                        <h4 class="home-featured-deals-title">Trekking</h4>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center deals-box">
                        <div class="featured-deals featured-deals-image-2">
                            <div class="overlay-image"></div>
                        <div class="featured-deals-content">
                        <h4 class="home-featured-deals-title">Trekking</h4>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center deals-box">
                        <div class="featured-deals featured-deals-image-3">
                            <div class="overlay-image"></div>
                        <div class="featured-deals-content">
                        <h4 class="home-featured-deals-title">Trekking</h4>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center deals-box">
                        <div class="featured-deals featured-deals-image-4">
                            <div class="overlay-image"></div>
                        <div class="featured-deals-content">
                        <h4 class="home-featured-deals-title">Trekking</h4>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center deals-box">
                        <div class="featured-deals featured-deals-image-5">
                            <div class="overlay-image"></div>
                        <div class="featured-deals-content">
                        <h4 class="home-featured-deals-title">Trekking</h4>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                    </div>

                </div>
            </div>

                </div>

                <div  class="home-upcomingtrek home-margin">
                    <div class="container">
                            <div class="text-center">
                                <div>
                                    <h2 class="altra-row-title text-center primary-color divider-text"><span>Trek Categories </span></h2>
                                    <p class="altra-row-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </div>
                            </div>
                    </div>
                    <div>
                        <div class="container overflow-auto home-upcommingtrek-filter"><button
                                class="home-upcommingtrek-button home-upcommingtrek-button--active">
                                All
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Weekend Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Day Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Winter Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                               Monsoon Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Summer Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Full Moon Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Starry Night Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Village Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Cultural Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Lake Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Waterfall Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Mindful Treks
                            </button><button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                                Luxury Treks
                            </button>
                        <button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                            Solo Treks
                        </button>
                    <button class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color">
                        The Great Himalayan Treks
                    </button></div>
                        <div class="container">
                            <div class="row">
                                    <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                            href="#">
                                            <div class="home-upcommingtrek-card">
                                                    <img src="~/assets/uploads/upcoming-trek-1.jpg"
                                                        alt="Lorem Ipsum"
                                                        title="Lorem Ipsum"
                                                        class="home-upcommingtrek-image img-responsive">
                                                        <div class="trek-box-badge">Moderate-Difficult</div>
                                                <div class="home-upcommingtrek-card-description"><label
                                                        class="home-upcommingtrek-card-label primary-color">Pin Bhaba Pass Trek</label>
                                                    <h5 class="home-upcommingtrek-card-title">
                                                        (The Grandest Crossover Trek In Our Country)
                                                    </h5>
                                                    <ul class="trek-box-details">
                                                        <li class="trek-box-item">
                                                        <!-- <img loading="lazy" class="trek-box-item-icon lazyloaded" src="./~/assets/uploads/peak.svg" alt="Altitude"> -->
                                                        <div class="trek-box-item-detail">16,105 ft</div>
                                                        </li>
                                                        <li class="trek-box-item">
                                                        <!-- <img loading="lazy" class="trek-box-item-icon lazyloaded" src="./~/assets/uploads/calendar.svg" alt="Duration"> -->
                                                        <div class="trek-box-item-detail">9 days</div>
                                                        </li>
                                                        </ul>
                                                    <input type="submit" value="Book Now" id="upcoming-trek-button"/>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="col-12 col-md-4 col-lg-3 mb-5"><a href="#">
                                            <div class="home-upcommingtrek-card">
                                                    <img src="~/assets/uploads/upcoming-trek-2.jpg"
                                                        alt="Lorem Ipsum"
                                                        title="Lorem Ipsum"
                                                        class="home-upcommingtrek-image">
                                                        <div class="trek-box-badge">Moderate</div>
                                                <div class="home-upcommingtrek-card-description"><label
                                                        class="home-upcommingtrek-card-label primary-color">Chandratal Trek</label>
                                                    <h5 class="home-upcommingtrek-card-title">
                                                        (A Charming Trek in Spiti Valley)
                                                    </h5>
                                                    <ul class="trek-box-details">
                                                        <li class="trek-box-item">
                                                        <!-- <img loading="lazy" class="trek-box-item-icon lazyloaded" src="./~/assets/uploads/peak.svg" alt="Altitude"> -->
                                                        <div class="trek-box-item-detail">16,105 ft</div>
                                                        </li>
                                                        <li class="trek-box-item">
                                                        <!-- <img loading="lazy" class="trek-box-item-icon lazyloaded" src="./~/assets/uploads/calendar.svg" alt="Duration"> -->
                                                        <div class="trek-box-item-detail">9 days</div>
                                                        </li>
                                                        </ul>
                                                    <input type="submit" value="Book Now" id="upcoming-trek-button"/>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                            href="#">
                                            <div class="home-upcommingtrek-card">
                                                    <img src="~/assets/uploads/upcoming-trek-3.jpg"
                                                        alt="Lorem Ipsum"
                                                        class="home-upcommingtrek-image">
                                                        <div class="trek-box-badge">Easy-Moderate</div>
                                                <div class="home-upcommingtrek-card-description"><label
                                                        class="home-upcommingtrek-card-label primary-color">Goechala Trek</label>
                                                    <h5 class="home-upcommingtrek-card-title">
                                                        (A Trek That Takes You Close To The World’s Third Highest Mountain)
                                                    </h5>
                                                    <ul class="trek-box-details">
                                                        <li class="trek-box-item">
                                                        <!-- <img loading="lazy" class="trek-box-item-icon lazyloaded" src="./~/assets/uploads/peak.svg" alt="Altitude"> -->
                                                        <div class="trek-box-item-detail">16,105 ft</div>
                                                        </li>
                                                        <li class="trek-box-item">
                                                        <!-- <img loading="lazy" class="trek-box-item-icon lazyloaded" src="./~/assets/uploads/calendar.svg" alt="Duration"> -->
                                                        <div class="trek-box-item-detail">9 days</div>
                                                        </li>
                                                        </ul>
                                                    <input type="submit" value="Book Now" id="upcoming-trek-button"/>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                            href="#">
                                            <div class="home-upcommingtrek-card">
                                                    <img src="~/assets/uploads/upcoming-trek-4.jpg"
                                                        alt="Lorem Ipsum"
                                                        class="home-upcommingtrek-image">
                                                        <div class="trek-box-badge">Difficult</div>
                                                <div class="home-upcommingtrek-card-description"><label
                                                        class="home-upcommingtrek-card-label primary-color">Hampta Pass Trek</label>
                                                    <h5 class="home-upcommingtrek-card-title">
                                                        (One of The Most Dramatic Crossover Treks In The Himalayas)
                                                    </h5>
                                                    <ul class="trek-box-details">
                                                        <li class="trek-box-item">
                                                        <!-- <img loading="lazy" class="trek-box-item-icon lazyloaded" src="./~/assets/uploads/peak.svg" alt="Altitude"> -->
                                                        <div class="trek-box-item-detail">16,105 ft</div>
                                                        </li>
                                                        <li class="trek-box-item">
                                                        <!-- <img loading="lazy" class="trek-box-item-icon lazyloaded" src="./~/assets/uploads/calendar.svg" alt="Duration"> -->
                                                        <div class="trek-box-item-detail">9 days</div>
                                                        </li>
                                                        </ul>
                                                    <input type="submit" value="Book Now" id="upcoming-trek-button"/>
                                                </div>
                                            </div>
                                        </a></div>
                                </div>
                            <!---->
                        </div>
                    </div>
                    <div class="upcoming-trek-seemore text-center"><a href="#">
                        <button type="button" class="trek-button button-color see-more">
                            See More<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
                        </button>
                            </a></div>
                </div>

                <div class="trekers-list home-margin text-center">
                <div class="container">
                    <h2 class="altra-row-title primary-color divider-text"><span>India's biggest community of Trek Leads & Guides</span></h2>
                    <p class="altra-row-text">Find your guide - leads toprofile of all trek leads</p>
                
                    <div class="row">
                            <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                    href="#">
                                    <div class="home-trekleader-card text-left">
                                            <img src="~/assets/uploads/person.jpg"
                                                alt="Lorem Ipsum"
                                                title="Lorem Ipsum"
                                                class="home-trekleader-image">
                                        <div class="home-upcommingtrek-card-description"><label
                                                class="home-upcommingtrek-card-label primary-color">Lorem Ipsum</label>
                                                <div class="stars-box text-left">
                                                    <div class="stars-outer">
                                                        <div class="stars-inner">
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <p>4.6 Rating</p>
                                                </div>
                                                <h5 class="number-treks">112 Treks Completed</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                </a></div>
                            <div class="col-12 col-md-4 col-lg-3 mb-5"><a href="#">
                                <div class="home-trekleader-card text-left">
                                            <img src="~/assets/uploads/person.jpg"
                                                alt="Lorem Ipsum"
                                                title="Lorem Ipsum"
                                                class="home-trekleader-image">
                                        <div class="home-upcommingtrek-card-description"><label
                                                class="home-upcommingtrek-card-label primary-color">Lorem Ipsum</label>
                                                <div class="stars-box text-left">
                                                    <div class="stars-outer">
                                                        <div class="stars-inner">
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <p>4.6 Rating</p>
                                                </div>
                                                <h5 class="number-treks">100 Treks Completed</h5>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nemo culpa at asperiores corporis</p>
                                        </div>
                                    </div>
                                </a></div>
                            <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                    href="#">
                                    <div class="home-trekleader-card text-left">
                                            <img src="~/assets/uploads/person.jpg"
                                                alt="Lorem Ipsum"
                                                title="Lorem Ipsum"
                                                class="home-trekleader-image">
                                        <div class="home-upcommingtrek-card-description"><label
                                                class="home-upcommingtrek-card-label primary-color">Lorem Ipsum</label>
                                                <div class="stars-box text-left">
                                                    <div class="stars-outer">
                                                        <div class="stars-inner">
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <p>4.6 Rating</p>
                                                </div>
                                                <h5 class="number-treks">50 Treks Completed</h5>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, a. Exercitationem, tempora.</p>
                                        </div>
                                    </div>
                                </a></div>
                            <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                    href="#">
                                    <div class="home-trekleader-card text-left">
                                            <img src="~/assets/uploads/person.jpg"
                                                alt="Lorem Ipsum"
                                                class="home-trekleader-image">
                                        <div class="home-upcommingtrek-card-description"><label
                                                class="home-upcommingtrek-card-label primary-color">Lorem Ipsum</label>
                                                <div class="stars-box text-left">
                                                    <div class="stars-outer">
                                                        <div class="stars-inner">
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star checked" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <p>4.6 Rating</p>
                                                </div>
                                                <h5 class="number-treks">150 Treks Completed</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab, officiis odit vero ut fugit.</p>
                                        </div>
                                    </div>
                                </a></div>
                        </div>
                        <a href="./pages/leaders.html"><input type="button" value="Find your guide" class="trek-button button-color"/></a>
                    <!---->
                </div>
            </div>

                    <div class="home-featured-deals blog-section home-margin">
                        <div class="container">
                            <h2 class="altra-row-title text-center primary-color divider-text"><span>Get inspiration for your next trip</span></h2>
                        <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-1">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">The Adventure Of Trekking To Jalsu Pass</h4>
                            <p>The Flower Valley Of Himachal</p>
                        </div>
                    </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-2">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">Trek to Mahendragiri</h4>
                            <p>The Second Highest Peak In Odisha</p>
                        </div>
                    </div>
                        </div>
    
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-3">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">Buran Ghati Trek</h4>
                            <p>A Moderate-Difficult Trek</p>
                        </div>
                    </div>
                        </div>
    
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-4">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">An Experience of a Lifetime at Gidara Bugyal</h4>
                            <!-- <p>Lorem Ipsum</p> -->
                        </div>
                    </div>
                        </div>
    
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-5">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">Mukta Top Trek</h4>
                            <p>An unforgettable experience of a first-time trekker</p>
                        </div>
                    </div>
                        </div>
    
                    </div>
                </div>
    
                    </div>



                <div class="home-testimonials home-margin">
                    <div class="container text-center">
                        <h2 class="altra-row-title text-center primary-color divider-text"><span>Treks Explorers love </span></h2>
                            <h4 class="altra-row-text">
                                What people are saying about us
                            </h4>
                             <div class="row">
                                <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                    href="#"
                                    target="_blank">
                                    <div class="home-testimonials-box">
                                        <img
                                            src="~/assets/uploads/testimonial-1.jpg"
                                            alt="Testimonial"
                                            class="home-testimonials-img">
                                        <div class="home-testimonials-box-ratings">

                                            <h4 class="home-testimonials-person-name">Pin Bhaba Pass Trek</h4>
                                            <label class="home-testimonials-person-detail">Emma </label>
                                            <p class="home-testimonials-person-text text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint laudantium
                                            </p>
                                    </div>
                                    </div>
                                </a></div>
                               
                                    <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                        href="#"
                                        target="_blank">
                                        <div class="home-testimonials-box">
                                            <img
                                                src="~/assets/uploads/testimonial-2.jpg"
                                                alt="Testimonial"
                                                class="home-testimonials-img">
                                            <div class="home-testimonials-box-ratings">
                                                   
                                            <h4 class="home-testimonials-person-name">Hampta Pass Trek</h4>
                                            <label class="home-testimonials-person-detail">Bella </label>
                                            <p class="home-testimonials-person-text text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint laudantium
                                            </p>
                                        </div>
                                        </div>
                                    </a></div>
                                    <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                        href="#"
                                        target="_blank">
                                        <div class="home-testimonials-box">
                                            <img
                                                src="~/assets/uploads/testimonial-3.jpg"
                                                alt="Testimonial"
                                                class="home-testimonials-img">
                                            <div class="home-testimonials-box-ratings">
                                            
                                                <h4 class="home-testimonials-person-name">Kedartal Trek</h4>
                                                <label class="home-testimonials-person-detail">Amanda </label>
                                                <p class="home-testimonials-person-text text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint laudantium
                                                </p>
                                        </div>
                                        </div>
                                    </a></div>
                                    <div class="col-12 col-md-4 col-lg-3 mb-5"><a
                                        href="#"
                                        target="_blank">
                                        <div class="home-testimonials-box">
                                            <img
                                                src="~/assets/uploads/testimonial-4.jpg"
                                                alt="Testimonial"
                                                class="home-testimonials-img">
                                            <div class="home-testimonials-box-ratings">
                                                  
                                            
                                                <h4 class="home-testimonials-person-name">Goechala Trek</h4>
                                                <label class="home-testimonials-person-detail">Vikram</label>
                                                <p class="home-testimonials-person-text text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint laudantium
                                                </p>
                                        </div>
                                        </div>
                                    </a></div>
                             </div> <!-- row ends -->
                        </div>
                    </div>
            </div>

<div class="home-newsletter">
    <div class="container">
        <div class="newsletter-box">
            <h2 class="altra-row-title text-center">Subscribe to stay connected</h2>
            <p class="altra-row-text text-center">Sign up and we’ll send you the details of upcoming treks</p>
            <form class="newsletter_frm">
        <input type="email" id="newsletter" placeholder="Enter your mail">
        <input type="submit" class="button-color newsletter_btn" value="Subscribe">
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
      </div> <!-- row ends -->
        <div class="col-12 col-md-12 col-lg-12">
            <hr />
            <p class="copyright">2020-2021 Explore alternate travels Pvt Ltd. All Rights Reserved.</p>
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
                
                
</template>
<script>
export default {
  name: "IndexPage",
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
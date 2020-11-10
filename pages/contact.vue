<template>
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


<div class="contact-page padding-top-1 altra-heading">
            <div class="container">
                <h2 class="altra-row-title text-left primary-color divider-text"><span>Contact Us </span></h2>
                <h4 class="altra-row-text">Contact us anytime from anywhere</h4>
                <div class="contact-deails_page margin-bottom">
                <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 coonect-attry">
                <div class="contact_address">
                
                <!--  1  -->
                <div class="addr_box1">
                <div class="img_addr">
                <img src="~/assets/uploads/our_office.png" class="img-responsive" alt="lorem ipsum">
                </div> <!--  img_addr  ends  -->
                <div class="addr_txt">
                <p class="ou_offc">Our Office</p>
                <p class="off_detail">Altra Travels</p>
                </div> <!--  addr_txt ends  -->
                <div class="clearfix"></div>
                
                
                </div> <!--  address_box1 ends  -->
                
                <!--  2   -->
                <div class="addr_box1">
                <div class="img_addr">
                <img src="~/assets/uploads/emial.png" class="img-responsive" alt="lorem ipsum">
                </div> <!--  img_addr  ends  -->
                <div class="addr_txt">
                <p class="ou_offc">Email Address</p>
                <p class="off_detail line_botm"><a href="mailto:altratravels.com">altratravels.com</a></p>
                </div> <!--  addr_txt ends  -->
                <div class="clearfix"></div>
                
                
                </div> <!--  address_box1 ends  -->
                
                
                <!--  3   -->
                <div class="addr_box1">
                <div class="img_addr">
                <img src="~/assets/uploads/ph_fax.png" class="img-responsive" alt="lorem ipsum">
                </div> <!--  img_addr  ends  -->
                <div class="addr_txt">
                <p class="ou_offc">Phone and Fax</p>
                <p class="off_detail"><strong>Phone:</strong> (123) 456-7891</p>
                <p class="off_detail"><strong>Fax:</strong> (123) 456-7891</p>
                </div> <!--  addr_txt ends  -->
                <div class="clearfix"></div>
                
                
                </div> <!--  address_box1 ends  -->
                
                
                </div> <!--  contact address  ends  -->
                </div> <!--  coloumn ends  -->
                
                <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div class="contact_form_addr">
                <p class="feel_free">Feel free to talk to us  at any time  or send details with us by filling below form.
                Please be patient while waiting for response.(24/7 Support!)</p>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 coonect-attry">
                <input class="form-control contact_us" id="fname" placeholder="First Name" type="text">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 coonect-attry">
                <input class="form-control contact_us" id="lname" placeholder="Last Name" type="text">
                </div>
                
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 coonect-attry">
                <input class="form-control contact_us" id="email" placeholder="Email" type="text">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 coonect-attry">
                <input class="form-control contact_us" id="phone" placeholder="Phone" type="text">
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 coonect-attry">
                <textarea placeholder="Details" class="contact_us_textarea"></textarea>
                </div>
                <div class="clearfix"></div>
                <div class="contct_btn">
                <button type="submit" class="btn btn-default submit_btn_contact button-color">Submit Deals</button>
                
                </div>
                </div> <!--  contact_form_addr  ends  -->
                
                </div> <!--  coloumn ends  -->
                <div class="clearfix"></div>
            </div>
        </div>
                
                </div> <!--  container ends  -->
                
                
                <div class="faq-section margin-bottom">
                <div class="container">
                    <div class="row">
                        <h3 class="faq-section">FAQs</h3>
                        <ul class="my-toggle">
                            <li>
                                <a class="view">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <h3 class="toggle-title primary-color">Toggle 1 (click to view)</h3>
                                        </div>
                                    </div>
                                </a>
                                <div class="detail">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="toggle-wrapper">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="view">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <h3 class="toggle-title">Toggle 2 (click to view)</h3>
                                        </div>
                                    </div>
                                </a>
                                <div class="detail">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="toggle-wrapper">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="view">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <h3 class="toggle-title">Toggle 3 (click to view)</h3>
                                        </div>
                                    </div>
                                </a>
                                <div class="detail">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="toggle-wrapper">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                
                </div> <!--  container ends  -->
                </div> <!--  map ends  -->
            </div>

                
           <!-- <div class="home-newsletter">
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
      </div> 
        <div class="col-12 col-md-12 col-lg-12">
            <hr />
            <p class="copyright">2020-2021 Explore alternate travels Pvt Ltd. All Rights Reserved.</p>
        </div>
    </div>
</div> -->
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
                        
            
</template>
<script>
export default {
    name: 'contact',
    props: {
    showBackgroundLogo: Boolean
  },
}
</script>
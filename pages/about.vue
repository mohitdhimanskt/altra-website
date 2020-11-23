<template>
 
 <div data-server-rendered="true">
        <!---->
        <div id="layout">
            <div class="home">
          
                

            <div class="About-us-page padding-top-1 altra-heading">
            <div class="container">
                <h2 class="altra-row-title text-left primary-color divider-text"><span>About Us </span></h2>
    <h4 class="altra-row-text">Know more About us..</h4>
                
                <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 abt_no-padding">
                <div class="lanmark_text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                
                </div>
                </div> <!--  coloumn ends  -->
                
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div class="abt_side">
                <opti-image :src="require('~/assets/uploads/upcoming-trek-3.jpg')" class="img-responsive" alt="lorem ipsum"/>
                </div>
                </div> <!--  coloumn ends  -->
                <div class="clearfix"></div>
                </div> <!--  container ends  -->
                <div class="home-aboutus grey">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="altra-row-title primary-color">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </h2>
                            <p class="altra-row-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center home-aboutus-section">
                                <opti-image title="New destinations logo" :src="require('~/assets/uploads/map.svg')" alt="lorem ipsum"/>
                                <h4 class="home-aboutus-title">
                                    All India Treks
                                </h4>
                                <p class="home-aboutus-text">
                                    One-way or round trip, you decide where to start and where to finish.
                                </p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center home-aboutus-section">
                                <opti-image title="campervan icon" :src="require('~/assets/uploads/place.svg')" alt="lorem ipsum"/>
                                <h4 class="home-aboutus-title">
                                    Integrated rental marketplace
                                </h4>
                                <p class="home-aboutus-text">
                                    We own and operate a fleet of 1.200+ RVs and are launching a fully integrated RV
                                    rental marketplace.
                                </p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center home-aboutus-section">
                                <opti-image title="price/quality logo" :src="require('~/assets/uploads/rank.svg')" alt="lorem ipsum" />
                                <h4 class="home-aboutus-title">
                                    1st in price/quality
                                </h4>
                                <p class="home-aboutus-text">
                                    Service and safety are central to our approach. We offer unrivalled experiences
                                    at competitive prices.
                                </p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center home-aboutus-section">
                                <opti-image title="Help logo" :src="require('~/assets/uploads/phone.svg')" alt="lorem ipsum"/>
                                <h4 class="home-aboutus-title">
                                    100% digital
                                </h4>
                                <p class="home-aboutus-text">
                                    We’re fully digital for a seamless experience, including transactions, online
                                    check-in, and vehicle tutorials.
                                </p>
                            </div>
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
  name: "about",
layout:'auth',
  methods:{
      getImageRequirePath(path){
      return require(path);
    },
  }
};
</script>

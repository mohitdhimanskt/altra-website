<template>
  <div class="home-featured-deals home-margin">
    <div class="container">
      <h2 class="altra-row-title text-center primary-color divider-text">
        <span>Featured Deals</span>
      </h2>
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6  text-center deals-box" 
           v-for="(items, index) in featuredArr" :key="items.itemClass"
           :class="[ index > 1 ? 'col-lg-4 col-xl-4' : 'col-lg-6 col-xl-6']"
           >
           <div>
          <opti-image class="featured-deals"
              v-bind:style='{ backgroundImage: "url(" + items.url + ")" }' >
            <div class="overlay-image"></div>
             <div class="featured-deals-content"> 
          <h4 class="home-featured-deals-title">{{items.title}}</h4>
          <p>{{items.description}}</p>
            <!-- </div> -->
            <!-- <div class="overlay-image"></div>
            <div class="featured-deals-content">
              <h4 class="home-featured-deals-title">Trekking</h4>
              <p>Lorem Ipsum</p>
            </div> -->
             </div>
          </opti-image>
          </div>
        </div>
        </div>
        </div>
        
        <!-- <div
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center deals-box"
        >
          <div class="featured-deals featured-deals-image-2">
            <div class="overlay-image"></div>
            <div class="featured-deals-content">
              <h4 class="home-featured-deals-title">Trekking</h4>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div> -->
<!-- 
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center deals-box"
        >
          <div class="featured-deals featured-deals-image-3">
            <div class="overlay-image"></div>
            <div class="featured-deals-content">
              <h4 class="home-featured-deals-title">Trekking</h4>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div> -->

        <!-- <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center deals-box"
        >
          <div class="featured-deals featured-deals-image-4">
            <div class="overlay-image"></div>
            <div class="featured-deals-content">
              <h4 class="home-featured-deals-title">Trekking</h4>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div> -->

        <!-- <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center deals-box"
        >
          <div class="featured-deals featured-deals-image-5">
            <div class="overlay-image"></div>
            <div class="featured-deals-content">
              <h4 class="home-featured-deals-title">Trekking</h4>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div> -->
      </div>
    
</template>

<script>
export default {
  name: "FeaturedDeal",
  data:function(){
    return{
      featuredArr:[
        {
          itemClass: 'item-1',
          title:"Trekking",
          url:require('../assets/uploads/1-1.jpg'),
          description:"Lorem Ipsum"
        },
        { 
          itemClass: 'item-2',
          title:"Trekking",
          url:require('../assets/uploads/chadar-trek-tundup.jpg'),
          description:"Lorem Ipsum"
        },
        {
          itemClass: 'item-3',
          title:"Trekking",
          url:require('../assets/uploads/kulu-manali-himachal-pradesh.jpg'),
          description:"Lorem Ipsum"
        },
        {
         itemClass: 'item-4',
          title:"Trekking",
          url:require('../assets/uploads/lake.jpg'),
          description:"Lorem Ipsum"
        },
        {
          itemClass: 'item-5',
          title:"Trekking",
          url:require('../assets/uploads/1-1.jpg'),
          description:"lorem Ipsum"
        }
      ],
    }
  },
  methods:{
    getImageRequirePath(path){
      return require(path);
    },
  }
};
</script>

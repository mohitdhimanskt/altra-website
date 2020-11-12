<template>
  <div class="home-featured-deals blog-section home-margin">
    <div class="container">
      <h2 class="altra-row-title text-center primary-color divider-text">
        <span>Get inspiration for your next trip</span>
      </h2>
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6 text-left home-blog-box"
          v-for="(items, index) in inspireArr"
          :key="items.itemClass"
          :class="[index <= 1 ? 'col-lg-6 col-xl-6' : 'col-lg-4 col-xl-4']"
        >
          <div
            class="featured-deals"
            v-bind:style="{ backgroundImage: 'url(' + items.url + ')' }"
          >
            <div class="overlay-image"></div>
            <div class="featured-deals-content">
              <h4 class="home-featured-deals-title">{{ items.title }}</h4>
              <p>{{ items.description }}</p>
            </div>
          </div>
        </div>
        <!-- <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-2">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">Trek to Mahendragiri</h4>
                            <p>The Second Highest Peak In Odisha</p>
                        </div>
                    </div>
                        </div> -->

        <!-- <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-3">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">Buran Ghati Trek</h4>
                            <p>A Moderate-Difficult Trek</p>
                        </div>
                    </div>
                        </div> -->
        <!--     
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-4">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">An Experience of a Lifetime at Gidara Bugyal</h4>
                           
                        </div>
                    </div>
                        </div> -->
        <!--     
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left home-blog-box">
                            <div class="featured-deals home-blog-image-5">
                                <div class="overlay-image"></div>
                            <div class="featured-deals-content">
                            <h4 class="home-featured-deals-title">Mukta Top Trek</h4>
                            <p>An unforgettable experience of a first-time trekker</p>
                        </div>
                    </div>
                        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Inspiration",
  data: function() {
    return {
      inspireArr: [
        {
          itemClass: "item-1",
          title: "The Adventure Of Trekking To Jalsu Pass",
          url: require("../assets/uploads/jalsu-trek.jpg"),
          description: "The Flower Valley Of Himachal"
        },
        {
          itemClass: "item-2",
          title: "Trek to Mahendragiri",
          url: require("../assets/uploads/mahendragiri-trek.jpg"),
          description: "The Second Highest Peak In Odisha"
        },
        {
          itemClass: "item-3",
          title: "Buran Ghati Trek",
          url: require("../assets/uploads/buran-trek.jpg"),
          description: "A Moderate-Difficult Trek"
        },
        {
          itemClass: "item-4",
          title: "An Experience of a Lifetime at Gidara Bugyal",
          url: require("../assets/uploads/gidara-bugyal-trek.jpeg")
        },
        {
          itemClass: "item-5",
          title: "Mukta Top Trek",
          url: require("../assets/uploads/mukta-trek.jpg"),
          description: "An unforgettable experience of a first-time trekker"
        }
      ]
    };
  }
};
</script>

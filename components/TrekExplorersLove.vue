<template>
  <div class="home-testimonials home-margin">
    <div class="container text-center">
      <h2 class="altra-row-title text-center primary-color divider-text">
        <span>Treks Explorers love </span>
      </h2>
      <h4 class="altra-row-text">
        What people are saying about us
      </h4>
      <div class="row">
        <div
          class="col-12 col-md-4 col-lg-3 mb-5"
          v-for="items in explorersArr"
          :key="items.itemClass"
        >
          <a href="#" target="_blank">
            <div class="home-testimonials-box">
              <img
                class="home-testimonials-img"
              
                :src="items.url"
                
              />

              <div class="home-testimonials-box-ratings">
                <h4 class="home-testimonials-person-name">
                  {{ items.title }}
                </h4>
                <label class="home-testimonials-person-detail"
                  >{{ items.author }}
                </label>
                <p class="home-testimonials-person-text text-left">
                  {{ items.description }}
                </p>
              </div>
            </div>
          </a>
        </div>

        <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
          <a href="#" target="_blank">
            <div class="home-testimonials-box">
              <img
                src="~/assets/uploads/testimonial-2.jpg"
                alt="Testimonial"
                class="home-testimonials-img"
              />
              <div class="home-testimonials-box-ratings">
                <h4 class="home-testimonials-person-name">Hampta Pass Trek</h4>
                <label class="home-testimonials-person-detail">Bella </label>
                <p class="home-testimonials-person-text text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sint laudantium
                </p>
              </div>
            </div>
          </a>
        </div> -->
        <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
          <a href="#" target="_blank">
            <div class="home-testimonials-box">
              <img
                src="~/assets/uploads/testimonial-3.jpg"
                alt="Testimonial"
                class="home-testimonials-img"
              />
              <div class="home-testimonials-box-ratings">
                <h4 class="home-testimonials-person-name">Kedartal Trek</h4>
                <label class="home-testimonials-person-detail">Amanda </label>
                <p class="home-testimonials-person-text text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sint laudantium
                </p>
              </div>
            </div>
          </a>
        </div> -->
        <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
          <a href="#" target="_blank">
            <div class="home-testimonials-box">
              <img
                src="~/assets/uploads/testimonial-4.jpg"
                alt="Testimonial"
                class="home-testimonials-img"
              />
              <div class="home-testimonials-box-ratings">
                <h4 class="home-testimonials-person-name">Goechala Trek</h4>
                <label class="home-testimonials-person-detail">Vikram</label>
                <p class="home-testimonials-person-text text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sint laudantium
                </p>
              </div>
            </div>
          </a>
        </div> -->
      </div>
      <!-- row ends -->
    </div>
  </div>
</template>
<script>
export default {
  name: "TrekExplorersLove",
  data: function() {
    return {
      explorersArr: [
        {
          itemClass: "item-1",
          title: "Pin Bhaba Pass Trek",
          url: require("~/assets/uploads/testimonial-1.jpg"),
          author: "Emma",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint laudantium"
        },
        {
          itemClass: "item-2",
          title: "Hampta Pass Trek",
          url: require("../assets/uploads/testimonial-2.jpg"),
          author: "Bella",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint laudantium"
        },
        {
          itemClass: "item-3",
          title: "Kedartal Trek",
          url: require("../assets/uploads/testimonial-3.jpg"),
          author: "Amanda",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint laudantium"
        },
        {
          itemClass: "item-4",
          title: "Goechala Trek",
          url: require("../assets/uploads/testimonial-4.jpg"),
          author: "Vikram",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint laudantium"
        }
      ]
    };
  }
};
</script>

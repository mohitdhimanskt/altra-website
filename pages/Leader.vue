<template>
  <div data-server-rendered="true">
    <!---->
    <div id="layout">
      <div class="home">
        
        <!-- header-logo ends-->

        <div class="leaders-page padding-top-1 altra-heading">
          <div class="container">
            <h2 class="altra-row-title text-left primary-color divider-text">
              <span>Trek Leaders </span>
            </h2>
            <h4 class="altra-row-text">Know Our Trek Leaders</h4>
            <div class="row">
              <div
                class="col-12 col-md-4 col-lg-3 mb-5"
                v-for="items in leaderArr"
                :key="items.itemClass"
              >
                <nuxt-link to="/">
                  <div class="home-trekleader-card">
                    <opti-image class="home-trekleader-image" :src="items.url" />
                    <div class="home-upcommingtrek-card-description">
                      <label
                        class="home-upcommingtrek-card-label primary-color"
                        >{{ items.name }}</label
                      >
                      <p class="trek-company">{{ items.title }}</p>
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
                        <p>{{ items.content }}</p>
                      </div>
                      <h5 class="number-treks">{{ items.author }}</h5>
                      <p>
                        {{ items.description }}
                      </p>
                    </div>
                  </div>
                </nuxt-link>
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
  name: "leader",
  
    data: function() {
      return {
        leaderArr: [
          {
            itemClass: "item-1",
            name: "Vikram",
            title: "Farout Himalayas",
            url: require("~/assets/uploads/person.jpg"),
            author: "100 Treks Completed",
            content: "4.6 Rating",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            itemClass: "item-2",
            name: "Alexa",
            title: "Lorem Ipsum",
            url: require("~/assets/uploads/person.jpg"),
            author: "150 Treks Completed",
            content: "4.6 Rating",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt nemo culpa at asperiores corporis"
          },
          {
            itemClass: "item-3",
            name: "Bella",
            title: "Lorem Ipsum",
            url: require("~/assets/uploads/person.jpg"),
            author: "200 Treks Completed",
            content: "4.6 Rating",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eum, a. Exercitationem, tempora."
          },
          {
            itemClass: "item-4",
            name: "Emma",
            title: "Lorem Ipsum",
            url: require("~/assets/uploads/person.jpg"),
            author: "100 Treks Completed",
            content: "4.6 Rating",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor ab, officiis odit vero ut fugit."
          },
          {
            itemClass: "item-5",
            name: "Amanda",
            title: "Lorem Ipsum",
            url: require("~/assets/uploads/person.jpg"),
            author: "80 Treks Completed",
            content: "4.6 Rating",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            itemClass: "item-6",
            name: "Bella",
            title: "Lorem Ipsum",
            url: require("~/assets/uploads/person.jpg"),
            author: "50 Treks Completed",
            content: "4.6 Rating",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt nemo culpa at asperiores corporis"
          },
          {
            itemClass: "item-7",
            name: "Amanda",
            title: "Lorem Ipsum",
            url: require("~/assets/uploads/person.jpg"),
            author: "100 Treks Completed",
            content: "4.6 Rating",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eum, a. Exercitationem, tempora."
          },
          {
            itemClass: "item-8",
            name: "Emma",
            title: "Lorem Ipsum",
            url: require("~/assets/uploads/person.jpg"),
            author: "100 Treks Completed",
            content: "4.6 Rating",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor ab, officiis odit vero ut fugit."
          }
        ]
      };
    },
  methods:{
 getImageRequirePath(path){
      return require(path);
    },
  },
  layout:'auth'
  
};
</script>

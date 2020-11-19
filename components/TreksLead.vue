<template>
  <div class="trekers-list home-margin text-center">
    <div class="container">
      <h2 class="altra-row-title primary-color divider-text">
        <span>India's biggest community of Trek Leads & Guides</span>
      </h2>
      <p class="altra-row-text">
        Find your guide - leads toprofile of all trek leads
      </p>

      <div class="row">
        <div
          class="col-12 col-md-4 col-lg-3 mb-5"
          v-for="items in leadsArr"
          :key="items.itemClass"
        >
          <nuxt-link to="/">
            <div class="home-trekleader-card text-left">
              <opti-image class="home-trekleader-image" :src="items.url" />
              <div class="home-upcommingtrek-card-description">
                <label class="home-upcommingtrek-card-label primary-color">{{
                  items.title
                }}</label>

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
        <!-- <div
          class="col-12 col-md-4 col-lg-3 mb-5"
          v-for="items in leadsArr"
          :key="items.itemClass"
        >
          <a href="#">
            <div class="home-trekleader-card text-left">
              <img class="home-trekleader-image" :src="items.url" />
              <div class="home-upcommingtrek-card-description">
                <label class="home-upcommingtrek-card-label primary-color">{{
                  items.title
                }}</label>
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
                  <p>{{ items.content }}</p>
                </div>
                <h5 class="number-treks">{{ items.author }}</h5>
                <p>{{ items.description }}</p>
              </div>
            </div>
          </a>
        </div> -->
        <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
          <a href="#">
            <div class="home-trekleader-card text-left">
              <img
                src="~/assets/uploads/person.jpg"
                alt="Lorem Ipsum"
                title="Lorem Ipsum"
                class="home-trekleader-image"
              />
              <div class="home-upcommingtrek-card-description">
                <label class="home-upcommingtrek-card-label primary-color"
                  >Lorem Ipsum</label
                >
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
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deserunt nemo culpa at asperiores corporis
                </p>
              </div>
            </div>
          </a>
        </div> -->
        <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
          <a href="#">
            <div class="home-trekleader-card text-left">
              <img
                src="~/assets/uploads/person.jpg"
                alt="Lorem Ipsum"
                title="Lorem Ipsum"
                class="home-trekleader-image"
              />
              <div class="home-upcommingtrek-card-description">
                <label class="home-upcommingtrek-card-label primary-color"
                  >Lorem Ipsum</label
                >
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
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                  a. Exercitationem, tempora.
                </p>
              </div>
            </div>
          </a>
        </div> -->
        <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
          <a href="#">
            <div class="home-trekleader-card text-left">
              <img
                src="~/assets/uploads/person.jpg"
                alt="Lorem Ipsum"
                class="home-trekleader-image"
              />
              <div class="home-upcommingtrek-card-description">
                <label class="home-upcommingtrek-card-label primary-color"
                  >Lorem Ipsum</label
                >
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  ab, officiis odit vero ut fugit.
                </p>
              </div>
            </div>
          </a>
        </div> -->
      </div>
      <nuxt-link to="leader"
        ><input
          type="button"
          value="Find your guide"
          class="trek-button button-color"
      /></nuxt-link>
      <!---->
    </div>
  </div>
</template>
<script>
export default {
  name: "TreksLead",
  data: function() {
    return {
      leadsArr: [
        {
          itemClass: "item-1",
          title: "Lorem Ipsum",
          url: require("~/assets/uploads/person.jpg"),
          author: "112 Treks Completed",
          content: "4.6 Rating",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          itemClass: "item-2",
          title: "Lorem Ipsum",
          url: require("~/assets/uploads/person.jpg"),
          author: "100 Treks Completed",
          content: "4.6 Rating",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt nemo culpa at asperiores corporis"
        },
        {
          itemClass: "item-3",
          title: "Lorem Ipsum",
          url: require("~/assets/uploads/person.jpg"),
          author: "50 Treks Completed",
          content: "4.6 Rating",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eum, a. Exercitationem, tempora."
        },
        {
          itemClass: "item-4",
          title: "Lorem Ipsum",
          url: require("~/assets/uploads/person.jpg"),
          author: "150 Treks Completed",
          content: "4.6 Rating",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor ab, officiis odit vero ut fugit."
        }
      ]
    };
  }
};
</script>

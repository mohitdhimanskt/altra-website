<template>
  <div class="home-upcomingtrek home-margin">
    <div class="container">
      <div class="text-center">
        <div>
          <h2 class="altra-row-title text-center primary-color divider-text">
            <span>Trek Categories </span>
          </h2>
          <p class="altra-row-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="container overflow-auto home-upcommingtrek-filter">
        <button
          class="home-upcommingtrek-button home-upcommingtrek-button--active"
        >
          All</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Weekend Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Day Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Winter Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Monsoon Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Summer Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Full Moon Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Starry Night Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Village Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Cultural Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Lake Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Waterfall Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Mindful Treks</button
        ><button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Luxury Treks
        </button>
        <button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          Solo Treks
        </button>
        <button
          class="home-upcommingtrek-button btn-lg home-upcommingtrek-button--outline secondary-color"
        >
          The Great Himalayan Treks
        </button>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-4 col-lg-3 mb-5"
            v-for="items in trekscateArr"
            :key="items.itemClass"
          >
            <nuxt-link to="treks">
              <div class="home-upcommingtrek-card">
                <img
              
                  class="home-upcommingtrek-image"
                  :src="items.url"
                />
                <div class="trek-box-badge">{{ items.title }}</div>
                <div class="home-upcommingtrek-card-description">
                  <label class="home-upcommingtrek-card-label primary-color">{{
                    items.author
                  }}</label>
                  <h5 class="home-upcommingtrek-card-title">
                    {{ items.content }}
                  </h5>
                  <ul class="trek-box-details">
                    <li class="trek-box-item">
                      <img
                        loading="lazy"
                        class="trek-box-item-icon lazyloaded"
                        src="../assets/uploads/peak.svg"
                        alt="Altitude"
                      />
                      <div class="trek-box-item-detail">
                        {{ items.description }}
                      </div>
                    </li>
                    <li class="trek-box-item">
                      <img
                        loading="lazy"
                        class="trek-box-item-icon lazyloaded"
                        src="../assets/uploads/calendar.svg"
                        alt="Duration"
                      />
                      <div class="trek-box-item-detail">{{ items.day }}</div>
                    </li>
                  </ul>
                  <input
                    type="submit"
                    value="Book Now"
                    id="upcoming-trek-button"
                  />
                </div>
              </div>
            </nuxt-link>
          </div>
          <!-- <div class="col-12 col-md-4 col-lg-3 mb-5"
            v-for="items in trekscateArr"
          :key="items.itemClass"
          >
            <a href="#">
              <div class="home-upcommingtrek-card">
                <img
                 
                  class="home-upcommingtrek-image img-responsive"
                  :src="items.url"
                />
                <div class="trek-box-badge">{{items.title}}</div>
                <div class="home-upcommingtrek-card-description">
                  <label class="home-upcommingtrek-card-label primary-color"
                    >{{items.author}}</label
                  >
                  <h5 class="home-upcommingtrek-card-title">
                    {{items.content}}
                  </h5>
                  <ul class="trek-box-details">
                    <li class="trek-box-item">
                      <div class="trek-box-item-detail">{{items.description}}</div>
                    </li>
                    <li class="trek-box-item">
                      <div class="trek-box-item-detail">{{items.day}}</div>
                    </li>
                  </ul>
                  <input
                    type="submit"
                    value="Book Now"
                    id="upcoming-trek-button"
                  />
                </div>
              </div>
            </a>
          </div> -->
          <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
            <a href="#">
              <div class="home-upcommingtrek-card">
                <img
                  src="~/assets/uploads/upcoming-trek-2.jpg"
                  alt="Lorem Ipsum"
                  title="Lorem Ipsum"
                  class="home-upcommingtrek-image"
                />
                <div class="trek-box-badge">Moderate</div>
                <div class="home-upcommingtrek-card-description">
                  <label class="home-upcommingtrek-card-label primary-color"
                    >Chandratal Trek</label
                  >
                  <h5 class="home-upcommingtrek-card-title">
                    (A Charming Trek in Spiti Valley)
                  </h5>
                  <ul class="trek-box-details">
                    <li class="trek-box-item">
                      <div class="trek-box-item-detail">16,105 ft</div>
                    </li>
                    <li class="trek-box-item">
                      <div class="trek-box-item-detail">9 days</div>
                    </li>
                  </ul>
                  <input
                    type="submit"
                    value="Book Now"
                    id="upcoming-trek-button"
                  />
                </div>
              </div>
            </a>
          </div> -->
          <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
            <a href="#">
              <div class="home-upcommingtrek-card">
                <img
                  src="~/assets/uploads/upcoming-trek-3.jpg"
                  alt="Lorem Ipsum"
                  class="home-upcommingtrek-image"
                />
                <div class="trek-box-badge">Easy-Moderate</div>
                <div class="home-upcommingtrek-card-description">
                  <label class="home-upcommingtrek-card-label primary-color"
                    >Goechala Trek</label
                  >
                  <h5 class="home-upcommingtrek-card-title">
                    (A Trek That Takes You Close To The World’s Third Highest
                    Mountain)
                  </h5>
                  <ul class="trek-box-details">
                    <li class="trek-box-item">
                      <div class="trek-box-item-detail">16,105 ft</div>
                    </li>
                    <li class="trek-box-item">
                      <div class="trek-box-item-detail">9 days</div>
                    </li>
                  </ul>
                  <input
                    type="submit"
                    value="Book Now"
                    id="upcoming-trek-button"
                  />
                </div>
              </div>
            </a>
          </div> -->
          <!-- <div class="col-12 col-md-4 col-lg-3 mb-5">
            <a href="#">
              <div class="home-upcommingtrek-card">
                <img
                  src="~/assets/uploads/upcoming-trek-4.jpg"
                  alt="Lorem Ipsum"
                  class="home-upcommingtrek-image"
                />
                <div class="trek-box-badge">Difficult</div>
                <div class="home-upcommingtrek-card-description">
                  <label class="home-upcommingtrek-card-label primary-color"
                    >Hampta Pass Trek</label
                  >
                  <h5 class="home-upcommingtrek-card-title">
                    (One of The Most Dramatic Crossover Treks In The Himalayas)
                  </h5>
                  <ul class="trek-box-details">
                    <li class="trek-box-item">
                      <div class="trek-box-item-detail">16,105 ft</div>
                    </li>
                    <li class="trek-box-item">
                      <div class="trek-box-item-detail">9 days</div>
                    </li>
                  </ul>
                  <input
                    type="submit"
                    value="Book Now"
                    id="upcoming-trek-button"
                  />
                </div>
              </div>
            </a>
          </div> -->
        </div>
        <!---->
      </div>
    </div>
    <div class="upcoming-trek-seemore text-center">
      <a href="#">
        <button type="button" class="trek-button button-color see-more">
          See More<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
        </button>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "TreksCategories",
  data: function() {
    return {
      trekscateArr: [
        {
          itemClass: "item-1",
          title: "Moderate-Difficult",
          url: require("~/assets/uploads/upcoming-trek-1.jpg"),
          author: "Pin Bhaba Pass Trek",
          content: "(The Grandest Crossover Trek In Our Country)",
          description: "16,105 ft",
          day: "9 days"
        },
        {
          itemClass: "item-2",
          title: "Moderate",
          url: require("~/assets/uploads/upcoming-trek-2.jpg"),
          author: "Chandratal Trek",
          content: "(A Chandratal Trek in Spiti Valley)",
          description: "16,105 ft",
          day: "9 days"
        },
        {
          itemClass: "item-3",
          title: "Easy-Moderate",
          url: require("~/assets/uploads/upcoming-trek-3.jpg"),
          author: "Goechala Trek",
          content:
            "(A Trek That Takes You Close To The World's Thrid Highest Mountain)",
          description: "16,105 ft",
          day: "9 days"
        },
        {
          itemClass: "item-4",
          title: "Difficult",
          url: require("~/assets/uploads/upcoming-trek-4.jpg"),
          author: "Hampta Pass Trek",
          content: "(one of The Most Dramatic Crossover Treks in Himalayas)",
          description: "16,105 ft",
          day: "9 days"
        }
      ]
    };
  }
};
</script>

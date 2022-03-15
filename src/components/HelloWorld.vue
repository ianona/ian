<template>
  <q-page class="flex flex-center">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :padding="true"
      :arrows="false"
      :navigation="true"
      control-color="black"
    >
      <template v-slot:navigation-icon="{ active }">
        <q-linear-progress
          v-if="active"
          :value="(progress / 5) * 0.2"
          class="q-mt-md"
        />
      </template>
      <q-carousel-slide name="one" class="column no-wrap flex-center">
        <!-- <q-icon name="style" size="56px" /> -->
        <div class="q-mt-md text-center">
          <h1>Hello, my name is Ian Ona</h1>
          <h4>
            and welcome to my resume website
            <q-icon color="primary" name="fas fa-smile" />
          </h4>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="two" class="column no-wrap flex-center">
        <!-- <q-icon name="live_tv" size="56px" /> -->
        <div class="q-mt-md text-center">
          <div class="column items-center" style="height: auto">
            <div class="col col-md-4">
              <h1>I am a software engineer</h1>
            </div>
            <div class="col col-md-4">
              <h4>
                based in Taipei and currently looking for job opportunities in
                tech
                <!-- <br/> -->
                <!-- in both large tech companies and startup spaces -->
              </h4>
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="three" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
          <h1>Exercise is cool too</h1>
          <h4 transition-show="jump-down">
            I also like cooking, reviewing movies, and reading (anything)
          </h4>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!-- place QPageScroller at end of page -->

    <!-- <img alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px"> -->
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      progress: 0,
      curSlide: 0,
      slides: ["one", "two", "three"],
      slide: "three",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
  mounted() {
    this.interval = setInterval(this.startInterval, 1000 / 10);
  },
  methods: {
    startInterval() {
      if (this.progress >= 5 * 10) {
        clearInterval(this.interval);
        this.curSlide = (this.curSlide + 1) % 3;
        this.slide = this.slides[this.curSlide];
        this.progress = 1 / 10;
        this.interval = setInterval(this.startInterval, 1000 / 10);
      } else {
        this.progress++;
      }
    },
  },
};
</script>

<template>
  <q-page :style-fn="myTweak">
    <div class="row justify-evenly">
      <div class="col-8">
        <h3>Projects</h3>
        <div class="row q-gutter-sm">
          <div class="col-12 col-md-5" v-intersection="onIntersection">
            <transition name="q-transition--scale">
              <q-card v-if="inView[0]" class="my-card" bordered flat>
                <q-parallax
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                  :height="150"
                />

                <q-card-section>
                  <div class="text-overline text-primary">2021</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Likha Academy</div>
                  <div class="text-caption text-grey q-mb-sm">
                    An online educational platform that lets users purchase and
                    stream courses related to urban agriculture
                  </div>
                  <q-chip size="sm"> Nuxt.js </q-chip>
                  <q-chip size="sm"> Strapi </q-chip>
                  <q-chip size="sm"> Facebook API </q-chip>
                  <q-chip size="sm"> Paymongo API </q-chip>
                </q-card-section>
              </q-card>
            </transition>
          </div>

          <div class="col-12 col-md-6" v-intersection="onIntersection">
            <transition name="q-transition--scale">
              <q-card v-if="inView[0]" class="my-card" bordered flat>
                <q-parallax
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                  :height="150"
                />

                <q-card-section>
                  <div class="text-overline text-primary">2021</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">
                    COVID Vaccine Allocation App
                  </div>
                  <div class="text-caption text-grey q-mb-sm">
                    A research project that models the optimal COVID vaccine
                    allocation across varying population sizes
                  </div>
                  <q-chip size="sm"> React.js </q-chip>
                  <q-chip size="sm"> Python Flask </q-chip>
                </q-card-section>
              </q-card>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
import { ref } from "vue";
export default {
  name: "ProjectsSection",
  methods: {
    myTweak(offset) {
      return { minHeight: offset ? `calc(50vh - ${offset}px)` : "50vh" };
    },
  },
  setup() {
    const inView = ref(Array.apply(null, Array(2)).map((_) => false));

    return {
      inView,
      onIntersection(entry) {
        const index = parseInt(entry.target.dataset.id, 10);
        setTimeout(() => {
          inView.value.splice(index, 1, entry.isIntersecting);
        }, 50);
      },
    };
  },
};
</script>

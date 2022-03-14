<template>
  <q-page :style-fn="myTweak">
    <div class="row justify-evenly">
      <div class="col-8">
        <h3>Publications</h3>
        <q-list separator>
          <q-item
            clickable
            v-ripple
            :data-id="0"
            v-intersection="onIntersection"
          >
            <transition name="q-transition--jump-up">
              <q-item-section v-if="inView[0]">
                <q-item-label overline>2021</q-item-label>
                <q-item-label class="text-body1"
                  >Tapia J.F.D., Manzano J., <b>Ona I.B.</b>, Chua U., 2021,
                  Development of a Web-based Application for Optimal Allocation
                  of COVID-19 Vaccine, Chemical Engineering Transactions, 88,
                  553-558.
                </q-item-label>
              </q-item-section>
            </transition>
          </q-item>
          <q-item
            clickable
            v-ripple
            :data-id="1"
            v-intersection="onIntersection"
          >
            <transition name="q-transition--jump-up">
              <q-item-section v-if="inView[1]">
                <q-item-label overline>2020</q-item-label>
                <q-item-label class="text-body1"
                  >Unisse C. Chua, Kyle L. Santiago, <b>Ian Benedict M. Ona</b>,
                  Romeo Manuel N. Peña, Geremiah Zachary S. Marasigan, Paolo
                  Gabriel A. Delos Reyes, and Briane Paul V. Samson. 2020. From
                  Access to Effective Use: Open Data Portals for Everyday
                  Citizens. In
                  <i
                    >Proceedings of the 2020 Symposium on Emerging Research from
                    Asia and on Asian Contexts and Cultures</i
                  >
                  (<i>AsianCHI '20</i>). Association for Computing Machinery,
                  New York, NY, USA, 61–64.
                  DOI:https://doi.org/10.1145/3391203.3391219</q-item-label
                >
              </q-item-section>
            </transition>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
import { ref } from "vue";
export default {
  name: "PublicationsSection",
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
        }, 100);
      },
    };
  },
};
</script>

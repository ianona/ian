<template>
  <q-page :style-fn="myTweak">
    <div class="row justify-evenly">
      <div class="col-8">
        <div
          :data-id="0"
          v-intersection.once="onIntersection"
          style="
             {
              min-height: 60px;
            }
          "
        >
          <h3>
            <vue-writer
              v-if="inView[0]"
              :array="['Contact']"
              :iterations="1"
              caret="cursor"
            />
          </h3>
        </div>
        <q-intersection :key="0" transition="flip-up">
          <span class="text-body1">
            You can reach me anytime at
            <a href="mailto:ianbenedictona@gmail.com"
              ><span class="touch text-primary"
                >ianbenedictona@gmail.com</span
              ></a
            >
            and download my resume
            <span
              >here<q-icon color="primary" size="sm" name="download"
            /></span>
            <br />
            <br />
            I occasionally take on freelance projects and am always excited to
            hear about cool things
            <br />
            <br />
            Let’s connect!
            <br />
          </span>
        </q-intersection>
        <q-intersection :key="0" transition="flip-up">
          <div class="q-pa-md q-gutter-sm">
            <q-btn push color="primary" round icon="fab fa-linkedin-in" />
            <q-btn push color="accent" round icon="fab fa-github" />
          </div>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
import { ref } from "vue";
import VueWriter from "vue-writer";
export default {
  name: "ContactSection",
  methods: {
    myTweak(offset) {
      return { minHeight: offset ? `calc(80vh - ${offset}px)` : "80vh" };
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

<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-primary">
      <q-toolbar>
        <q-tabs align="left" v-model="tab" shrink stretch>
          <q-tab name="about" label="About me" @click="scrollTo('about')" />
          <q-tab
            name="projects"
            label="Projects"
            @click="scrollTo('projects')"
          />
          <q-tab name="pubs" label="Publications" @click="scrollTo('pubs')" />

          <q-tab
            key="lol"
            name="contact"
            label="Contact"
            @click="scrollTo('contact')"
          />
        </q-tabs>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <HelloWorld />

      <TimeLines id="about" @scrolling="handleScroll" />
      <ProjectsSection id="projects" @scrolling="handleScroll" />

      <PublicationsSection id="pubs" @scrolling="handleScroll" />
      <ContactSection id="contact" @scrolling="handleScroll" />

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import TimeLines from "../components/Timelines.vue";
import PublicationsSection from "../components/Publications.vue";
import ContactSection from "../components/Contact.vue";
import ProjectsSection from "../components/Projects.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    HelloWorld,
    TimeLines,
    PublicationsSection,
    ProjectsSection,
    ContactSection,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref(""),
    };
  },

  methods: {
    scrollTo(anchor) {
      document.getElementById(anchor).scrollIntoView({ behavior: "smooth" });
    },
    handleScroll(sectionName) {
      if (sectionName == "" && this.tab != "about") return;
      if (sectionName == "contact" && this.tab != "pubs") return;
      this.tab = sectionName;
    },
  },
});
</script>

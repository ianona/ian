<template>
  <q-page  :style-fn="myTweak">
    <div class="row justify-evenly">
      <div class="col-8">
        <h3>Contact</h3>
        <span class="text-body1">
          You can reach me anytime at <span class="touch text-primary">ianbenedictona@gmail.com</span> and download my
          resume <span>here<q-icon color="primary" size="sm" name="download" /></span>
          <br />
          <br />
          I occasionally take on freelance projects and am always excited to
          hear about cool things
          <br />
          <br />
          Let’s connect!
          <br />
        </span>
         <div class="q-pa-md q-gutter-sm">
          <q-btn push color="primary" round icon="fab fa-linkedin-in" />
          <q-btn push color="accent" round icon="fab fa-github" />
         </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "ContactSection",
  methods: {
    myTweak (offset) {
      return { minHeight: offset ? `calc(80vh - ${offset}px)` : '80vh' }
    }
  }
};
</script>

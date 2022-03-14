<template>
  <q-page :style-fn="myTweak" class="q-pt-xl">
    <div class="row justify-evenly">
      <div class="col-8 col-md-4">
        <q-timeline side="right" color="primary">
          <q-timeline-entry heading>Education</q-timeline-entry>
          <q-timeline-entry
            title="National Taiwan University of Science and Technology"
            subtitle="M.S. Computer Science 2021-2022"
            side="left"
          >
            <div>
              Researched on unsupervised image segmentation.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="De La Salle University - Manila"
            subtitle="B.S. Computer Science 2016-2020"
            side="right"
            icon="delete"
          >
            <div>
              Graduated <b>Magna Cum Laude (3.79/4.00)</b> and a member of the 
              Jose Rizal Honor Society for consistent 1st honors for 4 years. Received the Bronze Award for Best Undergraduate Thesis 
              and extra curriculars include Vice President of the Peer Tutor Society and Batch President.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
      <div class="col-8 col-md-4">
          <q-timeline layout="dense" side="right" color="primary">
          <q-timeline-entry heading>Experience</q-timeline-entry>

          <q-timeline-entry
            title="Fullstack Web Developer @ MedAlert ERx"
            subtitle="2021"
            side="left"

          >
          
            <div>
              MedAlert ERx is a Philippine-based startup that digitalizes medical prescriptions, health records, and pharmaceutical deliveries.
              During my time here, I designed and implemented the delivery system using Grab API, Strapi, and React.js. I also developed the corresponding delivery interface to streamline medicine prescription and delivery processes.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="I.T. Intern @ Proctor & Gamble"
            subtitle="2019"
            side="right"
            icon="delete"
          >
            <div>
              During my time at P&G, I developed a web application to translate perfume formulas and help streamline research on scented products. 
              I also performed research on generative adversarial networks as a means to generate synthetic data to be used for the testing of in-house research projects.
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Software Engineering Intern @ Azeus Systems Ltd."
            subtitle="2019"
            side="right"
            icon="delete"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "TimeLines",
  methods: {
    myTweak (offset) {
      return { minHeight: offset ? `calc(90vh - ${offset}px)` : '90vh' }
    }
  }
};
</script>

<script setup>
import About from './site-content/AboutSection.vue'
import Education from './site-content/EducationSection.vue'
import Interests from './site-content/InterestsSection.vue'
import Projects from './site-content/ProjectsSection.vue'
import Footer from './SiteFooter.vue'
import WhatIDo from './site-content/WhatIDoSection.vue'
import WorkExperience from './site-content/WorkExperienceSection.vue'
</script>

<template>
  <div class="content-wrap">
    <About />
    <WhatIDo />
  </div>
  <div class="fixed-bg bg-img-1"></div>
  <div class="content-wrap">
    <WorkExperience />
    <Education />
  </div>
  <div class="fixed-bg bg-img-2"></div>
  <div class="content-wrap">
    <Interests />
    <Projects />
  </div>
  <Footer />
</template>

<style scoped>
.fixed-bg {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
  min-height: 28em;
  max-width: 140em;
  width: 100%;
  position: relative;
}
.fixed-bg.bg-img-1 {
  background-image: url(/fbg-1-1920x1080.jpg);
}
.fixed-bg.bg-img-2 {
  background-image: url(/fbg-3-1440x1920.jpg);
}

@media (max-width: 920px) {
  .fixed-bg {
    background-attachment: scroll;
  }
}
</style>

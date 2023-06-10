<script setup>
import Section from '../fragments/SectionFragment.vue'
</script>

<template>
  <Section rel="projects" id="projects">
    <template #heading>Projects & Interests</template>
    <h1>Projects & Interests</h1>
    <div>
      <p>
        Besides spending most of my free time on some sort of software or IT project, I love nature,
        forests & rivers, hiking & biking around where I live, or exploring other cultures while
        travelling to exotic places. I'm a hobby photographer and I love to play Backgammon.
      </p>
      <p>
        Thanks to growing up with a bookworm mother and sister, I inherited the love of books and
        always enjoy a good read, mostly sci-fi and classics but lately also on political science,
        apparently. Admittedly though, I had read much more in my school years then ever since. Some
        authors with notable impact include Asimov, Borges, Capote, Chomsky, Philip K Dick,
        Ishiguro, Márquez, Antal Szerb, Jenő Rejtő.
      </p>
      <p>
        I love natural sciences and fascinated by advances in modern research, e.g. in cosmology,
        biochemistry, neuroscience, material science. I am always up for a quality science
        documentary or a lecture, or just something casual from one of Brady Haren's channels. I am
        also naturally attracted to all kinds of architecture. Modern and historic city buildings,
        civil engineering like damns and bridges can fascinate me.
      </p>
    </div>
  </Section>
</template>

<style scoped>
@import '../../assets/site-content.css';

h1 {
  margin-bottom: 2em;
}

div {
  max-width: 70vw;
}

@media (max-width: 600px) {
  div {
    max-width: 100vw;
  }
}
</style>

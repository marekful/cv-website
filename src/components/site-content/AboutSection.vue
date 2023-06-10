<script setup>
import Section from '../fragments/SectionFragment.vue'
</script>

<template>
  <Section rel="about" id="about">
    <template #heading> About me </template>
    <h1>
      I am a passionate Software Engineer with over a decade and a half of professional experience &
      a never ending enthusiasm for learning
    </h1>

    <div class="col-group col-group-2 col-5-5">
      <div>
        <h3>
          Twenty-seven years after I completed the first website I got paid for, I can still get
          literally excited about programming
        </h3>
      </div>
      <div>
        <p>
          As an intelligent and enthusiastic graduate with over fifteen years of experience in
          different roles of IT systems design and development, I bring keen analytical and
          excellent communicational skills to any software development team. Thank to my early
          exposure to computer programming as a child, the hobby soon became a profession and a
          passion.
        </p>
        <p>
          Having spent fifteen years in the industry as a professional and twenty-seven years after
          I completed the first website I got paid for, I can still get literally excited when I try
          things I've never done before in programming. It's this special ability feeds my
          enthusiasm and leads to an ever increasing interest in learning and working with new and
          developing technologies.
        </p>
        <!--
        <p>
          <img class="right" src="/punch-tape-roll-s.jpg" width="200" alt="Punch tape roll">
          The story of getting interested in computers must have started when my father
          brought home a bunch of punch tape rolls from his job that when we rolled off
          with my brother in a room, we could hide underneath the surface of the waist-high
          paper pile.
        </p>
        <p>
          Thanks to the various ways of exposer to computers before and during the early years
          of elementary school, it's not surprising that I immediately took the opportunity
          when it came in 4th grade to take an afternoon course learning programming in the
          BASIC language on one the few Commodore64 or ZX/Spectrum machines the school owned.
        </p>
        <p>
          <img src="/zx-spectrum.png" width="220" alt="ZX/Spectrum">
        </p>
        -->
      </div>
    </div>
  </Section>
</template>

<style scoped>
@import '../../assets/site-content.css';
</style>

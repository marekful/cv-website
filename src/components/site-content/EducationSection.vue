<script setup>
import Section from '../fragments/SectionFragment.vue'
</script>

<template>
  <Section rel="education" id="education">
    <h1>Education</h1>
    <div class="col-group col-group-2 col-5-5 education">
      <div>
        <h2>University of Bedfordshire</h2>
        <h3>Computer Science & Software Engineering</h3>
        <h4>BSc Hons, 2:1 - Java, .NET, Oracle - 2008</h4>
      </div>
      <div>
        <h2>Polytechnic of Economics</h2>
        <h3>Mathematics, Informatics, Economics, History, Hungarian & English Language</h3>
        <h4>GCSE - 1996</h4>
      </div>
    </div>
    <div class="languages">
      <p>Fluent spoken and written English, native Hungarian. Interested in French, Arabic.</p>
    </div>
  </Section>
</template>

<style scoped>
@import '../../assets/site-content.css';

.education h2 {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
}

.education h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: var(--vt-c-text-color-0);
}

.education h4 {
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0.4em;
  text-align: left;
}

.languages {
  margin: 2em 0;
}
</style>

<script setup>
import { ref } from "vue";
import { aggregate } from '../../api/labels'
import InfoCircleOutlineIcon from "../icons/InfoCircleOutlineIcon.vue";
import EyeRefreshOutlineIcon from "../icons/EyeRefreshOutlineIcon.vue";

let show = ref(false);
let tooltip = ref(null);
const toggle = () => {
  show.value = !show.value;
  console.log("toggle() > ", show.value, tooltip.value.style);
  if (show.value) {
    tooltip.value.style.left = "1em";
    tooltip.value.style.opacity = "1";
  } else {
    tooltip.value.style.left = "-34em";
    tooltip.value.style.opacity = "0";
  }
}

let shuffle = ref(false);
const relabel = () => {
  shuffle.value = !shuffle.value;
}
</script>

<template>
  <div class="container">
    <div>
      <div v-if="shuffle === true"></div>
      <div class="info">
        <EyeRefreshOutlineIcon title="Click to shuffle tags" @click="relabel()" />
        <InfoCircleOutlineIcon
          @mouseenter="toggle()"
          @mouseleave="toggle()"
          @click="toggle()"
        />
        <div class="text" ref="tooltip">
          This size of each tag label represents the combined professional
          and interest based weighting for the given area.<br /><br />Professional weight
          expresses the time spent in jobs using the language or technology
          while the interest basis gives me the opportunity to counter the
          professional weight (e.g. decrease if I'm less interested, or increase
          if I gained experience outside work) and to add tags where I have
          considerable knowledge but not in a work experience.
        </div>
      </div>
      <ul class="cloud">
        <li v-for="(label, idx) in aggregate()" :key="idx">
          <a :data-weight="label.total_weight" :style="`color: ${label.color};`">
            {{ label.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
div.container {
  position: relative;
  margin: 1.5em 5em 0 0;
}

div.container > div {
  position: sticky;
  top: 8em;
}

.info {
  position: relative;
  bottom: 0.5em;
  right: 0.25em;
  text-align: right;
  height: 1.5em;
  padding-right: 0.5em;
}

.info .text {
  position: absolute;
  left: -34em;
  width: 22em;
  top: 0;
  transition: 0.5s;
  text-align: left;
  padding: 1em;
  font-size: 0.9rem;
  line-height: 1.1rem;
  font-family: "Barlow Semi Condensed", sans-serif;
  color: var(--vt-c-divider-dark-1);
  background-color: var(--vt-c-background-1);
  z-index: 2;
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 0.25em;
  box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.15);
  opacity: 0;
}

.info svg {
  width: 1.33em;
  fill: var(--vt-c-divider-dark-1);
  cursor: pointer;
  vertical-align: middle;
}

.info svg:first-child {
  margin-right: 1em;
}

ul.cloud {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 2.5rem;
  padding: 1em;
  border-radius: 0.25em;
  background-color: transparent;
  background-image: linear-gradient(135deg, #fdfeff 5%, #d0b5b512 70%);
  opacity: 1;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

ul.cloud a[data-weight='0'] {
  --size: 1.5;
}
ul.cloud a[data-weight='1'] {
  --size: 2;
}
ul.cloud a[data-weight='2'] {
  --size: 2.5;
}
ul.cloud a[data-weight='3'] {
  --size: 3;
}
ul.cloud a[data-weight='4'] {
  --size: 3.5;
}
ul.cloud a[data-weight='5'] {
  --size: 4;
}
ul.cloud a[data-weight='6'] {
  --size: 4.5;
}
ul.cloud a[data-weight='7'] {
  --size: 6;
}
ul.cloud a[data-weight='8'] {
  --size: 6.5;
}
ul.cloud a[data-weight='9'] {
  --size: 7;
}
ul.cloud a[data-weight='10'] {
  --size: 7.5;
}

ul.cloud a {
  display: block;
  padding: 0.125rem 0.25rem;
  text-decoration: none;
  position: relative;
  --size: 4;
  font-size: calc(var(--size) * 0.25rem + 0rem);
  line-height: 1.25rem;
}

@media (max-width: 920px) {
  div.container {
    width: 100%;
  }
}
</style>
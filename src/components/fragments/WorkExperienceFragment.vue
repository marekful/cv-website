<script setup>
import { ref } from 'vue'
import { useSlots } from 'vue'
import { Label } from '../../api/labels'
import ChevronDownIcon from '../icons/ChevronDownIcon.vue'
import ChevronRightFilledIcon from '../icons/ChevronRightFilledIcon.vue'
import LocationIcon from '../icons/LocationIcon.vue'
import LabelIcon from '../icons/LabelIcon.vue'
import ChevronUpIcon from '../icons/ChevronUpIcon.vue'

const slots = useSlots()

let show = ref(false)
const more = () => {
  show.value = !show.value
}

defineProps({
  labels: {
    type: Array[Label],
    required: false
  }
})
</script>

<template>
  <div class="meta">
    <h1>
      <slot name="dates"></slot>
    </h1>
    <div class="divider">
      <ChevronRightFilledIcon />
    </div>
    <h2>
      <slot name="employer"></slot>
    </h2>
    <div v-if="slots['locations']" class="locations">
      <LocationIcon />
      <slot name="locations"></slot>
    </div>
    <div v-if="$props.labels" class="labels">
      <LabelIcon />
      <span v-for="(label, idx) in labels.slice(0, 4)" :key="idx">
        <span v-if="idx > 0">, </span>
        <span>{{ label.text }}</span>
      </span>
      <span v-if="show">
        <span v-for="(label, idx) in labels.slice(4)" :key="idx">
          <span>, </span>
          <span>{{ label.text }}</span>
        </span>
      </span>
    </div>
  </div>
  <div class="summary">
    <h3>
      <slot name="job-title"></slot>
    </h3>
    <div>
      <slot name="job-description-short"></slot>
    </div>
    <div v-if="slots['job-description'] !== undefined" class="show-more">
      <a href="#" @click.prevent="more">
        <span>
          <ChevronDownIcon v-if="show === false" />
          <ChevronUpIcon v-else />
        </span>
        <span v-if="show === false">more</span>
        <span v-else>less</span>
      </a>
    </div>
  </div>
  <div v-if="show === true" class="more">
    <slot name="job-description"></slot>
  </div>
</template>

<style scoped>
p,
div {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.1rem;
  color: var(--vt-c-black-soft);
}

a {
  color: var(--vt-c-text-color-0);
}

h1 {
  font-size: 1.1rem;
  color: var(--vt-c-text-light-2);
}

h2 {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
}

h3 {
  text-transform: uppercase;
  font-size: 1.25rem;
  color: var(--vt-c-text-color-0);
  font-weight: 500;
  padding: 1em 0;
}

.meta {
  float: left;
  margin: 2em 2em 0 0;
  width: 11em;
}

.summary {
  display: flow-root;
  margin-top: 2em;
}

.summary > div:nth-child(2) {
  min-height: 7em;
}

.divider {
  margin: 0.5em 0;
  border-top: 2px solid var(--vt-c-divider-light-2);
  display: flex;
  width: 92%;
  position: relative;
}

.divider svg {
  width: 1em;
  position: absolute;
  right: -0.95em;
  top: -0.075em;
  transform: translateY(-50%);
  fill: var(--vt-c-black-mute);
}

.locations,
.labels {
  position: relative;
  margin: 0.5em 0 0 1em;
  font-size: 1.1rem;
}

.locations {
  color: var(--vt-c-divider-light-1);
  cursor: default;
}

.labels {
  color: var(--vt-c-divider-dark-1);
  cursor: default;
}

.locations svg,
.labels svg {
  width: 1em;
  position: absolute;
  transform: translate(-120%, 37%);
}

.locations svg {
  fill: var(--vt-c-divider-light-1);
}

.labels svg {
  fill: var(--vt-c-divider-dark-1);
}

.show-more {
  float: right;
  position: relative;
}

@media (max-width: 600px) {
  h1 {
    margin-top: 2em;
  }
  h2 {
    font-size: 1.1rem;
    display: inline-block;
    max-width: 12em;
    margin-top: 0.15em;
  }
  .meta {
    float: unset;
    width: 100%;
  }

  .divider {
    width: 102%;
  }

  .summary {
    margin-top: 0;
  }

  .locations {
    float: right;
    position: relative;
    top: -0.5em;
    right: 0;
  }
}

@media (max-width: 400px) {
  h2 {
    font-size: 1rem;
    margin-top: 0.25em;
    max-width: 9em;
  }

  .locations {
    font-size: 1rem;
  }
}
</style>

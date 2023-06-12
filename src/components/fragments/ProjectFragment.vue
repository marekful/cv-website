<script setup>
import { ref } from 'vue'
import { Label } from '../../api/labels'
import ChevronDownIcon from '../icons/ChevronDownIcon.vue'
import ChevronUpIcon from '../icons/ChevronUpIcon.vue'
import GitHubIcon from '../icons/GitHubIcon.vue'
import LabelIcon from '../icons/LabelIcon.vue'

let show = ref(false)
const more = () => {
  show.value = !show.value
}

defineProps({
  linkHref: {
    type: String,
    required: false
  },
  labels: {
    type: Array[Label],
    required: false
  }
})
</script>

<template>
  <div class="title">
    <h1>
      <slot name="title"></slot>
    </h1>
  </div>
  <div class="meta">
    <div v-if="$props.linkHref && $slots.linkText" class="link">
      <a :href="linkHref" target="_blank">
        <GitHubIcon />
        <slot name="linkText"></slot>
      </a>
    </div>
    <div v-if="$props.labels" class="labels">
      <LabelIcon />
      <span v-for="(label, idx) in labels" :key="idx">
        <span v-if="idx > 0">, </span>
        <span>{{ label.text }}</span>
      </span>
    </div>
  </div>

  <div class="description">
    <slot name="description"></slot>
  </div>

  <div v-if="$slots.more !== undefined">
    <div class="show-more">
      <a href="#" @click.prevent="more">
        <span>
          <ChevronDownIcon v-if="show === false" />
          <ChevronUpIcon v-else />
        </span>
        <span v-if="show === false">more</span>
        <span v-else>less</span>
      </a>
    </div>
    <div v-if="show === true" class="description more">
      <slot name="more"></slot>
    </div>
  </div>
</template>

<style scoped>
h1 {
  display: inline-block;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--vt-c-text-color-0);
  border-bottom: 0.15em solid var(--vt-c-black-mute);
}

.description {
  margin: 1em 0 0 0;
}

.title {
  margin-bottom: 0.25em;
  display: inline-block;
}

.meta {
  display: table;
  float: right;
  padding: 0 1em;
}

.meta > div {
  margin-bottom: 0.5em;
}

.link {
  float: right;
}

.link a {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1rem;
  color: var(--vt-c-divider-dark-1);
  margin-right: 0.5em;
}

.link a:hover {
  text-decoration: underline;
}

.show-more {
  float: right;
  position: relative;
  clear: both;
}

.description.more {
  clear: right;
  top: 1em;
  position: relative;
}

.link a svg {
  fill: var(--vt-c-divider-dark-1);
  float: right;
  top: 0.2em;
  position: relative;
}

.labels {
  float: right;
  clear: right;
  cursor: default;
}

.labels svg {
  width: 1.5em;
  fill: var(--vt-c-divider-dark-1);
  float: right;
  margin-left: 0.5em;
  position: relative;
  top: 0.1em;
}

.labels span {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: var(--vt-c-divider-dark-1);
}
</style>

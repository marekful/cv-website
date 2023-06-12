<script setup>
defineProps({
  rel: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="section" :id="id">
    <div class="position" :data-section-id="rel"></div>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--vt-c-text-color-0);
  font-family: 'Barlow Semi Condensed', sans-serif;
}

.position {
  position: absolute;
  width: 2em;
  top: 20%;
  height: 60%;
}

.section {
  margin: 2rem 0;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
}
</style>

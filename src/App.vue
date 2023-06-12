<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteContent from './components/SiteContent.vue'
import DesktopNavigation from './components/DesktopNavigation.vue'
import MobileNavigation from './components/MobileNavigation.vue'
/*
<!-- <SiteContent ref="siteContent" /> -->
const siteContent = ref();
*/

let top = 0 // .scrollTop
let prevTop = 0
let direction = false // false = down, true = up
let prevDirection = false
let eventTime = 0
let prevEventTime = 0
let moved = 0 // pixels
let header

/* Handle show and hide of the top navigation menu */
const showMenu = () => {
  if (header) {
    header.style.top = '0'
  }
}

const hideMenu = () => {
  if (header) {
    header.style.top = '-5em'
  }
}

window.addEventListener('scroll', function (event) {
  const timeDelta = eventTime - prevEventTime

  // update scroll position tracking
  prevTop = top
  top = document.body.scrollTop || document.documentElement.scrollTop || 0

  prevDirection = direction
  direction = top < prevTop

  if (direction !== prevDirection) {
    moved = 0
  } else {
    moved += top - prevTop
  }

  // quit event handler if it was last executed less than 200 ms ago
  if (timeDelta > 0 && timeDelta < 200) {
    if (top <= 0) {
      showMenu()
    }
    eventTime = event.timeStamp
    return
  }

  prevEventTime = eventTime
  eventTime = event.timeStamp

  // show header on scroll up (content moving down)
  if (direction && moved < -20) {
    showMenu()
    return
  }

  // hide header on scroll down (content moving up)
  if (!direction && moved > 100 && header) {
    hideMenu()
  }
})

/* Handle updating the current URL path based on which page content section is in the viewport */
const $router = useRouter()
let sectionObserver = null

const observeSections = () => {
  try {
    sectionObserver.disconnect()
  } catch (error) {
    console.log("Observer didn't disconnect")
  }

  const options = {
    rootMargin: '0px 0px',
    threshold: 0
  }
  sectionObserver = new IntersectionObserver(sectionObserverHandler, options)

  const sections = document.querySelectorAll('div.section > div.position')
  sections.forEach((section) => {
    sectionObserver.observe(section)
  })
}

const sectionObserverHandler = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      console.log('Intersects() > ', entry, entry.target.dataset.sectionId)
      $router.push({ name: entry.target.dataset.sectionId })
    }
  }
}

onMounted(() => {
  header = document.getElementsByTagName('header')[0]
  observeSections()
})
</script>

<template>
  <header>
    <div>
      <div class="logo">
        <div class="logo-placeholder">Logo image</div>
        <div class="title"><h2>Marcell Fülöp</h2></div>
      </div>
      <div class="nav desktop">
        <DesktopNavigation />
      </div>
      <div class="nav mobile">
        <MobileNavigation />
      </div>
    </div>
  </header>

  <main>
    <SiteHeader />
    <SiteContent ref="siteContent" />
  </main>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: rgba(247, 243, 245, 0.98);
  box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.15);
  transition: 0.2s;
}

header > div {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  grid-column-gap: 20px;
  overflow-wrap: anywhere;
  margin: 0 1em;
}

h2 {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 500;
}

.logo,
.nav {
  display: flex;
  flex-wrap: nowrap;
}
.nav {
  justify-content: flex-end;
}

.nav.mobile {
  display: none;
}

.logo-placeholder {
  display: block;
  position: relative;
  width: 80px;
  height: 40px;
  margin: 1em;
  background-color: white;
  font-size: 0.7rem;
  text-align: center;
  line-height: 40px;
}

.title {
  line-height: 4rem;
}

@media (max-width: 920px) {
  .nav.mobile {
    display: grid;
  }
  .nav.desktop {
    display: none;
  }
}
</style>

<script>
import MenuOpen from 'vue-material-design-icons/Menu.vue'
import MenuClose from 'vue-material-design-icons/Close.vue'

export default {
  components: {
    MenuOpen: MenuOpen,
    MenuClose: MenuClose
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<template>
  <div class="top">
    <div class="menu-button" @click="toggleMenu">
      <span v-if="menuOpen"><MenuClose /></span>
      <span v-else><MenuOpen /></span>
    </div>
    <div v-if="menuOpen === true" class="nav">
      <nav>
        <ul>
          <li class="menu-item" @click="toggleMenu">
            <router-link :to="{ name: 'home', hash: '#' }">Home</router-link>
          </li>
          <li class="menu-item" @click="toggleMenu">
            <router-link :to="{ name: 'about', hash: '#' }">About</router-link>
          </li>
          <li class="menu-item" @click="toggleMenu">
            <router-link :to="{ name: 'experience', hash: '#' }">Experience</router-link>
          </li>
          <li class="menu-item" @click="toggleMenu">
            <router-link :to="{ name: 'education', hash: '#' }">Education</router-link>
          </li>
          <li class="menu-item" @click="toggleMenu">
            <router-link :to="{ name: 'projects', hash: '#' }">Projects</router-link>
          </li>
          <li class="menu-item" @click="toggleMenu">
            <router-link :to="{ name: 'download', hash: '#' }">Download</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  list-style: none;
  align-self: center;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  vertical-align: baseline;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
}

a,
.menu-item {
  line-height: 4.4rem;
  display: block;
  position: relative;
  width: 100%;
  color: var(--vt-c-black-soft);
  text-align: center;
}

.menu-button {
  margin: 1em;
  cursor: pointer;
  position: relative;
  z-index: 10;
}

.menu-item {
  border-top: var(--vt-c-border-0);
}
.menu-item:last-child {
  border-bottom: var(--vt-c-border-0);
}

.nav {
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  background: var(--vt-c-background-1);
  z-index: 10;
}

.menu-item > a {
  height: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  transition: all 0.2s linear;
  text-transform: uppercase;
  padding: 0 1em;
}

.menu-item > a.router-link-active {
  color: var(--vt-c-text-color-0);
}

.menu-item > a:hover {
  color: var(--vt-c-text-color-0);
  text-decoration: none;
}
</style>

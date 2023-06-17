<template>
  <div class="nav">
    <nav>
      <ul>
        <li class="menu-item">
          <router-link :to="{ name: 'home', hash: '#' }">Home</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'about', hash: '#' }">About</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'experience', hash: '#' }">Experience</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'education', hash: '#' }">Education</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'projects', hash: '#' }">Projects</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'download', hash: '#' }">Download</router-link>
        </li>
      </ul>
    </nav>
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

.nav {
  z-index: 10;
}

a,
.menu-item {
  line-height: 4.4rem;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  color: var(--vt-c-black-soft);
  text-decoration: none;
}

.menu-item > a {
  height: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  transition: all 0.2s linear;
  text-transform: uppercase;
  padding: 0 1em;
}

.menu-item > a:before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  right: 50%;
  height: 1px;
  background-color: transparent;
  transform: scale(0, 0) translate(-50%, 0);
  transition: transform 0.3s ease-in-out, color 0s ease-in-out;
}

.menu-item a.router-link-active {
  color: var(--vt-c-text-color-0);
}

.menu-item > a:hover {
  color: var(--vt-c-text-color-0);
}
.menu-item:hover > a:before {
  width: calc(100% - 2em);
  background-color: currentColor;
  transform: scale(1, 1) translate(50%, 0);
}
</style>

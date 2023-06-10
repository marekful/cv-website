<script setup>
import EmailIcon from 'vue-material-design-icons/At.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
</script>

<template>
  <div class="content-wrap section" id="home">
    <div class="flex-group flex-group-2 position" data-section-id="home">
      <div>
        <div class="greetings">
          <h6 class="title">Hello, My name is</h6>
          <span class="divider"></span>
          <h1>Marcell Fülöp</h1>
          <h2>Software Engineer</h2>
        </div>
        <div class="contact">
          <ul>
            <li>
              <span class="icon"><EmailIcon /></span>
              <a href="mailto:marekful@domainloop.net">marekful@domainloop.net</a>
            </li>
            <li>
              <span class="icon"><PhoneIcon /></span>
              <span>
                <a href="tel:+44 7460 391787">+44 7460 391787</a>
                <span>・</span>
                <a href="tel:+36 70 9477560">+36 70 9477560</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="profile">
        <img
          decoding="async"
          loading="lazy"
          alt="Profile"
          src="/profile-2.png"
          srcset="
            /profile-2.png     670w,
            /profile-2-400.png 400w,
            /profile-2-300.png 300w,
            /profile-2-150.png 150w
          "
          sizes="(max-width: 670px) 100vw, 670px"
          height="670"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 5vw;
  margin-top: 4.5rem;
  line-height: 4.2rem;
  font-weight: 500;
  font-family: 'Playfair Display', serif;
  color: var(--vt-c-black-soft);
}

h2 {
  font-size: 3.1vw;
  font-family: 'Playfair Display', serif;
  color: var(--vt-c-black-soft);
}

h6 {
  font-size: 1.1rem;
  text-align: left;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--vt-c-black-soft);
}

.content-wrap {
  padding-top: 6em;
}

.flex-group {
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 6em;
}
.flex-group.flex-group-2 > div {
}
.flex-group.flex-group-2 > div:first-child {
  width: 100%;
}
.flex-group.flex-group-2 > div:last-child {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  top: 12em;
  scale: 1.5;
  right: 2em;
}

.greetings {
  position: relative;
  margin-top: 8em;
}

.contact {
  margin-top: 8rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  text-transform: uppercase;
  margin-bottom: 20em;
}

.contact a {
  text-decoration: none;
  color: unset;
}

.contact ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1.3rem;
  font-style: inherit;
  font-weight: inherit;
  outline: 0;
  vertical-align: baseline;
  color: var(--vt-c-black-soft);
}

.contact li {
  margin: 0.5em 0;
}

.contact li .icon {
  display: inline-block;
  position: relative;
  width: 2em;
  top: 0.15em;
  color: var(--vt-c-text-color-0);
}

.divider {
  margin: 1em 0;
  border-top: 2px solid var(--vt-c-black-mute-2);
  display: flex;
  width: 4em;
}

.profile {
  right: -5em;
}

.profile img {
  height: auto;
  max-width: 100%;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}

@media (max-width: 920px) {
  h1 {
    font-size: 4.1vw;
    margin-top: 4rem;
    line-height: 3.2rem;
  }

  h2 {
    font-size: 2.5vw;
  }

  .content-wrap {
    padding-top: 5em;
  }

  .contact ul {
    font-size: 1.1rem;
  }

  .contact li .icon {
    top: 0.3em;
    scale: 0.8;
  }
}

@media (max-width: 768px) {
  .content-wrap {
    padding-top: 1em;
  }

  .flex-group.flex-group-2 {
    flex-direction: column;
  }
  .flex-group.flex-group-2 > div:first-child {
    order: 2;
  }
  .flex-group.flex-group-2 > div:last-child {
    order: 1;
    right: 0;
    top: 0;
    scale: 1;
  }

  h1 {
    font-size: 2.2rem;
    margin-top: 2rem;
    line-height: 2.3rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .greetings {
    top: 0;
    margin-top: 4em;
  }

  .contact {
    margin-top: 2em;
    margin-bottom: 12em;
  }

  .contact ul {
    font-size: 1.1rem;
  }

  .contact li .icon {
    top: 0.3em;
    scale: 0.8;
  }
}

@media (max-width: 712px) {
  .flex-group.flex-group-2 > div:last-child {
    right: 0;
    top: 0;
    scale: 1;
  }
}
</style>

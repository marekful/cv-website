<script setup>
import Section from './fragments/SectionFragment.vue'
</script>

<template>
  <Section rel="contact" id="contact">
    <div class="footer">
      <div class="content-wrap">
        <div class="col-group col-group-2 col-7-3">
          <div>
            <p>
              “If you want to have good ideas, you must have many ideas.”
              <br />Linus Pauling
            </p>
            <a href="mailto:marekful@domainloop.net">
              <h1>Get in touch</h1>
            </a>
          </div>
          <div class="links">
            <div class="download">
              <h2>Download</h2>
              <div>
                <a href="/CV_Marcel_Fulop_06-2023.pdf" download>CV (PDF)</a>
              </div>
              <div>
                <a href="/CV_Marcel_Fulop_06-2023.odt" download>CV (ODT)</a>
              </div>
              <div>
                <a href="/marcell-diploma-cover.jpeg" download>Diploma (JPG)</a>
              </div>
            </div>
            <div class="social">
              <h2>Social</h2>
              <div>
                <a href="https://github.com/marekful" target="_blank">GitHub</a>
              </div>
              <div>
                <a href="https://uk.linkedin.com/in/marekful" target="_blank"> LinkedIn </a>
              </div>
              <div>
                <a href="https://stackoverflow.com/users/1207049/marekful" target="_blank">
                  Stack Overflow
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">Copyright © 2023 Marcell Fülöp</div>
    </div>
  </Section>
</template>

<style scoped>
@import '../assets/site-content.css';

main > div:last-child {
  margin-bottom: 0;
}

div.links {
  margin-top: 18em;
  margin-right: 0;
}

.links a {
  color: var(--vt-c-black-mute);
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.1rem;
}

.social {
  float: right;
  position: relative;
  right: 2em;
}

.download {
  float: right;
}

.footer {
  position: relative;
  height: 100%;
  background-color: #ffffff;
  padding: 2em 0 0 0;
}

.footer h1 {
  margin-bottom: 2em;
  font-size: 5rem;
  text-decoration: underline;
}

.footer p {
  margin: 0 0 4em 0;
}

.footer .col-group {
  margin-top: 2em;
}

.copyright {
  height: 5em;
  text-align: center;
  border-top: 1px solid var(--vt-c-divider-light-2);
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: var(--vt-c-text-light-2);
  font-size: 1.1em;
  line-height: 5em;
}

@media (max-width: 920px) {
  div.links {
    margin-top: 0;
    margin-bottom: 2em;
  }
  .social {
    margin-left: 2em;
  }
  .download {
    margin-right: 2em;
  }

  .footer h1 {
    font-size: 8vw;
    text-align: center;
    margin-bottom: 1em;
  }

  @media (max-width: 920px) {
    .footer .col-group-2.col-7-3 {
      grid-template-columns: 100%;
    }
  }
}
</style>

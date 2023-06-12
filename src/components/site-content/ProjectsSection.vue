<script setup>
import { labels } from '../../api/labels'
import Section from '../fragments/SectionFragment.vue'
import Project from '../fragments/ProjectFragment.vue'
</script>

<template>
  <Section rel="projects" id="">
    <div class="col-group col-group-2 col-5-5 projects">
      <div>
        <div>
          <Project link-href="https://github.com/marekful/webscp" :labels="labels('webscp')">
            <template #title>WebSCP</template>
            <template #linkText>marekful/webscp</template>
            <template #description>
              <p>
                Most recently I spent quite some time on this project as a means to acquire the
                basics and some advanced concepts in the Go and Rust languages. WebSCP is a file
                manager and text editor in your browser that allows to make SSH connections and copy
                files to remote servers through a graphical user interface. It builds on top of an
                existing open source project which provides the basic file manager functionality and
                adds remote capabilities to it.
              </p>
              <p>
                The implementation in Rust is fully async using the Tokio library and the reactive
                frontend written in the Vue.js framework provides neat functionality to start, track
                and abort remote transfers.
              </p>
            </template>
            <template #more>
              <p>
                In the first prototype, remote connections were only possible if both servers had
                WebSCP installed. Since then I have iterated to a next prototype (not yet published)
                that drops this restriction and allows remote connections to any computer running an
                SSH server. While the "legacy" mode, when WebSCP is required on both sides, targets
                ease of use: creating connections is quick and simple, the details are hidden behind
                the scenes, advanced control over connection options makes it possible to use
                various authentication methods like password, SSH agent, private-key or encrypted
                private-key based.
              </p>
            </template>
          </Project>
        </div>
        <div class="divider"></div>
        <div>
          <Project
            link-href="https://github.com/marekful/esp32-cam-mjpeg2sd-evolution"
            :labels="labels('esp32')"
          >
            <template #title>ESP32</template>
            <template #linkText>marekful/esp32-cam-mjpeg2sd-evolution</template>
            <template #description>
              <p>
                I got involved in embedded C programming during the pandemic. It is a truly
                fascinating field in the world of software engineering where working around hardware
                resource limitations is a common pattern. Depending on the specifics of the target
                CPU or development board, not running out of stack space is usually a challenge in
                itself.
              </p>
              <p>
                In this endeavour, I have experimented with some ESP32 libraries for face
                recognition and detection at first, then I have taken an existing project for the
                ESP32-CAM, a board featuring a camera, flash memory and an SD card slot, and highly
                modified it adding features like continuous recording, rotating files on the SD card
                when it becomes full, etc.
              </p>
            </template>
          </Project>
        </div>
        <div class="divider"></div>
        <div>
          <Project :labels="labels('jchat')">
            <template #title>jChat</template>
            <template #description>
              <p>
                One of my earliest large projects I kept working on for years, jChat started out as
                a browser-based chat application but ended becoming a framework for JavaScript
                applications that came with UI components and many built-in features such as
                internationalisation and a theme system allowing to change language and
                look-and-feel of the application components without reloading the page, dynamic form
                validation rules and more.
              </p>
              <p>
                The driving motivation was to create the whole thing in vanilla JS, without any
                libraries, frameworks or tools such as jQuery which was just becoming very popular
                at the time. This had been a great opportunity to master ECMA Script and
                browser DOM manipulation techniques.
              </p>
            </template>
            <template #more>
              <p>
                It utilised the ability of browsers that JavaScript could be executed on any website
                from a "Bookmarklet". This allowed me to create an instant messaging app that users
                could inject into any website they happen to visit, i.e. they could start the
                messaging app in the browser while visiting a 3rd party website, any website really,
                and send and receive messages between one another while on different sites. This was
                pretty unique and cool back in the time but the industry has moved towards browser
                extensions and native solutions like Electron to achieve similar results.
              </p>
            </template>
          </Project>
        </div>
      </div>
      <div>
        <div>
          <Project link-href="https://github.com/marekful/dashy" :labels="labels('dashy')">
            <template #title>Dashy</template>
            <template #linkText>marekful/dashy</template>
            <template #description>
              <p>
                Dashy is an open-source, self-hosted, personal dashboard that I heavily rely on as a
                portal / start page to services hosted in my private cloud and home-lab
                infrastructure, as well as using many of its widgets to monitor or query said
                services and hardware resources.
              </p>
              <p>
                I have contributed with a
                <a
                  href="https://github.com/Lissy93/dashy/pulls?q=is%3Apr+is%3Aclosed+author%3Amarekful"
                  target="_blank"
                >
                  number of PRs</a
                >
                covering bug-fixes, improvements and some new features and widgets.
              </p>
            </template>
          </Project>
        </div>
        <div class="divider"></div>
        <div>
          <Project link-href="https://invent.kde.org/marekful/kate" :labels="labels('kate')">
            <template #title>Kate</template>
            <template #linkText>marekful/kate</template>
            <template #description>
              <p>
                Kate is a brilliant, feature rich plain text editor for KDE, a desktop environment
                for Linux I had been using a lot on my primary personal and work computers. A few
                years ago when I was learning C and C++ I ended up fixing a
                <a
                  href="https://bugs.kde.org/buglist.cgi?bug_id=116793%2C386669%2C335608%2C433581"
                  target="_blank"
                >
                  number of bugs</a
                >
                in Kate as a means of validating my skills. That went well and a
                <a
                  href="https://invent.kde.org/utilities/kate/-/merge_requests?scope=all&state=merged&author_username=marekful"
                  target="_blank"
                >
                  couple of PRs</a
                >
                were accepted and merged.
              </p>
              <p></p>
            </template>
          </Project>
        </div>
        <div class="divider"></div>
        <div>
          <Project link-href="https://github.com/marekful/matchdog" :labels="labels('matchdog')">
            <template #title>MatchDog</template>
            <template #linkText>marekful/matchdog</template>
            <template #description>
              <p>
                MatchDog is easily my favourite pet project though it has been inactive for quite
                some time now. It's a console application written in Java that acts as a bridge
                between FIBS (the First Internet Backgammon Server) and <i>gnubg</i>&nbsp;&nbsp;(a
                sophisticated neural network based Backgammon engine) providing a bot on FIBS that
                can invite or accept invitations from other players or bots and play matches.
              </p>
              <p>
                I started this project in my last year at university and I worked on it and
                maintained it for a couple of years initially. It was a truly grateful experience to
                let the bot out in wild as gnubg's engine is so strong that MatchDog easily ranked
                in the 2000s after just a few days, measured in an ELO based rating system used on
                FIBS. Very few humans get ever close to 2000 in Backgammon.
              </p>
            </template>
            <template #more>
              <p>
                The implementation required much more than just a very well directed game play
                logic. Backgammon is mostly played by humans and they don't like to lose, especially
                not quickly and badly, so they drop connections or stop responding in a game or try
                start a new match in place of a saved one (which would delete the saved match).
                MatchDog comes with a bunch of features to handle these kind of things decently, in
                addition to some neat extras such as the ability to run itself in multiple
                instances, keeping a detailed record of all played games and matches for each player
                that can be requested for review by the player on demand, building lists of
                preferred and blacklisted players over time and more. It also possible to remotely
                control or monitor a bot instance via a socket connection.
              </p>
              <p>
                I dusted the project in 2016 and refactored some parts of it but, to be fair,
                majority of this very early code of mine could use some more, serious refactoring
                and improving...
              </p>
            </template>
          </Project>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
@import '../../assets/site-content.css';

.col-group {
  margin-top: 0;
}

.col-group > div:first-child {
  margin-right: 2em;
}

.col-group > div:last-child {
  margin-right: 0;
  margin-left: 2em;
}

.col-group > div > div:not(.divider) {
  margin-bottom: 4em;
}

.projects p {
  margin-bottom: 0.75em;
}

.divider {
  border-top: 2px solid var(--vt-c-divider-light-2);
  display: flex;
  width: 66%;
  margin: 0 auto 4em auto;
  position: relative;
}

@media (max-width: 1024px) {
  .col-group-2.col-5-5 {
    display: flex;
    flex-wrap: wrap;
  }
  .col-group > div:first-child {
    margin-right: 0;
    order: 2;
  }
  .col-group > div:last-child {
    margin-left: 0;
    order: 1;
  }
}
</style>

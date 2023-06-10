<script setup>
import Section from '../fragments/SectionFragment.vue'
import IconBackend from '../icons/IconBackend.vue'
import IconDevOps from '../icons/IconDevOps.vue'
import IconFrontend from '../icons/IconFrontend.vue'
</script>

<template>
  <Section rel="about">
    <template #heading></template>
    <h1>What I do</h1>

    <p class="intro">
      From designing databases to implementing scalable back-end systems to building responsive UI
      components to going all the way full-stack, there's virtually no role I haven't played in a
      software team.
    </p>

    <div class="col-group col-group-3">
      <div>
        <h4>
          <IconBackend />
          <span>Back-end</span>
        </h4>
        <p>
          The main focus of attention even before and certainly throughout my professional career
          has always been on server-side languages but I really learned the most about backend
          development after University education through my jobs and pet projects.
        </p>
        <p>
          These include Relational Databases and Object Relational Mapping, robust and light-weight
          frameworks and libraries aiding speedy development of complex, interconnected systems,
          implementation of API producers and consumers and other intricacies such as parallelism,
          blocking vs. non-blocking IO, thread safety, queue systems, in-memory, key-value pair and
          document based storage systems, inter-process communication, performance optimisation,
          stress and load testing methods, and so on and on...
        </p>
        <p>
          I am committed to following coding standards, general, language-specific and security best
          practices and producing high-quality, test-covered and reusable code and.
        </p>
        <p>
          Although I haven't realised for some time, I am now well aware that being a great Software
          Engineer also means a life-long journey of perfecting one's skills in Requirements
          Engineering and the art of balance between the best possible solution for a problem and
          respecting resource constraints.
        </p>
      </div>
      <div>
        <h4>
          <IconDevOps />
          <span>Sys-Ops・Dev-Ops・CI/CD</span>
        </h4>
        <p>
          I just had to get good at Dev-Ops and Sys-Ops for one main reason to begin with: so I can
          remove obstacles that are not directly related to software internals but are blocking my
          route needed to achieve a desired external state. For example creating and configuring a
          development or staging environment, consuming an API during a release stage, allowing an
          application to communicate with other components in its ecosystem, configuring and
          handling aggregate logging and event tracing for multiple components, or creating a
          service template that contains the scaffolding for a specific infrastructure it needs to
          run on.
        </p>
        <p>
          The list could and does go on forever depending on each project's development stack, test
          and release pipeline specifics, scalability and redundancy requirements, and so on, not to
          mention the rapid advances in industry trends one has to keep up with to remain
          competitive.
        </p>
        <p>
          The line between Software Development and Systems Engineering / Operations can, most of
          the time, be very clearly defined but, to be fair, is often obscured within a project or
          company and developers are required, or at least expected, to do much more than just
          writing code so accumulating knowledge and experience in these areas is a huge advantage
          for a Software Engineer
        </p>
      </div>
      <div>
        <h4>
          <IconFrontend />
          <span>Front-end</span>
        </h4>
        <p>
          Although I am more involved and experienced in back-end technologies now, I have actually
          started web development by building static websites and being a full-stack developer for
          smaller projects, and I formed some strong opinions on what a good user interface should
          be like. I have been participating in front-end design and development from time to time
          since the beginning which helped me stay excited about and mostly up-to-date with the
          biggest, newest and most popular front-end trends and technologies.
        </p>
        <p>
          I acquired a considerable know-how in the field of User Interfaces, let it be graphical or
          command-line, and, most of all, web-browser based front-end systems focusing on modular,
          reactive and responsive design, which lead me to the conviction that any software
          designated to be used by even a small group of people must be accompanied with an
          intuitive interface and provide excellent user experience in order to stay afloat.
        </p>
      </div>
    </div>
  </Section>
</template>

<style scoped>
@import '../../assets/site-content.css';

.intro {
  margin: 2em 0;
  width: 85%;
  max-width: 35em;
}
</style>

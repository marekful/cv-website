<script setup>
import { ref } from 'vue'
import Section from '../fragments/SectionFragment.vue'
import Job from '../fragments/WorkExperienceFragment.vue'

import { labels, aggregate as allLabels } from '../../api/labels'

let showJobs = ref(false)

const moreJobs = () => {
  showJobs.value = !showJobs.value
}
</script>

<template>
  <Section rel="experience" id="experience">
    <template #heading>Education & Experience</template>
    <h1>Work Experience</h1>
    <div class="col-group col-group-2 col-4-6 experience">
      <div class="label-cloud-container">
        <ul class="label-cloud">
          <li v-for="(label, idx) in allLabels()" :key="idx">
            <a :data-weight="label.total_weight" :style="`color: ${label.color};`">
              {{ label.text }}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Job :labels="labels('zego')">
          <template #dates>04/2021 – 08/2022</template>
          <template #employer>Extracover Ltd (Zego.com)</template>
          <template #job-title>Python Developer</template>
          <template #locations>London, UK</template>
          <template #job-description-short>
            I joined this absolutely fantastic, vibrant company as a Python developer and learned so
            much more than I expected. I helped adding features and fixing bugs in the company's
            rather complex core B2C system, a website offering specialised car insurance in some
            market segments.
          </template>
          <template #job-description>
            <p>
              This work involved deeply getting to know the Django framework, Google's Protocol
              Buffers and GraphQL in the first couple of months, during which I worked with multiple
              teams and completed both back-end and front-end tasks.
            </p>
            <p>
              Then, I was invited to take part in the exciting and challenging task of rewriting
              parts of the legacy system into multiple, modular component-services, a mega project
              the company had been preparing for some time by then. This was based on an ingenious,
              truly micro-service oriented design whereby each component-service comprises of its
              own micro-backend, micro-frontend and orchestrator service triplets. Leveraging the
              potential of this architecture, we built a system that could dynamically provide user
              journeys with complicated, conditional constraints, sub-journeys and much more, all by
              the means of some JSON configuration files.
            </p>
          </template>
        </Job>
        <Job :labels="labels('loxon')">
          <template #dates>11/2019 – 08/2020</template>
          <template #employer>Loxon Solutions cPlc</template>
          <template #job-title>Dev-Ops Engineer</template>
          <template #locations>Budapest, HU</template>
          <template #job-description-short>
            I have been working with a few small teams of talented engineers as a Development
            Operations Engineer to the Innovation Division of this FinTech company, providing daily
            support in infrastructure maintenance, development, test and release processes.
          </template>
          <template #job-description>
            <p>
              I supervised, troubleshooted and improved many systems and automated procedures that
              were constantly in use by developers, QA engineers and business analysts such as
              maintaining package repositories, Jenkins pipelines, databases, managing upgrades of
              certain infrastructure components creating, upgrading and troubleshooting resource
              monitoring systems.
            </p>
            <p>
              I helped plan and manage the growth and resource requirements of the in-house cloud
              infrastructure where the company's new generation Debt Collection system, a fully
              Dockerized, micro-services architecture Java Spring Boot Application was being
              developed, researched and tested.
            </p>
          </template>
        </Job>
        <Job :labels="labels('cohort')">
          <template #dates>03/2016 – 03/2019</template>
          <template #employer>Cohort Global Ltd,<br />Cohort Global Australia Pty Ltd</template>
          <template #job-title>Lead Developer</template>
          <template #locations>London, UK・Sydney, AU</template>
          <template #job-description-short>
            I have fulfilled the role of Lead Software Engineer for a small, in-house software
            development team, and managed the product life-cycle for the company's Affiliate
            Management Platform. My responsibilities ranged from liaising requirements with
            management, marketing and sales teams, supervising fortnightly sprints, daily workflows
            and code quality, executing code reviews, working with QA team, building and running
            stress tests.
          </template>
          <template #job-description>
            <p>
              I helped planning the requirements and gradually upgraded the database and cloud
              infrastructure to cope with increasing traffic volumes and meet security requirements.
              Under my supervision, we have moved from an initial 3 static server setup (backend,
              frontend and database server) to an autoscaling load balanced front end, replicated
              MySQL servers, then eventually migrated the quite large international data set to an
              AWS Aurora cluster and introduced CDN for static assets.
            </p>
            <p>
              I have created an automated a CI/CD and release pipeline using AWS CodeDeploy,
              Jenkins, Ant and Shell scripts, something the company didn't have before and relied on
              manual code deployments, which helped greatly reduce the time needed to release new
              features and bug-fixes. I helped implementing FaaS ETL flows, and executed two large
              scale infrastructure projects: physically separating development, test and production
              environments into dedicated AWS accounts with consolidated billing, and preparing and
              modifying the application and the infrastructure for GDPR compliance. This included
              separating, transferring and removing data as needed, moving EU clients' data from
              Asia Pacific region to EU while in production with no down time and adding on demand
              and bulk data anonymizing functionality.
            </p>
          </template>
        </Job>
        <Job :labels="labels('virgo')">
          <template #dates>01/2015 – 02/2016</template>
          <template #employer>Virgo Systems Ltd</template>
          <template #job-title>Senior Web Developer</template>
          <template #locations>Budapest, HU</template>
          <template #job-description-short>
            I worked for this software company as a contractor for a brilliant client in the real
            estate industry who wanted to build the world's first crowd finance real estate
            marketplace and investment platform. I was part of a team of 12 talented engineers and
            took part in designing and implementing parts of this large system.
          </template>
          <template #job-description>
            <p>
              We have opted for a classic NodeJS application with Express, Handlebars templates and
              MongoDB persistent storage and worked in rapid iterations producing multiple
              prototypes of the platform.
            </p>
          </template>
        </Job>
        <Job :labels="labels('netm')">
          <template #dates>01/2012 – 11/2014</template>
          <template #employer>Net Mobile UK Ltd</template>
          <template #job-title>Senior Back-end Developer</template>
          <template #locations>London, UK</template>
          <template #job-description-short>
            I joined the UK sister of this international B2B telecommunications firm based in
            Germany as a back-end software engineer and worked on two large projects for high
            profile clients, Playboy and Fujitsu.
          </template>
          <template #job-description>
            <p>
              For the Playboy mobile app, that operated on a Freemium / Subscription model, I worked
              with a small team of iOS and Android developers, designed and implemented the server
              backend for the mobile applications. Responsibilities included
            </p>
            <ul>
              <li>
                design and implementation of a CMS system using Symfony & Doctrine that allowed
                editors to update contents.
              </li>
              <li>
                Design and implementation of a JSON API producer that the mobile applications
                consumed for subscriptions management and contents updates
              </li>
              <li>
                Implementation of on-demand, differential content delivery aiming to minimize
                traffic volume
              </li>
              <li>Implementation of secured distributed content delivery via AWS CloudFront</li>
              <li>
                Consumer implementation for the Apple Push Notifications and Google Cloud Messaging
                services to delivery content update notifications
              </li>
              <li>
                Creation, monitoring and maintenance of the staging and production cloud
                infrastructure
              </li>
            </ul>
            <p>
              The work for Fujitsu involved improving existing and developing several new features
              in a mobile portal that came pre-installed with certain types of mobile phones
              targeting elderly customers in some European markets.
            </p>
          </template>
        </Job>
        <div>
          <a href="#" @click.prevent="moreJobs" class="show-more">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  v-if="showJobs === false"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
                <path v-else d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
              </svg>
            </span>
            <span>Show </span>
            <span>{{ showJobs ? 'less' : 'more' }}</span>
            <span> work experience</span>
          </a>
        </div>
        <div v-if="showJobs === true" class="more-jobs">
          <Job :labels="labels('markcomedia')">
            <template #dates>08/2009 – 01/2012</template>
            <template #employer>MarkcoMedia Ltd</template>
            <template #job-title>Back-end Web Developer</template>
            <template #locations>London, UK</template>
            <template #job-description-short>
              I joined MarkcoMedia as a back-end developer to work on a large-scale PHP web
              application engine that served numerous high traffic websites in Europe and the US at
              the time.
            </template>
            <template #job-description>
              <p>
                The product,
                <a target="_blank" href="http://myvouchercodes.co.uk">MyVoucherCodes.co.uk</a>,
                still popular today, was the market leader Voucher, Coupon Code and Discount Deals
                website in the UK which also ran websites in the US, Brazil and other European
                countries including Germany and France.
              </p>
              <p>
                In the first period, I worked with a team to apply some much needed optimisation to
                the legacy code base both on the application code and on the database design and
                access layers. Later work included developing new modules and subsystems for the
                application, while in the second period I was part of the larger team tasked with
                rewriting the entire engine in the Zend framework.
              </p>
            </template>
          </Job>
          <Job :labels="labels('thrusites')">
            <template #dates>06/2008 – 07/2009</template>
            <template #employer>thruSITES Ltd</template>
            <template #job-title>Web Developer</template>
            <template #locations>London, UK</template>
            <template #job-description-short>
              thruSITES, a small software company, was my first UK employer after graduation and I
              started work here as a full-stack web application developer full of excitement and
              energy.
            </template>
            <template #job-description>
              <p>
                I worked on three different PHP / MySQL projects, one of which involved adding small
                contributions to an existing website, one was a small web application that I
                completed on my own from design to implementation featuring Web2.0 technologies, and
                for the third one I joined a team of four to work on a larger sports community
                website.
              </p>
            </template>
          </Job>
          <Job>
            <template #dates>05/2002 – 07/2005</template>
            <template #employer>Sziget Cultural Management Ltd</template>
            <template #job-title>IT Manager</template>
            <template #locations>Budapest, HU</template>
            <template #job-description-short>
              Responsibilities included Windows/Linux Server and network management, desktop
              support, outsourcing, IT services and infrastructure management, planning and
              budgeting the required supply and services in a 50 people office environment as well
              as at event sites, leading small teams on a project basis numerous times yearly.
            </template>
          </Job>
          <Job>
            <template #dates>2000 – 2002</template>
            <template #employer>BigFish Internet Ltd</template>
            <template #job-title>Web Developer</template>
            <template #locations>Budapest, HU</template>
            <template #job-description-short>
              My job at BigFish involved taking part in the development of a PHP/MySQL/Javascript
              web application for the country's first online home delivery groceries store.
            </template>
          </Job>
          <Job>
            <template #dates>1999 – 2000</template>
            <template #employer>EnProTech Multimedia Studio Ltd</template>
            <template #job-title>Multimedia CD-ROM Developer</template>
            <template #locations>Budapest, HU</template>
            <template #job-description-short>
              I worked with a small team on a few large-scale projects developing Multimedia CD-ROMs
              using Macromedia Authorware and Director. We created a CD-ROM for World Expo 2000,
              Hanover (representing Hungary) and a promotional CD-ROM for the Hungarian Post office
              distributed nation-wide.
            </template>
          </Job>
          <Job>
            <template #dates>1997 – 1999</template>
            <template #employer>3D Express Ltd</template>
            <template #job-title>3D Programmer</template>
            <template #locations>Budapest, HU</template>
            <template #job-description-short>
              I developed 3D objects and virtual “worlds” for educational, advertisement and
              presentation purposes using Superscape VRT and 3D Webmaster.
            </template>
          </Job>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
@import '../../assets/site-content.css';

p {
  line-height: 1.6;
  margin-bottom: 0.5em;
}

ul {
  margin: 1em 0;
}

.col-group.experience {
  margin-top: 4em;
}

@media (max-width: 920px) {
  .col-group > div:first-child {
    padding: 0 0 1em 0;
  }
  .col-group > div:last-child {
    padding: 1em 0 0 0;
  }

  .col-group-2.col-4-6 {
    grid-template-columns: 100%;
    margin-top: 2em;
  }
}

/* -------- */

div.label-cloud-container {
  position: relative;
  margin: 1.5em 5em 0 0;
}

.label-cloud {
  position: sticky;
  top: 8em;
}

/* -------- */

.more-jobs {
  margin-top: 2em;
}

.show-more > span {
  position: relative;
  left: 1em;
}

.show-more svg {
  top: 0;
}

ul.label-cloud {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 2.5rem;
  padding: 1em;
  border-radius: 0.25em;
  background-color: transparent;
  background-image: linear-gradient(135deg, #fdfeff 5%, #d0b5b512 70%);
  opacity: 1;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

ul.label-cloud a[data-weight='0'] {
  --size: 1.5;
}
ul.label-cloud a[data-weight='1'] {
  --size: 2;
}
ul.label-cloud a[data-weight='2'] {
  --size: 2.5;
}
ul.label-cloud a[data-weight='3'] {
  --size: 3;
}
ul.label-cloud a[data-weight='4'] {
  --size: 3.5;
}
ul.label-cloud a[data-weight='5'] {
  --size: 4;
}
ul.label-cloud a[data-weight='6'] {
  --size: 4.5;
}
ul.label-cloud a[data-weight='7'] {
  --size: 6;
}
ul.label-cloud a[data-weight='8'] {
  --size: 6.5;
}
ul.label-cloud a[data-weight='9'] {
  --size: 7;
}
ul.label-cloud a[data-weight='10'] {
  --size: 7.5;
}

ul.label-cloud a {
  display: block;
  /*font-size: 1.1rem;*/
  padding: 0.125rem 0.25rem;
  text-decoration: none;
  position: relative;
  --size: 4;
  font-size: calc(var(--size) * 0.25rem + 0rem);
  line-height: 1.25rem;
}

@media (max-width: 920px) {
  .label-cloud-container {
    width: 100%;
  }
}
</style>

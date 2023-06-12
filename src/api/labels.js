class Weights {
  constructor(professional, interest) {
    this._professional = professional
    this._interest = interest
  }

  get professional() {
    return this._professional
  }

  get interest() {
    return this._interest
  }
}

class Colors {
  constructor(hexArray) {
    if (!Array.isArray(hexArray)) throw new Error('Invalid argument')
    this._colors = hexArray
  }

  get colors() {
    return this._colors
  }

  shuffle() {
    let currentIndex = this._colors.length,
      randomIndex
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[this._colors[currentIndex], this._colors[randomIndex]] = [
        this._colors[randomIndex],
        this._colors[currentIndex]
      ]
    }
  }

  iter() {
    return this._colors[Symbol.iterator]()
  }
}

class Label {
  _color

  constructor(text, weights) {
    this._text = text
    this._weights = weights
  }

  get text() {
    return this._text
  }

  get weights() {
    return this._weights
  }

  get color() {
    return this._color
  }

  set color(hex) {
    this._color = hex
  }

  static Create(text, professional, interest) {
    return new Label(text, new Weights(professional, interest))
  }
}

class LabelAggregate {
  _text = ''
  _count = 0
  _professional = 0
  _interest = 0
  _total_weight = 0
  _color

  constructor(label) {
    if (!label.text || !(label.weights instanceof Weights)) {
      throw new Error('Invalid argument')
    }
    this._count++
    this._text = label.text
    this._professional = label.weights.professional
    this._interest = label.weights.interest
    this._color = label.color
  }

  get count() {
    return this._count
  }

  get text() {
    return this._text
  }

  get professional() {
    return this._professional
  }

  get interest() {
    return this._interest
  }

  get color() {
    return this._color
  }

  get total_weight() {
    return Math.round(((this._professional / this._count + this._interest / this._count) * 10) / 2)
  }

  add(label) {
    if (!(label instanceof Label)) throw new Error('Invalid argument')
    if (label.text !== this._text) throw new Error('Invalid argument')
    this._count++
    this._professional += label.weights.professional
    this._interest += label.weights.interest
  }

  static FromLabel(label) {
    if (!(label instanceof Label)) throw new Error('Invalid argument')
    return new LabelAggregate(label)
  }

  static Aggregate(blocks) {
    const agg = {}
    const keys = Object.keys(blocks)
    const colors = new Colors(_colors)

    colors.shuffle()
    let iter = colors.iter()

    for (let key of keys) {
      for (let label of labels(key)) {
        const entry = iter.next()
        label.color = entry.value

        if (entry.done) {
          colors.shuffle()
          iter = colors.iter()
        }

        if (agg[label.text] === undefined) {
          agg[label.text] = LabelAggregate.FromLabel(label)
        } else {
          agg[label.text].add(label)
        }
      }
    }

    return Object.values(agg).sort(() => (Math.random() < 0.5 ? 1 : -1))
  }
}

const textApacheAnt = 'Apache Ant'
const textApacheJMeter = 'Apache JMeter'
const textApacheKafka = 'Apache Kafka'
const textApacheMaven = 'Apache Maven'
const textArgoCD = 'ArgoCD'
const textAWS_ALB = 'AWS ALB'
const textAWS_Aurora = 'AWS Aurora'
const textAWS_CloudFront = 'AWS CloudFront'
const textAWS_CodeDeploy = 'AWS CodeDeploy'
const textAWS_DBMS = 'AWS DBMS'
const textAWS_EC2 = 'AWS EC2'
const textAWS_Lambda = 'AWS Lambda'
const textAWS_RDS = 'AWS RDS'
const textAWS_Route53 = 'AWS Route53'
const textAWS_VPC = 'AWS VPC'

const textBamboo = 'Bamboo CI/CD'
const textBash = 'Bash'
const textBitBucket = 'BitBucket'
const textBuildKite = 'BuildKite CI/CD'

const textC = 'C'
const textCPP = 'C++'
const textCypress = 'Cypress'

const textDataDog = 'DataDog'
const textDjango = 'Django'
const textDocker = 'Docker'
const textDockerSwarm = 'Docker Swarm'
const textDoctrineORM = 'Doctrine ORM'

const textElasticSearch = 'ElasticSearch'
const textEmbeddedC = 'Embedded C'
const textExpressJS = 'Express.js'

const textFastAPI = 'FastAPI'
const textFreeRTOS = 'FreeRTOS'

const textGit = 'Git'
const textGitHub = 'GitHub'
const textGitHubActions = 'GitHubActions'
const textGraphQL = 'GraphQL'
const textGroovy = 'Groovy'
const textGo = 'Go'
const textGRPC = 'gRPC'

const textHandlebars = 'Handlebars'
const textHelm = 'Helm Charts'

const textJava = 'Java'
const textJavaScript = 'JavaScript'
const textJenkins = 'Jenkins'
const textJQuery = 'jQuery'

const textK8s = 'Kubernetes'
const textKibana = 'Kibana'

const textLogStash = 'LogStash'

const textMochaJS = 'Mocha.js'
const textMongoDB = 'MongoDB'
const textMySQL = 'MySQL'

const textNextJS = 'Next.js'
const textNodeJS = 'Node.js'

const textPHP = 'PHP'
const textPgsql = 'PostgreSQL'
const textPython = 'Python'

const textReact = 'React'
const textREST = 'REST'
const textRiscV = 'RISC V'
const textRocket = 'Rocket.rs'
const textRust = 'Rust'

const textSpringBoot = 'SpringBoot'
const textSVN = 'SVN'
const textSymfony = 'Symfony'

const textTDD = 'TDD'

const textVue = 'Vue.js'

const textZabbix = 'Zabbix'
const textZend = 'PHP Zend Framework'

const _labels = {
  cohort: [
    Label.Create(textPHP, 1, 0),
    Label.Create(textMySQL, 0.8, 0),
    Label.Create(textREST, 0.8, 0),
    Label.Create(textJavaScript, 1, 0),
    Label.Create(textJQuery, 1, 0),
    Label.Create(textApacheJMeter, 0.4, 0),
    Label.Create(textApacheAnt, 0.2, 0),
    Label.Create(textJenkins, 0.2, 0),
    Label.Create(textDataDog, 0.3, 0),
    Label.Create(textAWS_EC2, 0.6, 0),
    Label.Create(textAWS_ALB, 0.6, 0),
    Label.Create(textAWS_Lambda, 0.2, 0),
    Label.Create(textAWS_Route53, 0.5, 0),
    Label.Create(textAWS_VPC, 0.5, 0),
    Label.Create(textAWS_DBMS, 0.8, 0),
    Label.Create(textAWS_Aurora, 0.5, 0),
    Label.Create(textAWS_CloudFront, 0.7, 0),
    Label.Create(textAWS_CodeDeploy, 0.7, 0),
    Label.Create(textBash, 0.5, 0),
    Label.Create(textGit, 0.3, 0),
    Label.Create(textGitHub, 0.2, 0)
  ],
  loxon: [
    Label.Create(textDocker, 1, 0),
    Label.Create(textDockerSwarm, 1, 0),
    Label.Create(textJenkins, 0.8, 0),
    Label.Create(textApacheMaven, 0.2, 0),
    Label.Create(textApacheKafka, 0.4, 0),
    Label.Create(textLogStash, 0.2, 0),
    Label.Create(textElasticSearch, 0.6, 0),
    Label.Create(textKibana, 0.4, 0),
    Label.Create(textZabbix, 0.3, 0),
    Label.Create(textGroovy, 0.2, 0),
    Label.Create(textJava, 0.4, 0),
    Label.Create(textSpringBoot, 0.2, 0),
    Label.Create(textBash, 0.5, 0),
    Label.Create(textGit, 0.8, 0),
    Label.Create(textGitHub, 0.6, 0)
  ],
  markcomedia: [
    Label.Create(textPHP, 1.0, 0),
    Label.Create(textMySQL, 0.8, 0),
    Label.Create(textJavaScript, 1, 0),
    Label.Create(textZend, 0.4, 0),
    Label.Create(textSVN, 0.7, 0)
  ],
  netm: [
    Label.Create(textPHP, 1, 0),
    Label.Create(textMySQL, 0.8, 0),
    Label.Create(textSymfony, 1, 0),
    Label.Create(textDoctrineORM, 0.9, 0),
    Label.Create(textJavaScript, 0.8, 0),
    Label.Create(textREST, 1, 0),
    Label.Create(textAWS_EC2, 1, 0),
    Label.Create(textAWS_RDS, 1, 0),
    Label.Create(textAWS_CloudFront, 0.6, 0),
    Label.Create(textBash, 0.5, 0),
    Label.Create(textGit, 0.6, 0),
    Label.Create(textGitHub, 0.6, 0)
  ],
  virgo: [
    Label.Create(textNodeJS, 1, 0),
    Label.Create(textExpressJS, 0.8, 0),
    Label.Create(textHandlebars, 0.6, 0),
    Label.Create(textMongoDB, 1, 0),
    Label.Create(textREST, 0.7, 0),
    Label.Create(textTDD, 1, 0),
    Label.Create(textMochaJS, 0.8, 0),
    Label.Create(textCypress, 0.4, 0),
    Label.Create(textPgsql, 1, 0),
    Label.Create(textGit, 0.5, 0),
    Label.Create(textBitBucket, 1, 0),
    Label.Create(textBamboo, 0.8, 0)
  ],
  thrusites: [
    Label.Create(textPHP, 1, 0),
    Label.Create(textMySQL, 1, 0),
    Label.Create(textDoctrineORM, 0.4, 0),
    Label.Create(textJavaScript, 1, 0),
    Label.Create(textGit, 0.4, 0),
    Label.Create(textGitHub, 0.2, 0)
  ],
  zego: [
    Label.Create(textPython, 1, 0),
    Label.Create(textDjango, 1, 0),
    Label.Create(textPgsql, 1, 0),
    Label.Create(textGRPC, 1, 0),
    Label.Create(textFastAPI, 0.6, 0),
    Label.Create(textDocker, 1, 0),
    Label.Create(textDataDog, 0.7, 0),
    Label.Create(textReact, 0.4, 0),
    Label.Create(textGraphQL, 0.6, 0),
    Label.Create(textNextJS, 0.6, 0),
    Label.Create(textK8s, 0.5, 0),
    Label.Create(textHelm, 0.5, 0),
    Label.Create(textArgoCD, 0.4, 0),
    Label.Create(textBuildKite, 1, 0),
    Label.Create(textAWS_EC2, 0.3, 0),
    Label.Create(textGit, 1, 0),
    Label.Create(textGitHub, 1, 0),
    Label.Create(textGitHubActions, 0.6, 0)
  ],
  webscp: [
    Label.Create(textGo, 0.4, 0.5),
    Label.Create(textRust, 0.25, 1),
    Label.Create(textVue, 0.9, 0),
    Label.Create(textRocket, 0.5, 0),
    Label.Create(textBash, 0.5, 0)
  ],
  dashy: [
    Label.Create(textVue, 1, 0),
    Label.Create(textNodeJS, 0.88, 0),
    Label.Create(textJavaScript, 1, 0)
  ],
  kate: [Label.Create(textC, 0.4, 0), Label.Create(textCPP, 0.4, 0)],
  matchdog: [Label.Create(textJava, 0.9, 0)],
  jchat: [Label.Create(textJavaScript, 0.8, 0)],
  esp32: [
    Label.Create(textEmbeddedC, 0.4, 0),
    Label.Create(textC, 0.4, 0),
    Label.Create(textFreeRTOS, 0.6, 0),
    Label.Create(textRiscV, 0.3, 0)
  ]
}

const _colors = [
  '#aa55f2',
  '#11304f',
  '#04111d',
  '#3989d9',
  '#fc913b',
  '#5ebc19',
  '#006f2c',
  '#10006f',
  '#030016',
  '#720404',
  '#2b8eb6',
  '#859900',
  '#0047a3',
  '#e00000',
  '#00bcaa',
  '#329676',
  '#37b0e2',
  '#00c9aa',
  '#ff7a00',
  '#69879a',
  '#0029ff',
  '#c9bc13',
  '#c9bc13',
  '#be13c9',
  '#e3004e',
  '#be13c9',
  '#0593fe',
  '#fe055a',
  '#fe055a',
  '#00bcaa',
  '#00d2aa',
  '#00ED64',
  '#00f1fe',
  '#005be3',
  '#1cf900',
  '#173fc8',
  '#80ea6e',
  '#f3d100',
  '#e600ae',
  '#320033',
  '#2ad964',
  '#01b2af',
  '#01b217',
  '#c31515',
  '#00b5ff',
  '#ff00c9',
  '#e3cb00',
  '#633417'
]

const labels = (key) => {
  return _labels[key]
}

const aggregate = () => {
  return LabelAggregate.Aggregate(_labels)
}

export { aggregate, labels, Label }

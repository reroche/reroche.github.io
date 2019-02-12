import React, { Component } from 'react'

import Separator from '../components/Separator'
import {
  CollapsibleSection,
  MyH3,
  MyH5,
  MyP,
  MyUl
} from '../components/StyledTexts'

const TechnicalSkillsSection = (
  <div>
    <MyH5>Programming Languages</MyH5>
    <MyUl>
      <li>
        Extensive experience using <b>Python</b> and <b>R</b> for data analysis,
        visualization, and working with Machine Learning frameworks such as{' '}
        <b>PyTorch</b> and <b>Keras</b>.
      </li>
      <li>
        Working knowledge of <b>JavaScript</b>, especially with <b>React</b> and{' '}
        <b>React Native</b> frameworks, for developing websites, web apps and
        mobile apps.
      </li>
      <li>
        Proficient use of <b>C</b> for implementing algorithms and advanced data
        structures.
      </li>
    </MyUl>
    <MyH5>Frameworks and Tools</MyH5>
    <MyUl>
      <li>
        <b>Python:</b>
        <MyUl>
          <li>
            Considerable use of <b>Numpy</b> and <b>Pandas</b> for data
            analysis, and <b>Matplotlib</b> for data visualization.
          </li>
          <li>
            Experience using <b>TensorFlow</b> and <b>Keras</b> for building
            machine learning models and deep neural networks.
          </li>
        </MyUl>
      </li>
      <li>
        <b>R:</b>
        <MyUl>
          <li>
            Proficient in the use of <b>Tidyverse</b> packages, especially{' '}
            <b>ggplot</b> for visualizations.
          </li>
          <li>
            Advanced use of <b>RMarkdown</b> (for creating reports and posters)
            and <b>R Shiny</b> (for creating dashboards and web apps).
          </li>
        </MyUl>
      </li>
      <li>
        <b>JavaScript:</b>
        <MyUl>
          <li>
            Again, experience working with <b>React</b> and <b>React Native</b>,
            as well as <b>Redux</b>, <b>React Router</b>, <b>Gatsby</b>, and{' '}
            <b>Electron</b> to produce versatile and responsive web, native, and
            mobile apps using this programming language.{' '}
          </li>
          <li>
            Familiarity with <b>D3.js</b>, and some experience creating
            interactive dashboards.
          </li>
        </MyUl>
      </li>
    </MyUl>
    <MyH5>Other</MyH5>
    <MyUl>
      <li>
        Experience working with <b>Git</b>, <b>Linux</b>, and{' '}
        <b>Docker Containers</b>.
      </li>
      <li>
        Working knowledge of <b>SQL (Postgres, MySQL)</b> and{' '}
        <b>NoSQL (MongoDB, Cassandra)</b> databases.
      </li>
    </MyUl>
    <Separator />
  </div>
)

const WorkExperienceSection = (
  <div>
    <MyH3>Intelectum LLC</MyH3>
    <MyH5>
      <em>Web Development Intern</em> | Mexico City, Mexico | Summer 2018
    </MyH5>
    <MyUl>
      <li>
        Developed a desktop application for the distribution of premium content,
        using <b>React</b> and <b>ElectronJS</b>.
      </li>
      <li>
        Designed a deep neural network using <b>Keras</b> in <b>R</b> to provide
        daily trading recommendations to subscribers, through the desktop
        application.
      </li>
      <li>
        Created a <b>React Native</b> mobile application containing several
        self-evaluation quizzes in areas such as productivity, organization, and
        communication.
      </li>
    </MyUl>
    <MyH3>APS Technology Inc.</MyH3>
    <MyH5>
      <em>Data Science intern in Quality Assurance</em> | Wallingford, CT |
      Summer 2017
    </MyH5>
    <MyUl>
      <li>
        Developed database applications in <b>JavaScript</b>, to automate the
        flow of information between manufacturing and engineering teams, the QA
        department, and customer support and sales representatives in 3
        countries. These applications led to a measurable decrease in time taken
        to respond to hardware and software failures.
      </li>
      <li>
        Used <b>Python</b> to extract and clean data from manufacturing and
        testing instruments, develop models to predict faulty products, create
        visualizations with valuable insight for the production process.
      </li>
    </MyUl>
    <MyH3>
      Carnegie Mellon University - Department of Statistics and Data Science
    </MyH3>
    <MyH5>
      <em>Astro-Statistics Research Trainee</em> | Fall 2016
    </MyH5>
    <MyUl>
      <li>
        Analyzed data from the Catalina Sky Survey (consisting of over 13
        million measurements) using tools in <b>R</b> to extract features of the
        data to distinguish different types of stars and transient objects.
      </li>
      <li>
        Used machine learning models (random forests, support vector machines,
        k-nearest neighbors) to classify stars based on type.
      </li>
      <li>
        Designed a poster to display visualizations and illustrate analysis and
        findings. Presented at CMU's Undergraduate Research Symposium in May
        2017.
      </li>
    </MyUl>
    <Separator />
  </div>
)

const EducationSection = (
  <div>
    <MyH3>Carnegie Mellon University</MyH3>
    <MyP>
      <font color='#497Fa4'>
        Bachelor of Science in Statistics and Machine Learning (Pursuing)
      </font>
      <br />
      <b>Expected Graduation:</b> May 2019
      <br />
      <b>GPA:</b> 3.28 / 4.0
    </MyP>
    <MyP>Here are some relevant courses I've taken:</MyP>
    <ul>
      <li>
        <b>10-601:</b> Introduction to Machine Learning
      </li>
      <li>
        <b>15-112:</b> Fundamentals of Computer Science
      </li>
      <li>
        <b>15-122:</b> Principles of Imperative Computation
      </li>
      <li>
        <b>15-351:</b> Algorithms and Advanced Data Structure
      </li>
      <li>
        <b>21-240:</b> Matrix Algebra
      </li>
      <li>
        <b>21-256:</b> Multivariate Analysis
      </li>
      <li>
        <b>36-315:</b> Graphics and Visualization
      </li>
      <li>
        <b>36-350:</b> Statistical Computing
      </li>
      <li>
        <b>36-401:</b> Modern Regression
      </li>
      <li>
        <b>36-402:</b> Advanced Methods for Data Analysis
      </li>
    </ul>
    <MyH3>deeplearning.ai</MyH3>
    <MyP>
      In August 2018 I completed Andrew Ng's Deep Learning specialization,{' '}
      <a href='http://deeplearning.ai'>deeplearning.ai</a>, on Coursera. My
      certificate is available{' '}
      <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/8QRL2F2FAUHY'>
        here
      </a>.
    </MyP>
    <MyH3>The British School Caracas</MyH3>
    <MyP>
      In 2015, I graduated from The British School Caracas, in Venezuela. I was
      part of the school's first ever graduating class. In my four years at this
      high school I was Student Council President, House Captain, Head Delegate
      of the Model United Nations team, and participated in various volunteering
      projects.
    </MyP>
    <Separator />
  </div>
)

class Resume extends Component {
  render () {
    return (
      <div>
        <MyP>
          A PDF version of my resume is available{' '}
          <a href='/docs/resume_web.pdf'>here</a>.
        </MyP>
        <Separator />
        <CollapsibleSection
          label='Technical Skills'
          content={TechnicalSkillsSection}
        />
        <CollapsibleSection
          label='Work Experience'
          content={WorkExperienceSection}
        />
        <CollapsibleSection label='Education' content={EducationSection} />
      </div>
    )
  }
}

export default Resume

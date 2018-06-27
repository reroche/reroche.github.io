import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Separator from '../components/Separator'
import {
  MyH1,
  MyH2,
  MyH3,
  MyH4,
  MyH5,
  MyP,
  MyUl,
} from '../components/StyledTexts'

const ImgCaption = styled.h5`
  margin: 20px 0;
  text-align: center;
  font-style: italic;
  font-weight: normal;
  font-size: 28px;
  color: #777777;
`
const Status = styled.em`
  font-style: initial;
  font-weight: bolder;
  color: green;
`

class Resume extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <MyP>
          A PDF version of my resume is available{' '}
          <a href="/docs/resume_web.pdf">here</a>.
        </MyP>
        <Separator />
        <MyH1>Technical Skills</MyH1>
        <MyH5>Programming Languages, Frameworks, and Tools</MyH5>
        <MyUl>
          <li>
            <b>Python:</b>
            <MyUl>
              <li>
                Extensive use of Numpy and Matplotlib for data analysis and
                visualization.
              </li>
              <li>
                Experience using Tensorflow and Keras for building machine
                learning models.
              </li>
            </MyUl>
          </li>
          <li>
            <b>R:</b>
            <MyUl>
              <li>
                Proficient in the use of Tidyverse packages, especially ggplot
                for visualizations.
              </li>
              <li>
                Advanced use of RMarkdown (for creating reports and posters) and
                R Shiny (for creating dashboards and web apps).{' '}
              </li>
            </MyUl>
          </li>
          <li>
            <b>C/C++:</b>
            <MyUl>
              <li>
                Formal education on algorithms and data structures, and
                development of non-trivial software.
              </li>
            </MyUl>
          </li>
          <li>
            <b>JavaScript:</b>
            <MyUl>
              <li>
                Experience using React for web development, and React Native for
                mobile development.
              </li>
              <li>
                Familiarity with Node.js, TypeScript, and Gatsby (which I used
                to build this site).
              </li>
            </MyUl>
          </li>
          <li>
            <b>Other:</b>
            <MyUl>
              <li>SQL (including MySQL and PostgreSQL)</li>
              <li>Git</li>
              <li>Linux (I'm a loyal Arch Linux user)</li>
              <li>Figma, which I use for all my prototyping and designing</li>
            </MyUl>
          </li>
        </MyUl>
        <Separator />
        <MyH1>Work Experience</MyH1>
        <MyH3>APS Technology</MyH3>
        <MyH5>
          <em>Data Science intern in Quality Assurance</em> | Wallingford, CT |
          Summer 2017
        </MyH5>
        <MyUl>
          <li>
            Developed two database applications, using JavaScript, PHP, and the
            Quickbase API:
            <MyUl>
              <li>
                Application for automating the process of logging customer
                satisfaction issues, notifying relevant sales representatives
                and departments, and following up on and resolving the issues.
              </li>
              <li>
                Application for automating the process of tracking hardware and
                software failures in company machinery, assigning investigations
                to relevant departments, mechanics, and/or developers, and
                implementing the fixes.
              </li>
            </MyUl>
          </li>
          <li>
            Used Python to extract, clean, and analyze production data to create
            visualizations with valuable insight for the production process.
          </li>
        </MyUl>
        <MyH3>
          Carengie Mellon University - Department of Statistics and Data Science
        </MyH3>
        <MyH5>
          <em>Astro-Statistics Research Trainee</em> | Fall 2016
        </MyH5>
        <MyUl>
          <li>
            Analyzed data from the Catalina Sky Survey using tools in Python and
            R to find features of the data to distinguish different types of
            stars and transient objects.
          </li>
          <li>
            Used machine-learning models (random forests, support vector
            machines, k-nearest neighbors) to classify stars based on type.
          </li>
          <li>
            Designed a poster to illustrate analysis and findings, to be
            presented at the Undergraduate Research Symposium 2017.
          </li>
        </MyUl>
        <MyH3>Intelectum CA</MyH3>
        <MyH5>
          <em>Database Administration Intern</em> | Caracas, Venezuela | Summer
          2016
        </MyH5>
        <MyUl>
          <li>
            Designed a central database (using SQL, PHP and JavaScript)
            combining customer relationship management (CRM) data, used daily
            for targeted sales to other businesses and aiding in customer
            retention.
          </li>
          <li>Maintained and backed up database on server.</li>
          <li>
            Developed user interface for working with employee performance data,
            whereby managers would rate the performance of their subordinate
            staff in a specific project.
          </li>
        </MyUl>
        <MyH3>UseClark</MyH3>
        <MyH5>
          <em>Certified Trainer</em> | Since May 2016
        </MyH5>
        <MyUl>
          <li>
            Led performance training workshops (on productivity, speed reading,
            memory training) for employees of corporate clients, involving
            groups of 10 to 15 people.
          </li>
          <li>
            Promoted the UseClark methodology at several education conferences
            and summits (audiences of 300+ people).
          </li>
        </MyUl>
        <Separator />
        <MyH1>Education</MyH1>
        <MyH3>Carnegie Mellon University</MyH3>
        <MyP>
          <font color="#497Fa4">
            Bachelor of Science in Statistics and Machine Learning (Pursuing)
          </font>
          <br />
          <b>Expected Graduation:</b> May 2019
          <br />
          <b>GPA:</b> 3.22
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
        <MyH3>The British School Caracas</MyH3>
        <MyP>
          In 2015, I graduated from The British School Caracas, in Venezuela. I
          was part of the school’s first ever graduating class. In my four years
          at this high school I was Student Council President, House Captain,
          Head Delegate of the Model United Nations team, and participated in
          various volunteering projects.
        </MyP>
        <Separator />
      </div>
    )
  }
}

export default Resume

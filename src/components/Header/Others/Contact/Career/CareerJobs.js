import React, { useState } from "react";
import styled from "styled-components";
import { CaretDown, CaretUp } from "phosphor-react";

const ContainerAccordion = styled.div`
  width: 100%;
  background-color: white;
  cursor: pointer;
  margin-bottom: 1rem;
  h1 {
    text-align: center;
    color: black;
    font-weight: bold;
    margin: 0.5rem 0.9rem;
  }
  @media (max-width: 768px) {
    padding: 0px; /* Reduce padding for smaller screens */
    h1 {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;
const AccordionSection = styled.section`
  &.open {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    margin-bottom: 5px;
  }
  .closed {
    margin-bottom: 0px;
    border-radius: 0px;
  }
`;
const AccordionHeader = styled.div`
  background-color: #f7e5f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-left: 2px solid red;
  border-radius: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  @media (max-width: 768px) {
    .container-accordian h2 {
      font-size: 12px; /* Reduce font size for question titles */
      font-weight: bold;
      margin-left: -10px;
    }
  }
`;
const QuestionTitle = styled.h2`
  text-align: justify;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px; /* Reduce font size for question titles */
    font-weight: bold;
    margin-left: -10px;
    padding: 1px 0 0 0;
  }
`;
const AccordionPara = styled.p`
  width: 95%;
  font-weight: normal;
  text-align: justify;
  font-size: 16px;
  margin-left: 2.5%;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: normal;
  }
`;
const AccordionButton = styled.button`
  background-color: #f7e5f1;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  font-size: 23px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media (max-width: 768px) {
    font-size: 25px;
    height: 30px;
    width: 30px;
    margin-right: -10px;
    margin-left: 10px;
  }
`;
// const Button = ({ onClick }) => {
//   return <button onClick={onClick}>Apply Now</button>;
// };

const CareerJobs = () => {
  const questions = [
    {
      id: 1,
      title: "Software/ Senior Software Programmer",
      content: `<p><strong>Eligibility:</strong></p>
              <ul>
                <li>3+ years of overall experience on Microsoft Technologies</li>
                <li>Expert with ASP.NET, MVC, Asp.net Core, C#, Angular, Web API, Entity Framework, and writing simple and elegant codes</li>
                <li>Strong understanding of Software Algorithm Design, Software Performance Tuning, Software Design, Software Debugging, Software Development Fundamentals</li>
                <li>Ability to analyze data and effectively report problems through written and/or graphical formats and ability to troubleshoot and develop and effective solution</li>
                <li>Experience working in a global team, collaborating effectively with clear communication</li>
                <li>Good knowledge in MY SQL / MS SQL server programming</li>
                <li>Good knowledge of AJAX and JQuery</li>
                <li>Strong knowledge of ASP.NET and design practices</li>
                <li>Strong communication skills</li>
              </ul>
              <p><strong>What you will get:</strong></p>
              <ul>
                <li>Great learning and growth opportunity</li>
                <li>Young and vibrant work culture</li>
                <li>Excellent working Environment</li>
                <li>MNC infrastructure</li>
                <li>5 days working</li>
                <li>Frequent Fun Events</li>
                <li>Work Life Balance</li>
              </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 2,
      title: "SEO / Senior SEO Executive",
      content: `<p><strong>Responsibilities:</strong></p>
              <ul>
                <li>Implementation of an SEO strategy which improves organic search ranking</li>
                <li>Perform keyword research in coordination with business objectives</li>
                <li>Basic SEO technical knowledge HTML, CSS, JS, Google Analytics, Webmaster tools, back-end SEO and more</li>
                <li>Knowledge of Off-page/On-page activities, Google analytics, Webmaster tools</li>
                <li>Ability to work within a team and independently</li>
              </ul>
              <p><strong>Desired Abilities and Aptitude:</strong></p>
              <ul>
                <li>Outstanding ability to think creatively, and identify and resolve problems</li>
                <li>Attention to detail and the ability to effectively multi-task</li>
                <li>Ability to clearly and effectively articulate thoughts and points</li>
                <li>A can-do attitude</li>
              </ul>
               <p><strong>What we assure you other than your CTC:</strong></p>
              <ul>
                  <li>A super healthy learning environment where you would have the liberty of putting up your ideas and experiment around them.</li>
                  <li>A classic niche business segment where you would be having the opportunity of playing around the most trendy ideas, a product can have.</li>
                  <li>Working with an advanced technology product.</li>
                  <li>A super active, energetic, and super friendly tech team that not only develops awesome products but also helps team members when needed.</li>
              </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 3,
      title: "Senior Android Developer",
      content: `<p><strong>Responsibilities:</strong></p>
              <ul>
                <li>Strong understanding of object-oriented principles and basic understanding of design patterns.</li>
                <li>Strong Knowledge of Kotlin (Mandatory)</li>
                <li>Proficient in Java with good knowledge of Threads and Collections Framework.</li>
                <li>Strong knowledge of Android SDK, different versions of Android, and how to deal with different screens.</li>
                <li>Understanding of basic components of an Android application and their lifecycle.</li>
                <li>Understanding of Android XML user interface layouts and layout inflation.</li>
                <li>Good knowledge of Android UI design principles, patterns, and best practices.</li>
                <li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks.</li>
                <li>Familiarity with RESTful APIs to connect Android applications to back-end services.</li>
                <li>Understanding of Git.</li>
                <li>Knowledge of Gradle build system.</li>
                <li>Familiarity with cloud message APIs and push notifications.</li>
              </ul>
              <p><strong>Desired Abilities and Aptitude:</strong></p>
                 <ul>
                    <li>A problem-solver who accepts every challenge as an opportunity to learn more and a window of improvement.</li>
                    <li>Excellent problem-solving, organizational, and analytical skills.</li>
                    <li>Thrives in a cross-functional and fast-paced environment.</li>
                    <li>Strong communication skills.</li>
                  </ul>
              <p><strong>What You Will Get:</strong></p>
              <ul>
                <li>Great learning and growth opportunity</li>
                <li>Young and vibrant work culture</li>
                <li>Excellent working Environment</li>
                <li>MNC infrastructure</li>
                <li>5 days working</li>
                <li>Frequent Fun Events</li>
                <li>Work Life Balance</li>
                <li>Working Hours Flexibility</li>
              </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 4,
      title: "Assistant Product Manager",
      content: `<p>We are looking for Assistant Product Manager preferably from a product based company between 1-2 years of working experience.</p>
              <p><strong>Roles and Responsibilities:</strong></p>
              <p>The position offered is of an Associate Product Manager.</p>
              <p><strong>i) Business Vision:</strong></p>
              <ul>
                <li>Understanding the vision and related requirements of the product.</li>
                <li>Evaluate the vision against metrics like pricing, risk, revenue etc.</li>
                <li>Evaluate the business metrics associated.</li>
                <li>Converting the business vision into a product/product feature which achieves the decided metrics.</li>
                <li>Building a product roadmap in relevance to business objectives.</li>
              </ul>
              <p><strong>ii) GTM Strategies:</strong></p>
              <ul>
                <li>Making B-Plan for Go to market strategies.</li>
                <li>Evaluating numbers associated to the product and hence the pricing and revenue.</li>
                <li>Create user personas w.r.t STP of the module.</li>
              </ul>
              <p><strong>iii) New Product/Module Development:</strong></p>
              <ul>
                <li>Creating Wireframes.</li>
                <li>Defining details and flows of the module.</li>
                <liDefining details and flows of the module.></liDefining>
                <li>Identifying the corner cases and handling them through alternatives.</li>
                <li>Measuring the impact on existing flows.</li>
              </ul>
              <p><strong>iv) Enhancements:</strong></p>
              <ul>
                <li>Creating features to empower the existing systems against defined metrics.</li>
                <li>Wireframing, User flow diagrams and UX definition.</li>
                <li>Identifying the corner cases and handling them through alternatives.</li>
                <li>Measuring the impact on existing flows.<</li>
              </ul>
              <p><strong>v) Documentation:</strong></p>
              <ul>
                <li>Translating the requirements and cases in Product Requirement Documents.</li>
                <li>Creating User Stories.</li>
              </ul>
                <p><strong>vi) Report Tracking and Decision Making:</strong></p>
              <ul>
                <li>Track whatever is build.</li>
                <li>Measure the performance of the existing system.</li>
                <li>Evaluate the quantum of impact to the metrics, defined against a feature.</li>
              </ul>
              <p><strong>Desired Abilities and Aptitude:</strong></p>
                 <ul>
                    <li>A problem-solver who accepts every challenge as an opportunity to learn more and a window of improvement.</li>
                    <li>A persistent brain, that keeps up the struggle until the issue is resolved.</li>
                    <li>Excellent problem-solving, organizational and analytical skills, with the ability to evolve product strategy based on research, data and industry trends.</li>
                    <li>Thrives in a cross-functional and fast paced environment.</li>
                    <li>Strong communication skills.</li>
                    <li>Ready to roll up sleeves to spend time designing UI, analyzing data, setting up quality processes and guardrails.</li>
                    <li>A candidate who loves playing around data. One who depends on data for building up his product.</li>
                    <li>Basic knowledge of platforms like Google Analytics and Firebase is a great plus.</li>
                  </ul>
              <p><strong>What we assure you other than your CTC:</strong></p>
              <ul>
                <li>A super healthy learning environment where you would have the liberty of putting up your ideas and experiment around them.</li>
                <li>A classic niche business segment where you would be having the opportunity of playing around the most trendy ideas, a product can have.</li>
                <li>Working with an advanced technology product that would never restrict you as a product manager in terms of introducing a functionality.</li>
                <li>A super active, energetic and super friendly tech team that not only develop awesome products but also helps you with deep technical architecture as and when needed.</li>
              </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 5,
      title: "Key Account Manager",
      content: `<p><strong>Roles and Responsibilities:</strong></p>
              <ul>
                <li>Help develop and execute a territory business plan.</li>
                <li>Build strong relationships with potential expert partners.</li>
                <li>Engage with experts to sign up with the Astroyogi platform Build an in-depth understanding of the Astrologer in your city across categories and sign up the right set of Astrologers to partner with clearly articulate the value of our platform proposition to the Astrologers. Drive business development &amp; lead communication with all potential partners through the entire business cycle..</li>
                <li>Exceed monthly targets and all activities of revenue generation.</li>
                <li>Manage and track your account funnel, with multiple simultaneous opportunities.</li>
                <li>Share your learning’s with the team &amp; mentor newer sales team members.</li>
                <li>Be part of a winning team culture.</li>
                <li>Sales driven and good communication skills..</li>
                <li>Team handling experience can be add on not must..</li>
                <li>Candidate should be flexible to work in rotational shifts..</li>
              </ul>
              <p><strong>Skillset:</strong></p>
              <ul>
                <li>Candidate must be relentlessly driven, self-motivated and goal-oriented.</li>
                <li>Candidate must have an unstoppable intellectual curiosity, always asking: How? Why not?.</li>
                <li>2 - 4 years of experience in&nbsp; sales and key account management..</li>
                <li>Candidate should be a postgraduate- MBA in marketing and sales.</li>
              </ul>
              <p><strong>Here are the kinds of skills we are looking for:</strong></p>
                 <ul>
                   <li>You are relentlessly driven, self-motivated and goal-oriented.</li>
                   <li>You enjoy success most when you've had to overcome obstacles to achieve it..</li>
                   <li>You celebrate your success and the success of your teammates even more.</li>
                   <li>You don't wait for anyone to give you anything - you make it, build it, finish it.</li>
                   <li>You demonstrate your desire to master your craft early and often.</li>
                   <li>You have an unstoppable intellectual curiosity, always asking: How? Why not?.</li>
                   <li>Wherever you go, your previous colleagues and customers try to hire you.</li>
                   <li>1-2 years of experience managing and leading inside sales teams.</li>
                   <li>Any Graduate.</li>
                  </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 6,
      title: "IOS Developer",
      content: `<p><strong>Responsibilities:</strong></p>
              <ul>
                  <li>Design and build applications for the iOS platform</li>
                  <li>Ensure the performance, quality, and responsiveness of applications</li>
                  <li>Collaborate with a team to define, design, and ship new features</li>
                  <li>Identify and correct bottlenecks and fix bugs</li>
                  <li>Help maintain code quality, organization, and automatization</li>
                  <li>Delivering across the entire app life cycle - concept, design, build, deploy, test, release to app stores, and support</li>
              </ul>
              <p><strong>Desired Abilities:</strong></p>
                 <ul>
                    <li>Proficient with Swift</li>
                    <li>Experience with offline storage, threading, and performance tuning</li>
                    <li>Familiarity with RESTful APIs to connect iOS applications to back-end services</li>
                    <li>Understanding of Apple's design principles and interface guidelines</li>
                    <li>Familiarity with cloud message APIs and push notifications</li>
                    <li>Proficient understanding of code versioning tools such as Git</li>
                    <li>A problem-solver who accepts every challenge as an opportunity to learn more and a window of improvement.</li>
                    <li>Excellent problem-solving, organizational, and analytical skills.</li>
                    <li>Thrives in a cross-functional and fast-paced environment.</li>
                    <li>Strong communication skills.</li>
                  </ul>
              <p><strong>What You Will Get:</strong></p>
              <ul>
                <li>Great learning and growth opportunity</li>
                <li>Young and vibrant work culture</li>
                <li>Excellent working environment</li>
                <li>MNC infrastructure</li>
                <li>5 days working</li>
                <li>Frequent fun events</li>
                <li>Work-life balance</li>
                <li>Working hours flexibility</li>
              </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 7,
      title: "Digital Marketing Manager",
      content: `<p><strong>Responsibilities:</strong></p>
              <ul>
                <li>Own the strategy and roadmap for a key product/business area.</li>
                <li>Should have indepth understanding of implementation of Digital Marketing aspects – Adwords, Analytics, SEO, SEM, SMO, SMM etc.&nbsp; Experience of EMarketing will be an added advantage.</li>
                <li>Increasing the revenue through the various partners (marketplaces) Developing the digital/online marketing for the company to help raise brand awareness, and hence influence sales numbers.</li>
                <li>In addition to developing the holistic marketing strategy for the company, candidate will also be responsible for driving brand awareness by linking with other popular online media.</li>
                <li>Responsible for creating&nbsp; new alliances / business development.</li>
              </ul>
              <p><strong>Desired Abilities and Aptitude:</strong></p>
                 <ul>
                    <li>A post graduate with&nbsp; at least 4 years of post&nbsp; qualification experience in core business development and alliances.</li>
                    <li>He should have a solid knowledge of developing online based strategies, and proven track record of developing brand identity with an innovative approach towards the online marketing space, and a thorough understanding of web based strategies.</li>
                    <li>A problem-solver who accepts every challenge as an opportunity to learn more and a window of improvement.</li>
                    <li>Excellent problem-solving, organizational and analytical skills.</li>
                    <li>Thrives in a cross-functional and fast paced environment.</li>
                    <li>Strong communication skills.</li>
                  </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 8,
      title: "Manual Tester",
      content: `<p><strong>Responsibilities:</strong></p>
              <ul>
                <li>Analyze product requirements to define acceptance criteria</li>
                <li>Design, create and maintain reusable test scripts</li>
                <li>Execute manual testing</li>
                <li>Review Test Plans with Product Management and Development teams</li>
                <li>Provide estimates on Test resources and effort to support prioritization and planning</li>
                <li>Minimum 1 year experience (SEO agency experience preferred)&nbsp;</li>
                <li>Work closely with engineers to ensure timely resolution of issues</li>
                <li>Participate as a testing resource when required and be an integral part of all releases</li>
                <li>Show flexibility and understanding to occasionally work within tight deadlines</li>
                <li>Assist with constantly reviewing and evolving processes</li>
              </ul>
              <p><strong>Desired Abilities and Aptitude:</strong></p>
                 <ul>
                    <li>The ideal candidate should have a desire to gain experience testing.</li>
                    <li>You will have experience in the development of automated test scripts by using Selenium, and a successful track record for QA involvement throughout the Software Development Lifecycle (SDLC).</li>
                    <li>The individual will need practical knowledge and experience with both AGILE and Waterfall development methodologies and will be used to a fast paced development driven environment.</li>
                  </ul>
              <p><strong>What You Will Get:</strong></p>
              <ul>
                <li>A super healthy learning environment where you would have the liberty of putting up your ideas and experiment around them.</li>
                <li>A classic niche business segment where you would be having the opportunity of playing around the most trendy ideas, a product can have.</li>
                <li>Working with an advanced technology product .</li>
                <li>A super active, energetic and super friendly tech team that not only develop awesome products but also helps team members when needed.</li>
              </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 9,
      title: "Technical Support",
      content: `<p><strong>Roles and Responsibilities:</strong></p>
              <ul>
                <li>The incumbent will be responsible to resolve payment gateway issues and connectivity issues.</li>
                <li>Support related to payment gateway issues (payment not update to wallet, Analysis of payment failure)</li>
                <li>Support related to Connectivity issues (Analysis of call/Chat disconnection, coordination with vendor )</li>
                <li>MS SQL queries</li>
                <li>Data analysis &amp; Create Excel / BI report</li>
                <li>Knowledge of IVR.</li>
                <li>Knowledge of any CRM &amp; CMS (content feed uploading)</li>
                <li>Coordination with third party vendors</li>
                <li>Good knowledge of written &amp; verbal communication</li>
                <li>Coordinating with third parties</li>
                <li>Data Mining and creating MS report</li>
                <li>Support in running MS SQL queries</li>
                <li>Uploading/managing content feeds</li>
                <li>Uploading content articles third parties/partners</li>
              </ul>
              <p><strong>Personality Brief:</strong></p>
                 <ul>
                    <li>Capable of resolving issues with minimal handholding</li>
                    <li>Proactive and energetic</li>
                    <li>Ability to work methodically and meet deadlines</li>
                    <li>A keen eye for aesthetics and details</li>
                    <li>Good written and communication skills; able to multitask</li>
                  </ul>
              <p><strong>Skills -</strong> MS SQL Server, MS Excel, MS office, Power BI &amp; Reporting tool, HTML, XML, JSON, C#, ASP.NET, MVC</p>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
    {
      id: 10,
      title: "Talent Acquisition Specialist",
      content: `<p><strong>Must Have Skills:</strong></p>
              <ul>
                <li>2+ years of IT recruitment experience in a results-oriented environment in a Software Product/Services company.</li>
                <li>Exceptional Communication, interpersonal &amp; influential skills. Must be someone who makes things happen.</li>
                <li>Expertise in sourcing/ Tracking through Job Boards, Social Media, Networking, Referrals, and LinkedIn groups/ Projects.</li>
                <li>Should have a thorough understanding of various IT terminologies [MVC, SQL, etc.].</li>
                <li>Ability to meet/exceed talent acquisition metrics including individual productivity targets, diversity, and stakeholders and hiring quality candidates.</li>
                <li>Good interpersonal and team coordination skills.</li>
              </ul>
              <p><strong>What you will do:</strong></p>
                <ul>
                      <li>Designing and updating job descriptions</li>
                      <li>Sourcing potential candidates from various online channels (e.g., social media and professional platforms)</li>
                      <li>Drafting recruiting emails to attract passive candidates</li>
                      <li>Interviewing candidates (via phone, video, and in-person)</li>
                      <li>Maintaining and tracking MIS reports related to talent acquisition</li>
                      <li>Ensuring timely closure of hiring, hiring cost optimization, and monitoring TAT/KPIs pertaining to recruitment</li>
                      <li>Vendor Management</li>
                </ul>
              <p>Excited? You would feel this excitement each day working for AstroSwarg. We are growing each day and we need you to ensure it becomes higher each day.</p>
              <p>To apply for this post kindly send your resume at <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a></p>`,
    },
  ];
  const Question = ({ question }) => {
    const initiallyOpen = false;
    const [open, setOpen] = useState(initiallyOpen);

    const contentWithLineBreaks = question.content
      ? question.content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))
      : null;

    return (
      <AccordionSection
        className={`accordion ${open ? "open" : "closed"}`}
        id={`accordion-${question.id}`}
        onClick={() => setOpen(!open)}
      >
        <AccordionHeader
          className={open ? "open" : "closed"}
          id="accordion-two"
        >
          <QuestionTitle>{question.title}</QuestionTitle>
          <AccordionButton onClick={() => setOpen(!open)} className="btns">
            {open ? <CaretUp /> : <CaretDown />}
          </AccordionButton>
        </AccordionHeader>
        {open && (
          <AccordionPara>
            <div dangerouslySetInnerHTML={{ __html: question.content }} />
          </AccordionPara>
        )}
      </AccordionSection>
    );
  };
  return (
    <>
      <ContainerAccordion>
        <h1 style={{ textAlign: "left" }}>Open Positions:</h1>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </ContainerAccordion>
    </>
  );
};

export default CareerJobs;

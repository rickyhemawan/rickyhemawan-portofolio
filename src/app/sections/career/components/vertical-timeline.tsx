import Chip from '@/app/components/chip'
import Timeline from './timeline'
import ChipContainer from './chip-container'
import { Marker, TitleMarker } from './timeline-marker'

const Section = ({ children }: { children?: React.ReactNode }) => {
  return <div className="group relative py-6 pl-8 sm:pl-32">{children}</div>
}

const SubContent = ({ children }: { children?: React.ReactNode }) => {
  return <div className="my-4 text-justify">{children}</div>
}

const NotableDeliverables = () => {
  return (
    <TitleMarker>
      <h3 className="text-md rounded-sm bg-purple-300 px-3 py-1 font-bold text-purple-700">
        Notable Deliverables
      </h3>
    </TitleMarker>
  )
}

const VerticalTimeline = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <Section>
        <Timeline date="Aug, 2018">
          Bluelake Indonesia・Intern Mobile Developer
        </Timeline>
        <div className="my-2" />
        <ChipContainer>
          <Chip className="bg-blue-200 text-blue-700">Flutter</Chip>
          <Chip className="bg-yellow-200 text-yellow-700">GCP</Chip>
          <Chip className="bg-orange-200 text-orange-700">Firebase</Chip>
          <Chip className="bg-green-200 text-green-700">MongoDB</Chip>
          <Chip className="bg-green-200 text-green-700">Java Android</Chip>
        </ChipContainer>
        <SubContent>
          Able to learn new framework (Flutter), deliver values to the company
          as an Intern
        </SubContent>
        <div className="my-8" />
        <NotableDeliverables />
        <Marker>
          Learn, develop and publish changes for existing mobile app by
          utilizing firebase, and google cloud computing.
        </Marker>
        <Marker>
          Learn, develop and publish existing node.js code utilizing google
          cloud functions.
        </Marker>
        <Marker>
          Able to implement native specific codebase such as payment gateway and
          google map api, for both iOS and Android by using flutter app.
        </Marker>
      </Section>
      <Section>
        <Timeline date="Jun, 2019">Freelance・Software Engineer</Timeline>
        <div className="my-2" />
        <ChipContainer>
          <Chip className="bg-blue-200 text-blue-700">Flutter</Chip>
          <Chip className="bg-blue-200 text-blue-700">React.js</Chip>
          <Chip className="bg-yellow-200 text-yellow-700">Express.js</Chip>
          <Chip className="bg-yellow-200 text-yellow-700">GCP</Chip>
          <Chip className="bg-orange-200 text-orange-700">Firebase</Chip>
          <Chip className="bg-blue-200 text-blue-700">PostgreSQL</Chip>
          <Chip className="bg-green-200 text-green-700">MongoDB</Chip>
        </ChipContainer>
        <SubContent>
          Able to over-deliver product faster than the timeline given by
          customer
        </SubContent>
        <div className="my-8" />
        <NotableDeliverables />
        <Marker>
          Spearheaded UI upgrades across multiple websites to ensure alignment
          with contemporary UX design principles.
        </Marker>
        <Marker>
          Engineered comprehensive internal administrative systems, spanning
          from front-end to back-end, tailored specifically for a local silver
          shop.
        </Marker>
        <Marker>
          Developed a range of highly functional mobile applications for various
          local businesses, predominantly serving internal operational needs.
        </Marker>
      </Section>
      <Section>
        <Timeline date="Jun, 2021">
          Xendit・Junior Software Engineer・Operations Automation
        </Timeline>
        <SubContent>
          As a Junior Software Engineer, I am able to work on diverse tech
          stacks and multiple teams in order to automate internal processes,
          able to learn tech stacks and agile methodologies quickly to deliver
          value to the company
        </SubContent>
        <div className="my-8" />
        <NotableDeliverables />
        <Marker>
          Collaboratively developed and integrated the a payment channel feature
          into the front end of the internal admin dashboard, complementing my
          colleagues backend implementation.
        </Marker>
        <Marker>
          Collaborated on the creation of a chatbot automation system using
          popular communication and support platforms, enabling seamless
          integration with the company existing automation systems and allowing
          only trusted business partners to use it.
        </Marker>
      </Section>
      <Section>
        <Timeline date="Dec, 2021">
          Xendit・Junior Software Engineer・Fraud Operations Automation
        </Timeline>
        <SubContent>
          As a Junior Software Engineer that has 6 months of experience in
          Xendit, I am able to deliver work given on time and give value to the
          company
        </SubContent>
        <div className="my-8" />
        <NotableDeliverables />
        <Marker>
          Collaborated with the fraud team to create a fraud detection system
          that can detect potential fraudsters based on parameters determined by
          product team.
        </Marker>
      </Section>
      <Section>
        <Timeline date="Jun, 2022">
          Xendit・Software Engineer・Fraud Operations Automation
        </Timeline>
        <SubContent>
          As a Software Engineer, I am able to work on diverse tech stacks,
          diverse code bases (from other core teams), to research, implement and
          maintain fraud detection systems.
        </SubContent>
        <SubContent>
          Able to identify higher ROI task given from product manager and
          prioritize them to deliver the project on time. This means high effort
          low impact tasks are not prioritized.
        </SubContent>
        <SubContent>
          Able to negotiate with other teams to get the resources needed to
          deliver the project on time. Able to negotiate with product manager
          and product people in xendit wide BizOps (Business Operations) team to
          what we have, what we can do, and what we can not do without breaking
          existing system. (Avoiding long-term blockers)
        </SubContent>
        <div className="my-8" />
        <NotableDeliverables />
        <Marker>
          Collaborate and implemented blacklist and whitelist features to the
          fraud detection system to improve the accuracy of the fraud detection
          system.
        </Marker>
        <Marker>
          Collaborate on design, collaborate on proposal, and implemented the
          first Kafka publisher for node.js services on Xendit. Why this is
          important?
          <ol className="m-4">
            <li className="my-4 list-disc">
              This is important because it was a new tech stack that can be used
              by other teams to implement Kafka on their services. (Introduced
              boilerplate code, with guidance of senior engineers)
            </li>
            <li className="my-4 list-disc">
              Worked intensively with the infrastructure team to implement Kafka
              on node.js based service (previously only on Go Services and
              Notebooks).
            </li>
            <li className="my-4 list-disc">
              Many developers at Xendit who are interested in publishing Kafka
              have sought my guidance, as I was the pioneer in node.js
              implementation within Xendit.
            </li>
          </ol>
        </Marker>
      </Section>
      <Section>
        <Timeline date="Dec, 2022">Xendit・Software Engineer・Mobile</Timeline>
        <SubContent>
          As an experienced mobile developer specializing in the Flutter
          framework, I am capable of delivering significant enhancements to
          improve the existing mobile application for Xendit. Implement almost
          pixel perfect UI changes as provided by UX designer and management.
        </SubContent>
        <div className="my-8" />
        <NotableDeliverables />
        <Marker>
          Dedicated to enhancing the documentation of the Xendit Flutter
          codebase, aimed at facilitating the rapid onboarding of new
          developers.
        </Marker>
        <Marker>
          Executed bug fixes within the Xendit Mobile Flutter codebase, ensuring
          the continued stability and reliability of the application.
        </Marker>
        <Marker>
          Improving UI based on figma design given and implemented those design
          changes to the Xendit Mobile Flutter codebase.
        </Marker>
      </Section>
      <Section>
        <Timeline date="Apr, 2023">
          Xendit・Software Engineer・Risk Automation
        </Timeline>
        <SubContent>
          As a software engineer, its expected to be able to work closely with
          the security team, collaborate with other company developers, and
          address concerns for CDE and PCI-scoped projects.
        </SubContent>
        <SubContent>
          Capable of working closely with the architecture team, negotiating
          with stakeholders, initiating discussions, and performing
          architectural presentations before delivering features.
        </SubContent>
        <SubContent>
          Proficient in creating comprehensive system design documentation,
          starting from the requirement analysis phase through extensive
          research and development.
        </SubContent>
        <div className="my-8" />
        <NotableDeliverables />
        <Marker>
          Effectively collaborated with the PayPal development team and external
          company developers to reconcile blacklisted merchants, implementing
          automation within our system for this purpose
        </Marker>
        <Marker>
          Developed a Slack bot that specializes in receiving CSV files to
          perform ledger-related operations, specifically targeting the
          identification of potential fraudulent merchants.
          {/* TODO: add bullet points */}
        </Marker>
        <Marker>
          Successfully delivered a microservice dedicated to managing one of big
          feature of transaction limits for high-risk merchants. Led the entire
          lifecycle from initial design through implementation and automated
          end-to-end testing, demonstrating self-reliance with minimal
          assistance from other developers. Additionally, maintained close
          communication with closely related teams such as ledger teams and
          onboarding teams, ensuring seamless integration and alignment across
          departments.
        </Marker>
      </Section>
      <Section>
        <Timeline date="Sep, 2023">
          Xendit・Software Engineer・Chargeback Automation
        </Timeline>
        <SubContent>
          As a software engineer that familiar with almost every tech stacks in
          Xendit, able to work on diverse tech stacks between back-end,
          front-end and data analysis to become sole maintainer of chargeback
          automation related services.
        </SubContent>
        <SubContent>
          Able to receive handover from previous maintainer and able to maintain
          the service without any issue. While also improving the documentation
          for it for any onboarder in the future.
        </SubContent>
        <div className="my-8" />
        <NotableDeliverables />
        <Marker>
          Designed and implemented multiple quality-of-life (QoL) features,
          which saved Xendit customer service jobs by more than 80% in handling
          chargeback cases for internal clients, automating the chargeback
          processes.
        </Marker>
        <Marker>
          Utilized data analytical skills to reconcile chargeback data for card
          transactions, manage bulk data updates, and perform various other
          data-related tasks.
        </Marker>
        <Marker>
          Collaborated with cross-functional teams within the organization to
          devise long-term solutions for automating chargeback processes.
        </Marker>
        <Marker>
          Conducted organization-wide demonstrations at Xendit showcasing
          quality-of-life automations related to chargeback processes.
        </Marker>
        <Marker>
          Maintained chargeback-related services in compliance with Xendit
          internal RFC (Request for Change) guidelines.
        </Marker>
        <Marker>
          Capable of refactoring and creating missing unit tests for
          chargeback-related services, resulting in achieving over 90% test
          coverage.
        </Marker>
        <div className="my-8" />
      </Section>
      <Section>
        <Timeline date="Dec, 2023">
          Xendit・Senior Software Engineer?・Glimpse of Hope
        </Timeline>
        <SubContent>
          My consistent ability to conduct research, foster cross-team
          collaboration, deliver satisfactory Xendit-wide presentations, mentor
          junior developers, collaborate effectively with architects, and
          implement complex, scalable systems has led to my upcoming promotion
          to the role of Senior Software Engineer. This decision has been fully
          endorsed by upper management in anticipation of the next performance
          review cycle
        </SubContent>
      </Section>
      <Section>
        <Timeline last date="Feb, 2024">
          Thank you Xendit!・Promoted to Customer
        </Timeline>
        <SubContent>
          Mass Layoff occured, and I was one of the many that got laid off.
        </SubContent>
      </Section>
    </div>
  )
}

export default VerticalTimeline

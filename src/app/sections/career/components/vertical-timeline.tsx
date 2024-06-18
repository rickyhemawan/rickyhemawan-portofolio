const Section = ({ children }: { children?: React.ReactNode }) => {
  return <div className="group relative py-6 pl-8 sm:pl-32">{children}</div>
}

const Title = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="font-caveat mb-1 text-2xl font-medium sm:mb-0">
      {children}
    </div>
  )
}

const Timeline = ({
  children,
  date,
  last = false,
}: {
  children?: React.ReactNode
  date?: string
  circle?: number
  last?: boolean
}) => {
  return (
    <div
      className={`
        mb-1 
        flex 
        flex-col 
        items-start 
        
        before:absolute 
        before:left-2 
        before:h-full 
        before:-translate-x-1/2 
        before:translate-y-3 
        before:self-start 
        before:bg-gradient-to-b
        before:from-blue-700
        before:to-purple-700
        ${!last && 'before:px-px'}
        
        after:absolute 
        after:left-2 
        after:box-content 
        after:h-4 after:w-4 
        after:-translate-x-1/2 
        after:translate-y-1.5 
        after:rounded-full 
        after:bg-blue-500
        
        group-last:before:hidden 
        
        sm:flex-row 
        sm:before:left-0 
        sm:before:ml-[6.5rem] 
        sm:after:left-0 
        sm:after:ml-[6.5rem]
      `}
    >
      <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-700 sm:absolute sm:mb-0">
        {date}
      </time>
      <div className="text-2xl font-bold text-emerald-100">{children}</div>
    </div>
  )
}

const MarkTitle = ({
  children,
  last = false,
}: {
  children?: React.ReactNode
  date?: string
  circle?: number
  last?: boolean
}) => {
  return (
    <div
      className={`
        my-4
        flex 
        flex-col 
        items-start 
        
        before:absolute 
        before:left-2
        
        after:absolute 
        after:left-2 
        after:box-content 
        after:h-4 after:w-4 
        after:-translate-x-1/2 
        after:translate-y-1.5 
        after:rounded-full 
        after:bg-purple-300 
        
        group-last:before:hidden 
        
        sm:flex-row 
        sm:before:left-0 
        sm:before:ml-[6.5rem] 
        sm:after:left-0 
        sm:after:ml-[6.5rem]
      `}
    >
      <div />
      <div className="text-justify text-cyan-100">{children}</div>
    </div>
  )
}

const Mark = ({
  children,
  last = false,
}: {
  children?: React.ReactNode
  date?: string
  circle?: number
  last?: boolean
}) => {
  return (
    <div
      className={`
        my-4
        flex 
        flex-col 
        items-start 
        
        before:absolute 
        before:left-2
        
        after:absolute 
        after:left-2 
        after:box-content 
        after:h-2 after:w-2 
        after:-translate-x-1/2 
        after:translate-y-1.5 
        after:rounded-full 
        after:bg-purple-500 
        
        group-last:before:hidden 
        
        sm:flex-row 
        sm:before:left-0 
        sm:before:ml-[6.5rem] 
        sm:after:left-0 
        sm:after:ml-[6.5rem]
      `}
    >
      <div />
      <div className="text-justify text-purple-100">{children}</div>
    </div>
  )
}

const VerticalTimeline = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <Section>
        <Timeline date="Aug, 2018">
          Bluelake Indonesia・Intern Mobile Developer
        </Timeline>
      </Section>
      <Section>
        <Timeline date="Jun, 2019">Freelance・Software Engineer</Timeline>
        <div className="my-4 text-justify">
          Able to over-deliver product faster than the timeline given by
          customer
        </div>
        <div className="my-8" />
        <div>
          <MarkTitle>
            <h3 className="text-md rounded-sm bg-purple-300 px-3 py-1 font-bold text-purple-700">
              Notable Deliverables
            </h3>
          </MarkTitle>
          <Mark>
            Spearheaded UI upgrades across multiple websites to ensure alignment
            with contemporary UX design principles.
          </Mark>
          <Mark>
            Engineered comprehensive internal administrative systems, spanning
            from front-end to back-end, tailored specifically for a local silver
            shop.
          </Mark>
          <Mark>
            Developed a range of highly functional mobile applications for
            various local businesses, predominantly serving internal operational
            needs.
          </Mark>
        </div>
      </Section>
      <Section>
        <Timeline date="Jun, 2021">
          Xendit・Junior Software Engineer・Operations Automation
        </Timeline>
        <div className="my-4 text-justify">
          As a Junior Software Engineer, I am able to work on diverse tech
          stacks and multiple teams in order to automate internal processes,
          able to learn tech stacks and agile methodologies quickly to deliver
          value to the company
        </div>
      </Section>
      <Section>
        <Timeline date="Dec, 2021">
          Xendit・Junior Software Engineer・Fraud Operations Automation
        </Timeline>
        <div className="my-4 text-justify">
          As a Junior Software Engineer that has 6 months of experience in
          Xendit, I am able to deliver work given on time and give value to the
          company
        </div>
        <div className="my-8" />
        <div>
          <MarkTitle>
            <h3 className="text-md rounded-sm bg-purple-300 px-3 py-1 font-bold text-purple-700">
              Notable Deliverables
            </h3>
          </MarkTitle>
          <Mark>
            Collaborated with the fraud team to create a fraud detection system
            that can detect potential fraudsters based on parameters determined
            by product team.
          </Mark>
        </div>
      </Section>
      <Section>
        <Timeline date="Jun, 2022">
          Xendit・Software Engineer・Fraud Operations Automation
        </Timeline>
        <div className="my-4 text-justify">
          As a Software Engineer, I am able to work on diverse tech stacks,
          diverse code bases (from other core teams), to research, implement and
          maintain fraud detection systems.
        </div>
        <div className="my-4 text-justify">
          Able to identify higher ROI task given from product manager and
          prioritize them to deliver the project on time. This means high effort
          low impact tasks are not prioritized.
        </div>
        <div className="my-4 text-justify">
          Able to negotiate with other teams to get the resources needed to
          deliver the project on time. Able to negotiate with product manager
          and product people in xendit wide BizOps (Business Operations) team to
          what we have, what we can do, and what we can not do without breaking
          existing system. (Avoiding long-term blockers)
        </div>
        <div className="my-8" />
        <div>
          <MarkTitle>
            <h3 className="text-md rounded-sm bg-purple-300 px-3 py-1 font-bold text-purple-700">
              Notable Deliverables
            </h3>
          </MarkTitle>
          <Mark>
            Collaborate and implemented blacklist and whitelist features to the
            fraud detection system to improve the accuracy of the fraud
            detection system.
          </Mark>
          <Mark>
            Collaborate on design, collaborate on proposal, and implemented the
            first Kafka publisher for node.js services on Xendit. Why this is
            important?
            <ol className="m-4">
              <li className="my-4 list-disc">
                This is important because it was a new tech stack that can be
                used by other teams to implement Kafka on their services.
                (Introduced boilerplate code, with guidance of senior engineers)
              </li>
              <li className="my-4 list-disc">
                Worked intensively with the infrastructure team to implement
                Kafka on node.js based service (previously only on Go Services
                and Notebooks).
              </li>
              <li className="my-4 list-disc">
                Many developers at Xendit who are interested in publishing Kafka
                have sought my guidance, as I was the pioneer in node.js
                implementation within Xendit.
              </li>
            </ol>
          </Mark>
        </div>
      </Section>
      <Section>
        <Timeline date="Dec, 2022">Xendit・Software Engineer・Mobile</Timeline>
        <div className="my-4 text-justify">
          As an experienced mobile developer specializing in the Flutter
          framework, I am capable of delivering significant enhancements to
          improve the existing mobile application for Xendit. Implement almost
          pixel perfect UI changes as provided by UX designer and management.
        </div>
        <div className="my-8" />
        <div>
          <MarkTitle>
            <h3 className="text-md rounded-sm bg-purple-300 px-3 py-1 font-bold text-purple-700">
              Notable Deliverables
            </h3>
          </MarkTitle>
          <Mark>
            Dedicated to enhancing the documentation of the Xendit Flutter
            codebase, aimed at facilitating the rapid onboarding of new
            developers.
          </Mark>
          <Mark>
            Executed bug fixes within the Xendit Mobile Flutter codebase,
            ensuring the continued stability and reliability of the application.
          </Mark>
          <Mark>
            Improving UI based on figma design given and implemented those
            design changes to the Xendit Mobile Flutter codebase.
          </Mark>
        </div>
      </Section>
      <Section>
        <Timeline date="Apr, 2023">
          Xendit・Software Engineer・Risk Automation
        </Timeline>
        <div className="my-4 text-justify">
          As a software engineer, its expected to be able to work closely with
          the security team, collaborate with other company developers, and
          address concerns for CDE and PCI-scoped projects.
        </div>
        <div className="my-4 text-justify">
          Capable of working closely with the architecture team, negotiating
          with stakeholders, initiating discussions, and performing
          architectural presentations before delivering features.
        </div>
        <div className="my-4 text-justify">
          Proficient in creating comprehensive system design documentation,
          starting from the requirement analysis phase through extensive
          research and development.
        </div>
        <div className="my-8" />
        <div>
          <MarkTitle>
            <h3 className="text-md rounded-sm bg-purple-300 px-3 py-1 font-bold text-purple-700">
              Notable Deliverables
            </h3>
          </MarkTitle>
          <Mark>
            Effectively collaborated with the PayPal development team and
            external company developers to reconcile blacklisted merchants,
            implementing automation within our system for this purpose
          </Mark>
          <Mark>
            Developed a Slack bot that specializes in receiving CSV files to
            perform ledger-related operations, specifically targeting the
            identification of potential fraudulent merchants.
            {/* TODO: add bullet points */}
          </Mark>
          <Mark>
            Successfully delivered a microservice dedicated to managing one of
            big feature of transaction limits for high-risk merchants. Led the
            entire lifecycle from initial design through implementation and
            automated end-to-end testing, demonstrating self-reliance with
            minimal assistance from other developers. Additionally, maintained
            close communication with closely related teams such as ledger teams
            and onboarding teams, ensuring seamless integration and alignment
            across departments.
          </Mark>
        </div>
      </Section>
      <Section>
        <Timeline date="Sep, 2023">
          Xendit・Software Engineer・Chargeback Automation
        </Timeline>
        <div className="my-4 text-justify">
          As a software engineer that familiar with almost every tech stacks in
          Xendit, able to work on diverse tech stacks between back-end,
          front-end and data analysis to become sole maintainer of chargeback
          automation related services.
        </div>
        <div className="text-justify">
          Able to receive handover from previous maintainer and able to maintain
          the service without any issue. While also improving the documentation
          for it for any onboarder in the future.
        </div>
        <div className="my-8" />
        <div>
          <MarkTitle>
            <h3 className="text-md rounded-sm bg-purple-300 px-3 py-1 font-bold text-purple-700">
              Notable Deliverables
            </h3>
          </MarkTitle>
          <Mark>
            Designed and implemented multiple quality-of-life (QoL) features,
            which saved Xendit customer service jobs by more than 80% in
            handling chargeback cases for internal clients, automating the
            chargeback processes.
          </Mark>
          <Mark>
            Utilized data analytical skills to reconcile chargeback data for
            card transactions, manage bulk data updates, and perform various
            other data-related tasks.
          </Mark>
          <Mark>
            Collaborated with cross-functional teams within the organization to
            devise long-term solutions for automating chargeback processes.
          </Mark>
          <Mark>
            Conducted organization-wide demonstrations at Xendit showcasing
            quality-of-life automations related to chargeback processes.
          </Mark>
          <Mark>
            Maintained chargeback-related services in compliance with Xendit
            internal RFC (Request for Change) guidelines.
          </Mark>
          <Mark last>
            Capable of refactoring and creating missing unit tests for
            chargeback-related services, resulting in achieving over 90% test
            coverage.
          </Mark>
        </div>
        <div className="my-8" />
      </Section>
      <Section>
        <Timeline date="Dec, 2023">
          Xendit・Senior Software Engineer?・Glimpse of Hope
        </Timeline>
        <div className="text-justify">
          My consistent ability to conduct research, foster cross-team
          collaboration, deliver satisfactory Xendit-wide presentations, mentor
          junior developers, collaborate effectively with architects, and
          implement complex, scalable systems has led to my upcoming promotion
          to the role of Senior Software Engineer. This decision has been fully
          endorsed by upper management in anticipation of the next performance
          review cycle
        </div>
      </Section>
      <Section>
        <Timeline last date="Feb, 2024">
          Thank you Xendit!・Promoted to Customer
        </Timeline>
        <div>
          Mass Layoff occured, and I was one of the many that got laid off.
        </div>
      </Section>
    </div>
  )
}

export default VerticalTimeline

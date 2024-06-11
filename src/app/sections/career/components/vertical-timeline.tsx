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
  circle = 4,
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
        after:h-${circle} after:w-${circle} 
        after:-translate-x-1/2 
        after:translate-y-1.5 
        after:rounded-full 
        after:bg-emerald-100
        
        group-last:before:hidden 
        
        sm:flex-row 
        sm:before:left-0 
        sm:before:ml-[6.5rem] 
        sm:after:left-0 
        sm:after:ml-[6.5rem]
      `}
    >
      <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
        {date}
      </time>
      <div className="text-xl font-bold text-emerald-100">{children}</div>
    </div>
  )
}

const Mark = ({
  children,
  circle = 2,
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
        my-6
        flex 
        flex-col 
        items-start 
        
        before:absolute 
        before:left-2
        
        after:absolute 
        after:left-2 
        after:box-content 
        after:h-${circle} after:w-${circle} 
        after:-translate-x-1/2 
        after:translate-y-1.5 
        after:rounded-full 
        after:bg-cyan-100 
        
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

const VerticalTimeline = () => {
  return (
    <div className="-my-6">
      <Section>
        <Timeline date="2023-2024">
          Xendit・Software Engineer・Chargeback Automation
        </Timeline>
        <div className="my-4 text-justify">
          Able to work on diverse tech stacks between back-end, front-end and
          data analysis skill to become sole maintainer of chargeback automation
          related services.
        </div>
        <div className="my-4 text-justify">
          Able to receive handover from previous maintainer and able to maintain
          the service without any issue.
        </div>
        <div className="my-16" />
        <div>
          <Mark circle={4}>
            <h3 className="text-md rounded-sm bg-cyan-100 px-3 py-1 font-bold text-cyan-600">
              Notable Deliverables
            </h3>
          </Mark>
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
          <Mark>
            Capable of refactoring and creating missing unit tests for
            chargeback-related services, resulting in achieving over 90% test
            coverage.
          </Mark>
          <Mark last>
            Capable of utilizing AI to develop high quality code faster.
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

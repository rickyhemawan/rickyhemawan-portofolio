import { Content } from '..'
import Angl3App from './angl3-app.mdx'
import BIT from './bit.mdx'
import Hacktiv8 from './hacktiv8.mdx'

const achievements: Content[] = [
  {
    key: 'achievement-hacktiv8',
    content: <Hacktiv8 />,
  },
  {
    key: 'achievement-angl3-app',
    content: <Angl3App />,
  },
  {
    key: 'achievement-bit',
    content: <BIT />,
  },
] as const

export default achievements

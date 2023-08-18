/** @type { import('@storybook/react').Preview } */
// 注入样式
import '../src/styles/index.scss'
// 添加icon静态文件
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview

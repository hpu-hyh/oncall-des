import './styles/index.scss'
import React from 'react'

// import Button from './components/Button/button'
// import Menu from './components/Menu/Menu'
// import MenuItem from './components/Menu/MenuItem'
// import SubMenu from './components/Menu/subMenu'

// import Icon from './components/Icon/icon'

// import Alert from './components/Alert/Alert'
// import Menu from './components/Menu/Menu'
// import MenuItem from './components/Menu/MenuItem'
// import Transition from './components/Transition/transition'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
import Tabs from './components/Tabs/Tabs'
import Panel from './components/Tabs/Panel'

// import Input from './components/Input/Input'

// import BreadcrumbItem from './components/Breadcrumb/BreadcrumbItem'
// import Breadcrumb from './components/Breadcrumb/Breadcrumb'
// import Backtop from './components/Backtop/Backtop'

function App() {
  return (
    <div className='App'>
      <Tabs>
        <Panel label='tab1' name='tab1'>
          tab1
        </Panel>
        <Panel label='tab2' name='tab2'>
          tab2
        </Panel>
        <Panel label='tab3' name='tab3'>
          tab3
        </Panel>
      </Tabs>
    </div>
  )
}

export default App

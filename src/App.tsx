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

// import Input from './components/Input/Input'

// import BreadcrumbItem from './components/Breadcrumb/BreadcrumbItem'
// import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import Backtop from './components/Backtop/Backtop'
library.add(fas)

function App() {
  return (
    <div className='App' style={{ height: '3000px' }}>
      {/* <Breadcrumb>
        <BreadcrumbItem>首页</BreadcrumbItem>
        <BreadcrumbItem>首页</BreadcrumbItem>
        <BreadcrumbItem>首页</BreadcrumbItem>
        <BreadcrumbItem>首页</BreadcrumbItem>
      </Breadcrumb> */}
      <Backtop />
    </div>
  )
}

export default App

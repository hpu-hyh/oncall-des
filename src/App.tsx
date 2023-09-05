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

import Pagination from './components/Pagination/Pagination'

// import Input from './components/Input/Input'

// import BreadcrumbItem from './components/Breadcrumb/BreadcrumbItem'
// import Breadcrumb from './components/Breadcrumb/Breadcrumb'
// import Backtop from './components/Backtop/Backtop'

function App() {
  return (
    <div className='App'>
      <Pagination total={60} defaultCurrent={0} simple />
    </div>
  )
}

export default App

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
import Input from './components/Input/Input'
library.add(fas)

function App() {
  return (
    <div className='App'>
      <div className='alert'>
        {/* <Button btnType='primary'>button</Button> */}
        {/* <Alert
          type='success'
          message='HYH'
          description='holleword alert'
          showIcon
        /> */}
        {/* <Menu>
          <MenuItem>11111</MenuItem>
          <MenuItem>11111</MenuItem>
          <MenuItem>11111</MenuItem>
          <MenuItem>11111</MenuItem>
        </Menu> */}
        {/* <Input prepend='hyh' append='hyh' /> */}
        <Input icon={'times'} />
      </div>
    </div>
  )
}

export default App

import { FC } from 'react'

import Panel from './Panel'
import Tabs from './Tabs'

import type { PanelProps, TabsProps } from './type'

export type ITabsComponent = FC<TabsProps> & {
  Panel: FC<PanelProps>
}

const TransTabs = Tabs as ITabsComponent

TransTabs.Panel = Panel

export default TransTabs

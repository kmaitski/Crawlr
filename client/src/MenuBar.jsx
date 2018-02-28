import React from 'react'
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'find', name: 'Find a Crawl', content: 'Find a Crawl' },
  { key: 'create', name: 'Create a Crawl', content: 'Create a Crawl' },
]

const MenuBar = () => (
  <Menu items={items} />
)

export default MenuBar
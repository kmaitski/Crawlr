import React from 'react'
import { Button } from 'semantic-ui-react'

const HomePage = (props) => (
  <div>
    <Button name='find' primary onClick={props.onMenuClick}>Find a Crawl</Button>
    <Button name='create' secondary onClick={props.onMenuClick}>Create a Crawl</Button>
  </div>
)

export default HomePage

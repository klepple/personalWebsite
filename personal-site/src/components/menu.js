import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'gatsby-link'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Link to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
        <Link to="/blog"><Menu.Item 
          name='blog'
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}
        /></Link>
        <Menu.Item
          name='vocabulary'
          active={activeItem === 'vocabulary'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
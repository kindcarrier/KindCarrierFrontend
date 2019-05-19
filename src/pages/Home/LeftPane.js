// @flow
import React from 'react'
import { block } from 'bem-cn'
import { Menu } from 'components'
import './style.scss'

type State = {
  menuOpen: boolean,
}

const h = block('home')

class LeftPane extends React.PureComponent<{}, State> {
  state = {
    menuOpen: false,
  }

  toggleMenuOpen = () => (
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }))
  )

  render() {
    return (
      <div className={h('left-pane')}>
        <Menu visible={this.state.menuOpen} onClick={this.toggleMenuOpen} />
        <button type='button' className={h('menu-button')} onClick={this.toggleMenuOpen} />
        <button type='button' className={h('quest-button')} />
      </div>
    )
  }
}

export default LeftPane

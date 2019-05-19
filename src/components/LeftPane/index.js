// @flow
import React from 'react'
import { block } from 'bem-cn'
import { Menu } from 'components'
import './style.scss'

type State = {
  menuOpen: boolean,
}

const lp = block('left-pane')

class LeftPane extends React.PureComponent<{}, State> {
  state = {
    menuOpen: false,
  }

  toggleMenuOpen = () => (
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }))
  )

  render() {
    return (
      <div className={lp()}>
        <Menu visible={this.state.menuOpen} onClick={this.toggleMenuOpen} />
        <button type='button' className={lp('menu-button')} onClick={this.toggleMenuOpen} />
        <button type='button' className={lp('quest-button')} />
      </div>
    )
  }
}

export default LeftPane

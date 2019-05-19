// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'

const getPortalRoot = target => document.getElementById(target)

type Props = {
  children: React.Node,
  targetId: string,
}

export default class Portal extends React.Component<Props, {}> {
  el = document.createElement('div')

  componentDidMount = () => {
    const portalRoot = getPortalRoot(this.props.targetId)
    if (portalRoot) {
      portalRoot.appendChild(this.el)
    }
  }

  componentWillUnmount = () => {
    const portalRoot = getPortalRoot(this.props.targetId)
    if (portalRoot) {
      portalRoot.removeChild(this.el)
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

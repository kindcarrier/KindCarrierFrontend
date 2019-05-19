// @flow
import React from 'react'
import { block } from 'bem-cn'
import uuid from 'uuid'
import { LeftPane, MainMap, NegoStarter } from 'components'
import fetchNegotiations from 'api/fetchNegotiations'
import './style.scss'

const h = block('home')

type State = {
  loading: boolean,
  negotiations: Negotiation[],
  modalOpen: boolean,
}

class Home extends React.PureComponent<{}, State> {
  state = {
    loading: true,
    negotiations: [],
    modalOpen: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      const negotiations = await fetchNegotiations()
      this.setState({ negotiations })
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ loading: false })
    }
  }

  toggleModal = () => (
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }))
  )

  render() {
    if (this.state.loading) return null
    const markersFrom = this.state.negotiations
      .map(nego => ({
        id: uuid(),
        lat: nego.address_from.latitude,
        lon: nego.address_from.longitude,
        type: 'from',
      }))
    const markersTo = this.state.negotiations
      .map((nego, index) => ({
        id: index,
        lat: nego.address_to.latitude,
        lon: nego.address_to.longitude,
        type: 'to',
      }))
    const markers = [...markersFrom, ...markersTo]
    return (
      <>
        <LeftPane />
        <div className={h()}>
          <NegoStarter onClick={this.toggleModal} modalOpen={this.state.modalOpen} />
          <MainMap markers={markers} />
        </div>
      </>
    )
  }
}

export default Home

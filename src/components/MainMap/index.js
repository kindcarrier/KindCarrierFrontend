// @flow
import React from 'react'
import { block } from 'bem-cn'
import { YMaps, Map } from 'react-yandex-maps'
import './style.scss'

const m = block('map-wrapper')

const mapState = { center: [55.76, 37.64], zoom: 2 }

const MainMap = () => (
  <YMaps>
    <div className={m()}>
      <Map state={mapState} width='100%' height='100vh' />
    </div>
  </YMaps>
)

export default MainMap

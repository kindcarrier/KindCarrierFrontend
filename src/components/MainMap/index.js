// @flow
import React from 'react'
import { block } from 'bem-cn'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import './style.scss'

type Props = {
  markers: Marker[],
  onClick: Function,
}

const m = block('map-wrapper')

const mapState = { center: [55.76, 37.64], zoom: 2 }

const MainMap = ({ markers, onClick }: Props) => (
  <YMaps>
    <div className={m()}>
      <Map state={mapState} width='100%' height='100vh'>
        {markers
          .map(marker => (
            <Placemark
              key={marker.id}
              geometry={[marker.lat, marker.lon]}
              options={{ iconColor: marker.type === 'from' ? '#FCC02E' : 'green' }}
              onClick={onClick}
            />
          ))}

      </Map>
    </div>
  </YMaps>
)

export default MainMap

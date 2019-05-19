// @flow
import React from 'react'
import { block } from 'bem-cn'
import { LeftPane, MainMap, NegoStarter } from 'components'
import './style.scss'

const h = block('home')

const Home = () => (
  <>
    <LeftPane />
    <div className={h()}>
      <NegoStarter />
      <MainMap />
    </div>
  </>
)

export default Home

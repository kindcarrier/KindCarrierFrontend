// @flow
import React from 'react'
import { block } from 'bem-cn'
import { LeftPane } from 'components'
import './style.scss'

const h = block('home')

const Home = () => (
  <>
    <LeftPane />
    <div className={h()}>
    </div>
  </>
)

export default Home

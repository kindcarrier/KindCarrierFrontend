// @flow
import React from 'react'
import { block } from 'bem-cn'
import { Link } from 'react-router-dom'
import LeftPane from './LeftPane'
import './style.scss'

const h = block('home')

const Home = () => (
  <div className={h()}>
    <div className={h('link-wrapper')}>
      <span className={h('logo')}>kind carrier</span>
      <Link to='/signup' className={h('link', { signup: true })}>Регистрация</Link>
      <Link to='/login' className={h('link', { login: true })}>Вход</Link>
    </div>
    <LeftPane />
  </div>
)

export default Home

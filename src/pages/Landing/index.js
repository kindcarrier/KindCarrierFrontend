// @flow
import React from 'react'
import { block } from 'bem-cn'
import { Link } from 'react-router-dom'
import { LeftPane } from 'components'
import './style.scss'

const l = block('landing')

const Landing = () => (
  <div className={l()}>
    <div className={l('link-wrapper')}>
      <span className={l('logo')}>kind carrier</span>
      <Link to='/signup' className={l('link', { signup: true })}>Регистрация</Link>
      <Link to='/login' className={l('link', { login: true })}>Вход</Link>
    </div>
    <LeftPane />
  </div>
)

export default Landing

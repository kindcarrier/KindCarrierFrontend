// @ flow
import React from 'react'
import { block } from 'bem-cn'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CloseButton } from 'components'
import { logOut } from 'store/user/userActions'
import './style.scss'

type Props = {
  visible: boolean,
  onClick: Function,
  user: User,
  logOut: Function,
}

const m = block('menu')

const Menu = ({ visible, onClick, user, logOut: logout }: Props) => (
  <div className={m({ visible })}>
    <CloseButton onClick={onClick} />
    <div className={m('link-wrapper')}>
      {user.token &&
        <Link to='/account' className={m('menu-link')}>Профиль</Link>}
      {user.token &&
        <Link to='/home' className={m('menu-link')}>Главная страница</Link>}
      {user.token &&
        <Link to='/' onClick={logout} className={m('menu-link')}>Выйти</Link>}
    </div>
  </div>
)

const mapState = state => ({
  user: state.user,
})

export default connect(mapState, { logOut })(Menu)

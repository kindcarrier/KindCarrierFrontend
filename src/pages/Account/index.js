// @flow
import React from 'react'
import { connect } from 'react-redux'
import { logOut } from 'store/user/userActions'

type Props = {
  logout: Function,
} & User

const Account = ({
  user: { first_name: name, last_name: lastName, email },
  logout,
  history }: Props) => {
  const handleLogout = () => {
    logout()
    history.push('/login')
  }
  return (
    <div>
      <h2>Профиль</h2>
      <div>
        <ul>
          <li>{`Имя: ${name}`}</li>
          <li>{`Фамилия: ${lastName}`}</li>
          <li>{`Email: ${email}`}</li>
        </ul>
      </div>
      <button type='button' onClick={handleLogout}>
        Выйти
      </button>
    </div>
  )
}

const mapState = state => ({
  user: state.user,
})

export default connect(mapState, { logout: logOut })(Account)

// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { RouterHistory } from 'react-router-dom'
import { block } from 'bem-cn'
import uploadImage from 'api/uploadImage'
import { logOut } from 'store/user/userActions'
import './style.scss'

type Props = {
  logout: Function,
  history: RouterHistory,
  user: User,
}

type State = {
  imgToUpload: File | null,
}

const a = block('account')

class Account extends React.PureComponent<Props, State> {
  state = { imgToUpload: null }

  fileInput: HTMLInputElement | null = null

  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  selectImage = (event: HTMLInputEvent) => {
    const imgToUpload = event.target.files[0]
    if (imgToUpload) {
      this.setState({ imgToUpload })
      this.handleUploadImage(imgToUpload)
    }
  }

  handleUploadImage = (img: File) => {
    const { user: { id } } = this.props
    uploadImage(id, img)
      .then(() => this.setState({ imgToUpload: null }))
      .catch(error => console.log(error.message))
  }


  render() {
    const { user: { first_name: name, last_name: lastName, email } } = this.props
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
        <input
          type='file'
          className={a('input')}
          accept='.jpg, .jpeg, .png'
          ref={(fileInput) => { this.fileInput = fileInput }}
          onChange={this.selectImage}
        />
        {!this.state.imgToUpload &&
          <button type='button' className={a('button')} onClick={() => this.fileInput && this.fileInput.click()}>
            Загрузить фото
          </button>}
        <button type='button' onClick={this.handleLogout}>
          Выйти
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
})

export default connect(mapState, { logout: logOut })(Account)

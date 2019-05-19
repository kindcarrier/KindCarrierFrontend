// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { RouterHistory } from 'react-router-dom'
import { block } from 'bem-cn'
import uploadImage from 'api/uploadImage'
import { logOut } from 'store/user/userActions'
import { LeftPane, MessageList } from 'components'
import msgGenerator from 'utils/msgGenerator'
import kindnessGenerator from 'utils/kindnessGenerator'
import './style.scss'
import noImage from './assets/noimage.png'

type Props = {
  logout: Function,
  history: RouterHistory,
  user: User,
}

type State = {
  imgToUpload: File | null,
  messages: Message[],
  messagesVisible: boolean,
  kindness: string,
  kindPoints: number,
}

const a = block('account')

class Account extends React.PureComponent<Props, State> {
  state = {
    imgToUpload: null,
    messages: [],
    messagesVisible: false,
    kindness: '',
    kindPoints: 0,
  }

  fileInput: HTMLInputElement | null = null

  componentDidMount() {
    const messages = msgGenerator()
    const { kind, kindness } = kindnessGenerator()
    this.setState({
      messages,
      kindness,
      kindPoints: kind,
    })
  }

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

  toggleMessagesVisibility = () => (
    this.setState(({ messagesVisible }) => ({ messagesVisible: !messagesVisible }))
  )

  handleUploadImage = (img: File) => {
    const { user: { id } } = this.props
    uploadImage(id, img)
      .then(() => this.setState({ imgToUpload: null }))
      .catch(error => console.log(error.message))
  }


  render() {
    const {
      user: { first_name: name, last_name: lastName, email, avatar: { url } },
    } = this.props
    return (
      <>
        <LeftPane />
        <div className={a()}>
          <div className={a('container')}>
            <div className={a('msg-icon')} role='button' tabIndex='0' onClick={this.toggleMessagesVisibility}>
              <span className={a('msg-qtty')}>
                {this.state.messages.length}
              </span>
            </div>
            <h2>Профиль</h2>
            <div className={a('avatar')}>
              <img src={url || noImage} alt='user avatar' className={a('image')} />
            </div>
            <div className={a('profile-wrapper')}>
              <p>{`Имя: ${name}`}</p>
              <p>{`Фамилия: ${lastName}`}</p>
              <p>{`Email: ${email}`}</p>
              <button type='button' className={a('btn-edit')}>
                Изменить
              </button>
            </div>
            <div className={a('kindness')}>
              <span className={a('kind', { modifier: this.state.kindness })}>
                KINDNESS:
              </span>
              <span className={a('gauge', { modifier: this.state.kindness })} />
              <span className={a('kind', { modifier: this.state.kindness })}>
                {this.state.kindPoints}
              </span>
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
          </div>
          {this.state.messagesVisible &&
            <MessageList messages={this.state.messages} />}
        </div>
      </>
    )
  }
}

const mapState = state => ({
  user: state.user,
})

export default connect(mapState, { logout: logOut })(Account)

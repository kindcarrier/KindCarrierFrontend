// @flow
import React from 'react'
import { block } from 'bem-cn'
import { reduxForm, Field } from 'redux-form'
import type { FormProps } from 'redux-form'
import { connect } from 'react-redux'
import { combineValidators, isRequired } from 'revalidate'
import createNegotiation from 'api/createNegotiation'
import { Input, Textarea } from 'components'
import './style.scss'

type Props = {
  user: User,
  onClose: Function,
  type: string,
} & FormProps

const oc = block('offer-card')

const validate = combineValidators({
  name: isRequired({ message: 'Поле не может быть пустым' }),
  description: isRequired({ message: 'Введите описание' }),
})

class OfferCard extends React.PureComponent<Props, {}> {
  onSubmit = (values) => {
    const params = {
      owner_id: this.props.user.id,
      name: values.name,
      description: values.description,
      cost: '50',
    }
    createNegotiation(params)
      .then(this.props.onClose)
      .catch(error => console.error(error))
  }

  render() {
    const { handleSubmit, error, pristine, submitting, invalid } = this.props
    const notValid = pristine || error || invalid || submitting
    return (
      <div className={oc()}>
        <p className={oc('header')}>
          {this.props.type === 'offer' ? 'могу привезти' : 'хочу заказать'}
        </p>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className={oc('form')}>
            <div className={oc('input')}>
              <label htmlFor='name' />
              <Field
                id='name'
                name='name'
                type='text'
                component={Input}
                placeholder='Название'
              />
            </div>
            <div className={oc('input')}>
              <label htmlFor='textarea' />
              <Field
                id='textarea'
                name='description'
                type='text'
                theme='textarea'
                component={Textarea}
                placeholder='Описание'
              />
            </div>
            <button
              type='submit'
              disabled={notValid}
              className={oc('btn', { disabled: notValid })}
            >
              Заказать
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const offerCard = reduxForm({
  form: 'offer-card',
  validate,
})(OfferCard)

const mapState = state => ({
  user: state.user,
})

export default connect(mapState)(offerCard)

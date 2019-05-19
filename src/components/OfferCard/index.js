// @flow
import React from 'react'
import { block } from 'bem-cn'
import { reduxForm, Field } from 'redux-form'
import type { FormProps } from 'redux-form'
import { connect } from 'react-redux'
import { Input, Textarea } from 'components'
import './style.scss'

const oc = block('offer-card')

class OfferCard extends React.PureComponent<FormProps, {}> {
  onSubmit = values => console.log(values)

  render() {
    const { handleSubmit, error, pristine, submitting, invalid } = this.props
    const notValid = pristine || error || invalid || submitting
    return (
      <div className={oc()}>
        <p className={oc('header')}>
          хочу заказать
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
                name='textarea'
                type='text'
                theme='textarea'
                component={Textarea}
              />
            </div>
            <button
              type='submit'
              disabled={notValid}
              className={oc('btn', { disabled: submitting })}
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
})(OfferCard)

export default connect(null)(offerCard)

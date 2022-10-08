import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Formik, Form } from 'formik';
import { TextFieldAuth } from '../../components/ui';
import { ROUTES } from '../../router/types';
import { INITIAL_FORM_STATE, SIGNUP_VALIDATION_SCHEMA } from './validation-schema';
import "./styles.scss";

export const SignupPage = (): JSX.Element => {
  const handleSubmit = () => console.log('Форма отправлена..')

  return (
    <div className="auth">
      <h1 className="auth__title title">Регистрация</h1>
      <div className="auth__form">
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={SIGNUP_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          <Form>
            <TextFieldAuth fullWidth name="email" type="text" label="Почта" />
            <TextFieldAuth fullWidth name="login" type="text" label="Логин" />
            <TextFieldAuth fullWidth name="first_name" type="text" label="Имя" />
            <TextFieldAuth fullWidth name="second_name" type="text" label="Фамилия" />
            <TextFieldAuth fullWidth name="phone" type="tel" label="Телефон" />
            <TextFieldAuth fullWidth name="password" type="password" label="Пароль" />
            <TextFieldAuth fullWidth name="password_again" type="password" label="Пароль (еще раз)" />
            <Button fullWidth type="submit" variant="contained" size="large" sx={{ mt: 4 }}>Зарегистрироваться</Button>
          </Form>
        </Formik>
        <Link to={ROUTES.AUTH}>Войти</Link>
      </div>
    </div>
  )
}
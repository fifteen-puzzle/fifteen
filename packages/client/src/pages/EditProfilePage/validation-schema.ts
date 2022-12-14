import * as Yup from 'yup'
import {
  displayNameRegexp,
  loginRegexp,
  nameRegexp,
  phoneRegexp,
} from '../../utils/validation_regexps'

export const INITIAL_FORM_STATE = {
  id: 0,
  email: '',
  login: '',
  first_name: '',
  second_name: '',
  display_name: '',
  phone: '',
  old_password: '',
  password: '',
  password_again: '',
}
export const EDIT_PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Некорректный email!')
    .required('Введите, пожалуйста, email!'),
  login: Yup.string()
    .required('Введите, пожалуйста, логин!')
    .min(2, 'Слишком короткий логин!')
    .max(20, 'Слишком длинный логин!')
    .matches(loginRegexp, 'Латиница, цифры, может содержать "-" и "_"'),
  first_name: Yup.string()
    .required('Введите, пожалуйста, имя!')
    .matches(nameRegexp, 'Латиница или кириллица, первая буква заглавная'),
  second_name: Yup.string()
    .required('Введите, пожалуйста, фамилию!')
    .matches(nameRegexp, 'Латиница или кириллица, первая буква заглавная'),
  display_name: Yup.string()
    .required('Введите, пожалуйста, имя для форума!')
    .nullable(true)
    .matches(displayNameRegexp, 'Латиница, первая буква заглавная'),
  phone: Yup.string()
    .required('Введите, пожалуйста, телефон!')
    .min(10, 'Короткий номер телефона!')
    .max(15, 'Слишком длинный номер телефона!')
    .matches(phoneRegexp, 'от 10 до 15 цифр, может начинаться с плюса'),
})

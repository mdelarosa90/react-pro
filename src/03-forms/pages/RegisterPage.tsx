import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

  const {formData, name, email, password1, password2, onChange, resetForm, isValidEmail} =  useForm({
    name: 'Fernando',
    email: '',
    password1: '',
    password2: ''
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={onSubmit}>
        <input type="text" className={`${name.trim().length <= 0 && 'has-error'}`} value={name} name="name" onChange={onChange} placeholder="Name" />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input type="email" className={`${!isValidEmail(email) && 'has-error'}`}  value={email} name="email" onChange={onChange} placeholder="Email" />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input type="password" value={password1} name="password1" onChange={onChange} placeholder="Password" />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 letras</span>}
        <input type="password" value={password2} name="password2" onChange={onChange} placeholder="Repeat Password" />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span>}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  )
}

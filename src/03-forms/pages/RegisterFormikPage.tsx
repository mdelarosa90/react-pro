import { Form, Formik } from 'formik'
import { MyTextInput } from '../components'
import * as Yup from 'yup';
import '../styles/styles.css'

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Formik Register Page</h1>
      <Formik initialValues={{
        name: '',
        email: '',
        password1: '',
        password2: ''
      }} onSubmit={(values) => {
        console.log(values);
      }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Nombre debe de ser 3 caracteres o mas')
            .required('Requerido'),
          email: Yup.string()
            .email('El formato es incorrecto')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'Debe tener minimo 6 caracteres')
            .required('Requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Passwords must match')
            .required('Requerido'),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput name="name" label="Nombre" placeholder="Nombre" />
            <MyTextInput name="email" label="Correo Electrónico" placeholder="fernando@gmail.com" />
            <MyTextInput name="password1" label="Contraseña" placeholder="password" type="password" />
            <MyTextInput name="password2" label="Repite contraseña" placeholder="repeat password" type="password" />
            <button type="submit" >Create</button>
            <button type="button" onClick={handleReset} >Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

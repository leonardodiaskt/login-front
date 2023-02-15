import './App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from 'axios'

function App() {

  const handleClickRegister = (values) => {
    console.log(values);
    Axios.post("https://localhost:3001/usuario", {
      name: values.name,
      email: values.email,
      password: values.password,
  }).then((response) => {
    console.log(response)
  }).catch((error)=> {
    console.log(error)
  })
  ;


  };
  const handleClickLogin = (values) => {
    console.log(values)
  };

  const validationLogin = yup.object().shape({
    name: yup.string().max(100).required("Este campo é obrigatório"),
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter 8 carácteres").required("Este campo é obrigatório")
  });

  const validationRegister = yup.object().shape({
    name: yup.string().max(100).required("Este campo é obrigatório"),
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter 8 carácteres").required("Este campo é obrigatório"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}>

        <Form className='login-form'>
          <div className='login-form-group'>
            <Field
              name="name"
              className="form-field" 
              placeholder="Nome" />
            <ErrorMessage
              component="span"
              name='name'
              className='form-error' />
          </div>
          <div className='login-form-group'>
            <Field
              name="email"
              className="form-field"
              placeholder="Email" />
            <ErrorMessage
              component="span"
              name='email'
              className='form-error' />
          </div>
          <div className='login-form-group'>
            <Field
              name="password"
              className="form-field" 
              placeholder="Senha" />
            <ErrorMessage
              component="span"
              name='password'
              className='form-error' />
          </div>

          <button className='button' type='submit'>Login</button>

        </Form>
      </Formik>

      {/* //////////////////// */}

      <h1>Register</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}>

        <Form className='login-form'>
          <div className='login-form-group'>
            <Field
              name="name"
              className="form-field" 
              placeholder="Nome" />
            <ErrorMessage
              component="span"
              name='name'
              className='form-error' />
          </div>
          <div className='login-form-group'>
            <Field
              name="email"
              className="form-field"
              placeholder="Email" />
            <ErrorMessage
              component="span"
              name='email'
              className='form-error' />
          </div>
          <div className='login-form-group'>
            <Field
              name="password"
              className="form-field" 
              placeholder="Senha" />
            <ErrorMessage
              component="span"
              name='password'
              className='form-error' />
          </div>
          <div className='login-form-group'>
            <Field
              name="confirmPassword"
              className="form-field" 
              placeholder="Confirme sua senha" />
            <ErrorMessage
              component="span"
              name='confirmPassword'
              className='form-error' />
          </div>
          <button className='button' type='submit'>Cadastro</button>

        </Form>
      </Formik>
    </div>
  );
}

export default App;

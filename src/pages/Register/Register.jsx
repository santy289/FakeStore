import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Header from '../../components/Header'
import './register.css';

const auth = getAuth();

function Login () {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
      const docRef = doc(db, 'users', userCredential.user.uid);
      const newuser = { 
        avatar: "https://res.cloudinary.com/santydev/image/upload/v1652883653/675510_gmjthw.jpg",
        email: userCredential.user.email, 
        userName: values.nickname,
        car: [],
      } 
      await setDoc(docRef, newuser);
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }
return(
    <div>
        <Header />
    <div>
        <Formik
            initialValues={{ 
                nickname: '', 
                email: '', 
                password: '', 
                car: [],
             }}
            validate={values => {
                const errors = {};
                if (!values.nickname) {
                    errors.nickname = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.email) {
                    errors.email = 'Required';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
                setTimeout(() => {
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="Register-form__Container">
                    <label className="home__register--label" htmlFor="nickname">Nickname</label>
                    <Field className="home__register--input" type="text" name="nickname" placeholder="Nickname" />
                    <ErrorMessage name="nickname" component="div" />
                    <label className="home__register--label" htmlFor="email">Email</label>
                    <Field className="home__register--input" type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" component="div" />
                    <label className="home__register--label" htmlFor="password">Password</label>
                    <Field className="home__register--input" type="password" name="password" placeholder="password" />
                    <ErrorMessage name="password" component="div" />
                    <button className="home__login--button" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
    </div>
)
}

export default Login;
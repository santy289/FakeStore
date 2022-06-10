import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../config/firebase'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getinfo } from '../../store/actions'
import logout from '../../assets/logout.svg';


function Login (){
    const id = sessionStorage.getItem('userId');
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch;
    const [loginStatus, setLoginStatus] = useState(false);

    const login = async (values) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
            setLoginStatus(true);
            sessionStorage.setItem('userId', userCredential.user.uid);
            dispatch(getinfo(userCredential.user.uid));
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
        }
      };
      async function handleLogout() {
        await signOut(auth);
        sessionStorage.clear();
        setLoginStatus(false);
        };   
    useEffect(() => {
        if (!id) {
            setLoginStatus(false);
        }else if (id){
            setLoginStatus(true);
        }
        }, [])

    return (
            <div>
        {loginStatus === false ?
                    <Formik 
                    initialValues={{ email: '', password: '' }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        }
                        if (!values.password) {
                        errors.password = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        login(values);
                    }}
                    >
                    {({ errors }) => (
                        <Form>
                        <div className="home__login--form">
                        <h1 className="home__login--title">Welcome to Poke Battle</h1>
                            <label className="home__login--label" htmlFor="email">Email</label>
                            <Field name="email" type="text" className="home__login--input" />
                            <ErrorMessage
                            name="email"
                            component={() => <div className='error'>{errors.email}</div>}
                            />
                            <label className="home__login--label" htmlFor="password">Password</label>
                            <Field className={`home__login--input ${errors.password || errors.password || loginStatus ? 'error': null}`} name="password" type="password" />
                            <ErrorMessage
                            name="password"
                            component={() => <div className='error'>{errors.password}</div>}
                            />
                            <input className="home__login--button" type="submit" name="Login" />
                            {loginStatus && <div className='error'>Invalid Login</div>}
                            <p className="home__login--register">¿You don't have an account yet? <Link className="home__login--register_button" to="/register">Register</Link></p>
                        </div>
                        </Form>
                    )}
                </Formik>
                    : userInfo.avatar && loginStatus === true? 
                    <div className="home__loged--container">
                    <p className="home__loged--text">Welcome back  </p>
                    <h1 className="home__loged--name">{userInfo.userName}</h1>
                    <img className="home__loged--image" src={userInfo.avatar} alt="avatar" />
                    <img onClick={handleLogout} className="home__logout--button" src={logout} alt="Log" />
                    </div>
                    :
                    <p className="home__loading">Loading...</p>
                    }
            </div>
        )
}
export default Login;

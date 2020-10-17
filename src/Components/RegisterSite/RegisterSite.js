import React , {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import './RegisterSite.scss';
import { Banner } from '../HomePage/Banner/Banner';
import { Footer } from '../HomePage/Footer/Footer';
import app from '../../fire';


export const RegisterSite = ({history}) => {

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [messageVisible, setMessageVisible] = useState(false);


    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            setMessageVisible(true);
            const timeout = setTimeout(() => {
                history.push("/")
                }, 3000);
                return () => {
                    clearTimeout(timeout)
                }
        } catch {
          setEmailError('Ten adres e-mail został już użyty.')
        }
      }, [history]);

      const passwordValidate = (ev) => {
        const re = /\S+@\S+\.\S+/;

        if (email === '') {
            ev.preventDefault();
            setEmailError('Wpisz swój e-mail!');
        } else if (re.test(email) !== true) {
            ev.preventDefault();
            setEmailError('Adres e-mail niepoprawny!');
        } else {
            setEmailError('');
        }

        if (password === '') {
            ev.preventDefault();
            setPasswordError('Wpisz swoje hasło!');
        } else if (password.length < 7) {
            ev.preventDefault();
            setPasswordError('Hasło musi mieć minimum 7 znaków');
        } else {
            setPasswordError('');
        }

        if (confirmPass === '') {
            ev.preventDefault();
            setConfirmPasswordError('Wpisz hasło ponownie!');
        } else if (confirmPass !== password) {
            ev.preventDefault();
            setConfirmPasswordError('Hasła nie są identyczne.');
        } else {
            setConfirmPasswordError('');
        }
      }

      const Message = () => {
        return (
            <div className='message'>
                <h2>Twoje konto zostało zarejestrowane!</h2>
                <p>Zarejestrowałeś konto dla {email}</p>
                <span>Za chwilę zostaniesz przekierowana/y na stronę główną</span>
            </div>
        )
    }

    return (
        <>
        <div className='Banner--overwrite'>
            <Banner />
        </div>

        <section className='register--container'>
            {messageVisible ? <Message /> : null}

            <form onSubmit={handleSignUp} style={{display: messageVisible ? 'none' : 'block'}}>
                <h2>Rejestracja</h2>
                <p>
                    <input onChange={(e)=> setEmail(e.target.value)} id="email" name="email" type="text" placeholder='Twój e-mail'/>
                    <span>{emailError}</span>
                </p>
                <p>
                    <input onChange={(e)=> setPassword(e.target.value)} id="password" name="password" type="password" placeholder='Hasło'/>
                    <span>{passwordError}</span>
                </p>
                <p>
                    <input onChange={(e)=> setConfirmPass(e.target.value)} id="confirm_password" name="confirm_password" type="password" placeholder='Powtórz hasło'/>
                    <span>{confirmPasswordError}</span>
                </p>
                <p>
                    <input type="submit" value="Załóż konto" id="submit" onClick={ (ev) => passwordValidate(ev) } />
                </p>
            </form>

            <Link to='/' className='home--button' style={{display: messageVisible ? 'none' : 'block'}}>
                <h2>Powrót na stronę główną</h2>
            </Link>

        </section>


        <Footer />
    </>
    );
}

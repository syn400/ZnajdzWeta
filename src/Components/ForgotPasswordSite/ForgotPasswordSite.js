import React , {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { Banner } from '../HomePage/Banner/Banner';
import { Footer } from '../HomePage/Footer/Footer';
import './ForgotPasswordSite.scss';
import app from '../../fire';


export const ForgotPasswordSite = ({history}) => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageVisible, setMessageVisible] = useState(false);


    const handlePasswordReset = useCallback(async event => {
        event.preventDefault();
        const { email } = event.target.elements;
        try {
          await app
            .auth()
            .sendPasswordResetEmail(email.value);
            setMessageVisible(true);
            const timeout = setTimeout(() => {
                history.push("/")
                }, 8000);
                return () => {
                    clearTimeout(timeout)
                }
        } catch {
          setEmailError('Ten adres e-mail nie jest przypisany do żadnego konta.')
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
      }

      const Message = () => {
          return (
              <div className='message'>
                  <h2>Pomyślnie zresetowano hasło!</h2>
                  <p>Na adres e-mail {email} został wysłany link do resetowania hasła! Jeżeli nie możesz znaleźć wiadomości od nas, sprawdź folder "spam"</p>
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
            
            <form onSubmit={handlePasswordReset} style={{display: messageVisible ? 'none' : 'block'}}>
                <h2>Resetowanie hasła</h2>
                <p>
                    <input onChange={(e)=> setEmail(e.target.value)} id="email" name="email" type="text" placeholder='Wpisz e-mail do twojego konta'/>
                    <span>{emailError}</span>
                </p>
                <p>
                    <input type="submit" value="Zresetuj hasło" id="submit" onClick={ (ev) => passwordValidate(ev) } />
                </p>
            </form>

            <Link to='/' className='home--button' style={{display:messageVisible ? "none" : 'block'}}>
                <h2>Powrót na stronę główną</h2>
            </Link>

        </section>


        <Footer />
    </>
    );
}

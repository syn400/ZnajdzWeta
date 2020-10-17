import React, { useEffect } from 'react';
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faGrinAlt, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
    useEffect(() => {
         Aos.init({duration: 500});
    }, []);
    return (
        <section className='about'>
            <div className='about--us' data-aos='zoom-in'>
                <h2>O nas</h2>
                <hr />
                <p>
                    Wiemy, jak trudno jest znaleźć odpowiedniego weterynarza, 
                    zwłaszcza dla mniej popularnych gatunków udomowionych zwierząt.
                    Dlatego nasz serwis od początku swojego istnienia działa w formie non-profit
                    a wszystkie środki zgromadzone z płatnych opcji takich jak wyróżnianie profilu
                    przeznaczamy na fundacje ratujące zwierzęta.
                </p>
            </div>

            <div className='comments' data-aos='zoom-in'>
                <h2>Opinie</h2>
                <hr />

                <div className='comments--container'>
                    <div className='comment'>
                        <div>
                            <img src='https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Avatar' />
                            <span>
                                <h3>Bartłomiej <FontAwesomeIcon icon={faSmileWink}/></h3>
                                <p>Takiego serwisu właśnie szukałem, w końcu znalazłem weterynarza dla mojego jeża.</p>
                            </span>
                        </div>
                    </div>

                    <div className='comment'>
                        <div>
                            <img src='https://images.pexels.com/photos/2992516/pexels-photo-2992516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Avatar' />
                            <span>
                                <h3>Marzena <FontAwesomeIcon icon={faSmileBeam}/></h3>
                                <p>Świetna strona, jest wszystko czego potrzebowałam! dziękuje!</p>
                            </span>
                        </div>
                    </div>

                    <div className='comment'>
                        <div>
                            <img src='https://images.pexels.com/photos/3059274/pexels-photo-3059274.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Avatar' />
                            <span>
                                <h3>Joanna <FontAwesomeIcon icon={faGrinAlt}/></h3>
                                <p>Moja Tosia w końcu ma zapewnioną odpowiednią opieke.  </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import React , {useState, useContext} from 'react';
import { AuthContext } from "../../Auth";

import { NotFound } from '../NotFound/NotFound';
import './UserSettings.scss';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../HomePage/Footer/Footer';
import { Multiselect } from 'multiselect-react-dropdown';
import { PlacesSearch } from '../PlacesSearch/PlacesSearch';

import '@firebase/firestore';
import '@firebase/storage';
import { animations } from 'react-animation';

import firebase from 'firebase/app';
import app from '../../fire';
import { Link, Redirect } from 'react-router-dom';
const db = firebase.firestore();


export const UserSettings = ({match}) => {
    let { currentUser } = useContext(AuthContext);

    let isWetDataExists = JSON.parse(localStorage.getItem('userWetProfileExists'));

    const result = match.params.profil;

    const [successfullMsg, setSuccessfullMsg] = useState('gggx');
    const [isMsgVisible, setIsMsgVisible] = useState(false)

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [userProvidedPassword, setUserProvidedPassword] = useState('');

    const [emailErr, setEmailErr] = useState('');
    const [confirmEmailErr, setConfirmEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [confirmPassErr, setConfirmPassErr] = useState('');
    const [userProvidedPasswordErr, setUserProvidedPasswordErr] = useState('');
    const [userEmailPasswordErr, setUserEmailPasswordErr] = useState('');

    const [endMessage, setEndMessage] = useState(isWetDataExists);

    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [school, setSchool] = useState('');
    const [category, setCategory] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    
    const [nameErr, setNameErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [schoolErr, setSchoolErr] = useState('');
    const [catErr, setCatErr] = useState('');
    const [specErr, setSpecErr] = useState('');
    const [cityErr, setCityErr] = useState('');
    const [addressErr, setAddressErr] = useState('');
    const [avatarErr, setAvatarErr] = useState('');
    
    const [specializations] = useState([
        {name: 'Profilaktyka'},
        {name: 'Dermatologia'},
        {name: 'Okulistyka'},
        {name: 'Stomatologia'},
        {name: 'Diagnostyka'},
        {name: 'Chirurgia'}
    ]);
    
    const [categories] = useState([
        {name: 'Małe zwierzęta'},
        {name: 'Psy i koty'},
        {name: 'Gady i płazy'},
        {name: 'Ptaki'},
        {name: 'Ryby'},
        {name: 'Zwierzęta egzotyczne'}
    ]);

    const addUserImage = async (file, event) => {
        event.preventDefault();
        setEndMessage(true)
        if(currentUser !== null) {
            return await firebase.storage().ref(`userImages/${file.name}`).put(file)
                .then(e => e.ref.getDownloadURL())
                .then(v => {
                    return {
                        Name: name,
                        Phone: phoneNum,
                        Address: address,
                        Category: category,
                        City: city,
                        Rating: 0,
                        Specialization: specialization,
                        Verified: true,
                        Avatar: v
                    }
                }).then(d => {
                    db.collection('wets').doc(currentUser.uid).set(d)
                    })
                .catch(error => console.log(error))
                } else {
                    return console.log('Musisz być zalogowany!');
                }
            }
            
    const formValidate = (ev) => {
        if (name === '') {
            ev.preventDefault();
            setNameErr('Wpisz swoje imię i nazwisko!');
        } else {
            setNameErr('');
        }
        
        if (phoneNum === '') {
            ev.preventDefault();
            setPhoneErr('Numer telefonu jest wymagany!');
        } else {
            setPhoneErr('');
        }
        
        if (school === '') {
            ev.preventDefault();
            setSchoolErr('Wpisz nazwę ukończonej szkoły!');
        } else {
            setSchoolErr('');
        }
        
        if (category === '') {
            ev.preventDefault();
            setCatErr('Wybierz specjalizację!');
        } else {
            setCatErr('');
        }
        
        if (specialization === '') {
            ev.preventDefault();
            setSpecErr('Wybierz specjalizację!');
        } else {
            setSpecErr('');
        }
        
        if (city === '') {
            ev.preventDefault();
            setCityErr('Wybierz miasto!');
        } else {
            setCityErr('');
        }
        
        if (address === '') {
            ev.preventDefault();
            setAddressErr('Wpisz adres swojego gabinetu');
        } else {
            setAddressErr('');
        }
        
        if (image === '') {
            ev.preventDefault();
            setAvatarErr('Zdjęcie profilowe jest wymagane!');
        } else {
            setAvatarErr('');
        }
        addUserImage(image, ev);
    }
    
    
    const getSpecializations = (e) => {
        const getValues = e.map(element => {
            return element.name;
        });
        setSpecialization(getValues);
    }
    
    const getCategory = (e) => {
        const getValues = e.map(element => {
            return element.name;
        });
        setCategory(getValues);
    }

    const EndMsg = (ev) => {
        return (
            <div className='message' style={{ animation: animations.popIn}}>
                    <h2>Twój profil został wysłany do weryfikacji!</h2>
                    <p>Gdy tylko nasz zespół zweryfikuje twój profil, powiadomimy cię o tym!</p>
                    <Link to='/' style={{textDecoration: 'none'}}><span className='btn'>Powrót na stronę główną</span></Link>
            </div>
        )
    }

    const newEmail = (ev) => {
        console.log(currentUser.email, email)
        const re = /\S+@\S+\.\S+/;
        if (email === '') {
            ev.preventDefault();
            setEmailErr('Musisz wpisać nowy adres e-mail!');
        } else if (re.test(email) !== true) {
            ev.preventDefault();
            setEmailErr('Adres e-mail niepoprawny!');
        } else if (currentUser.email.toLowerCase() === email){
            ev.preventDefault();
            setEmailErr('Podałeś aktualny adres e-mail');
        } else if (email !== confirmEmail) {
            ev.preventDefault();
            setEmailErr('Adresy email nie są identyczne');
            setConfirmEmailErr('Adresy email nie są identyczne');
        } else {
            setEmailErr('');
            setConfirmEmailErr('');
        }
        ev.preventDefault();
        const setNewEmail = async function () {
            const usr = firebase.auth().currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(
                usr.email, 
                userProvidedPassword
            );
            try {
                await app
                .auth().currentUser.reauthenticateWithCredential(credential)
                .then(() => {
                    setSuccessfullMsg('Twój adres email został zmieniony!');
                    firebase.auth().currentUser.updateEmail(email);
                    setIsMsgVisible(true);
                    const timeout = setTimeout(() => {
                        setSuccessfullMsg(<Redirect to='/'/>)
                        }, 2000);
                        return () => {
                            clearTimeout(timeout)
                        }
                })
                .catch(error => {
                    console.log(error);
                    setUserEmailPasswordErr('Błędne hasło!')
                }
                );
            } catch(error) {
                console.log(error)
            }
        }
        setNewEmail();
    }

    const newPassword = (ev) => {
        if (password === '') {
            ev.preventDefault();
            setPassErr('Musisz wpisać nowe hasło!');
        } else if (currentUser.password === password){
            ev.preventDefault();
            setPassErr('Wpisałeś aktualne hasło');
        } else if (password !== confirmPass) {
            ev.preventDefault();
            setPassErr('Hasła nie są identyczne');
            setConfirmPassErr('Hasła nie są identyczne');
        } else {
            setPassErr('');
            setConfirmPassErr('');
            }
            ev.preventDefault();
            const setNewPass = async function () {
                const usr = firebase.auth().currentUser;
                const credential = firebase.auth.EmailAuthProvider.credential(
                    usr.email, 
                    userProvidedPassword
                );
                try {
                    await app
                    .auth().currentUser.reauthenticateWithCredential(credential)
                    .then(() => {
                        setSuccessfullMsg('Twoje hasło zostało zmienione!');
                        firebase.auth().currentUser.updatePassword(password);
                        setIsMsgVisible(true);
                        const timeout = setTimeout(() => {
                            setSuccessfullMsg(<Redirect to='/'/>);
                            }, 2000);
                            return () => {
                                clearTimeout(timeout)
                            }
                    })
                    .catch(error => {
                        console.log(error);
                        setUserProvidedPasswordErr('Błędne hasło!');
                    }
                    );
                } catch(error) {
                    console.log(error)
                }
            }
            setNewPass();
    }

    const Msg = () => {
        return (
            <div className='message--container settings--container' style={{ animation: animations.popIn}}>
                <h3>{successfullMsg}</h3>
            </div>
        )
    }
    
    if (result === 'utworz-profil'){
        return (
            <>
                <div className='NavBar--overwrite'>
                    <NavBar />
                </div>

                {endMessage ? <EndMsg /> : null}

                <section className='vet--profile--container' style={{display: endMessage ? 'none' : 'block', animation: animations.popIn}}>
                    <h1>Tworzenie profilu weterynarza</h1>
                    <hr />
                    <form onSubmit={formValidate} >
                        <div className="PlacesSearch--container">
                            <p>Wpisz swoje imię i nazwisko</p>
                            <div className='input--container'>
                                <input className='text--input' onChange={(e)=> setName(e.target.value)} id="fullName" name="fullName" type="text" placeholder='Imię i nazwisko'/>
                            </div>
                            <span className='error'>{nameErr}</span>
                        </div>

                        <div className="PlacesSearch--container">
                            <p>Telefon kontaktowy</p>
                            <div className='input--container'>
                                <input className='text--input' onChange={(e)=> setPhoneNum(e.target.value)} id="fullName" name="fullName" type="number" placeholder='Numer telefonu'/>
                            </div>
                            <span className='error'>{phoneErr}</span>
                        </div>

                        <div className="PlacesSearch--container">
                                <p>Jaką szkołę ukończyłeś/aś?</p>
                                <div className='input--container'>
                                    <input onChange={(e)=> setSchool(e.target.value)} className='text--input' id="School" name="School" type="text" placeholder='Wpisz nazwę szkoły'/>
                                </div>
                                <span className='error'>{schoolErr}</span>
                            </div>

                        <span>
                            <p>W leczeniu jakich zwierząt się specjalizujesz?</p>
                            <Multiselect 
                                    options={categories} 
                                    placeholder='Wybierz'
                                    closeIcon='circle' 
                                    displayValue="name"
                                    emptyRecordMsg="Brak opcji."
                                    hidePlaceholder={true}
                                    onSelect={getCategory}
                                    onRemove={getCategory}
                                    style={{
                                        multiselectContainer: {fontWeight: 400},
                                        chips: { background: '#54a058'}, 
                                        searchBox: { background: '#ffffffe5', fontWeight: 600, height:'2.2rem', cursor: 'text'},
                                    }}
                                    avoidHighlightFirstOption
                                />
                                <span className='error'>{catErr}</span>
                            </span>

                            <span>
                                <p>Wybierz specjalizację</p>
                                <Multiselect 
                                        options={specializations} 
                                        placeholder='Wybierz specjalizację'  
                                        closeIcon='circle' 
                                        displayValue="name"
                                        emptyRecordMsg="Brak opcji."
                                        hidePlaceholder={true}
                                        onSelect={getSpecializations}
                                        onRemove={getSpecializations}
                                        style={{
                                            multiselectContainer: {fontWeight: 400},
                                            chips: { background: '#54a058'}, 
                                            searchBox: { background: '#ffffffe5', fontWeight: 600, height:'2.2rem', cursor: 'text'},
                                        }}
                                        avoidHighlightFirstOption
                                    />
                                <span className='error'>{specErr}</span>
                            </span>
                            
                            <span>
                                <p>Wybierz miasto</p>
                                <PlacesSearch currentSelection={(e) => setCity(e)} />
                                <span className='error'>{cityErr}</span>
                            </span>

                            <div className="PlacesSearch--container">
                                <p>Wpisz adres swojego gabinetu</p>
                                <div className='input--container'>
                                    <input onChange={(e)=> setAddress(e.target.value)} className='text--input' id="Address" name="Address" type="text" placeholder='Ulica, numer domu i lokalu'/>
                                </div>
                                <span className='error'>{addressErr}</span>
                            </div>

                            <div className="PlacesSearch--container">
                            <p>Wybierz zdjęcie profilowe</p>
                                <div className='input--container'>
                                    <input onChange={(event)=> setImage(event.target.files[0])} type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                                </div>
                                <span className='error'>{avatarErr}</span>
                            </div>  

                            <input type="submit" value="Wyślij" id="submit"/>
                    </form>
                </section>

                <Footer />
            </>
        )
    } else if(result === 'profil') {
        return (
            <>
                <div className='NavBar--overwrite' >
                    <NavBar />
                </div>

                {isMsgVisible ? <Msg /> : null}

                <section className='settings--container' style={{ animation: animations.popIn, display: isMsgVisible ? 'none' : 'block'}}>
                    <h1>Ustawienia konta - {currentUser.email}</h1>
                    <hr />
                    
                    <div className='form--container'>
                        <form onSubmit={newPassword}>
                            <h2>Zmiana hasła</h2>
                            <div className="PlacesSearch--container">
                                <div className='input--container'>
                                    <input onChange={(e)=> setPassword(e.target.value)} className='text--input' id="password" name="password" type="password" placeholder='Nowe hasło'/>
                                </div>
                                <span className='error'>{passErr}</span>
                            </div>

                            <div className="PlacesSearch--container">
                                <div className='input--container'>
                                    <input onChange={(e)=> setConfirmPass(e.target.value)} className='text--input' id="check--password" name="check--password" type="password" placeholder='Powtórz nowe hasło'/>
                                </div>
                                <span className='error'>{confirmPassErr}</span>
                            </div>

                            <div className="PlacesSearch--container">
                                <div className='input--container'>
                                    <input onChange={(e)=> setUserProvidedPassword(e.target.value)} className='text--input' name="check-user--password" type="password" placeholder='Wpisz aktualne hasło do konta'/>
                                </div>
                                <span className='error'>{userProvidedPasswordErr}</span>
                            </div>
                            <input type="submit" value="Wyślij" id="submit--password"/>
                        </form>

                        <form onSubmit={newEmail}>
                            <h2>Zmiana e-maila</h2>
                            <div className="PlacesSearch--container">
                                <div className='input--container'>
                                    <input onChange={(e)=> setEmail(e.target.value.toLowerCase())} className='text--input' id="email" name="email" type="email" placeholder='Nowy e-mail'/>
                                </div>
                                <span className='error'>{emailErr}</span>
                            </div>

                            <div className="PlacesSearch--container">
                                <div className='input--container'>
                                    <input onChange={(e)=> setConfirmEmail(e.target.value.toLowerCase())} className='text--input' id="check-email" name="check-email" type="email" placeholder='Powtórz nowy e-mail'/>
                                </div>
                                <span className='error'>{confirmEmailErr}</span>
                            </div>

                            <div className="PlacesSearch--container">
                                <div className='input--container'>
                                    <input onChange={(e)=> setUserProvidedPassword(e.target.value)} className='text--input' name="check-user--password" type="password" placeholder='Wpisz aktualne hasło do konta'/>
                                </div>
                                <span className='error'>{userEmailPasswordErr}</span>
                            </div>

                            <input type="submit" value="Wyślij" id="submit--email"/>
                        </form>
                    </div>
                </section>

                <Footer />
            </>
        )
    } else {
        return <NotFound />
    }
}
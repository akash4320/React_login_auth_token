import React, { useEffect, useState } from 'react';
import {
    MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent,
    MDBTabsPane, MDBBtn, MDBIcon, MDBInput, MDBTypography
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({ loginApp,loginErr }) {
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [disableLogin, setDisableLogin] = useState(true);

    useEffect(() => {
        if (loginData.username !== '' && loginData.password !== '') {
            setDisableLogin(false);
        } else {
            setDisableLogin(true);
        }
    }, [loginData])

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    const navigate = useNavigate();
    const signInAction = () => {
        loginApp(loginData,navigate)
    }
    const handleChange = (event, input) => {
        const data = {...loginData};
        data[input] = event.target.value;
        setLoginData(data);
    }
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column width-comp">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>
                    <MDBInput
                        wrapperClass='mb-4' label='User Name' id='form1' value={loginData.username}
                        type='text' onChange={(e) => handleChange(e, 'username')}
                    />
                    <MDBInput
                        wrapperClass='mb-4' label='Password' id='form2' value={loginData.password}
                        type='password' onChange={(e) => handleChange(e, 'password')}
                    />
                    {loginErr !== '' && <MDBTypography style={{color: 'red'}}>{loginErr}</MDBTypography> }
                    <MDBBtn className="mb-4 w-100" disabled={disableLogin} onClick={signInAction}>Sign in</MDBBtn>
                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>
                    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />
                    <MDBBtn className="mb-4 w-100" disabled={true}>Sign up</MDBBtn>
                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer>
    )
}

export default Login;
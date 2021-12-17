import { SignupForm } from '../pages/Signup';
import { LoginForm } from '../pages/Login';
import { AuthContext } from '../Firebase';
import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../images/Logo.png';

const Mars = styled.div`
	margin: 2em;
  width: 300px;
  display: flex;
  margin-top: 4em;
  overflow: hidden;
  min-height: 550px;
  position: relative;
  border-radius: 22px;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  background: url(${Logo}) no-repeat center;
  background-size: cover;
`;
const Top = styled.div`
	width: 100%;
  height: 255px;
  display: flex;
  padding: 0 1.8em;
  padding-bottom: 2em;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Backdrop = styled.div`
	top: -290px;
  left: -70px;
  width: 160%;
  opacity: 0.9;
  height: 522px;
  border-radius: 50%;
  position: absolute;
  transform: rotate(60deg);
  background: darkslategray;
`;
const Header = styled.div`
  display: flex;
  margin-bottom: 22px;
  flex-direction: column;
  align-items: flex-start;
  h2 {
	  z-index: 10;
	  font-size: 30px;
	  font-weight: 600;
	  line-height: 1.24;
  }
  h5 {
	  font-size: 13px;
	  font-weight: 500;
	  line-height: 1.24;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2em;
  padding: 0 1.7em;
  align-items: center;
  flex-direction: column;
`;

export const FormSwitch = ({ initalActive }) => {
	const [active, setActive] = useState(initalActive ? initalActive : 'login');
	
	const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };
  const switchToSignup = () => {
    switchActive('signup');
  };
  const switchToLogin = () => {
    switchActive('login');
  };
  const contextValue = {
    switchToSignup,
    switchToLogin,
  };
  return (
  	<AuthContext.Provider value={contextValue}>
      <Mars>
        <Top>
          <Backdrop
          />
          {active === 'login' && (
            <>
              <Header>
                <h2>Welcome</h2>
                <h2>Back</h2>
              </Header>
            </>
          )}

          {active === 'signup' && (
            <>
              <Header>
                <h2>Create </h2>
                <h2>Account</h2>
              </Header>
            </>
          )}
        </Top>
        <Inner>
          {active === 'login' && <LoginForm />}
          {active === 'signup' && <SignupForm />}
        </Inner>
      </Mars>
    </AuthContext.Provider>
  );
};
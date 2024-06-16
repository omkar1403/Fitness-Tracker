import React from 'react'
import styled from 'styled-components';
import TextInput from "./TextInput";
import Button from "./Button";


const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;


const Signin = () => {
  return (
    <Container>
    <div>
      <Title>Welcome to Fittrack!</Title>
      <Span>Please login with your details!</Span>
    </div>
    <div style={
      {
        display:"flex",
        gap:"20px",
        flexDirection:"column"
      }
    }>
      <TextInput label="Email address" placeholder="Enter Your Email address"/>
      <TextInput label="Password" placeholder="Enter Your Password" password/>
      <Button
          text="SignIn"
        />

    </div>
  </Container>
  )
}

export default Signin
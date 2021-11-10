import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 50%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  width: 50%;
  margin: 10px auto;
`;
const Input = styled.input`
  margin-bottom: 10px;
`;
const ContactForm = () => {
  return (
    <Container>
      <Form>
        <label>Email</label>
        <Input />
        <label>Subject</label>
        <Input />
        <label>Detail</label>
        <textarea />
        <Button>send</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;

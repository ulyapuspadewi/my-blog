import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactForm/ContactInfo";
import cover from "../../images/blog-cover.jpeg";
import { Background,  ContactWrap } from "./styled";
import { Container } from "../../styled/styled";

const Contact = () => {
  return (
    <MainLayout>
      <Background style={{ backgroundImage: `url(${cover})` }}>
        <Container>
          <ContactWrap>
            {/* left contact page */}
            <ContactForm />
            {/* right contact page */}
            <ContactInfo />
          </ContactWrap>
        </Container>
      </Background>
    </MainLayout>
  );
};

export default Contact;

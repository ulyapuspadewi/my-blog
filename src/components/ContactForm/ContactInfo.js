import React, { Component } from 'react';
import {
    ContactBoxed2,
    FormOption,
    SocialMedia,
    Sos,
  } from "./styled";
  
export default class ContactInfo extends Component {

    render() {
        return (
            <ContactBoxed2>
          <SocialMedia>
            <Sos>
              <a href="#">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </Sos>
            <Sos>
              <a href="#">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </Sos>
            <Sos>
              <a href="#">
                <i
                  className="fab fa-google-plus-g"
                  aria-hidden="true"
                ></i>
              </a>
            </Sos>
            <Sos>
              <a href="#">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </Sos>
            <Sos>
              <a href="#">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </Sos>
          </SocialMedia>
          <FormOption>
            <div className="copyright">
              &copy; ALL OF THE RIGHTS RESERVED
            </div>
          </FormOption>
          </ContactBoxed2>
        )
    }
}
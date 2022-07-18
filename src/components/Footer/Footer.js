import React from "react";
import {
  Footers,
  FotBox,
  Fotcont,
  Copyright
} from "./styled";
import { Container } from '../../styled/styled';

// function component
const Footer = () => {
  return (
    <Footers>
      <Container>
        <FotBox>
            <div className="row">
                <div className='col-sm-3 col-12'>
                    <Fotcont>
                    <h6>
                        Information
                    </h6>
                    <ul>
                        <li>
                        <a href="">Pages</a>
                        </li>
                        <li>
                        <a href="">Our Team</a>
                        </li>
                        <li>
                        <a href="">Feuchers</a>
                        </li>
                        <li>
                        <a href="">Pricing</a>
                        </li>
                    </ul>
                    </Fotcont>
                </div>

                <div className='col-sm-3 col-12'>
                    <Fotcont>
                    <h6>
                        Ressources
                    </h6>
                    <ul>
                        <li>
                        <a href="">Monitoring Grader </a>
                        </li>
                        <li>
                        <a href="">Video Tutorial</a>
                        </li>
                        <li>
                        <a href="">Term &amp; Service</a>
                        </li>
                        <li>
                        <a href="">Zeeko API</a>
                        </li>
                    </ul>
                    </Fotcont>
                </div>

                <div className='col-sm-3 col-12'>
                    <Fotcont>
                    <h6>Help</h6>
                    <ul>
                        <li>
                        <a href="">Sign Up </a>
                        </li>
                        <li>
                        <a href="">Login</a>
                        </li>
                        <li>
                        <a href="">Terms of Services</a>
                        </li>
                        <li>
                        <a href="">Privacy Policy</a>
                        </li>
                    </ul>
                    </Fotcont>
                </div>

                <div className='col-sm-3 col-12'>
                    <Fotcont>
                    <h6>
                        Contact Us
                    </h6>
                    <ul>
                        <li>
                        <p>Contact us if need help with anything</p>
                        </li>
                        <li>
                        <p>+01 123-456-7890</p>
                        </li>
                    </ul>
                    </Fotcont>
                </div>
            </div>
        </FotBox>
      </Container>

      <Copyright>
        <h6>
          2022 © Ulya Puspa Dewi, All Rights Reserved
        </h6>
      </Copyright>
    </Footers>
  );
};

export default Footer;

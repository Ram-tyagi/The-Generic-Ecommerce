import React from 'react'
import classes from './Footer.module.css';
const Footer = () => {
  return (
    <footer  class={classes.footer}>
      
            <span>
            <h1>The Generics</h1>
            <p>© 2021 The Generics. All rights reserved.</p>
            <p>Terms of Service Privacy Policy</p>
            </span>
            <div>
                <a href="https://www.facebook.com/">
                    <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook"/>
                </a>
                <a href="https://www.instagram.com/">
                    <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram"/>
                </a>
                <a href="https://twitter.com/">
                    <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter"/>
                </a>
            </div>
        
        <div class={classes.support}>
            <h1>Support</h1>
            <p>FAQ</p>
            <p>Payment</p>
            <p>Shipping</p>
            <p>Return</p>
        </div>
        
    </footer>
  )
}

export default Footer;
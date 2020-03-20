import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='page-footer' style={{ background: "#333" }}>
        <div className='container' style={{ padding: "1rem" }}>
          © 2019 Copyright Text
          <a className='grey-text text-lighten-4 right' href='#!'>
            License MIT ( version 1.2.1 )
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

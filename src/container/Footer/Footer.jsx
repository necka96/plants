import React, { useEffect, useState } from "react";
import "./footer.scss";
const Footer = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <div className='footer'>
      <p>
        Copyright © {date} All rights reserved | This template is made with{" "}
        <span className='heart'>♥</span> by
        <span className='name'> Nemanja Djordjevic</span>
      </p>
    </div>
  );
};

export default Footer;

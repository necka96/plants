import { useState } from "react";
import AnimatedPage from "../../components/Animated/AnimatedPage";
import "./contact.scss";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    tel: "",
    textarea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  return (
    <AnimatedPage>
      <main className='contact'>
        <div className='container grid'>
          <h1>Keep in touch</h1>
          <form
            name='contact-form'
            method='POST'
            data-netlify='true'
            className='form'
            onSubmit='submit'
            data-netlify-honepot='bot-filed'
          >
            <input type='hidden' name='form-name' value='contact-form' />
            <div hidden>
              <input name='bot-filed' />
            </div>
            <input
              type='text'
              className='name'
              placeholder='name'
              onChange={handleChange}
              name='name'
              value={formData.name}
            />
            <input
              type='text'
              className='lastName'
              placeholder='last name'
              onChange={handleChange}
              name='lastName'
              value={formData.lastName}
            />
            <input
              type='email'
              className='email'
              placeholder='email'
              onChange={handleChange}
              name='email'
              value={formData.email}
            />
            <input
              type='tel'
              placeholder='phone'
              onChange={handleChange}
              name='tel'
              value={formData.tel}
            />
            <textarea
              className='textarea'
              placeholder='your message'
              onChange={handleChange}
              name='textarea'
              value={formData.textarea}
            ></textarea>
            <button className='btn'>Send Message</button>
          </form>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Contact;

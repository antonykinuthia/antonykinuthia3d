import './style.css'
import { Suspense, useRef, useState } from "react";
import { animated, useSpring } from '@react-spring/web'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const {alert, showAlert,hideAlert} = useAlert();

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Antony',
        from_email: form.email,
        to_email: 'tonykinuthia20@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({show: true, text : 'message sent successfully', type: 'success'})
      setTimeout(() =>{
         hideAlert();
         setCurrentAnimation('idle')
         setForm({ name: '', message: '', email: '' });

      }, 3000)

      
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({show: true, text : 'something broke', type: 'danger'})

    });

  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <section className='headerForm'>
    {alert.show && <Alert {...alert}/>}
      <animated.div style={{
        height: "100%",
        width: '50%',
        ...springs,
      }}>
       <h1 className='headerText'>Contact me </h1>

        <form
          className='form'
          onSubmit={handleSubmit}
        >
          <label>
            Your Name
            <br />
            <input
              type="text"
              name='name'
              className='input'
              placeholder="your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </label>
          <label>
            Your Name
            <br />
            <input
              type="text"
              name='email'
              className='input'
              placeholder="your email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </label>
          <label>
            Your Message
            <br />
            <textarea
              name='message'
              rows={4}
              placeholder="Leave your message"
              required
              className='textarea'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </label>
          <button
            type="submit"
            className='button'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'sending message...' : 'send'}
          </button>
        </form>
      </animated.div>
      <div className='fox'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near : 0.1,
            far: 1000,

          }}
        >
          <Suspense fallback={<Loader/>}>
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5}/>
            <Fox
            currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.9, 0]}
              scale={[0.6, 0.7, 0.5]} />
          </Suspense>
        </Canvas>
      </div>
    </section>

  );
}

export default Contact

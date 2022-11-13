import './App.css';
import {blogs} from './blogs.js';
import {motion, Variants} from 'framer-motion'; //Motion library for react

const imageAnimate={
  offscreen:{x:-100, opacity:0}, // x=-100 means that the starting point is from the left on the x axis. The opacity of 0 says that the image is not visible before it starts moving 
  onscreen:{x:0, opacity:0.7, // Her the opacity says when the image card should start moving (when 0.7 of the whole card is visible). Image card settles at the 0 point on the x axis
    rotate:[0,20,-20,20,0], // A little bit of rotation when the image card comes in
    transition: {type:'spring', //bouncy, springy effect that makes it look more natural how it bounces into its place
    bounce:0.4, 
    duration:1.5}
  }
}

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
     opacity:1,
    transition: {type:'spring',
    bounce:0.4,
    duration:3}
  }
}

function Card({ image, h2, p, id }) {
  return (
    <motion.div className='card' id={id} // Motion element. It hooks into Framer Motion so it can accept other props and define the animation of the elemnt
        initial={'offscreen'} // Starting point
        whileInView={'onscreen'} // Makes the motion visible when you scroll, as the objects come into view on the site
        viewport={{once:false, amount:0.5}} // Makes the motion repeat every time the objects come into view again (scrolling back and forth, it will move again every time)
        transition={{staggerChildren:0.5}} // StaggerChildren defines the delay of the children. Every child will appear with 0.5s between them. The card is the parent. The image, h2 and p are the children
    >
      <motion.div className='image-container' 

        variants={imageAnimate}
      >{image}</motion.div>

      <motion.h2
        variants={textAnimate}
      >{h2}</motion.h2>

      <motion.p
         variants={textAnimate}
      >{p}</motion.p>
    </motion.div>
  );
}
   
export default function App() {
  return blogs.map((item, index) => (
    <div className='card-wrapper' key={index}>
      <Card image={item.image} h2={item.h2} p={item.p} />
    </div>
  ));
};

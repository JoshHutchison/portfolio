import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { Text } from '@react-three/drei'
import { Josh } from './Model'

function WelcomeText() {
  const textRef = useRef()
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({
    x: 6,
    y: 1,
    z: 0
  });
  const [text, setText] = useState("Hi, welcome to my page");

  useEffect(() => {
    setTimeout(() => setVisible(true), 500)

    const handleScroll = () => {
      const progress = parseFloat(document.documentElement.style.getPropertyValue('--scroll-progress') || 0);
      const xPosition = Math.cos(progress * Math.PI * 3) * 3;
      
      setPosition(prev => ({
        ...prev,
        y: position.y+ 1,
        x: xPosition + 4
      }));

      // Update text based on scroll progress
      if (progress < 0.2) {
        setText("Hi, welcome to my page");
      } else if (progress < 0.65) {
        setText("Check out my skills");
      } else if (progress < 0.8) {
        setText("Here's my experience");
      } else {
        setText("Let's connect!");
      }
    };

    handleScroll();

    const container = document.querySelector('.scroll-container');
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.05 + position.y
      textRef.current.position.x = position.x -3
    }
  })

  return (
    <Text
      ref={textRef}
      position={[position.x -3, position.y, position.z]}
      fontSize={0.2}
      color="white"
      anchorX="left"
      anchorY="middle"
      opacity={visible ? 1 : 0}
      transparent
    >
      {text}
    </Text>
  )
}

function Model() {
  const [position, setPosition] = useState({
    x: 3,
    y: -3,
    z: 0
  });
  const [rotation, setRotation] = useState([0, Math.PI * -0.1, 0]);
  const [currentAnimation, setCurrentAnimation] = useState('waving');

  useEffect(() => {
    const handleScroll = () => {
      const progress = parseFloat(document.documentElement.style.getPropertyValue('--scroll-progress') || 0);
      const xPosition = Math.cos(progress * Math.PI * 3) * 3;
      
      // Calculate rotation based on scroll progress
      let yRotation = 0;
      // if (progress < 0.5) {
      //   // Second section: rotate right 90 degrees
      //   yRotation = Math.PI * -0.5; // -90 degrees
      // } 
      // else if (progress < 0.75) {
      //   // Third section: rotate left 90 degrees
      //   yRotation = Math.PI * 0.5; // 90 degrees
      // } else {
      //   // Fourth section: rotate right 90 degrees
      //   yRotation = Math.PI * -0.5; // -90 degrees
      // }

      // Determine animation based on scroll progress
      if (progress < 0.2) {
        setCurrentAnimation('waving');
        setRotation([0, Math.PI * -0.1, 0])
      } else if (progress < 0.65) {
        setCurrentAnimation('running');
        setRotation([0, Math.PI * 0.4, 0]);
      } else if (progress < 0.8) {
        setCurrentAnimation('pointing');
        setRotation([0, Math.PI * -0.4, 0]);
      } else {
        setCurrentAnimation('running');
        setRotation([0, Math.PI * 0.4, 0]);
      }


      setPosition({
        x: xPosition,
        y: -3,
        z: 0
      });
      
      // Smoothly interpolate rotation
      // setRotation(prev => {
      //   const targetRotation = [0, yRotation, 0];
      //   return targetRotation.map((target, i) => {
      //     const current = prev[i];
      //     return current + (target - current) * 0.1;
      //   });
      // });
    };

    const container = document.querySelector('.scroll-container');
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Josh 
      scale={3} 
      position={[position.x, position.y, position.z]} 
      rotation={rotation}
      animation={currentAnimation}
    />
  );
}

export default function ScrollModel() {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 2,
    }}>
      <Canvas 
        style={{ height: '100vh' }}
        camera={{ position: [0, 0, 10], fov: 50 }}
        eventSource={document.body}
        eventPrefix="page"
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <WelcomeText />
      </Canvas>
    </div>
  )
} 
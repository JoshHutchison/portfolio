import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { Text } from '@react-three/drei'
import { Josh } from './Model'
import { useProgress, Html } from '@react-three/drei'
import { Suspense } from 'react'

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

// This loader is used outside Canvas
function DOMLoader() {
  const { progress } = useProgress()
  
  return (
    <div 
      className="flex flex-col items-center justify-center text-white"
      style={{
        transform: 'translateX(25%)',
        position: 'relative',
        left: '10%'
      }}
    >
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500/20 rounded-full"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full border-4 border-t-blue-500 rounded-full animate-spin"
          style={{
            animationDuration: '1.5s',
          }}
        ></div>
      </div>
      <div className="mt-4 text-lg font-medium">Loading...</div>
      <div className="text-sm text-gray-400">{progress.toFixed(0)}%</div>
    </div>
  )
}

// Custom hook to detect mobile screens
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export default function ScrollModel() {
  const [started, setStarted] = useState(false)
  const { active, progress } = useProgress()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setStarted(true), 500)
    }
  }, [progress])

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 2,
      display: isMobile ? 'none' : 'block', // Additional safety measure
    }}>
      <Canvas 
        style={{ 
          height: '100vh',
          opacity: started ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
        camera={{ position: [0, 0, 10], fov: 50 }}
        eventSource={document.body}
        eventPrefix="page"
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
          <WelcomeText />
        </Suspense>
      </Canvas>
      {!started && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 1s ease-in-out',
            opacity: active ? 1 : 0,
          }}
        >
          <DOMLoader />
        </div>
      )}
    </div>
  )
} 
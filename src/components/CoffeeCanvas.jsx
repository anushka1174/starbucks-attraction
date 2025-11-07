import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

const CoffeeCanvas = () => {
  return (
    // Canvas is the main container for all 3D content
    <Canvas
      shadows
      // Camera ki initial position set karte hain
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* 3D Scene ka background colour set karte hain */}
      <color attach="background" args={['#0E382C']} /> 

      <Suspense fallback={<div>Loading 3D Model...</div>}>

        {/* R3F mein yeh zaroori hai taaki hum model ko rotate kar saken */}
        <OrbitControls 
          enableZoom={false} // Zoom off rakho
          maxPolarAngle={Math.PI / 2} // Upar neeche rotation limit
          minPolarAngle={Math.PI / 2} 
        />

        {/* Lighting zaroori hai taaki objects dikhein */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight intensity={1} />

        {/* Ab hum ek simple 3D Box bana rahe hain */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} /> {/* Box ka size (width, height, depth) */}
          <meshStandardMaterial color="hotpink" /> {/* Box ka colour */}
        </mesh>

      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CoffeeCanvas;
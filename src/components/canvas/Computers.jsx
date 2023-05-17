import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./my_computer/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="white" />
      <pointLight intensity={5} />
      <spotLight
        position={[0, 2, -20]}
        angle={0.5}
      />
      <primitive
        object={computer.scene}
        scale={1.8}
        position={[4.9, 3.6, 1]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [5, 23, -18], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;

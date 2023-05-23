import React, { useEffect, useState, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const { size } = useThree();
  const [windowWidth, setWindowWidth] = useState(size.width);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(size.width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size.width]);

  const computer = useGLTF("./my_computer/scene.gltf");
  const scale = windowWidth > 768 ? 2.5 : 1.5;
  const positionX = windowWidth > 768 ? 7.5 : 5;
  const positionY = windowWidth > 768 ? 6 : 3.4;

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="white" />
      <pointLight intensity={5} />
      <spotLight position={[0, 2, -20]} angle={0.5} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={[positionX, positionY, 1]}
        rotation={[0, Math.PI / 4.5, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-7, 23, -10], fov: 20 }}
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

import { Decal, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <mesh scale={2.75}>
      <hemisphereLight intensity={0.5} groundColor="white" />
      <spotLight
        position={[20, 50, 10]}
        penumbra={1}
        intensity={0.4}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <icosahedronGeometry args={[0.92, 30, 30]} attach="geometry" />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />

      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <sphereGeometry args={[1, 20, 20]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={[0.92, 0.92, 0.92]}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand">
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <hemisphereLight intensity={0.8} groundColor="black" />
        <spotLight
          position={[0, 0, 0]}
          angle={0.25}
          penumbra={0.5}
          intensity={0.5}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={0.5} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;

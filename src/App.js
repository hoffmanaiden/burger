import * as THREE from 'three'
import './App.css';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

function Burger() {
  const { nodes, materials } = useGLTF("/burger.glb")
  console.log(nodes)
  return (
    <group>
      <group scale={[0.25, 0.25, 0.25]}>
        <mesh name="topBun" geometry={nodes.top_bun.geometry} material={materials.Bun} position={[0,1,0]}/>
        <mesh name="cheese" geometry={nodes.cheese.geometry} material={materials.cheese} position={[0,-0.25,0]}/>
        <mesh name="meat" geometry={nodes.meat.geometry} material={materials.meat} position={[0,0,0]}/>
        <mesh name="bottomBun" geometry={nodes.bottom_bun.geometry} material={materials.Bun} position={[0,-2,0]}/>
      </group>
    </group>
  )
}

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Burger />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

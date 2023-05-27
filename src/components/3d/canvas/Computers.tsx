"use client"
import React from 'react'
import { useMediaQuery } from "@mui/material"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Preload } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { CircularProgress } from "@mui/material";
// import { CanvasLoader } from "@/components/3d";
import { Html, useProgress } from "@react-three/drei";

const Computer = () => {
    const computer = useLoader(GLTFLoader, "/desktop/scene.gltf")
    const isMedium = useMediaQuery("(min-width: 500px)")
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
                position={[-20, 50, 10]} />
            <primitive
                position={isMedium ? [0, -1.22, -1.25]: [0, -3, -1.2]}
                rotation={[-0.01, -0.2, -0.2]}
                scale={isMedium ? 0.71 : 0.99} object={computer.scene} />
        </mesh>
    )
}

export const ComputerCanvas = () => {
    const { progress } = useProgress()
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [20, 3, 5], fov: 25 }}>
            <React.Suspense fallback={(
                <Html>
                    <CircularProgress variant='determinate' value={progress} />
                    <p className="text-lg font-medium">{progress.toFixed(2)}%</p>
                </Html>
            )}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
                <Computer />
            </React.Suspense>
            <Preload all />
        </Canvas >
    )
}

export default Computer

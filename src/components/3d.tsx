import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { LoaderSpinner } from "./shared";

const modelPath = '/david.glb';
useGLTF.preload(modelPath);

// Define the Model component to load and display a 3D model
function Model({ url }: { url: string }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 }); 
    
    // Access the head bone of the model
    const { scene } = useGLTF(url, true); 
    const mesh = scene.getObjectByProperty('type', 'SkinnedMesh') as THREE.SkinnedMesh;
    const skeleton = mesh.skeleton;
    const headBone = skeleton.getBoneByName('head');

    // Mouse move event listener to update mouse position 
    useEffect(() => { 
        const handleMove = (e: MouseEvent) => { 
            setMouse({ 
                // normalize mouse position to -1..1 
                x: (e.clientX / window.innerWidth) * 2 - 1, 
                y: -(e.clientY / window.innerHeight) * 2 + 1, 
            }); 
        }; 
        window.addEventListener("mousemove", handleMove); 
        return () => window.removeEventListener("mousemove", handleMove); 
    }, []); 
    
    // Use the useFrame hook to update the model's orientation based on mouse position
    useFrame(() => {
        if (headBone) {
            // map mouse coordinates to angles
            const rotY = (mouse.x * 0.7); // left-right
            const rotX = -0.3 + (-mouse.y * 0.6); // up-down

            headBone.rotation.set(rotX, rotY, 0); // set head rotation directly
        }
    });

    return <primitive object={scene} />; 
}

// Main component to render the 3D scene
export default function Object3D({largeWidth = true}: {largeWidth: boolean}) {
    return (
        <Canvas
            style={{ width: "100%", height: largeWidth ? "85vh" : "50vh" }} 
            gl={{ alpha: true }} // allows transparency
            camera={{ position: [
                0, // x 
                1, // y
                3  // z
            ], fov: 5 }}
        >
            <ambientLight intensity={0.9} />
            <directionalLight position={[
                5, // x 
                5, // y
                5  // z
            ]} intensity={1} />
            <Suspense fallback={<LoaderSpinner />}>
                <Model url={modelPath} />
            </Suspense>
        </Canvas>
    );
}

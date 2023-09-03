import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
    const boxRef = useRef();
    const sphereRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();
    let time = 0;

    useFrame((state, delta) => {
        time += delta;
        boxRef.current.rotation.x += 1 * delta;
        sphereRef.current.rotation.x += 1 * delta;
        coneRef.current.rotation.x += 1 * delta;
        torusRef.current.rotation.x += 1 * delta;
        coneRef.current.position.x = -10;
        torusRef.current.position.x = 10;

        coneRef.current.position.y = Math.sin(time) * 10;
        sphereRef.current.position.y = Math.cos(time) * 10;
        torusRef.current.position.y = Math.sin(time) * 10;
    });

    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="purple" />
            </mesh>
            <mesh ref={sphereRef} scale={[1, 1, 1]}>
                <sphereGeometry args={[3, 100, 100]} />
                <meshStandardMaterial color="purple" />
            </mesh>
            <mesh ref={coneRef} scale={[1, 1, 1]}>
                <coneGeometry args={[2, 5, 32]} />
                <meshLambertMaterial color="blue" />
            </mesh>
            <mesh ref={torusRef} scale={[1, 1, 1]}>
                <torusGeometry args={[1.5, 1, 32, 50]} />
                <meshPhysicalMaterial color="yellow" />
            </mesh>
        </>
    );
}

export default Experience;
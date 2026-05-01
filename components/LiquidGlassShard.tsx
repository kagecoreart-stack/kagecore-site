"use client";
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

export default function LiquidGlassShard() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff00ff" intensity={2} />
        <Float speed={4} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[1, 100, 200]} scale={1.8}>
            <MeshDistortMaterial color="#0a0a0a" roughness={0.1} metalness={1} distort={0.5} speed={5} />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}

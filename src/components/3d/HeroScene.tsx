import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating Particle Field
const ParticleCloud: React.FC<{ count?: number }> = ({ count = 350 }) => {
  const points = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return positions;
  }, [count]);

  useFrame((_state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
      points.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#00f2fe"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Interactive 3D Central Polyhedron
const CentralCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.4;
      meshRef.current.rotation.y += 0.008;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.005;
      ringRef.current.rotation.x = Math.cos(t * 0.2) * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Dynamic Liquid Core */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <Sphere ref={meshRef} args={[1.3, 64, 64]}>
          <MeshDistortMaterial
            color="#da0037"
            emissive="#400010"
            roughness={0.2}
            metalness={0.8}
            distort={0.4}
            speed={1.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting Tech Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#00f2fe"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>

      {/* Secondary Outer Gimbal Ring */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.7, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#7928ca"
          emissive="#7928ca"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
    </group>
  );
};

// Mouse Parallax Controller
const SceneCameraRig: React.FC = () => {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.8,
      0.05
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.8,
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 5, 5]} intensity={1.5} color="#00f2fe" />
        <pointLight position={[-6, -5, -4]} intensity={2.2} color="#da0037" />
        <directionalLight position={[0, 4, 3]} intensity={0.8} />

        <CentralCore />
        <ParticleCloud count={280} />
        <SceneCameraRig />
      </Canvas>
    </div>
  );
};

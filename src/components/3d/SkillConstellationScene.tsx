import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { SKILL_NODES } from '../../data/portfolioData';

interface NodeProps {
  position: [number, number, number];
  name: string;
  category: string;
  level: number;
}

const ConstellationNode: React.FC<NodeProps> = ({ position, name, category }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = React.useState(false);

  const nodeColor = useMemo(() => {
    switch (category) {
      case 'Video & Motion':
        return '#da0037';
      case '3D & Visual':
        return '#00f2fe';
      case 'Design & Branding':
        return '#ff5e62';
      case 'Strategy & Growth':
        return '#9d4edd';
      default:
        return '#4facfe';
    }
  }, [category]);

  useFrame((_state) => {
    if (meshRef.current) {
      const scale = hovered ? 1.4 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8} position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color={nodeColor}
          emissive={nodeColor}
          emissiveIntensity={hovered ? 1.5 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Halo */}
      <mesh>
        <sphereGeometry args={[0.32, 16, 16]} />
        <meshBasicMaterial
          color={nodeColor}
          transparent
          opacity={hovered ? 0.35 : 0.12}
          wireframe
        />
      </mesh>

      {/* Label */}
      <Text
        position={[0, 0.45, 0]}
        fontSize={0.2}
        color={hovered ? '#ffffff' : '#b0b5c0'}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </Float>
  );
};

// Interconnected Network Lines
const ConnectionWeb: React.FC<{ nodes: [number, number, number][] }> = ({ nodes }) => {
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = new THREE.Vector3(...nodes[i]);
        const p2 = new THREE.Vector3(...nodes[j]);
        if (p1.distanceTo(p2) < 3.2) {
          points.push(p1, p2);
        }
      }
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [nodes]);

  const linesRef = useRef<THREE.LineSegments>(null!);
  useFrame((_state, delta) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial color="#00f2fe" transparent opacity={0.22} blending={THREE.AdditiveBlending} />
    </lineSegments>
  );
};

export const SkillConstellationScene: React.FC = () => {
  const nodeCoordinates: [number, number, number][] = useMemo(() => {
    return SKILL_NODES.map((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / SKILL_NODES.length);
      const theta = Math.sqrt(SKILL_NODES.length * Math.PI) * phi;
      const radius = 2.4;
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ];
    });
  }, []);

  return (
    <div className="w-full h-[420px] md:h-[520px] relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
      <div className="absolute top-4 left-4 z-10 font-mono text-xs text-white/50 tracking-wider">
        // 3D SKILL CONSTELLATION • INTERACTIVE ROTATION
      </div>
      <Canvas camera={{ position: [0, 0, 5.2], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#da0037" />
        <pointLight position={[-5, -5, -5]} intensity={1.2} color="#00f2fe" />
        <group>
          {SKILL_NODES.map((skill, i) => (
            <ConstellationNode
              key={skill.name}
              position={nodeCoordinates[i]}
              name={skill.name}
              category={skill.category}
              level={skill.level}
            />
          ))}
          <ConnectionWeb nodes={nodeCoordinates} />
        </group>
      </Canvas>
    </div>
  );
};

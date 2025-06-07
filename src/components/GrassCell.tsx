// src/components/GrassCell.tsx
import React from 'react';

type GrassCellProps = {
  level: number;
};

export default function GrassCell({ level }: GrassCellProps) {
  const levelToColor = [
    'bg-white',
    'bg-green-200',
    'bg-green-400',
    'bg-green-600',
    'bg-green-800',
  ];

  return (
    <div className={`w-4 h-4 m-0.5 ${levelToColor[level] || 'bg-white'}`} />
  );
}

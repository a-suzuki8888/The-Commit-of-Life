// src/components/GrassCell.tsx
type GrassCellProps = {
  level: number;
};

export default function GrassCell({ level }: GrassCellProps) {
  const levelToColor = [
    'bg-zinc-200', // 0
    'bg-green-200', // 1
    'bg-green-400', // 2
    'bg-green-600', // 3
    'bg-green-800', // 4
  ];

  return (
    <div className={`w-3 h-3 sm:w-4 sm:h-4 m-[1px] ${levelToColor[level]}`} />
  );
}

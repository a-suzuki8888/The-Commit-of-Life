// src/components/GrassGrid.tsx
import { grassData } from '../data/grassData';
import GrassCell from './GrassCell';

export default function GrassGrid() {
  const weeks = 53;
  const days = 7;

  const grid: number[][] = Array.from({ length: weeks }, (_, col) =>
    Array.from({ length: days }, (_, row) => {
      const index = col * days + row;
      return index < grassData.length ? grassData[index].level : 0;
    })
  );

  return (
    <div className="flex gap-[2px] overflow-x-auto p-4 bg-zinc-900 rounded-lg">
      {grid.map((week, i) => (
        <div key={i} className="flex flex-col gap-[2px]">
          {week.map((level, j) => (
            <GrassCell key={`${i}-${j}`} level={level} />
          ))}
        </div>
      ))}
    </div>
  );
}

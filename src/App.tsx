import GrassGrid from './components/GrassGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🌿 命のリポジトリ</h1>
      <GrassGrid />
    </div>
  );
}

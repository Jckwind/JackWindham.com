import { GetServerSidePropsContext } from 'next';
import '../app/globals.css';
import Star, { StarProps } from '../component/star'

export default function Home({ stars }: { stars: StarProps[] }) {

  return (
    <main className="relative min-h-screen p-24 bg-[#1a3139]">
    {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </main>
  )
  
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const starCount = 500;
  const gridSize = Math.sqrt(starCount);
  const cellSize = 100 / gridSize;
  const stars: StarProps[] = [];
  const margin = 0.05 * cellSize;  // 5% margin within each cell

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const x = i * cellSize + margin + Math.random() * (cellSize - 0.5 * margin);
      const y = j * cellSize + margin + Math.random() * (cellSize - 0.5 * margin);
      const size = (Math.random() * 0.5) + 0.3;
      const duration = (Math.random() * 1) + 2;

      stars.push({ x, y, size, duration });
    }
  }

  return { props: { stars } };
}



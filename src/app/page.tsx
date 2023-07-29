import Image from 'next/image'
import Header from '@/components/Header';
import MoviesList from '@/components/MoviesList';

export default function Home() {
  return (
    <div>
      <Header />
      <MoviesList />
    </div>
  )
}

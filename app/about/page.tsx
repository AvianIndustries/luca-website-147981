import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <Header />
      <main className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          About Luca
        </h1>
        <p className='mt-5 text-lg text-gray-500'>
          Luca is a energetic dog with a playful personality. His favorite activities include chasing his tail, playing fetch, and going for long walks in the park.
        </p>
      </main>
      <Footer />
    </div>
  )
}
import { Counter } from '@/app/home/components/counter'
import viteLogo from '/vite.svg'

export function HomePage() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} alt='Vite logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter />
    </>
  )
}

import viteLogo from '/vite.svg'
import { Counter } from '@/app/components/sections/home-page/counter'

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

import { Button } from '@/app/shared/components/ui/button'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Button className='mb-8' onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
  )
}

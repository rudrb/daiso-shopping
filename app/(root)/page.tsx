import { Button } from '@/components/ui/button'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>

      <button className="bg-red-500 px-4 py-2 rounded-md">버튼</button>
      <br />
      <Button>버튼~</Button>
      <br />
      <Button variant={'destructive'}>Button-destruct</Button>
      <Button variant={'destructive'} size={'lg'}>
        Button-destruct0-lg
        <Button variant={'secondary'} size={'sm'}>
          Button-destruct0-sm
        </Button>
      </Button>
    </div>
  )
}

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      Ai Integral Landing
      <Link href="/sign-up">
        <Button>Sign Up</Button>
      </Link>
    </div>
  </main>
  )
}

export default LandingPage
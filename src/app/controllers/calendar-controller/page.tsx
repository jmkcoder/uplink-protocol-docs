'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CalendarControllerRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/controllers/calendar-controller/overview')
  }, [router])
  
  // This page will just redirect to the overview page
  return null
}

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DatePickerRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/logic/date-picker/overview')
  }, [router])
  
  // This page will just redirect to the overview page
  return null
}

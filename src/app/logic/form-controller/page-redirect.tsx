'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FormControllerRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/logic/form-controller/overview')
  }, [router])
  
  // This page will just redirect to the overview page
  return null
}

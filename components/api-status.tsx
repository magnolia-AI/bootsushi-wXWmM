'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, Clock } from 'lucide-react'

export default function ApiStatus() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'demo' | 'error'>('checking')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('/api/chat', {
          method: 'GET',
        })
        
        if (response.ok) {
          const data = await response.json()
          if (data.status === 'ok') {
            setStatus('connected')
            setMessage('API is ready')
          }
        } else {
          setStatus('error')
          setMessage('API connection failed')
        }
      } catch (error) {
        setStatus('error')
        setMessage('Unable to reach API')
      }
    }

    checkApiStatus()
  }, [])

  const getStatusIcon = () => {
    switch (status) {
      case 'checking':
        return <Clock className="w-3 h-3" />
      case 'connected':
        return <CheckCircle className="w-3 h-3" />
      case 'demo':
        return <CheckCircle className="w-3 h-3" />
      case 'error':
        return <XCircle className="w-3 h-3" />
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'checking':
        return 'secondary'
      case 'connected':
        return 'default'
      case 'demo':
        return 'secondary'
      case 'error':
        return 'destructive'
    }
  }

  return (
    <Badge variant={getStatusColor()} className="flex items-center gap-1 text-xs">
      {getStatusIcon()}
      {status === 'checking' ? 'Checking...' : message}
    </Badge>
  )
}

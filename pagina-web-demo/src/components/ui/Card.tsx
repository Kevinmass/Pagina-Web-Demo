'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  variant?: 'default' | 'feature' | 'service'
}

export function Card({
  children,
  className = '',
  hoverable = true,
  variant = 'default',
}: CardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-lg border border-gray-100 p-6'
  
  const variants = {
    default: '',
    feature: 'hover:shadow-xl hover:border-primary-100',
    service: 'hover:shadow-2xl hover:scale-105',
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (hoverable) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className={classes}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={classes}>{children}</div>
}

export function CardHeader({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardTitle({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h3 className={`text-xl font-bold text-gray-900 ${className}`}>
      {children}
    </h3>
  )
}

export function CardDescription({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={`text-gray-600 ${className}`}>
      {children}
    </p>
  )
}

export function CardContent({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`space-y-4 ${className}`}>{children}</div>
}
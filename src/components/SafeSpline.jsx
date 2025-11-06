import React, { lazy, Suspense, useEffect, useState } from 'react'

// Lazy load Spline so the app won't crash if the package fails to initialize
const Spline = lazy(() => import('@splinetool/react-spline'))

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null
    }
    return this.props.children
  }
}

export default function SafeSpline({ scene, className = '', style }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <SplineErrorBoundary fallback={null}>
      <Suspense fallback={null}>
        <Spline scene={scene} style={{ width: '100%', height: '100%', ...(style || {}) }} className={className} />
      </Suspense>
    </SplineErrorBoundary>
  )
}

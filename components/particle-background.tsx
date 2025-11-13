"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ParticleBackgroundProps {
  className?: string
}

export default function ParticleBackground({ className = '' }: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      200
    )
    camera.position.set(0, 0, 10)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Parameters matching the reference
    const nbParticles = Math.pow(2, 13)
    const timeScale = 1.0
    const particleLifetime = 0.5
    const particleSize = 1.0
    const nbToSpawn = 5
    const turbFrequency = 0.5
    const turbAmplitude = 0.5
    const turbFriction = 0.01
    const colorVariance = 2.0

    // Particle data
    const particlePositions: THREE.Vector3[] = []
    const particleVelocities: THREE.Vector3[] = []
    const particleLifetimes: number[] = []
    const particleColors: THREE.Color[] = []
    const particleSprites: THREE.Sprite[] = []

    // Create sprite texture (circle)
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')!
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)')
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 64, 64)

    const spriteTexture = new THREE.CanvasTexture(canvas)

    // Initialize particles
    for (let i = 0; i < nbParticles; i++) {
      particlePositions.push(new THREE.Vector3(10000, 10000, 10000))
      particleVelocities.push(new THREE.Vector3())
      particleLifetimes.push(-1)

      // Blue color palette with variance
      const hue = 0.55 + Math.random() * 0.15
      const color = new THREE.Color().setHSL(hue, 1.0, 0.65)
      particleColors.push(color)

      // Create sprite
      const spriteMaterial = new THREE.SpriteMaterial({
        map: spriteTexture,
        color: color,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 1.0
      })
      const sprite = new THREE.Sprite(spriteMaterial)
      sprite.scale.set(particleSize * 0.1, particleSize * 0.1, 1)
      sprite.visible = false
      scene.add(sprite)
      particleSprites.push(sprite)
    }

    // Lines between particles
    const maxConnections = 500
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 1.0
    })
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(maxConnections * 6)
    const lineColors = new Float32Array(maxConnections * 6)
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))
    lineGeometry.setDrawRange(0, 0)
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    // Spawn variables
    let spawnIndex = 0
    const spawnPosition = new THREE.Vector3()
    const previousSpawnPosition = new THREE.Vector3()
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const raycastPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(pointer, camera)
      const target = new THREE.Vector3()
      raycaster.ray.intersectPlane(raycastPlane, target)

      previousSpawnPosition.copy(spawnPosition)
      spawnPosition.lerp(target, 0.1)
    }

    window.addEventListener('pointermove', handleMouseMove)

    // Fractal noise approximation
    const noise3D = (x: number, y: number, z: number): THREE.Vector3 => {
      const nx = Math.sin(x * 2.5 + y * 1.3) * Math.cos(y * 3.1 + z * 2.7)
      const ny = Math.sin(y * 3.1 + z * 2.7) * Math.cos(z * 1.8 + x * 2.2)
      const nz = Math.sin(z * 1.8 + x * 2.2) * Math.cos(x * 2.5 + y * 1.3)
      return new THREE.Vector3(nx, ny, nz)
    }

    // Animation
    let lastTime = 0
    let colorOffset = 0
    const animate = (time: number) => {
      const deltaTime = Math.min((time - lastTime) / 1000, 0.1) * 0.1 * timeScale
      lastTime = time

      // Spawn new particles
      for (let i = 0; i < nbToSpawn; i++) {
        const idx = (spawnIndex + i) % nbParticles
        const t = i / Math.max(nbToSpawn - 1, 1)

        const spawnPos = new THREE.Vector3().lerpVectors(previousSpawnPosition, spawnPosition, t)

        // Random spherical direction
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        const rDir = new THREE.Vector3(
          Math.sin(theta) * Math.cos(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(theta)
        )

        particlePositions[idx].copy(spawnPos).add(rDir.multiplyScalar(0.01))
        particleVelocities[idx].copy(rDir.multiplyScalar(5.0))
        particleLifetimes[idx] = 1.0
      }
      spawnIndex = (spawnIndex + nbToSpawn) % nbParticles

      // Update particles
      for (let i = 0; i < nbParticles; i++) {
        if (particleLifetimes[i] > 0) {
          const pos = particlePositions[i]
          const vel = particleVelocities[i]
          const life = particleLifetimes[i]

          // Apply turbulence
          const turbulence = noise3D(
            pos.x * turbFrequency,
            pos.y * turbFrequency,
            pos.z * turbFrequency
          ).multiplyScalar(turbAmplitude * (life + 0.01))

          vel.add(turbulence)
          vel.multiplyScalar(1 - turbFriction)
          pos.add(vel.clone().multiplyScalar(deltaTime))

          // Update lifetime
          particleLifetimes[i] -= deltaTime / particleLifetime

          // Update sprite
          const sprite = particleSprites[i]
          sprite.position.copy(pos)
          sprite.visible = true

          // Pulsing effect
          const modLife = Math.pow(1 - life, 8)
          const pulse = Math.pow(Math.sin(Math.random() * Math.PI * 2 + time * 0.0005) * 0.5 + 0.5, 0.25) * 10 + 1
          ;(sprite.material as THREE.SpriteMaterial).opacity = life * modLife * pulse * 0.8
        } else {
          particleSprites[i].visible = false
        }
      }

      // Update connections between particles
      let lineIndex = 0
      const maxDistance = 1.5

      for (let i = 0; i < nbParticles && lineIndex < maxConnections; i++) {
        if (particleLifetimes[i] <= 0) continue

        // Find 2 closest particles
        let closest1 = -1
        let dist1 = Infinity
        let closest2 = -1
        let dist2 = Infinity

        for (let j = 0; j < nbParticles; j++) {
          if (i === j || particleLifetimes[j] <= 0) continue

          const dist = particlePositions[i].distanceToSquared(particlePositions[j])
          if (dist > 0 && dist < maxDistance * maxDistance) {
            if (dist < dist1) {
              dist2 = dist1
              closest2 = closest1
              dist1 = dist
              closest1 = j
            } else if (dist < dist2) {
              dist2 = dist
              closest2 = j
            }
          }
        }

        // Draw lines to closest particles
        const drawLine = (closestIdx: number, dist: number) => {
          if (closestIdx >= 0 && lineIndex < maxConnections) {
            const pos1 = particlePositions[i]
            const pos2 = particlePositions[closestIdx]

            linePositions[lineIndex * 6] = pos1.x
            linePositions[lineIndex * 6 + 1] = pos1.y
            linePositions[lineIndex * 6 + 2] = pos1.z
            linePositions[lineIndex * 6 + 3] = pos2.x
            linePositions[lineIndex * 6 + 4] = pos2.y
            linePositions[lineIndex * 6 + 5] = pos2.z

            const opacity = Math.min(particleLifetimes[i], particleLifetimes[closestIdx]) *
                           (1 - Math.sqrt(dist) / maxDistance)
            const color = particleColors[i]

            lineColors[lineIndex * 6] = color.r * opacity
            lineColors[lineIndex * 6 + 1] = color.g * opacity
            lineColors[lineIndex * 6 + 2] = color.b * opacity
            lineColors[lineIndex * 6 + 3] = color.r * opacity
            lineColors[lineIndex * 6 + 4] = color.g * opacity
            lineColors[lineIndex * 6 + 5] = color.b * opacity

            lineIndex++
          }
        }

        drawLine(closest1, dist1)
        drawLine(closest2, dist2)
      }

      // Update line geometry
      lineGeometry.attributes.position.needsUpdate = true
      lineGeometry.attributes.color.needsUpdate = true
      lineGeometry.setDrawRange(0, lineIndex * 2)

      // Rotate colors
      colorOffset += deltaTime * 1.0

      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animationIdRef.current = requestAnimationFrame(animate)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handleMouseMove)

      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current)
      }

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }

      particleSprites.forEach(sprite => {
        scene.remove(sprite)
        sprite.material.dispose()
      })
      spriteTexture.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  )
}

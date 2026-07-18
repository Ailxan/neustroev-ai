"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type Props = { src: string; alt: string; sizes: string; priority?: boolean; className?: string }

export default function ParallaxImage({ src, alt, sizes, priority, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"])

  return (
    <div ref={ref} className={`image-window ${className ?? ""}`}>
      <motion.div className="image-motion" style={{ y }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="documentary-image" />
      </motion.div>
    </div>
  )
}

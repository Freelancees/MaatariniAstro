'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { useRouter } from 'next/navigation'

interface Highlight {
  title: string
  category: string
  description: string
  image: string
  button: string
  route: string
}

export default function HighlightsRow() {
  const router = useRouter()

  // ============================================
  // REFS
  // ============================================

  const sliderRef = useRef<HTMLDivElement | null>(null)

  // Use number specifically for browser window.setInterval
  const autoScrollRef = useRef<number | null>(null)

  const isDragging = useRef<boolean>(false)
  const startX = useRef<number>(0)
  const startScrollLeft = useRef<number>(0)

  // ============================================
  // STATE
  // ============================================

  const [activeIndex, setActiveIndex] =
    useState<number>(0)

  const [isPaused, setIsPaused] =
    useState<boolean>(false)

  // ============================================
  // HIGHLIGHTS
  // ============================================

  const highlights: Highlight[] = [
    {
      title: 'Soil Testing',
      category: 'Agriculture',
      description:
        'Advanced soil testing to understand fertility, quality and land potential.',
      image: '/image/soiltest.jpg',
      button: 'Get Consultation',
      route: '/contact',
    },

    {
      title: 'Training Center',
      category: 'Professional Training',
      description:
        'Practical training programs designed to develop skills, knowledge and expertise.',
      image: '/image/astrotraining.jpg',
      button: 'Explore Training',
      route: '/training',
    },

    {
      title: 'Digital Borewell Water Detector',
      category: 'Water Detection',
      description:
        'Digital scanning equipment used to identify potential underground water points.',
      image: '/image/digital-borewell.jpg',
      button: 'Learn More',
      route: '/contact',
    },

    {
      title: 'Digital Aura Scanner',
      category: 'Aura Analysis',
      description:
        'Handheld equipment used for human aura and energy-field analysis.',
      image: '/image/digital-aura-scanner.jpg',
      button: 'Learn More',
      route: '/contact',
    },

    {
      title: 'L-Rod (Dowsing Rod)',
      category: 'Dowsing Tool',
      description:
        'L-shaped rods used in dowsing practices for locating and identifying points of interest.',
      image: '/image/l-rod.jpg',
      button: 'Learn More',
      route: '/contact',
    },

    {
      title: 'Dowser (Pendulum)',
      category: 'Dowsing & Reading',
      description:
        'Pendulum-based tool used for dowsing, readings and point identification.',
      image: '/image/dowser-pendulum.jpg',
      button: 'Learn More',
      route: '/contact',
    },

    {
      title: 'Lecher Antenna',
      category: 'Energy Field Analysis',
      description:
        'Specialized equipment used in radiesthesia-based frequency and field analysis.',
      image: '/image/lecher-antenna.jpg',
      button: 'Learn More',
      route: '/contact',
    },
  ]

  // ============================================
  // SCROLL TO SPECIFIC CARD
  // ============================================

  const scrollToIndex = (index: number): void => {
    const container = sliderRef.current

    if (!container) return

    // Explicitly tell TypeScript these are HTMLElements
    const cards =
      container.querySelectorAll<HTMLElement>(
        '[data-highlight-card]'
      )

    const card = cards[index]

    if (!card) return

    const targetPosition =
      card.offsetLeft -
      container.clientWidth / 2 +
      card.clientWidth / 2

    container.scrollTo({
      left: targetPosition,
      behavior: 'smooth',
    })

    setActiveIndex(index)

    // Pause after manually selecting a card
    setIsPaused(true)

    window.setTimeout(() => {
      setIsPaused(false)
    }, 2000)
  }

  // ============================================
  // NEXT SLIDE
  // ============================================

  const nextSlide = (): void => {
    const next =
      (activeIndex + 1) % highlights.length

    scrollToIndex(next)
  }

  // ============================================
  // PREVIOUS SLIDE
  // ============================================

  const previousSlide = (): void => {
    const previous =
      (activeIndex - 1 + highlights.length) %
      highlights.length

    scrollToIndex(previous)
  }

  // ============================================
  // AUTO MARQUEE
  // ============================================

  useEffect(() => {
    if (isPaused) {
      return
    }

    const container = sliderRef.current

    if (!container) {
      return
    }

    autoScrollRef.current = window.setInterval(() => {
      /*
       * Check if we reached the end
       */
      const reachedEnd =
        container.scrollLeft +
          container.clientWidth >=
        container.scrollWidth - 5

      if (reachedEnd) {
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        })

        setActiveIndex(0)

        return
      }

      /*
       * Move the slider slowly
       */
      container.scrollBy({
        left: 1,
        behavior: 'auto',
      })
    }, 25)

    /*
     * Cleanup
     */
    return () => {
      if (autoScrollRef.current !== null) {
        window.clearInterval(autoScrollRef.current)

        autoScrollRef.current = null
      }
    }
  }, [isPaused])

  // ============================================
  // UPDATE ACTIVE DOT
  // ============================================

  const handleScroll = (): void => {
    const container = sliderRef.current

    if (!container) return

    const cards =
      container.querySelectorAll<HTMLElement>(
        '[data-highlight-card]'
      )

    if (cards.length === 0) return

    const containerCenter =
      container.scrollLeft +
      container.clientWidth / 2

    let closestIndex = 0
    let closestDistance = Infinity

    cards.forEach(
      (card: HTMLElement, index: number) => {
        const cardCenter =
          card.offsetLeft +
          card.clientWidth / 2

        const distance = Math.abs(
          containerCenter - cardCenter
        )

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      }
    )

    setActiveIndex(closestIndex)
  }

  // ============================================
  // POINTER DOWN
  // ============================================

  const handlePointerDown = (
    e: ReactPointerEvent<HTMLDivElement>
  ): void => {
    const container = sliderRef.current

    if (!container) return

    isDragging.current = true

    startX.current = e.clientX

    startScrollLeft.current =
      container.scrollLeft

    // Stop auto scrolling while dragging
    setIsPaused(true)

    container.setPointerCapture(e.pointerId)

    container.style.cursor = 'grabbing'
  }

  // ============================================
  // POINTER MOVE
  // ============================================

  const handlePointerMove = (
    e: ReactPointerEvent<HTMLDivElement>
  ): void => {
    const container = sliderRef.current

    if (
      !isDragging.current ||
      !container
    ) {
      return
    }

    e.preventDefault()

    const currentX = e.clientX

    const walk =
      (currentX - startX.current) * 1.2

    container.scrollLeft =
      startScrollLeft.current - walk
  }

  // ============================================
  // POINTER UP
  // ============================================

  const handlePointerUp = (
    e: ReactPointerEvent<HTMLDivElement>
  ): void => {
    const container = sliderRef.current

    if (!container) return

    isDragging.current = false

    if (container.hasPointerCapture(e.pointerId)) {
      container.releasePointerCapture(e.pointerId)
    }

    container.style.cursor = 'grab'

    // Wait a little before resuming
    window.setTimeout(() => {
      setIsPaused(false)
    }, 1500)
  }

  // ============================================
  // RENDER
  // ============================================

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-14">

      {/* =====================================
          BACKGROUND BLOBS
      ===================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            -top-32
            -left-32
            w-[350px]
            h-[350px]
            rounded-full
            bg-blue-400/10
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -right-32
            w-[350px]
            h-[350px]
            rounded-full
            bg-sky-400/10
            blur-[100px]
          "
        />

      </div>

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="relative z-10 px-5 mb-7">

        <div className="max-w-7xl mx-auto flex items-end justify-between gap-5">

          <div>

            <div className="flex items-center gap-2 mb-2">

              <span className="w-8 h-[2px] bg-blue-600" />

              <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest">
                Our Expertise
              </span>

            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our{' '}
              <span className="text-blue-600">
                Highlights
              </span>
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Explore our services, tools and training programs.
            </p>

          </div>

          {/* DESKTOP ARROWS */}

          <div className="hidden sm:flex items-center gap-2">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous"
              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                text-gray-700
                hover:bg-blue-600
                hover:text-white
                hover:border-blue-600
                transition
                shadow-sm
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next"
              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                text-gray-700
                hover:bg-blue-600
                hover:text-white
                hover:border-blue-600
                transition
                shadow-sm
              "
            >
              →
            </button>

          </div>

        </div>

      </div>

      {/* =====================================
          SLIDER
      ===================================== */}

      <div className="relative z-10">

        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging.current) {
              setIsPaused(false)
            }
          }}
          className="
            flex
            gap-4
            overflow-x-auto
            px-5
            md:px-[max(40px,calc((100vw-1280px)/2))]
            pb-3
            select-none
            cursor-grab
          "
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            touchAction: 'pan-y',
          }}
        >

          {highlights.map(
            (
              item: Highlight,
              index: number
            ) => (

              <motion.div
                key={item.title}
                data-highlight-card
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  flex
                  flex-shrink-0
                  w-[310px]
                  sm:w-[350px]
                  md:w-[390px]
                  h-[175px]
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  border
                  border-gray-200
                  shadow-md
                  hover:shadow-xl
                  transition-shadow
                  duration-300
                "
              >

                {/* IMAGE */}

                <div className="relative w-[40%] h-full flex-shrink-0">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    draggable={false}
                    sizes="160px"
                    className="
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-black/10
                      to-black/40
                    "
                  />

                  {/* NUMBER */}

                  <div
                    className="
                      absolute
                      top-3
                      left-3
                      w-7
                      h-7
                      rounded-full
                      bg-white/90
                      text-blue-600
                      text-[10px]
                      font-bold
                      flex
                      items-center
                      justify-center
                      shadow
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                </div>

                {/* CONTENT */}

                <div className="flex-1 p-4 flex flex-col justify-between min-w-0">

                  <div>

                    <p className="text-[9px] text-blue-600 font-bold uppercase tracking-wider mb-1">
                      {item.category}
                    </p>

                    <h3
                      className="
                        text-sm
                        md:text-base
                        font-bold
                        text-gray-800
                        leading-tight
                        line-clamp-2
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-[11px]
                        md:text-xs
                        text-gray-500
                        leading-relaxed
                        mt-1.5
                        line-clamp-3
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      router.push(item.route)
                    }}
                    className="
                      w-fit
                      mt-2
                      text-[11px]
                      font-semibold
                      text-blue-600
                      hover:text-blue-800
                      flex
                      items-center
                      gap-1
                      transition
                    "
                  >
                    {item.button}

                    <span>
                      →
                    </span>

                  </button>

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

      {/* =====================================
          CONTROLS
      ===================================== */}

      <div className="relative z-10 mt-3 flex flex-col items-center gap-3">

        {/* DOTS */}

        <div className="flex items-center gap-1.5">

          {highlights.map(
            (
              item: Highlight,
              index: number
            ) => (

              <button
                key={item.title}
                type="button"
                onClick={() =>
                  scrollToIndex(index)
                }
                aria-label={`Go to ${item.title}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    activeIndex === index
                      ? 'w-7 bg-blue-600'
                      : 'w-1.5 bg-gray-300 hover:bg-blue-400'
                  }
                `}
              />

            )
          )}

        </div>

        {/* STATUS */}

        <div className="flex items-center gap-2 text-[10px] text-gray-400">

          <span
            className={`
              w-1.5
              h-1.5
              rounded-full

              ${
                isPaused
                  ? 'bg-orange-400'
                  : 'bg-green-500'
              }
            `}
          />

          {isPaused
            ? 'Paused — drag or choose an item'
            : 'Auto scrolling — hover or drag to pause'}

        </div>

      </div>

      {/* =====================================
          HIDE SCROLLBAR
      ===================================== */}

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </section>
  )
}
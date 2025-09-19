import React, { useState, useEffect, useRef } from 'react'
import { Plus } from 'lucide-react'

const StackingCards = () => {
  const [currentActiveCard, setCurrentActiveCard] = useState(-1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)

  const tips = [
    {
      shortDesc: 'Getting Started with Web Development',
      longDesc:
        'Web development is an exciting field that combines creativity with technical skills. Start by learning HTML for structure, CSS for styling, and JavaScript for interactivity. Practice building small projects and gradually increase complexity as you gain confidence. The key is consistent practice and building real projects that solve actual problems.',
    },
    {
      shortDesc: 'Best Practices for Clean Code',
      longDesc:
        "Writing clean, maintainable code is crucial for long-term project success. Use meaningful variable names, keep functions small and focused, comment your code appropriately, and follow consistent formatting. Regular code reviews and refactoring help maintain code quality over time. Remember: code is read more often than it's written, so prioritize readability.",
    },
    {
      shortDesc: 'Understanding Responsive Design',
      longDesc:
        'Responsive design ensures your website looks great on all devices. Use flexible grids, fluid images, and CSS media queries to create layouts that adapt to different screen sizes. Mobile-first design approach often yields the best results for modern web applications. Test your designs on multiple devices and screen sizes to ensure consistency.',
    },
    {
      shortDesc: 'Version Control with Git',
      longDesc:
        'Git is essential for tracking code changes and collaborating with others. Learn basic commands like commit, push, pull, and branch. Understanding branching strategies and merge conflicts will help you work effectively in team environments. Regular commits with clear messages make project history easy to understand and navigate.',
    },
    {
      shortDesc: 'Debugging Techniques',
      longDesc:
        'Effective debugging saves time and frustration. Use browser developer tools, console.log statements, and breakpoints to identify issues. Understanding error messages and stack traces helps pinpoint problems quickly. Systematic debugging approaches lead to faster problem resolution. Remember to test edge cases and handle errors gracefully in production code.',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Update progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Find active card
      const cards = document.querySelectorAll('.card-wrapper')
      let newActiveCard = -1

      cards.forEach((wrapper, idx) => {
        const stickyContainer = wrapper.querySelector('.sticky-container')
        if (stickyContainer) {
          const rect = stickyContainer.getBoundingClientRect()
          const wrapperRect = wrapper.getBoundingClientRect()

          // Card becomes active when it reaches sticky position and is visible
          if (rect.top <= 20 && wrapperRect.bottom > 20) {
            newActiveCard = idx
          }
        }
      })

      setCurrentActiveCard(newActiveCard)

      // Hide scroll indicator after scrolling
      const indicator = document.querySelector('.scroll-indicator')
      if (indicator) {
        indicator.style.opacity = window.scrollY > 100 ? '0' : '1'
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleCardClick = (idx) => {
    if (currentActiveCard === idx) {
      // Toggle expansion by forcing re-render with same card
      const cards = document.querySelectorAll('.tip-card')
      cards[idx]?.classList.toggle('expanded')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700">
      <style>{`
        .sticky-container {
          position: sticky;
          top: 20px;
          transition: z-index 0.3s;
        }

        /* Z-index for stacking order - later cards on top */
        .card-wrapper:nth-child(1) .sticky-container { z-index: 5; }
        .card-wrapper:nth-child(2) .sticky-container { z-index: 4; }
        .card-wrapper:nth-child(3) .sticky-container { z-index: 3; }
        .card-wrapper:nth-child(4) .sticky-container { z-index: 2; }
        .card-wrapper:nth-child(5) .sticky-container { z-index: 1; }

        /* Active card comes to front */
        .card-wrapper.is-active .sticky-container { z-index: 10 !important; }

        .tip-card {
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          transform-origin: center top;
        }

        .tip-card.stacked {
          transform: scale(0.95);
          opacity: 0.9;
        }

        .tip-card.active {
          transform: scale(1);
          opacity: 1;
        }

        .tip-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #8b5cf6, #7c3aed);
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .tip-card.active::before {
          transform: scaleX(1);
        }

        .plus-icon {
          transition: transform 0.5s ease;
        }

        .tip-card.expanded .plus-icon {
          transform: rotate(45deg);
        }

        .tip-description {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s ease, opacity 0.4s ease;
          opacity: 0;
        }

        .tip-card.expanded .tip-description {
          max-height: 500px;
          opacity: 1;
        }

        .scroll-indicator {
          animation: bounce 2s infinite;
          transition: opacity 0.3s;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 1s ease;
        }

        .fade-in-up-delay {
          animation: fadeInUp 1s ease 0.2s both;
        }
      `}</style>

      {/* Header */}
      <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 fade-in-up">Tips & Best Practices</h1>
        <p className="text-lg md:text-xl opacity-90 fade-in-up-delay">
          Scroll down to explore our curated collection of tips
        </p>
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative py-12 pb-24" ref={containerRef}>
        <div className="relative w-full">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className={`card-wrapper relative mb-5 ${idx === tips.length - 1 ? 'min-h-[80vh]' : 'min-h-[20vh]'} ${currentActiveCard === idx ? 'is-active' : ''}`}
            >
              <div className="sticky-container w-full flex justify-center">
                <div
                  className={`tip-card w-[90vw] max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden relative
                    ${currentActiveCard === idx ? 'active expanded' : ''}
                    ${currentActiveCard > idx ? 'stacked' : ''}
                  `}
                  id={`tip-card-${idx}`}
                >
                  <div className="absolute top-5 right-8 text-6xl font-bold text-purple-500/10">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="p-10 relative">
                    <div
                      className="flex items-center gap-4 mb-5 relative z-10 cursor-pointer"
                      onClick={() => handleCardClick(idx)}
                    >
                      <Plus className="plus-icon w-5 h-5 text-purple-500" />
                      <h2 className="text-2xl font-bold text-gray-800">{tip.shortDesc}</h2>
                    </div>

                    <div className="tip-description">
                      <p className="text-gray-600 leading-relaxed mt-4">{tip.longDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Section */}
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-pink-500 to-red-500 flex items-center justify-center text-white text-center p-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">You've Completed All Tips!</h2>
          <p className="text-lg md:text-xl opacity-90">
            Continue scrolling to explore more content...
          </p>
        </div>
      </div>
    </div>
  )
}

export default StackingCards

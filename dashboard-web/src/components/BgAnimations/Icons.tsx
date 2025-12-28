
import React from 'react'

const Svg = ({
  children,
  size = 25,   // ⬅ increased size
}: {
  children: React.ReactNode
  size?: number
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
)


export const ReactIcon = () => (
  <Svg>
    <circle cx="32" cy="32" r="6" fill="#61dafb" />
    <ellipse cx="32" cy="32" rx="22" ry="10" stroke="#61dafb" strokeWidth="4" />
    <ellipse cx="32" cy="32" rx="22" ry="10" transform="rotate(60 32 32)" stroke="#61dafb" strokeWidth="4" />
    <ellipse cx="32" cy="32" rx="22" ry="10" transform="rotate(120 32 32)" stroke="#61dafb" strokeWidth="4" />
  </Svg>
)

export const HtmlIcon = () => (
  <Svg>
    <path d="M12 8h40l-4 44-16 6-16-6-4-44z" fill="#e34f26" />
    <path d="M32 14v36l12-4 3-32H32z" fill="#ef652a" />
    <rect x="20" y="22" width="24" height="6" fill="white" opacity="0.9" />
  </Svg>
)

export const GitIcon = () => (
  <Svg>
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#f05032" />
    <circle cx="24" cy="24" r="5" fill="#fff" />
    <circle cx="40" cy="40" r="5" fill="#fff" />
    <path d="M24 24v12h12" stroke="#fff" strokeWidth="4" />
  </Svg>
)

export const MongoIcon = () => (
  <Svg>
    <path d="M32 8c4 10-2 18 0 48" stroke="#13aa52" strokeWidth="6" strokeLinecap="round" />
    <path d="M28 12c-10 8-10 24 4 36" stroke="#116149" strokeWidth="6" strokeLinecap="round" />
  </Svg>
)

export const PostmanIcon = () => (
  <Svg>
    <circle cx="32" cy="32" r="24" fill="#ff6c37" />
    <rect x="20" y="22" width="24" height="6" rx="3" fill="#fff" />
    <rect x="20" y="34" width="18" height="6" rx="3" fill="#fff" />
  </Svg>
)

export const NodeIcon = () => (
  <Svg>
    <polygon points="32,8 52,20 52,44 32,56 12,44 12,20" fill="#8cc84b" />
    <text x="32" y="37" textAnchor="middle" fontSize="18" fill="#1b1f23" fontFamily="monospace">N</text>
  </Svg>
)

export const ExpressIcon = () => (
  <Svg>
    <rect x="12" y="16" width="40" height="32" rx="6" fill="#222" />
    <text x="32" y="38" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="monospace">Ex</text>
  </Svg>
)

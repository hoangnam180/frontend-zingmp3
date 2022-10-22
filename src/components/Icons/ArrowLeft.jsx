import React from "react"

const ArrowLeft = ({ setColor, setWidth, setHeight,className, ...orthers }) => {
  return (
    <svg
    className={className}
    width={setWidth}
    height={setHeight}
    {...orthers}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    >
    < path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
            fill={ setColor }
          />
    </svg>
  )
}

export default ArrowLeft

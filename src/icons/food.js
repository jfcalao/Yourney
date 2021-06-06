import React from 'react'

function Food(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14.209 22c.09 1.185-.293 1.99-2.468 2-4.083.019-4.441 0-8.524 0-2.207 0-2.521-.793-2.435-2h13.427zM21 24h-5.717c.423-.691.541-1.665.38-2.365l.004-.004a3.142 3.142 0 00.107-4.142c.513-1.464-.89-5.941-6.443-6.844L9 8h14l-2 16zm-7.291-3c-.006 0-12.482-.002-12.506-.006C.529 20.926 0 20.283 0 19.5c0-.782.529-1.426 1.203-1.494.024-.004 1.318-.008 1.318-.008 2.088.018 2.227 1.639 3.256 1.633C6.805 19.625 7.075 18.024 9 18h4.709c.715.019 1.291.684 1.291 1.5 0 .817-.576 1.482-1.291 1.5zm.647-4H.622c0-2.493 2.636-5 6.878-5s6.856 2.507 6.856 5zM24 7H8V5.618c.87 0 2-.697 2-1.618h6.185l2.072-4 1.359.634L17.84 4h4.199c0 .922 1.092 1.618 1.961 1.618V7z"></path>
    </svg>
  )
}

export default Food

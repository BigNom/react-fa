import React from 'react'

import {Link} from '../router'

export const Footer = () => {
  return (
    <div className="Footer">
      <Link to='/todos'>All</Link>
      <Link to='/todos/active'>Active</Link>
      <Link to='/todos/complete'>Complete</Link>
    </div>
  )
}
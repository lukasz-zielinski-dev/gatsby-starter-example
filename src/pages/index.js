import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <div>Hello world!</div>
      <button>
        <Link to="/foo">Go to foo page page</Link>
      </button>
    </>
  )
}

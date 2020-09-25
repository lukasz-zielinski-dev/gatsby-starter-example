import React from "react"
import { Link } from "gatsby"

export default function Foo() {
  return (
    <>
      <div>Foo page!</div>
      <button>
        <Link to="/">Go to index</Link>
      </button>
    </>
  )
}

import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="my story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
            I am a software engineer . I am eager to work on projects that facilitate human connection + harness creative thinking—and ultimately make our world a brighter place.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

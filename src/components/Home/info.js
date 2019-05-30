import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Heya!" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
            I am a software engineer with an untouchable work ethic. Let's build a project that will address the world's top economic objectives, starting with ourselves.
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

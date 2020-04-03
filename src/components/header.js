import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
      }}
    >
      <div style={{ backgroundColor: "#273B80" }}>
        <div style={{ padding: "10pt 10pt", maxWidth: 200 }}>
          <Image src="jpmcglone-logo.png" style={{ padding: 0 }} />
        </div>
      </div>
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

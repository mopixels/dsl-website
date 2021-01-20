import React from "react"

// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import MusicPreview from "../components/MusicPreview"
// import { Context } from "../../provider"

function music() {
  return (
    <Layout>
      <SEO title="Music" />
      {/* {window.location.pathname === "/" ? <MusicPreview /> : "full"} */}
      {/* <iframe
        style={{ border: 0, width: "350px", height: "350px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2563069624/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
        seamless
      >
        <a href="http://dontsleeplisten.bandcamp.com/album/deep-drive">
          Deep Drive by Don&#39;t Sleep, Listen
        </a>
      </iframe> */}
    </Layout>
  )
}

export default music

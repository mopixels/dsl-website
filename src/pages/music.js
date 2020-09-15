import React, { useContext } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Context } from "../../provider"

function music() {
  // const [status, setStatus] = useContext(Context)
  return (
    <Layout>
      <SEO title="Music" />
      {/* {status === "music" && ( */}
      {/* {status} */}
      <iframe
        style={{ border: 0, width: "350px", height: "350px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2563069624/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
        seamless
      >
        <a href="http://dontsleeplisten.bandcamp.com/album/deep-drive">
          Deep Drive by Don&#39;t Sleep, Listen
        </a>
      </iframe>
      {/* )} */}
    </Layout>
  )
}

export default music

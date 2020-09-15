import React from "react"
import Slider from "react-slick"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    // lazyLoad: true,
    // swipeToSlide: true,
    // className: "center",
    // swipeToSlide: true,
    // variableWidth: true,
  }
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>News</h1>
      <ul style={{ fontSize: "2rem" }}>
        <Slider {...settings}>
          <li>TExt1</li>
          <li>TExt2</li>
          <li>TExt3</li>
          <li>TExt4</li>
        </Slider>
      </ul>
    </Layout>
  )
}

export default SecondPage

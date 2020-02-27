import React from "react"
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image';

const FoodAndDrink = ({ data }) => {

  const menu = data.pageContent.frontmatter.menuItems.map((menuItem, i) => {
    let description;
    if (menuItem.description) {
      description = (<span className="menu-item__desc">{menuItem.description}</span>)
    }
    return (
      <div className="menu-item" key={i}>
        <h3 className="menu-item__title">{menuItem.title}</h3>
        {description}
      </div>
    )
  })

  return (
    <section id="food-and-drink">
      <h1>{data.pageContent.frontmatter.title}</h1>
      <p>{data.pageContent.frontmatter.openingText}</p>

      <div className="divider">
        <Image
          fluid={data.healthyBreakfast.childImageSharp.fluid}
          className="divider__image"
          alt="Fruit salad with natural yogurt"/>
      </div>

      <p>{data.pageContent.frontmatter.dividerText1}</p>

      <div className="divider">
        <Image
          fluid={data.friedBreakfast.childImageSharp.fluid}
          className="divider__image"
          alt="Full Irish breakfast"/>
      </div>

      <p>{data.pageContent.frontmatter.dividerText2}</p>

      <div className="divider">
        <Image
          fluid={data.prossecoAndOlives.childImageSharp.fluid}
          className="divider__image"
          alt="Prosecco and olives with cheese and cold meats"/>
      </div>

      <h2 className="heading--centered">Breakfast menu</h2>

      {menu}

      <button type="button" className="button">Book a room</button>

    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        pageContent: markdownRemark(frontmatter: {templateKey: {eq: "foodanddrink"}}) {
          frontmatter {
            title
            openingText
            dividerText1
            dividerText2
            menuItems {
              title
              description
            }
          }
        }
        healthyBreakfast: file(relativePath: {eq: "healthy-breakfast-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        friedBreakfast: file(relativePath: {eq: "fried-breakfast-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        prossecoAndOlives: file(relativePath: {eq: "prosseco-and-olives-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <FoodAndDrink data={data} {...props} />}
  ></StaticQuery>
)
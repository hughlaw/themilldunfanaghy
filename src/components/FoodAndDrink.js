import React from "react"
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image';
import BookButton from './BookButton'

const FoodAndDrink = ({ data }) => {

  const menu = data.pageContent.frontmatter.foodAndDrink.menuItems.map((menuItem, i) => {
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
      <h1>{data.pageContent.frontmatter.foodAndDrink.title}</h1>
      <p>{data.pageContent.frontmatter.foodAndDrink.openingText}</p>

      <div className="divider">
        <Image
          fluid={data.healthyBreakfast.childImageSharp.fluid}
          className="divider__image"
          alt="Fruit salad with natural yogurt"/>
      </div>

      <p>{data.pageContent.frontmatter.foodAndDrink.dividerText1}</p>

      <div className="divider">
        <Image
          fluid={data.friedBreakfast.childImageSharp.fluid}
          className="divider__image"
          alt="Full Irish breakfast"/>
      </div>

      <p>{data.pageContent.frontmatter.foodAndDrink.dividerText2}</p>

      <div className="divider">
        <Image
          fluid={data.prossecoAndOlives.childImageSharp.fluid}
          className="divider__image"
          alt="Prosecco and olives with cheese and cold meats"/>
      </div>

      <h2 className="heading--centered">Breakfast menu</h2>

      {menu}

      <BookButton />

    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        pageContent: markdownRemark(frontmatter: {pageIdentifier: {eq: "homepage"}}) {
          frontmatter {
            foodAndDrink {
              dividerText1
              dividerText2
              menuItems {
                description
                title
              }
              openingText
              title
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
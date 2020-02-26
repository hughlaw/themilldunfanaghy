import React from "react"
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image';

const FoodAndDrink = ({ data }) => (
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

    <div className="menu-item">
      <h3 className="menu-item__title">Full Irish Breakfast</h3>
      <span className="menu-item__desc">Burrowe’s Pork Sausages & Home Cured Bacon, Free Range Fried Egg, Potato Bread, Tomato, Loughrane’s Black/White Pudding & Mushrooms.</span>
    </div>

    <div className="menu-item">
      <h3 className="menu-item__title">Organic Porridge</h3>
      <span className="menu-item__desc">Served with Whiskey & Cream or Honey & Mixed Seeds.</span>
    </div>

    <div className="menu-item">
      <h3 className="menu-item__title">Vegetarian Breakfast</h3>
      <span className="menu-item__desc">Tomato, Beans, Fried Organic Egg, Mushrooms & Potato Bread.</span>
    </div>

    <div className="menu-item">
      <h3 className="menu-item__title">Pancakes</h3>
      <span className="menu-item__desc">Served with with crispy Bacon & Maple Syrup.</span>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Pancakes</h3>
      <span className="menu-item__desc">Served with Banana, Hazelnut Praline & Maple Syrup.</span>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Poached Egg with Fish</h3>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Omelette</h3>
      <span className="menu-item__desc">Served with Bacon, Mushroom or Tomato.</span>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Eggs</h3>
      <span className="menu-item__desc">Poached, Scrambled or Boiled</span>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Scrambled Eggs with Smoked Salmon</h3>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Eggs Benedict</h3>
      <span className="menu-item__desc">Poached Eggs, Ham, Hollandaise Sauce on Toasted Muffin.</span>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Eggs Royale</h3>
      <span className="menu-item__desc">Poaches Eggs, Smoked Salmon, Hollandaise on Toasted Muffin.</span>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Caprese Eggs Benedict</h3>
      <span className="menu-item__desc">Poached Eggs, Mozzarella, Sliced Tomato & Hollandaise Sauce.</span>
    </div>
    <div className="menu-item">
      <h3 className="menu-item__title">Fish Omelette</h3>
    </div>

    <button type="button" className="button">Book a room</button>

  </section>
)

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
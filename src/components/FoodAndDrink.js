import React from "react"
import {StaticQuery, graphql} from 'gatsby'

const FoodAndDrink = ({ data }) => (
  <section id="food-and-drink">
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.openingText}</p>

    <div className="divider">
      <img src="./media/images/healthy-breakfast-small.jpg"
        sizes="100vw"
        srcSet="./media/images/healthy-breakfast-small@2x.jpg 750w,
                ./media/images/healthy-breakfast-small.jpg 375w,
                ./media/images/healthy-breakfast-medium@2x.jpg 1668w,
                ./media/images/healthy-breakfast-medium.jpg 834w,
                ./media/images/healthy-breakfast-large@2x.jpg 2880w,
                ./media/images/healthy-breakfast-large.jpg 1440w"
        alt="Fruit salad with natural yogurt"
        className="divider__image" />
    </div>

    <p>{data.markdownRemark.frontmatter.dividerText1}</p>

    <div className="divider">
      <img src="./media/images/fried-breakfast-small.jpg"
        sizes="100vw"
        srcSet="./media/images/fried-breakfast-small@2x.jpg 750w,
                ./media/images/fried-breakfast-small.jpg 375w,
                ./media/images/fried-breakfast-medium@2x.jpg 1668w,
                ./media/images/fried-breakfast-medium.jpg 834w,
                ./media/images/fried-breakfast-large@2x.jpg 2880w,
                ./media/images/fried-breakfast-large.jpg 1440w"
        alt="Full Irish breakfast"
        className="divider__image" />
    </div>

    <p>{data.markdownRemark.frontmatter.dividerText2}</p>

    <div className="divider">
      <img src="./media/images/prosseco-and-olives-small.jpg"
        sizes="100vw"
        srcSet="./media/images/prosseco-and-olives-small@2x.jpg 750w,
                ./media/images/prosseco-and-olives-small.jpg 375w,
                ./media/images/prosseco-and-olives-medium@2x.jpg 1668w,
                ./media/images/prosseco-and-olives-medium.jpg 834w,
                ./media/images/prosseco-and-olives-large@2x.jpg 2880w,
                ./media/images/prosseco-and-olives-large.jpg 1440w"
        alt="Prosecco and olives with cheese and cold meats"
        className="divider__image" />
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
        markdownRemark(frontmatter: {templateKey: {eq: "foodanddrink"}}) {
          frontmatter {
            title
            openingText
            dividerText1
            dividerText2
          }
        }
      }
    `}
    render={data => <FoodAndDrink data={data} {...props} />}
  ></StaticQuery>
)
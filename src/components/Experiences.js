import React from 'react';
import {StaticQuery, graphql} from 'gatsby'

const Experiences = ({ data }) => (
  <section id="experiences">
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.openingText}</p>

    <div className="divider">
      <img src="./media/images/boats-on-the-new-lake-small.jpg"
        sizes="100vw"
        srcSet="./media/images/boats-on-the-new-lake-small@2x.jpg 750w,
                ./media/images/boats-on-the-new-lake-small.jpg 375w,
                ./media/images/boats-on-the-new-lake-medium@2x.jpg 1668w,
                ./media/images/boats-on-the-new-lake-medium.jpg 834w,
                ./media/images/boats-on-the-new-lake-large@2x.jpg 2880w,
                ./media/images/boats-on-the-new-lake-large.jpg 1440w"
        alt="Rowing boats moored at the side of the new lake on a warm summer's evening"
        className="divider__image" />
    </div>

    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>

  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: {templateKey: {eq: "experiences"}}) {
          frontmatter {
            title
            openingText
          }
          html
        }
      }
    `}
    render={data => <Experiences data={data} {...props} />}
  ></StaticQuery>
)
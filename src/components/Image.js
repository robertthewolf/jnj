import React from 'react';
import Img from 'gatsby-image';

class Image extends React.Component {

  constructor(props) {
      super(props);
      this.addClass= this.addClass.bind(this);
      this.removeClass= this.removeClass.bind(this);
      this.state = {
          active: false,
      };

  }

  addClass() {
  };

  removeClass() {
  };

  render() {
    return(
      <img
        src={this.props.path}
        alt={this.props.title}
        className={this.state.active ? 'hovered': null}
        onMouseEnter={this.addClass}
        onMouseLeave={this.removeClass}
      />
    );
  }
}

const GetImageSizes = graphql`
query GetImageSizes($path: Int!) {
  file(relativePath: { regex: $path }) {
    childImageSharp {
      sizes {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
      }
    }
  }
}
`;

export default Image;

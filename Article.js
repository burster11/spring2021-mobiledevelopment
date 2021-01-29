// Imports Component
const Component = require("./Component.js");

// Article is a child object of Component
class Article extends Component {

  constructor (props) {
    super(props);
    // Send what it gets to its parent object
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        <Title>${this.props.title}</Title>
        <Author>${this.props.author}</Author>
        <Text>${this.props.text}</Text>
      </Article>
    `);
    
    
  }

}

module.exports = Article;
//exports the Article

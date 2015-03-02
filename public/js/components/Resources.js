var StackOverflow = require('./StackOverflow');
var Examples = require('./ExampleBox');

var Resources = React.createClass({
  render: function(){
    return (
      <div className="resources">
        <h1>{this.props.method}</h1>
        <StackOverflow />
        <ExampleBox />
        <QA />
      </div>
    );
  }
});

module.exports = Resources;

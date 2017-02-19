import React from 'react';

var isAdmin = true;

// var adminComponent = (Component) => {
//   return class Admin extends React.Component {
//     render () {
//
//       if (isAdmin) {
//         return (
//           <div className="callout secondary">
//             <p className="alert label">Admin restricted info</p>
//             <Component {...this.props}/>
//
//
//           </div>
//         )
//       }
//       else {
//         return null
//       }
//
//     }
//   };
// };

var adminComponent = (Component) => {
  return class Admin extends Component {

    componentDidUpdate () {
      console.log('Admin Component did update...');
      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }

    render () {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Admin restricted info</p>
            {super.render()}

          </div>
        )
      }
      else {
        return null
      }

    }
  };
};

class ClassComponent2 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      count: props.count
    };
    this.onClick = this.onClick.bind(this);
  }


  componentDidUpdate () {
    console.log('ClassComponent2 did update ...');
  }

  onClick () {
    console.log(`Count ${this.state.count}`);
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <h3>Class Component 2 Using React.Component</h3>
        <p>Count: {this.state.count} </p>
        <button className='button' onClick={this.onClick}>Two</button>
      </div>
    );
  }

}

//Manipulate object props after creation

ClassComponent2.defaultProps = {
  count: 50
};

ClassComponent2.propTypes = {
    count: React.PropTypes.number.isRequired
};



export default adminComponent(ClassComponent2);

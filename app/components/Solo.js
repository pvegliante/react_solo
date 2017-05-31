import React from 'react';


class Family extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="main">
        <div className="list">
          <div className="first">
            {this.props.firstName}
          </div>
          <div className="last">
            {this.props.lastName}
          </div>
          <div className="gender">
            {this.props.gender}
          </div>
        </div>
      </div>
    );
  }
}

class FamilyList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentsDidMount() {
    this.setState({ family:family })
  }

  render() {
    const familyComponents = (
      <Family
        firstName= 'pete'
        lastName= 'veg'
        gender= 'male'
      />
    );
    return (
      <div className="stuff">
        {familyComponents}
      </div>
    );
  }
}


export default FamilyList;

import React from "react";

const styles = {
  box: {
    marginTop: '10px'
  }
};

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      image: '',
      loaded: false}
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: this.props.url
    }).then((response)=> {

    }).catch((error)=> {
      this.setState({loaded: false})
    });
  }
  render() {
    const { name } = this.props;
    return (
      <div className="card" style={styles.box}>
        <div className="card-body">
          <div className="h6 text-left"> {name} </div>
        </div>
      </div>
    );
  }
}

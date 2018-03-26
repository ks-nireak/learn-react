import React from "react";
import { connect } from "react-redux";
import { Menu, Sidebar, Segment } from "semantic-ui-react";
import { Route, Link } from 'react-router-dom';

import DataDashboard from '../components/DataDashboard';
import Type from '../components/Type';
import Generation from '../components/Generation';

class DataList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'dashboard'
    }
  }

  handleClickTab = (e, {name} ) => {
    this.setState({ activeTab: name });
  }

  render() {
    const { activeTab } = this.state;
    return(
      <div style={styles.fullHeight}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical inverted>
            <Menu.Item as={Link} to="/data/dashboard" name='dashboard' active={activeTab === 'dashboard'} onClick={this.handleClickTab}> Dashboard </Menu.Item>
            <Menu.Item as={Link} to="/data/type" name='type' active={activeTab === 'type'} onClick={this.handleClickTab}> Type </Menu.Item>
            <Menu.Item as={Link} to="/data/generation" name='generation' active={activeTab === 'generation'} onClick={this.handleClickTab}> Generation </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Route path="/data/dashboard" component={DataDashboard} {...this.props}/>
              <Route path="/data/generation" component={Generation} {...this.props}/>
              <Route path="/data/type" component={Type} {...this.props}/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

const styles = {
  fullHeight: {
    height: '100%'
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(DataList);

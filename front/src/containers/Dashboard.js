import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connect as WSConnect, disconnect as WSDisconnect, send as WSSend } from '@giantmachines/redux-websocket';

import FeatureList from '../components/FeatureList/FeatureList'
import Header from '../components/Header/Header'


class Dashboard extends Component {

    componentDidMount (){
      this.props.connect()
    }

    render () {
        return (
            <div>
                <Header name={this.props.name}
                        click={this.props.shuffle}
                        connect={this.props.connect}
                        disconnect={this.props.disconnect}
                        connection={this.props.connection} />
                <FeatureList features={this.props.features} />
            </div>
        )
    }

} 

const mapStateToProps = state => {
    return {
        features: state.features,
        name: state.name,
        connection: state.connection
    };
};

const mapDispatchToProps = dispatch => {
    return {
      connect: () => {
        dispatch(WSConnect('ws://localhost:3001'))
      },
      disconnect: () => {
        dispatch(WSDisconnect())
      },
      shuffle: () => {
        dispatch(WSSend({ restart: true }));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
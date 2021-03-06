import { Component } from 'preact';
import { connect } from 'unistore/preact';
// import ScenePage from './ScenePage';
import ComingSoon from './ComingSoon';
import actions from '../../actions/scene';
// import { RequestStatus } from '../../utils/consts';

@connect('scenes,currentUrl,scenesGetStatus', actions)
class Scene extends Component {
  componentWillMount() {
    this.props.getScenes();
  }

  render(props, {}) {
    // const loading = props.scenesGetStatus === RequestStatus.Getting;
    // return <ScenePage {...props} loading={loading} />;
    return <ComingSoon />;
  }
}

export default Scene;

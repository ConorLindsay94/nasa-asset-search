import { connect } from 'react-redux';
import ViewAsset from './ViewAsset';

const mapStateToProps = (state) => ({
  activeItem: state.item.activeItem,
});

export default connect(mapStateToProps, null)(ViewAsset);

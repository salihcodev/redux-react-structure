import React from 'react';

// UTILITIES:
import { connect } from 'react-redux';
import { displayHeaderHeading } from '../../redux/header-reducer/Header.actions';

const Header = ({ headerContent, dispatch }) => {
  React.useEffect(() => {
    dispatch(displayHeaderHeading());
  }, []);

  return (
    <React.Fragment>
      <h1 className="app-heading">{headerContent}</h1>
    </React.Fragment>
  );
};

// { header: { headerHeading } } === state.header.headerHeading
// it's just handy way to extract props.
const mapStateToProps = ({ header: { headerHeading } }) => ({
  headerContent: headerHeading,
});
export default connect(mapStateToProps)(Header);

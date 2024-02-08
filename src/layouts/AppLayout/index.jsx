import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';
import { selectProfile } from '@containers/Client/selectors';

import AppNavbar from '@components/AppNavbar';
import Drawer from '@components/Drawer';

import classes from './style.module.scss';

const AppLayout = ({ children, locale, theme, intl: { formatMessage }, profile }) => (
  <div>
    <Drawer />
    <AppNavbar title={formatMessage({ id: 'app_title_header' })} locale={locale} theme={theme} profile={profile} />
    <div className={classes.layout}>{children}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
  profile: selectProfile,
});

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
  intl: PropTypes.object,
  profile: PropTypes.object
};

export default injectIntl(connect(mapStateToProps)(AppLayout));

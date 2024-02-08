import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';

import AppNavbar from '@components/AppNavbar';
import Drawer from '@components/Drawer';

import classes from './style.module.scss';

const AppLayout = ({ children, locale, theme, intl: { formatMessage } }) => (
  <div>
    <Drawer />
    <AppNavbar title={formatMessage({ id: 'app_title_header' })} locale={locale} theme={theme} />
    <div className={classes.layout}>{children}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
});

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
  intl: PropTypes.object,
};

export default injectIntl(connect(mapStateToProps)(AppLayout));

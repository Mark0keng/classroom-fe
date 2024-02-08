/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import classes from './style.module.scss';
import RoleInput from './components/RoleInput/RoleInput';
import { selectData, selectStep } from './selector';
import SignUp from './components/SignUp/SignUp';

const Register = ({ step, data }) => {
  const renderComponent = (currentStep) => {
    switch (step) {
      case 1:
        return <RoleInput currentStep={currentStep} data={data} />;
      case 2:
        return <SignUp currentStep={currentStep} data={data} />;
      default:
        return <RoleInput currentStep={currentStep} data={data} />;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.title}>
          <FormattedMessage id="app_signup" />
        </div>

        <div>{renderComponent(step)}</div>
      </div>
    </div>
  );
};

Register.propTypes = {
  step: PropTypes.number,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  step: selectStep,
  data: selectData,
});

export default connect(mapStateToProps)(Register);

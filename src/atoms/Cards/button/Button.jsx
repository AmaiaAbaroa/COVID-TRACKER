import PropTypes from 'prop-types';


function Button({ button_content }) {
  return (
    <div className='divButton'>
      <button className="btn">
        {button_content}
      </button>
    </div>
  );
}

Button.propTypes = {
  button_content: PropTypes.string.isRequired,
};

export default Button;
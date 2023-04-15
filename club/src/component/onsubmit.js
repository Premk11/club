const UserDetailsForm = ({ addUserDetails }) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
    addUserDetails(formState);
  };

  // form rendering and onChange event handlers

  return (
    <form
      onSubmit={handleSubmit}
      onReset={() => setFormState(initialFormState)}
    >
      // form fields and buttons
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserDetails: (userDetails) => dispatch(addUserDetails(userDetails)),
  };
};

export default connect(null, mapDispatchToProps)(UserDetailsForm);

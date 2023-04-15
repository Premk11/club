const UserDetailsForm = () => {
  const [formState, setFormState] = useState(initialFormState);

  const handleReset = () => {
    setFormState(initialFormState);
    document.getElementById("user-details-form").reset();
  };

  // form rendering and onChange event handlers

  return (
    <form id="user-details-form">
      // form fields and buttons
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default UserDetailsForm;

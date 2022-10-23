const FormField = (props) => {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor="">
        {props.labelText}
      </label>
      <input
        className="form-input"
        type="text"
        placeholder={props.placeHolderText}
      />
    </div>
  );
};

export default FormField;

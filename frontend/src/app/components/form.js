import '../globals.css'
function Form() {
  return (
    <div className="form-container">
        <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
            <br />
        <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Form;
import React from 'react'

function input() {
    const FormSignUp = () => {
        let[values, setValues] = useState({
            sizes: '',
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setValues({
                ...values,
                [name]: value
            });
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
        };

    return (
        <div className="form-content">
            <form className="form" onSubmit={handleSubmit} id="form">
                <h1>
                    Enter your table size
                </h1>
                <div className="form-inputs-contents">
                    <div className="form-inputs">
                        <input 
                            id='Table_size'
                            type="text" 
                            name='Table_size' 
                            maxLength="100"
                            className="form-input"
                            placeholder="Enter your table size"
                            value={values.sizes}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br/>
                    <div className="form-btn">
                        <button className="form-submit-btn" type="button" form="form" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div> 
                </div>
            </form>
        </div>
    );
}
export default input;
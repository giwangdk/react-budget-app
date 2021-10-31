import React from 'react'

const AddExpenseForm = () => {
    return (
        <form action="">
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" required="required" id='name' />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" className="form-control" required="required" id='cost' />
                </div>
                <div className="col-sm">
                    <button className="btn btn-primary" type="submit">save</button>
                </div>
            </div>
        </form>
     );
}
 
export default AddExpenseForm;
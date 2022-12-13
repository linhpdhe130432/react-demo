import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'></input>
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' min='2019-01-01' max='2023-01-01'></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Click</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder='Item' value={enteredTitle} name="title" id="title" onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor="amount">Amount</label>
          <input type="number" min='0.01' step='0.01' placeholder='$' value={enteredAmount} name="amount" id="amount" onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" min="2022-01-01" max="2023-12-31" placeholder='dd.mm.yyyy' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;


import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div class="page-header">
          <div class="content-container">
            <h1 class="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div class="content-container">
          <ExpenseForm
          onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
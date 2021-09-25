import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const filterYearSelectHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYearSelected={filterYearSelectHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList expenses = {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

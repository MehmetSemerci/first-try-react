import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState("2021");

  const filterYearSelectHandler = (year) => {
    setFilterYear(year);
    console.log(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
            selected ={filterYear}
          onFilterYearSelected={filterYearSelectHandler}
        ></ExpensesFilter>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

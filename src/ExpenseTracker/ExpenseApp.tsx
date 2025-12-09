import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

function ExpenseApp() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        { id: 1, description: "Milk", amount: 5, category: "Groceries" },
        {
            id: 2,
            description: "Electricity",
            amount: 100,
            category: "Utilities",
        },
        { id: 3, description: "Movies", amount: 15, category: "Entertainment" },
        { id: 4, description: "Bread", amount: 3, category: "Groceries" },
    ]);

    const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

    return (
        <div>
            <div className="mb-5">
                <ExpenseForm
                    onSubmit={(expense) =>
                        setExpenses([
                            ...expenses,
                            { ...expense, id: expenses.length + 1 },
                        ])
                    }
                />
            </div>
            <div className="mb-3">
                <ExpenseFilter
                    categories={categories}
                    onSelectCategory={(category) =>
                        setSelectedCategory(category)
                    }
                />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) =>
                    setExpenses(expenses.filter((e) => e.id !== id))
                }
            />
        </div>
    );
}

export default ExpenseApp;

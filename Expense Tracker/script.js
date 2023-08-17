const addExpenseBtn = document.querySelector(".add-expense");
const expenseList = document.querySelector(".expense-list");
const totalExpense = document.querySelector(".total-expense h3");

let expenses = [];
let total = 0;


function renderExpenses(){

    let html = "";
    expenses.forEach(expense=>{

       html +=`<div class="expense-item">
       
       <div class="expense-item-desc">
       ${expense.description}
            
       </div>
       <div class="expense-item-amount">
       $${expense.amount}
            
       </div>
       <button class="delete-expense">&times;</button>
       </div>`;



    })
       
       expenseList.innerHTML = html;
       totalExpense.innerText = `Total Expenses: $${total}`;

}

function addExpense(){
const desc = prompt("Enter Expense Description:");
const amount = parseFloat(prompt("Enter Expense Amount:"));

if(desc && amount){

   const expenseItem = {
    description:desc,
    amount:amount
   };

   expenses.push(expenseItem);
   total+=amount;
    renderExpenses();
}

}

addExpenseBtn.addEventListener("click",addExpense);

function deleteExpense(index){

  total -= expenses[index].amount;
  expenses.splice(index,1);
 renderExpenses();
}

expenseList.addEventListener("click",function(event){

  if(event.target.classList.contains("delete-expense")){
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    deleteExpense(index);
  }

});
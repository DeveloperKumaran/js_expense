

let amount = document.getElementById('expenseAmount');

let amountValue = amount.value;



let description = document.getElementById('description');





let catogery = document.getElementById('catogery');



class ExpenseDetails{
     amount = ''
     description = ''
     catogery = ''


     constructor(amount,description,catogery){
        this.amount = amount
        this.description = description
        this.catogery = catogery
     }

}

let ulist = document.createElement('ul');

ulist.classList = 'expense-list';




document.getElementById('Form').addEventListener('submit',(e)=>{


    e.preventDefault();
     

    let amountValue = amount.value;

    let descriptionValue = description.value;

    let catogeryValue = catogery.value;


    let expense = new ExpenseDetails(amountValue,descriptionValue,catogeryValue);
    
    let li = document.createElement('li');
     
   let descriptionStr = JSON.stringify(this.description)
    

    li.innerHTML = `${amountValue} -  ${descriptionValue} - ${catogeryValue}  `;

    ulist.appendChild(li)

   let deleteBtn = document.createElement('button');

   deleteBtn.innerText = "Delete Expense";


   let editBtn = document.createElement('button');
   editBtn.innerText = "Edit Expenses";


   editBtn.addEventListener('click',(e)=>{
    
    document.getElementById('expenseAmount').value = amountValue;
    document.getElementById('description').value = descriptionValue;
    document.getElementById('catogery').value = catogeryValue;

    li.remove();
  })

   deleteBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    li.remove();
   })


     li.appendChild(deleteBtn);
     li.appendChild(editBtn);


    document.body.appendChild(ulist);


    
    console.log('clicked');

})




console.log('hi');


/*<label for="catogery">choose catogery:</label>
             <input type="text" name="catogery" id="catogery">

             */
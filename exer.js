function run() {

    // Getting the input values at the actual site
   let fName = document.getElementById("input_fname").value;
   let lName = document.getElementById("input_lname").value;

    // Getting the HTML table
   let table = document.getElementById("myTable"); 

    // Add new rows to the table        
   let row = table.insertRow();    
   
   // Add new cells to the table
   let cell1 = row.insertCell();                        
   let cell2 = row.insertCell();

   // Add values to the cells
   cell1.innerHTML = fName;                                                 
   cell2.innerHTML = lName;
}


{/* <h3>Increment Decrement</h3>
<input type="number" id="numberbox">
<button><i class="fas fa-plus-circle" id="plus"></i></button>
<button><i class="fas fa-minus-circle" id="minus"></i></button>
<button><i class="fas fa-sync-alt" id="reset"></i></button> */}

let numberBox = document.querySelector("#numberbox");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let my_number = 0;

plus.addEventListener("click", function(){
    let existing_number = numberBox.value;
    my_number = existing_number;
    my_number++;
    numberBox.value = my_number;
})
minus.addEventListener("click", function(){
    let existing_number = numberBox.value;
    my_number = existing_number;
    my_number--;
    numberBox.value = my_number;
})
reset.addEventListener("click", function(){

    my_number= 0;
    numberBox.value = my_number;
   
})
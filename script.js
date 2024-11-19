const buttons = document.querySelectorAll('button');
let scrn = document.querySelector('input');
let string = '';

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        const action = e.target.dataset.action;

        if (e.target.innerText === '='){
            string = eval(string.replace('X', '*')).toString();
            scrn.value = string;
            
        }
        else if (action === 'allClear'){
            string = '';
            scrn.value = string;
        }
        else if (action === 'delete'){
            string = string.slice(0, -1);
            scrn.value = string;
        }
        else if (e.target.innerText === '.') {
            // Prevent adding more than one decimal point in the last number
            const lastNumber = string.split(/[\+\-\*\/]/).pop(); // Get the last number
            if (!lastNumber.includes('.')) {
                // Only append the decimal point if it's not already present
                string += e.target.innerText;
                scrn.value = string;
            }
        }
        else{
        string = string + e.target.innerText;
        scrn.value = string ;
        }
    });
});


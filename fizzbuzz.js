// set up fizzbuzz function
// listen for submit event 
// retrieve and store value from input
// pass value to fizzbuzz function and generate div html for each fizzbuzz increment


function fizzBuzz(int){
    if(int % 15 === 0) return 'fizzbuzz';
    if(int % 3 === 0) return 'fizz';
    if(int % 5 === 0) return 'buzz';
    return int;
}

function fizzHtml(fizzValue){
    const className = typeof fizzValue === "string" ? fizzValue : '';
    
    return `<div class="fizz-buzz-item ${className}">
    <span>${fizzValue}</span>
  </div>
    `;
}

function main(){
    $('form').submit(event => {
        event.preventDefault();

        let countTo = $('#number-choice').val();
        $('#number-choice').val('');

        const fizzArray = [];
        for(let i = 1; i <= countTo; i++) fizzArray.push(fizzBuzz(i));

        const divArray = fizzArray.map(fizzValue => fizzHtml(fizzValue));
        $('.js-results').html(divArray);
    });
}

$(main);
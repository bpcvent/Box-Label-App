// todo event listener

// Label content updating 
const shippingChange = document.querySelectorAll('.shipping-item');
shippingChange.forEach(function(btn) {
  btn.addEventListener('input', function(event) {
    item = window.event.target;
    subHtml = item.value;

    if (item.name.includes("date")) {
        const dateString = new Date(item.value);
        let displayDate = new Date( dateString.getTime() - dateString.getTimezoneOffset() * -60000 )
        const formattedDate = displayDate.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });

        console.log(formattedDate)

        subHtml = formattedDate;

    } else if (item.name.includes("pallet") || item.name.includes("international")) {
        item.checked ? document.getElementById("pallet-disp").innerHTML = item.name : console.log("Unchecked")
    }

    let shippingLine = document.querySelectorAll(`.${item.name}`);
    shippingLine.forEach(function(line){
        line.innerHTML = subHtml;
    })
  });
});


// Label Sizing

var cssPagedMedia = (function () {
    var style = document.createElement('style');
    document.head.appendChild(style);
    return function (rule) {
        style.innerHTML = rule;
    };
}());

cssPagedMedia.size = function (size, css) {
    
    console.log('clicked')
    let printObject = document.querySelectorAll(".ship-item");
    printObject.forEach(function(printer){

        console.log('label to change');
        printer.className = 'ship-item ' + css + '';
    })
    cssPagedMedia('@page {size: ' + size + '; margin: 0;}');
    
    document.getElementById("active-size").removeAttribute("id");

    let newActive = event.target;
    newActive.setAttribute("id", "active-size")

};




// Update label quantity

let shipItem = document.querySelector('.ship-item');

function addLabel() {
    let copy = shipItem.cloneNode(true);
    document.querySelector('.sample').append(copy);
}

function removeLabel() {
    let shipItems = document.querySelectorAll('.ship-item')
    console.log(shipItems)
    if (shipItems.length > 1) {
        let sample = document.querySelector('.sample');
        sample.removeChild(sample.lastElementChild);
    }
}


// Update flags function

function updateFlags(flag) {


    if (window.event.target.checked ) {
        let add = document.getElementById(flag)
        add.classList.remove('hide')

    } else {
        let add = document.getElementById(flag)
        add.classList.add('hide')
    }
    

}



const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;


const gifts = ["Chocolate bar", "Mini candle", "Christmas ornament", "Hot cocoa mix", "Pair of fuzzy socks", "Playstation 5 Pro", "Pack of stickers", "Lip balm", "Small notebook", "Keychain", "Mini puzzle", "Hand sanitizer", "Pack of tea bags", "Tiny succulent", "Bath bomb", "Scented sachet", "Set of pens", "Pack of holiday cookies", "Bookmark", "Mini flashlight", "Travel-size lotion", "Holiday-themed pin", "Pair of gloves", "Gift card", "Christmas sweater"];

document.addEventListener("DOMContentLoaded", function () {

    for (let i = 0; i < 24; i++) { 
        if (i +1 <= day && month == 12) {
            document.getElementById("list").innerHTML += `<button type="button" class="btn btn-lg btn-success col-2 m-1"  data-bs-toggle="popover" data-bs-title="Your gift: " data-bs-content="${gifts[i]}">${i + 1}</button>`;
        } else {          
            document.getElementById("list").innerHTML += `<button type="button" class="btn btn-lg btn-danger col-2 m-1" disabled>${i + 1}</button>`;
        }
    }
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
    });

});



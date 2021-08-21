function addMoneyInMemory(memory, isIncreasing) {
    const cost = document.getElementById(memory + '-cost');
    if (isIncreasing == true) {
        cost.innerText = '180';

    }
    else {
        cost.innerText = '0';
    }

};


function addMoneyInStorage(storage, isIncreasing) {
    const cost = document.getElementById(storage + '-cost');
    if (isIncreasing == true) {
        cost.innerText = '100';
    }
    else if (isIncreasing == false) {
        cost.innerText = '180';
    }

};
function addMoneyInDelivery(delivery, isIncreasing) {
    const cost = document.getElementById(delivery + '-cost');
    if (isIncreasing == true) {
        cost.innerText = '20';
    }
    else if (isIncreasing == false) {
        cost.innerText = '0';
    }
};
//total price function
function totalPriceAmount() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    console.log(totalPrice);
    let finalPrice = document.getElementById('final-price');
    finalPrice.innerText = totalPrice.innerText;

};

// eight gb memory price add

document.getElementById('eight-gb-memory').addEventListener('click', function () {
    addMoneyInMemory('memory', false);
    totalPriceAmount();



});
// sixteen gb memory price add
document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    addMoneyInMemory('memory', true);
    totalPriceAmount();



});
//256 gb storage
document.getElementById('first-ssd-storage').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');

    storageCost.innerText = '0';
    totalPriceAmount();

});
//512 gb storage
document.getElementById('second-ssd-storage').addEventListener('click', function () {
    addMoneyInStorage('storage', true);
    totalPriceAmount();
});
//1TB storage
document.getElementById('third-ssd-storage').addEventListener('click', function () {
    addMoneyInStorage('storage', false);
    totalPriceAmount();
});

//free-prime-delivery
document.getElementById('free-prime-delivery').addEventListener('click', function () {
    addMoneyInDelivery('delivery', false);
    totalPriceAmount();
});
//Delivery charge $20
document.getElementById('delivery-charge').addEventListener('click', function () {
    addMoneyInDelivery('delivery', true);
    totalPriceAmount();
});
//apply coupon
document.getElementById('apply').addEventListener('click', function () {
    const steveKaku = document.getElementById('steveKaku');
    if (steveKaku.value.toLowerCase() == 'stevekaku'.toLowerCase()) {
        const bestPrice = document.getElementById('best-price').innerText;
        const memoryCost = document.getElementById('memory-cost').innerText;
        const storageCost = document.getElementById('storage-cost').innerText;
        const deliveryCost = document.getElementById('delivery-cost').innerText;
        let totalPrice = document.getElementById('total-price');
        totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
        console.log(totalPrice);
        const coupon = document.getElementById('final-price');
        coupon.innerText = totalPrice.innerText - totalPrice.innerText * 0.2;
    }
    else {
        window.alert('wrong coupon');
    }
    steveKaku.value = '';
});
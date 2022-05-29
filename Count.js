const countEL = document.getElementById('count');

updateVisitCount();

function updateVisitCount(){
    fetch('https://api.countapi.xyz/update/cyberadvent.com/59422b92-b1e7-4352-a847-c73c1caf8b99/?amount=1')
    .then(res => res.json())
    .then(res => {
        countEL.innerHTML = res.value;
    })
}
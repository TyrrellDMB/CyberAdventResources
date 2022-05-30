const countURL = 'https://nni2vx3l2g.execute-api.us-east-1.amazonaws.com/default/updateViewcount'
const countElement = document.getElementById('stat');


updateVisitCount()

function updateVisitCount () {
  fetch('countURL')
    .then(res => res.json())
    .then(res => {
      countElement.innerHTML = res.quantity;
    })
}

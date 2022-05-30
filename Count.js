const countEL = document.getElementById('stat')

updateVisitCount()

function updateVisitCount () {
  fetch('https://nni2vx3l2g.execute-api.us-east-1.amazonaws.com/default/updateViewcount')
    .then(res => res.json())
    .then(res => {
      countEL.innerHTML = res.value
    })
}

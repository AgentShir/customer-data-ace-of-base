let container = document.querySelector('.container')

let htmlString = ""
    htmlString = `<div class=header>
      <h1>Internal Company Directory</h1>
    </div>
    <div class="customerList">`

customers.results.forEach(function(item){
  htmlString +=
  `<div class="customer">
    <img src="${item.picture.large}">
      <h2>${item.name.first} ${item.name.last}</h2>
        <p>${item.email}</p>
        <p>${item.location.street}</p>
        <p>${item.location.city}, ${item.location.state} ${item.location.postcode}</p>
        <p>${item.phone}</p>
        <p>${item.id.value}</p>
  </div>`
})
htmlString += `</div>`

container.innerHTML= htmlString

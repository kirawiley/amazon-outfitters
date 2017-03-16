//Array for items
var items = [
  {name: 'Margot Two-Piece Set', price: '$148.00'},
  {name: 'Bird of Paradise Jacket', price: '$600.00'},
  {name: 'Meshed Up Tee', price: '$50.00'},
  {name: 'High-Rise Cropped Skinny', price: '$128.00'},
  {name: 'First Date Dress', price: '$70.00'},
  {name: 'Mustard Cardi', price: '$88.00'},
  {name: 'Prima Ballerina Top', price: '$58.00'},
  {name: 'Silver Linings Leather Jacket', price: '$400.00'},
  {name: 'Bandit Denim Shorts', price: '$68.00'}
]

//Creating DOM elements
function renderItems(item) {
  var itemContainer = document.createElement('div')
    itemContainer.classList.add('container')
    itemContainer.classList.add('items-container')

  var itemColumn = document.createElement('div')
    itemColumn.classList.add('col-xs-4')

  var itemCard = document.createElement('div')
    itemCard.classList.add('card')

  var itemImage = document.querySelector('img')
  itemImage.classList.add('card-img-top')

  var cardBlock = document.createElement('div')
    cardBlock.classList.add('card-block')

  var itemName = document.createElement('h5')
    itemName.classList.add('card-title')

  var itemPrice = document.createElement('p')
    itemPrice.classList.add('card-text')

  itemPrice.textContent = item.price
  itemName.textContent = item.name

  cardBlock.appendChild(itemImage)
  cardBlock.appendChild(itemName)
  cardBlock.appendChild(itemPrice)
  itemCard.appendChild(cardBlock)
  itemColumn.appendChild(itemCard)
  itemRow.appendChild(itemColumn)
  itemContainer.appendChild(itemRow)

  return itemContainer
}

var itemRow = document.createElement('div')
  itemRow.classList.add('row')

items.forEach(function(item) {
  var itemContainer = renderItems(item)
  document.body.appendChild(itemContainer)
})

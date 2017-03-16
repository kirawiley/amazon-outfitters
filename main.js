//Array for items
var items = [
  {
    name: 'Margot Two-Piece Set',
    price: '$148.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41935917_067_a?$browse-lt$',
    id: 0
  },
  {
    name: 'Bird of Paradise Jacket',
    price: '$600.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40183220_001_a?$browse-lt$',
    id: 1
  },
  {
    name: 'Meshed Up Tee',
    price: '$50.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41550351_001_a?$browse-lt$',
    id: 2
  },
  {
    name: 'High-Rise Cropped Skinny',
    price: '$128.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40504748_092_a?$browse-lt$',
    id: 3
  },
  {
    name: 'First Date Dress',
    price: '$70.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40072043_062_a?$browse-lt$',
    id: 4
  },
  {
    name: 'Mustard Cardi',
    price: '$88.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/39440201_071_a?$browse-lt$',
    id: 5
  },
  {
    name: 'Prima Ballerina Top',
    price: '$58.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/31599962_049_a?$browse-lt$',
    id: 6
  },
  {
    name: 'Silver Linings Leather Jacket',
    price: '$400.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/42146589_001_a?$browse-lt$',
    id: 7
  },
  {
    name: 'Bandit Denim Shorts',
    price: '$68.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41580994_010_a?$browse-lt$',
    id: 8
  }
]


//Creating DOM elements

var imageHeight = 420

function renderItems(item) {
  var itemContainer = document.createElement('div')
    itemContainer.classList.add('container')
    itemContainer.classList.add('items-container')

  var itemCard = document.createElement('div')
    itemCard.classList.add('card')

  var itemColumn = document.createElement('div')
    itemColumn.classList.add('col-xs-4')

  itemImage = document.createElement('img')
    itemImage.classList.add('card-img-top')
    itemImage.setAttribute('src', item.image)
    itemImage.setAttribute('height', imageHeight)

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

//Item details view

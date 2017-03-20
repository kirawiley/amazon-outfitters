//Array for items
var items = [
  {
    name: 'Margot Two-Piece Set',
    price: '$148.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41935917_067_a?$browse-lt$',
    description: 'Easy and effortless, this American made set features a cropped top and flowy tiered skirt.',
    id: 0,
    itemInfo: [
      'Off-the-shoulder crop top',
      'Top has elastic bands around the neck, sleeves, and waist',
      'High waisted skirt with an elastic waistband',
      'Button closures down the front of the skirt',
      'Midi length',
      '100% Rayon'
    ]
  },
  {
    name: 'Bird of Paradise Jacket',
    price: '$600.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40183220_001_a?$browse-lt$',
    description: 'Stunning cropped jacket with embellishments all over. Multi-colored sequins, edgy studs and beautiful beading make this an ultra cool statement piece.',
    id: 1,
    itemInfo: [
      'Small front hook closure',
      'Lined',
      '100% Polyester',
      'Dry Clean'
    ]
  },
  {
    name: 'Meshed Up Tee',
    price: '$50.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41550351_001_a?$browse-lt$',
    description: 'Cool mesh tee featuring bold floral embroidery throughout.',
    id: 2,
    itemInfo: [
      'Unfinished edges',
      'Subtle side vents',
      '100% Cotton',
      'Trim: 82% Lyocell, 18% Linen',
      'Hand Wash Cold'
    ]
  },
  {
    name: '501 Skinny',
    price: '$128.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40504748_092_a?$browse-lt$',
    description: 'The iconic Levi’s 501 has been reimagined with a slimmer skinny leg that has been cropped to graze just above the ankle.',
    id: 3,
    itemInfo: [
      'Fits straight through the hip and thigh',
      'Will retain its shape overtime',
      'Non-stretch',
      'Five-pocket style',
      'Button fly',
      '100% Cotton',
      'Machine Wash Cold'
    ]
  },
  {
    name: 'First Date Dress',
    price: '$70.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40072043_062_a?$browse-lt$',
    description: 'Long sleeve dress with a soft and comfy fabrication and an effortless trapeze shape.',
    id: 4,
    itemInfo: [
      'Subtle V-neckline with ties',
      '12% Rayon, 38% Cotton, 50% Polyester',
      'Machine Wash Cold'
    ]
  },
  {
    name: 'Mustard Cardi',
    price: '$88.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/39440201_071_a?$browse-lt$',
    description: 'Marled chunky cardigan sweater featuring front slip pockets and contrast detailing. ',
    id: 5,
    itemInfo: [
      'Ribbed trim',
      'Wide sleeves',
      '66% Cotton, 12% Polyester, 10% Nylon, 9% Linen, 3% Rayon',
      'Hand Wash Cold'
    ]
  },
  {
    name: 'Prima Ballerina Top',
    price: '$58.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/31599962_049_a?$browse-lt$',
    description: 'Stretchy ribbed cold shoulder top with mock turtleneck.',
    id: 6,
    itemInfo: [
      '92% Nylon, 8% Spandex',
      'Machine Wash Cold'
    ]
  },
  {
    name: 'Silver Linings Leather Jacket',
    price: '$400.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/42146589_001_a?$browse-lt$',
    description: 'Classic moto style leather jacket featuring beautiful rose embroidery and stud details on the back and sleeve cuffs.',
    id: 7,
    itemInfo: [
      'Lined',
      '100% Genuine Leather',
      'Professional Leather Care'
    ]
  },
  {
    name: 'Bandit Denim Shorts',
    price: '$68.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41580994_010_a?$browse-lt$',
    description: 'Western-inspired denim shorts featuring a ruffled waistband and metal concho accents.',
    id: 8,
    itemInfo: [
      'Distressed detailing',
      'Rolled cuffs',
      'Five-pocket style',
      'Button fly',
      '100% Cotton',
      'Machine Wash Cold'
    ]
  }
]


//Creating DOM elements

var imageHeight = 420

var itemContainer = document.querySelector('.container')
var itemRow = document.querySelector('.row')

function createItems(item) {

  var itemCard = document.createElement('div')
    itemCard.classList.add('card')
    itemCard.setAttribute('data-id', item.id)

  var itemColumn = document.createElement('div')
    itemColumn.classList.add('col-xs-4')

  var itemImage = document.createElement('img')
    itemImage.classList.add('card-img-top')
    itemImage.setAttribute('src', item.image)
    itemImage.setAttribute('height', imageHeight)
    itemImage.setAttribute('data-id', item.id)

  var cardBlock = document.createElement('div')
    cardBlock.classList.add('card-block')

  var itemName = document.createElement('h5')
    itemName.classList.add('card-title')

  var itemPrice = document.createElement('p')
    itemPrice.classList.add('card-text')
    itemPrice.setAttribute('id', 'list-price')

  itemPrice.textContent = item.price
  itemName.textContent = item.name

  cardBlock.appendChild(itemImage)
  cardBlock.appendChild(itemName)
  cardBlock.appendChild(itemPrice)
  itemCard.appendChild(cardBlock)
  itemColumn.appendChild(itemCard)

  return itemColumn
}

items.forEach(function(item) {
  var $itemColumn = createItems(item)
  itemRow.appendChild($itemColumn)
})


//Clicking correct item

itemContainer.addEventListener('click', function (event){
  if(event.target.tagName === 'IMG'){
    var itemId = event.target.getAttribute('data-id')
    itemContainer.classList.add('invisible')
    detailContainer.classList.remove('invisible')
    var item = findItem(itemId)
    renderDetails(item)
  }
})

function findItem (itemId) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
      if(itemId === item.id.toString()){
      return item
    }
  }
}

//Details view

var detailContainer = document.getElementById('details')
var detailRow = document.getElementById('details-row')

function createImageDetails (item) {

  var imageColumn = document.createElement('div')
    imageColumn.classList.add('col-6')


  var imageCard = document.createElement('div')
    imageCard.classList.add('card')
    imageCard.classList.add('image')

  var cardHeader = document.createElement('h3')
    cardHeader.classList.add('card-header')
    cardHeader.textContent = item.name

  var imageCardBlock = document.createElement('div')
    imageCardBlock.classList.add('card-block')
    imageCardBlock.setAttribute('id', 'image-block')

  var itemImage = document.createElement('img')
    itemImage.classList.add('card-img-top')
    itemImage.setAttribute('id', 'larger-image')
    itemImage.setAttribute('src', item.image)


  imageCardBlock.appendChild(itemImage)
  imageCard.appendChild(cardHeader)
  imageCard.appendChild(imageCardBlock)
  imageColumn.appendChild(imageCard)

  return imageColumn
}

function createInfoDetails (item) {

  var detailsColumn = document.createElement('div')
    detailsColumn.classList.add('col-6')
    detailsColumn.setAttribute('id', 'details-column')

  var detailsWritten = document.createElement('p')
    detailsWritten.classList.add('card-text')
    detailsWritten.textContent = item.description

  detailsColumn.appendChild(detailsWritten)

  var listDetails = document.createElement('ul')
  item.itemInfo.forEach(function (item){
    var listItem = document.createElement('li')
    listItem.textContent = item.itemInfo
    listDetails.appendChild(listItem)
    detailsColumn.appendChild(listDetails)
  })

  var price = document.createElement('p')
    price.classList.add('card-text')
    price.classList.add('item-price')
    price.textContent = item.price

  var cartButton = document.createElement('a')
    cartButton.classList.add('btn')
    cartButton.classList.add('btn-secondary')
    cartButton.setAttribute('id', 'cart-button')
    cartButton.textContent = 'Add to Cart'

  detailsColumn.appendChild(price)
  detailsColumn.appendChild(cartButton)

  return detailsColumn
}

function renderDetails (item) {
  var $imageColumn = createImageDetails(item)
  var $detailsColumn = createInfoDetails(item)
  detailRow.appendChild($imageColumn)
  detailRow.appendChild($detailsColumn)
}

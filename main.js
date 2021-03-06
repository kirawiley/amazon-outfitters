//Array for items
var items = [
  {
    name: 'Margot Two-Piece Set',
    price: 148.00,
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
    price: 600.00,
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
    price: 50.00,
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
    price: 128.00,
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
    price: 70.00,
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
    price: 88.00,
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
    price: 58.00,
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
    price: 400.00,
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
    price: 68.00,
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

//Global Elements

var listImageHeight = 420
var itemContainer = document.getElementById('list')
var itemRow = document.getElementById('list-row')
var detailContainer = document.getElementById('details')
var detailRow = document.getElementById('details-row')
var cart = []
var quantityCounter = document.getElementById('quantity-counter')
var cartIcon = document.getElementById('cart-icon')
var cartContainer = document.getElementById('cart')
var checkoutContainer = document.getElementById('checkout')

/* createItems - creates list view
  favoriteButton & favoritedItem - creates "favorite" feature
  findItem - loops the items array */

function createItems(item) {
  var itemCard = document.createElement('div')
  itemCard.classList.add('card')
  itemCard.setAttribute('data-id', item.id)

  var itemColumn = document.createElement('div')
  itemColumn.classList.add('col-xs-4')

  var itemImage = document.createElement('img')
  itemImage.classList.add('card-img-top')
  itemImage.setAttribute('id', 'list-image')
  itemImage.setAttribute('src', item.image)
  itemImage.setAttribute('height', listImageHeight)
  itemImage.setAttribute('data-id', item.id)

  var favoriteButton = document.createElement('i')
  favoriteButton.classList.add('fa')
  favoriteButton.classList.add('fa-2x')
  favoriteButton.classList.add('fa-heart-o')
  favoriteButton.classList.add('invisible')
  favoriteButton.setAttribute('id', 'favorite-button')
  favoriteButton.setAttribute('aria-hidden', 'true')

  var favoritedItem = document.createElement('i')
  favoritedItem.classList.add('fa')
  favoritedItem.classList.add('fa-1x')
  favoritedItem.classList.add('fa-heart')
  favoritedItem.classList.add('invisible')
  favoritedItem.setAttribute('id', 'favorited-item')
  favoritedItem.setAttribute('aria-hidden', 'true')

  var cardBlock = document.createElement('div')
  cardBlock.classList.add('card-block')

  cardBlock.addEventListener('mouseover', function (event) {
    if (event.target) {
      favoriteButton.classList.remove('invisible')
    }
  })

  favoriteButton.addEventListener('click', function (event) {
    if (event.target) {
      favoriteButton.classList.add('invisible')
      favoritedItem.classList.remove('invisible')
    }
  })

  cardBlock.addEventListener('mouseout', function (event) {
    if (favoritedItem.classList.contains('invisible')) {
      favoriteButton.classList.add('invisible')
    }
  })

  var itemName = document.createElement('h5')
  itemName.classList.add('card-title')
  itemName.textContent = item.name

  var itemPrice = document.createElement('p')
  itemPrice.classList.add('card-text')
  itemPrice.setAttribute('id', 'list-price')
  itemPrice.textContent = '$' + item.price + '.00'

  cardBlock.appendChild(favoriteButton)
  favoriteButton.appendChild(favoritedItem)
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

function findItem (list, itemId) {
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
      if(itemId === item.id.toString()){
      return item
    }
  }
}

itemContainer.addEventListener('click', function (event){
  if(event.target.tagName === 'IMG'){
    var itemId = event.target.getAttribute('data-id')
    itemContainer.classList.add('invisible')
    detailContainer.classList.remove('invisible')
    var item = findItem(items, itemId)
    renderDetails(item)
  }
})

/*createImageDetails & createInfoDetails - create the 2 columns in detailed view
  renderDetails - creates DOM elements for both columns
  addToCart - called when the "add to cart" button is clicked, adds item to cart array*/

function createImageDetails(item) {
  var imageColumn = document.createElement('div')
  imageColumn.classList.add('col-6')

  var imageCard = document.createElement('div')
  imageCard.classList.add('card')
  imageCard.classList.add('image')
  imageCard.setAttribute('id', 'image-card')

  var cardHeader = document.createElement('h3')
  cardHeader.setAttribute('id', 'card-header')
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

function createInfoDetails(item) {
  var detailsColumn = document.createElement('div')
  detailsColumn.classList.add('col-5')
  detailsColumn.setAttribute('id', 'details-column')

  var detailsWritten = document.createElement('p')
  detailsWritten.classList.add('card-text')
  detailsWritten.textContent = item.description

  detailsColumn.appendChild(detailsWritten)

  var listDetails = document.createElement('ul')
  listDetails.setAttribute('id', 'bullet-points')

  item.itemInfo.forEach(function (descriptor){
    var listItem = document.createElement('li')
    listItem.textContent = descriptor

    listDetails.appendChild(listItem)
    detailsColumn.appendChild(listDetails)
  })

  var price = document.createElement('p')
  price.classList.add('card-text')
  price.classList.add('item-price')
  price.textContent = '$' + item.price + '.00'

  var cartButton = document.createElement('a')
  cartButton.classList.add('btn')
  cartButton.classList.add('btn-secondary')
  cartButton.setAttribute('id', 'cart-button')
  cartButton.textContent = 'Add to Cart'

  var goBack = document.createElement('p')
  goBack.setAttribute('id', 'go-back')
  goBack.textContent = '<< Continue Shopping'

  cartButton.addEventListener('click', function (event) {
    addToCart(item)
  })

  goBack.addEventListener('click', function (event) {
    detailContainer.classList.add('invisible')
    itemContainer.classList.remove('invisible')

  })

  detailsColumn.appendChild(price)
  detailsColumn.appendChild(cartButton)
  detailsColumn.appendChild(goBack)

  return detailsColumn
}

function renderDetails(item) {
  var $imageColumn = createImageDetails(item)
  var $detailsColumn = createInfoDetails(item)
  detailRow.innerHTML = ''
  detailRow.appendChild($imageColumn)
  detailRow.appendChild($detailsColumn)
}

function addToCart(item) {
  var cartItem = findItem(cart, item.id.toString())
  if (cartItem === undefined){
    var cartItems =
      {
        name: item.name,
        image: item.image,
        price: item.price,
        id: item.id,
        quantity: 1
      }
   cart.push(cartItems)
  }
  else {
    cartItem.quantity += 1
  }
  quantityCounter.textContent = 'x' + totalCartQuantity(cart)
}

/* createCartList & renderCart - creates a new row of elements for each item added to cart
  createTotal & renderTotal - creates the bottom row to display the cart's total price
  totalCartQuantity - the total number of items in the user's cart
  getTotalPrice - adds the price of each item in the user's cart multiplied by the quantity */

function createCartList(item) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('row')
  cartRow.setAttribute('id', 'cart-item-row')

  var cartImageColumn = document.createElement('div')
  cartImageColumn.classList.add('col-3')

  var cartImage = document.createElement('img')
  cartImage.setAttribute('id', 'item-added-picture')
  cartImage.setAttribute('src', item.image)

  var cartNameColumn = document.createElement('div')
  cartNameColumn.classList.add('col-7')

  var cartItemName = document.createElement('h3')
  cartItemName.textContent = item.name

  var cartItemQuantity = document.createElement('p')
  cartItemQuantity.textContent = 'x' + item.quantity

  var cartPriceColumn = document.createElement('div')
  cartPriceColumn.classList.add('col-2')

  var cartItemPrice = document.createElement('p')
  cartItemPrice.textContent = '$' + (item.price * item.quantity) + '.00'

  cartImageColumn.appendChild(cartImage)
  cartNameColumn.appendChild(cartItemName)
  cartNameColumn.appendChild(cartItemQuantity)
  cartPriceColumn.appendChild(cartItemPrice)
  cartRow.appendChild(cartImageColumn)
  cartRow.appendChild(cartNameColumn)
  cartRow.appendChild(cartPriceColumn)

  return cartRow
}

function createTotal(item) {
  var totalRow = document.createElement('div')
  totalRow.classList.add('row')
  totalRow.setAttribute('id', 'total-row')

  var totalColumn = document.createElement('div')
  totalColumn.classList.add('col-12')

  var totalPrice = document.createElement('p')
  totalPrice.setAttribute('id', 'total-price')
  totalPrice.textContent = 'Total:' + ' ' + '$' + getTotalPrice(cart) + '.00'

  var checkoutButton = document.createElement('button')
  checkoutButton.classList.add('btn')
  checkoutButton.classList.add('btn-secondary')
  checkoutButton.setAttribute('type', 'button')
  checkoutButton.setAttribute('id', 'checkout-button')
  checkoutButton.textContent = 'Proceed to Checkout'

  totalColumn.appendChild(totalPrice)
  totalColumn.appendChild(checkoutButton)
  totalRow.appendChild(totalColumn)

  checkoutButton.addEventListener('click', function (event) {
    cartContainer.classList.add('invisible')
    checkoutContainer.classList.remove('invisible')
    cartContainer.innerHTML = ''
    checkoutContainer.innerHTML = ''
    createCheckout()
  })

  return totalRow
}

function renderCart() {
  cart.forEach(function (item) {
    var $cartRow = createCartList(item)
    cartContainer.appendChild($cartRow)
  })
}

function renderTotal() {
  var $totalRow = createTotal()
  cartContainer.appendChild($totalRow)
}

function totalCartQuantity(item) {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
      total += item[i].quantity
    }
  return total
}

function getTotalPrice(item) {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += item[i].price * item[i].quantity
  }
  return total
}

cartIcon.addEventListener('click', function (event) {
  itemContainer.classList.add('invisible')
  detailContainer.classList.add('invisible')
  checkoutContainer.classList.add('invisible')
  cartContainer.classList.remove('invisible')
  cartContainer.innerHTML = ''
  renderCart()
  renderTotal()
})

/* createCheckout - creates the checkout page */

function createCheckout(item) {
  var totalPrice = document.createElement('p')
  totalPrice.setAttribute('id', 'checkout-price')
  totalPrice.textContent = 'Total:' + ' ' + '$' + getTotalPrice(cart) + '.00'

  var checkoutForm = document.createElement('form')

  var name = document.createElement('div')
  name.classList.add('form-group')
  name.setAttribute('id', 'name-field')

  var nameLabel = document.createElement('a')
  nameLabel.textContent = 'Name:'

  var nameInput = document.createElement('input')
  nameInput.setAttribute('id', 'name-input')

  var address = document.createElement('div')
  address.classList.add('form-group')

  var addressLabel = document.createElement('a')
  addressLabel.textContent = 'Address:'

  var addressInput = document.createElement('input')
  addressInput.setAttribute('id', 'address-input')

  var location = document.createElement('div')
  location.classList.add('form-group')

  var locationLabel = document.createElement('a')
  locationLabel.textContent = 'City/State:'

  var locationInput = document.createElement('input')
  locationInput.setAttribute('id', 'location-input')

  var payment = document.createElement('div')
  payment.classList.add('form-group')

  var paymentLabel = document.createElement('a')
  paymentLabel.textContent = 'Payment:'

  var paymentInput = document.createElement('input')
  paymentInput.setAttribute('id', 'payment-input')

  var orderButton = document.createElement('button')
  orderButton.setAttribute('id', 'order-button')
  orderButton.setAttribute('type', 'button')
  orderButton.classList.add('btn')
  orderButton.classList.add('btn-secondary')
  orderButton.textContent = 'Place Order'

  checkoutContainer.appendChild(totalPrice)
  name.appendChild(nameLabel)
  name.appendChild(nameInput)
  checkoutContainer.appendChild(name)
  address.appendChild(addressLabel)
  address.appendChild(addressInput)
  checkoutContainer.appendChild(address)
  location.appendChild(locationLabel)
  location.appendChild(locationInput)
  checkoutContainer.appendChild(location)
  payment.appendChild(paymentLabel)
  payment.appendChild(paymentInput)
  checkoutContainer.appendChild(payment)
  checkoutContainer.appendChild(orderButton)

  orderButton.addEventListener('click', function (event) {
    if (nameInput.value === '') {
      alert('Please enter a name.')
    }

    else if(addressInput.value === '') {
      alert('Please enter an address.')
    }

    else if(locationInput.value === ''){
      alert('Please enter a city.')
    }

    else if(paymentInput.value === ''){
      alert('Please enter a valid credit card.')
    }

    else {alert('Thank you for your order!')
      checkoutContainer.classList.add('invisible')
      itemContainer.classList.remove('invisible')
      cart = []
      quantityCounter.textContent = 'x' + totalCartQuantity()
      window.location.reload(true)
    }
  })
}

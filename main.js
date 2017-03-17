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

/*     <div class="container" id="details">
      <div class="row" id="details-row">
        <div class="col-xs-6 image-column">
          <div class="card image-card">
            <div class="card-header">
              Item Name
            </div>
            <div class="card-block image-block">
              <img class="card-img-top" src="https://img1.fpassets.com/is/image/FreePeople/41580994_010_a?$browse-lt$" alt="Card image cap">
            </div>
          </div>
        </div>
        <div class="col-xs-6 details-column">
          <div class="card details-card">
              <div class="card-block details-block">
                <p class="card-text written-details">Item Details</p>
                <p class="card-text item-price">Price</p>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Choose Size
                  </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">SMALL</a>
                      <a class="dropdown-item" href="#">MEDIUM</a>
                      <a class="dropdown-item" href="#">LARGE</a>
                    </div>
                  </div>
                <a href="#" class="btn btn-primary">Add to Cart</a>
              </div>
            </div>
        </div>
      </div> */


var detailContainer = document.getElementById('details')
var detailRow = document.getElementById('details-row')

function createDetails (item) {

  var imageColumn = document.createElement('div')
    imageColumn.classList.add('col-xs-6')
    imageColumn.classList.add('image-column')

  var imageCard = document.createElement('div')
    imageCard.classList.add('card')
    imageCard.classList.add('image')

  var cardHeader = document.createElement('h3')
    cardHeader.classList.add('card-header')
    cardHeader.textContent = item.name

  var imageCardBlock = document.createElement('div')
    imageCardBlock.classList.add('card-block')
    imageCardBlock.classList.add('image-block')

  var itemImage = document.createElement('img')
    itemImage.classList.add('card-img-top')
    itemImage.setAttribute('src', item.image)

  var detailsColumn = document.createElement('div')
    detailsColumn.classList.add('col-xs-6')
    detailsColumn.classList.add('details-column')

  var detailsCard = document.createElement('div')
    detailsCard.classList.add('card')
    detailsCard.classList.add('details-card')

  var detailsCardBlock = document.createElement('div')
    detailsCardBlock.classList.add('card-block')
    detailsCardBlock.classList.add('details-block')

  var detailsWritten = document.createElement('p')
    detailsWritten.classList.add('card-text')
    detailsWritten.classList.add('written-details')
    detailsWritten.textContent = 'Details go here!'

  var price = document.createElement('p')
    price.classList.add('card-text')
    price.classList.add('item-price')
    price.textContent = (item.price)


  imageCardBlock.appendChild(itemImage)
  imageCard.appendChild(cardHeader)
  imageCard.appendChild(imageCardBlock)
  imageColumn.appendChild(imageCard)

  detailsCardBlock.appendChild(detailsWritten)
  detailsCardBlock.appendChild(price)
  detailsCard.appendChild(detailsCardBlock)
  detailsColumn.appendChild(detailsCard)

  return imageColumn
}


function renderDetails (item) {
  var $imageColumn = createDetails(item)
  detailRow.appendChild($imageColumn)
}

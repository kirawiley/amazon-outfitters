//Array for items
var items = [
  {
    name: 'Margot Two-Piece Set',
    price: '$148.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41935917_067_a?$browse-lt$',
    description: 'Easy and effortless, this American made set features a cropped top and flowy tiered skirt.',
    id: 0
  },
  {
    name: 'Bird of Paradise Jacket',
    price: '$600.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40183220_001_a?$browse-lt$',
    description: 'Stunning cropped jacket with embellishments all over. Multi-colored sequins, edgy studs and beautiful beading make this an ultra cool statement piece.',
    id: 1
  },
  {
    name: 'Meshed Up Tee',
    price: '$50.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41550351_001_a?$browse-lt$',
    description: 'Cool mesh tee featuring bold floral embroidery throughout.',
    id: 2
  },
  {
    name: '501 Skinny',
    price: '$128.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40504748_092_a?$browse-lt$',
    description: 'The iconic Levi’s 501 has been reimagined with a slimmer skinny leg that has been cropped to graze just above the ankle.',
    id: 3
  },
  {
    name: 'First Date Dress',
    price: '$70.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/40072043_062_a?$browse-lt$',
    description: 'Long sleeve dress with a soft and comfy fabrication and an effortless trapeze shape.',
    id: 4
  },
  {
    name: 'Mustard Cardi',
    price: '$88.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/39440201_071_a?$browse-lt$',
    description: 'Marled chunky cardigan sweater featuring front slip pockets and contrast detailing. ',
    id: 5
  },
  {
    name: 'Prima Ballerina Top',
    price: '$58.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/31599962_049_a?$browse-lt$',
    description: 'Stretchy ribbed cold shoulder top with mock turtleneck.',
    id: 6
  },
  {
    name: 'Silver Linings Leather Jacket',
    price: '$400.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/42146589_001_a?$browse-lt$',
    description: 'Classic moto style leather jacket featuring beautiful rose embroidery and stud details on the back and sleeve cuffs.',
    id: 7
  },
  {
    name: 'Bandit Denim Shorts',
    price: '$68.00',
    image: 'https://img1.fpassets.com/is/image/FreePeople/41580994_010_a?$browse-lt$',
    description: 'Western-inspired denim shorts featuring a ruffled waistband and metal concho accents.',
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

function createImageDetails (item) {

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


  imageCardBlock.appendChild(itemImage)
  imageCard.appendChild(cardHeader)
  imageCard.appendChild(imageCardBlock)
  imageColumn.appendChild(imageCard)

  return imageColumn
}

function createInfoDetails (item) {

  var detailsColumn = document.createElement('div')
    detailsColumn.classList.add('col-xs-6')
    detailsColumn.classList.add('details-column')

  var detailsWritten = document.createElement('p')
    detailsWritten.classList.add('card-text')
    detailsWritten.classList.add('written-details')
    detailsWritten.textContent = item.description

  var price = document.createElement('p')
    price.classList.add('card-text')
    price.classList.add('item-price')
    price.textContent = item.price

  detailsColumn.appendChild(detailsWritten)
  detailsColumn.appendChild(price)

  return detailsColumn
}

function renderDetails (item) {
  var $imageColumn = createImageDetails(item)
  var $detailsColumn = createInfoDetails(item)
  detailRow.appendChild($imageColumn)
  detailRow.appendChild($detailsColumn)
}

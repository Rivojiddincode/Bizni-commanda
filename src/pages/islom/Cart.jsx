import React from 'react'
import "./Islom2.css"

const Cart = () => {
  const [currentView, setCurrentView] = useState('cart')
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, size: 'Large', color: 'White', img: 'product1.jpg', quantity: 1 },
    { id: 4, name: 'Skinny Fit Jeans', price: 240, size: 'Large', color: 'Blue', img: 'product4.jpg', quantity: 4 }
  ])
  const [promoCode, setPromoCode] = useState('')

  const products = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, rating: 3.55, img: 'product1.jpg', oldPrice: 242, size: 'Large', color: 'White' },
    { id: 2, name: 'Polo with Tipping Details', price: 180, rating: 4.65, img: 'product2.jpg', size: 'Medium', color: 'Blue' },
    { id: 3, name: 'Black Striped T-shirt', price: 120, oldPrice: 160, rating: 5.0, img: 'product3.jpg', size: 'Small', color: 'Black' },
    { id: 4, name: 'Skinny Fit Jeans', price: 240, oldPrice: 260, rating: 3.56, discount: '20%', img: 'product4.jpg', size: 'Large', color: 'Blue' },
    { id: 5, name: 'Checkered Shirt', price: 180, rating: 4.56, img: 'product5.jpg', size: 'Medium', color: 'Red' },
    { id: 6, name: 'Sleeve Striped T-shirt', price: 130, oldPrice: 160, rating: 4.54, discount: '30%', img: 'product6.jpg', size: 'Large', color: 'White' },
    { id: 7, name: 'Vertical Striped Shirt', price: 212, oldPrice: 232, rating: 3.09, discount: '20%', img: 'product7.jpg', size: 'Medium', color: 'Green' },
    { id: 8, name: 'Courage Graphic T-shirt', price: 145, rating: 4.05, img: 'product8.jpg', size: 'Large', color: 'Orange' },
    { id: 9, name: 'Loose Fit Bermuda Shorts', price: 80, rating: 3.65, img: 'product9.jpg', size: 'Medium', color: 'Blue' },
  ]

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = Math.round(subtotal * 0.2)
  const deliveryFee = 15
  const total = subtotal - discount + deliveryFee

  return (
    <div>
      <div className="nav-bar">
        <button 
          className={currentView === 'products' ? 'active' : ''}
          onClick={() => setCurrentView('products')}
        >
          Products
        </button>
        <button 
          className={currentView === 'cart' ? 'active' : ''}
          onClick={() => setCurrentView('cart')}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {currentView === 'products' ? (
        <div className="bigcontainer">
          <div className="container1">
            <h3>Filters</h3>
            <div className="filter-section">
              <h4>Price</h4>
              <div className="price-range">
                <input type="number" placeholder="Min" />
                <input type="number" placeholder="Max" />
              </div>
            </div>
          </div>
          <div className="container2">
            <div className="products-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.img} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="rating">⭐ {product.rating}</p>
                  <div className="price-section">
                    {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                    <span className="price">${product.price}</span>
                    {product.discount && <span className="discount">{product.discount}</span>}
                  </div>
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-left">
            <h1>YOUR CART</h1>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.name} className="item-img" />
                    
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-info">Size: {item.size}</p>
                      <p className="item-info">Color: {item.color}</p>
                      <p className="item-price">${item.price}</p>
                    </div>

                    <div className="item-quantity">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    </div>

                    <button className="delete-btn" onClick={() => handleRemove(item.id)}>🗑</button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="cart-right">
            <div className="order-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="summary-row">
                <span>Discount (-20%)</span>
                <span className="discount-text">-${discount}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>${deliveryFee}</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <div className="promo-section">
                <input 
                  type="text" 
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="apply-btn">Apply</button>
              </div>

              <button className="checkout-btn">Go to Checkout →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
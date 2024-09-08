import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */} 
      <header className="hero-section" style={{ backgroundImage: `url('/landingpage.jpg')` }}>
      
        <div className="hero-content">
          <h1>GlobalMarketConnect</h1>
          <p>Create a robust and scalable platform combining e-commerce, social networking, and real-time communication functionalities to support a global user base of over 100 million people.</p>
          <button className="cta-button">Join Now</button>
        </div>
      </header>

      {/* Core Components Section */}
      <section className="core-components">
        <h2>Core Components of GlobalMarketConnect</h2>
        <div className="component-list">
          <div className="component-item">
            <img src="path-to-image/user-management.jpg" alt="User Management Service" />
            <h3>User Management Service</h3>
            <p>Manage users, roles, and permissions for a global user base.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/product-catalog.jpg" alt="Product Catalog Service" />
            <h3>Product Catalog Service</h3>
            <p>Browse and manage products and services with advanced search capabilities.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/order-management.jpg" alt="Order Management Service" />
            <h3>Order Management Service</h3>
            <p>Track and manage customer orders, shipping, and returns globally.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/social-interaction.jpg" alt="Social Interaction Service" />
            <h3>Social Interaction Service</h3>
            <p>Connect users through social interactions such as comments, likes, and shares.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/real-time-communication.jpg" alt="Real-Time Communication Service" />
            <h3>Real-Time Communication Service</h3>
            <p>Engage with your audience in real-time via instant messaging and notifications.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/notification-alerts.jpg" alt="Notification and Alerts Service" />
            <h3>Notification and Alerts Service</h3>
            <p>Keep users informed with instant notifications and alerts across all platforms.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/analytics-reporting.jpg" alt="Analytics and Reporting Service" />
            <h3>Analytics and Reporting Service</h3>
            <p>Track and analyze user activity, sales, and system performance.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/content-delivery.jpg" alt="Content Delivery Service" />
            <h3>Content Delivery Service</h3>
            <p>Serve static and dynamic content efficiently to users worldwide.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/search-recommendation.jpg" alt="Search and Recommendation Service" />
            <h3>Search and Recommendation Service</h3>
            <p>Offer personalized search results and product recommendations to users.</p>
          </div>
          <div className="component-item">
            <img src="path-to-image/payment-fraud.jpg" alt="Payment and Fraud Detection Service" />
            <h3>Payment and Fraud Detection Service</h3>
            <p>Securely process payments and detect fraudulent transactions.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2024 GlobalMarketConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

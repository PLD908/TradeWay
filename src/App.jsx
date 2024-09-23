// src/App.js
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/assets/images/logo.png" className='h-20' alt="tradeway logo" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-gray-800">Features</a></li>
              <li><a href="#portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</a></li>
              <li><a href="#support" className="text-gray-600 hover:text-gray-800">Support</a></li>
              <li><a href="#community" className="text-gray-600 hover:text-gray-800">Community</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Sell Gift Cards</h2>
          <p className="text-xl mb-8">Secure, Fast, and Reliable</p>
          <a href="https://wa.me/message/3OAEOC5A7ANZK1">
            <button className="bg-white text-yellow-500 font-semibold py-2 px-4 rounded">Get Started</button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      {/* <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Buy Gift Cards" description="Purchase a variety of gift cards quickly and easily." />
            <FeatureCard title="Buy Bitcoin" description="Securely buy and sell Bitcoin at competitive rates." />
            <FeatureCard title="Portfolio Balance" description="View and manage your portfolio balance seamlessly." />
            <FeatureCard title="Withdraw Funds" description="Easily withdraw your funds at any time." />
            <FeatureCard title="Live Support" description="Get instant help with our 24/7 live support." />
            <FeatureCard title="Community" description="Join our community and share your experiences." />
            <FeatureCard title="Transaction History" description="View your past purchases and withdrawals." />
            <FeatureCard title="Price Alerts" description="Set up price alerts for BTC." />
            <FeatureCard title="Educational Resources" description="Learn more about buying gift cards and BTC." />
            <FeatureCard title="Referral Program" description="Earn rewards by inviting friends." />
            <FeatureCard title="Real-time Market Data" description="Stay updated with the latest BTC market trends." />
          </div>
        </div>
      </section> */}

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Your Portfolio</h3>
          <PortfolioBalance />
        </div>
      </section> */}

      {/* Support Section */}
      {/* <section id="support" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Need Help?</h3>
          <p className="text-xl mb-8">Our support team is here to assist you 24/7</p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Contact Support</button>
        </div>
      </section> */}

      {/* Community Section */}
      {/* <section id="community" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Join Our Community</h3>
          <p className="text-xl mb-8">Connect with other users and share your experiences.</p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Join Now</button>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; 2024 Gift Card & BTC Service. All rights reserved.</p>
        </div>
      </footer> */}

      {/* Live Support Buttons */}
      {/* <div className="fixed bottom-4 left-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Live Support</button>
      </div> */}
      <div className="fixed bottom-4 right-4">
        <a href="https://t.me/communitytradeway">
          <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded">Community</button>
        </a>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h4 className="text-2xl font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PortfolioBalance = () => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h4 className="text-2xl font-bold mb-2">Current Balance</h4>
    <p className="text-gray-600 text-xl mb-4">$1234.56</p>
    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Withdraw</button>
  </div>
);

export default App;

import './App.css'
import CategoryFooter from './component/CategoryFooter';
import Header from './component/Header';
import { routeConfig } from './router/RouterPath';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Nykaa Fashion</h3>
            <p className="text-gray-400 text-sm">Your one-stop fashion destination</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Customer Care</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Offers</li>
              <li>New Arrivals</li>
              <li>Brands</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">i</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          © 2023 Nykaa Fashion. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Header />
      <Router>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={<route.component />} // Invoke the function here
          />
        ))}
      </Routes>
      </Router>

      <Footer />
      <CategoryFooter />
    </div>
  );
};

export default App;
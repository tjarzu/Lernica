import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, Tag, AlertCircle, Package, Clock, CheckCircle } from 'lucide-react';

interface ShopItem {
  id: string;
  title: string;
  description: string;
  points: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface Purchase {
  id: string;
  item: ShopItem;
  purchaseDate: string;
  status: 'processing' | 'shipped' | 'delivered';
  trackingNumber?: string;
}

interface ShopProps {
  userPoints?: number;
}

const Shop: React.FC<ShopProps> = ({ userPoints = 2450 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
  const [activeTab, setActiveTab] = useState<'shop' | 'purchases'>('shop');
  const [purchases, setPurchases] = useState<Purchase[]>([
    {
      id: '1',
      item: {
        id: '2',
        title: '$50 Amazon Gift Card',
        description: 'Redeem your points for an Amazon gift card to purchase classroom supplies.',
        points: 1000,
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        category: 'Gift Cards',
        inStock: true
      },
      purchaseDate: '2024-03-10',
      status: 'delivered',
      trackingNumber: 'TRK123456789'
    }
  ]);

  const categories = ['All', 'Classroom Supplies', 'Digital Resources', 'Professional Development', 'Gift Cards'];

  const shopItems: ShopItem[] = [
    {
      id: '1',
      title: 'Premium Lesson Plan Bundle',
      description: 'A collection of 50 professionally designed lesson plans across multiple subjects.',
      points: 500,
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Digital Resources',
      inStock: true
    },
    {
      id: '2',
      title: '$50 Amazon Gift Card',
      description: 'Redeem your points for an Amazon gift card to purchase classroom supplies.',
      points: 1000,
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Gift Cards',
      inStock: true
    },
    {
      id: '3',
      title: 'Professional Development Course',
      description: 'Access to a premium online course on modern teaching methodologies.',
      points: 750,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Professional Development',
      inStock: true
    }
  ];

  const handleRedeem = (item: ShopItem) => {
    // Check if item is already purchased
    if (purchases.some(purchase => purchase.item.id === item.id)) {
      return;
    }
    setSelectedItem(item);
    setShowConfirmation(true);
  };

  const confirmRedeem = () => {
    if (selectedItem && userPoints >= selectedItem.points) {
      // Add to purchases
      setPurchases([...purchases, {
        id: Date.now().toString(),
        item: selectedItem,
        purchaseDate: new Date().toISOString(),
        status: 'processing'
      }]);
    }
    setShowConfirmation(false);
    setSelectedItem(null);
  };

  const filteredItems = shopItems.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    // Filter out purchased items
    if (purchases.some(purchase => purchase.item.id === item.id)) return false;
    return true;
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Rewards Shop</h1>
          <p className="text-gray-600">Redeem your points for classroom resources and rewards</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="px-4 py-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-md">
            <div className="text-sm opacity-90">Your Points</div>
            <div className="text-2xl font-bold">{userPoints}</div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('shop')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'shop'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Shop
        </button>
        <button
          onClick={() => setActiveTab('purchases')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'purchases'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          My Purchases
        </button>
      </div>

      {activeTab === 'shop' ? (
        <>
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search rewards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? 'all' : category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                (selectedCategory === 'all' && category === 'All') || selectedCategory === category
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <div className="flex items-center space-x-1 text-blue-600 font-medium">
                  <Tag className="w-4 h-4" />
                  <span>{item.points}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button
                onClick={() => handleRedeem(item)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!item.inStock || userPoints < item.points}
              >
                {!item.inStock ? 'Out of Stock' : 
                 userPoints < item.points ? 'Insufficient Points' : 
                 'Redeem Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
      </>) : (
        <div className="space-y-6">
          {purchases.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No purchases yet</h3>
              <p className="text-gray-600">Start redeeming your points for rewards!</p>
            </div>
          ) : (
            purchases.map((purchase) => (
              <div key={purchase.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={purchase.item.image}
                      alt={purchase.item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{purchase.item.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          purchase.status === 'delivered' ? 'bg-green-100 text-green-600' :
                          purchase.status === 'shipped' ? 'bg-blue-100 text-blue-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Purchased on {new Date(purchase.purchaseDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
                          <span>{purchase.item.points} points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {showConfirmation && selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center space-x-2 text-yellow-600 mb-4">
              <AlertCircle className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Confirm Redemption</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Are you sure you want to redeem <span className="font-medium">{selectedItem.title}</span> for{' '}
              <span className="font-medium">{selectedItem.points} points</span>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={confirmRedeem}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
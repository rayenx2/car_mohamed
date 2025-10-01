import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  price: number | string;
  photos: string[];
  description: string;
}

const Stock: React.FC = () => {
  const { t } = useLanguage();
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({
    brand: '',
    year: '',
    price: '',
    fuel: '',
    transmission: ''
  });
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Sample car data - in real app this would come from API
  useEffect(() => {
    const sampleCars: Car[] = [
      {
        id: '1',
        brand: 'BMW',
        model: 'X5',
        year: 2022,
        mileage: 15000,
        fuel: 'Diesel',
        transmission: 'Automatic',
        price: 65000,
        photos: ['/placeholder-car-1.jpg', '/placeholder-car-2.jpg'],
        description: 'Premium BMW X5 in excellent condition'
      },
      {
        id: '2',
        brand: 'Mercedes',
        model: 'C-Class',
        year: 2021,
        mileage: 25000,
        fuel: 'Petrol',
        transmission: 'Automatic',
        price: 45000,
        photos: ['/placeholder-car-3.jpg', '/placeholder-car-4.jpg'],
        description: 'Luxury Mercedes C-Class'
      },
      {
        id: '3',
        brand: 'Audi',
        model: 'A6',
        year: 2023,
        mileage: 8000,
        fuel: 'Diesel',
        transmission: 'Automatic',
        price: 'On Request',
        photos: ['/placeholder-car-5.jpg', '/placeholder-car-6.jpg'],
        description: 'New Audi A6 available for export'
      }
    ];
    setCars(sampleCars);
    setFilteredCars(sampleCars);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...cars];

    // Apply filters
    if (filters.brand) {
      result = result.filter(car => car.brand.toLowerCase().includes(filters.brand.toLowerCase()));
    }
    if (filters.year) {
      result = result.filter(car => car.year.toString().includes(filters.year));
    }
    if (filters.fuel) {
      result = result.filter(car => car.fuel.toLowerCase().includes(filters.fuel.toLowerCase()));
    }
    if (filters.transmission) {
      result = result.filter(car => car.transmission.toLowerCase().includes(filters.transmission.toLowerCase()));
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'priceAsc':
        result.sort((a, b) => {
          if (typeof a.price === 'string' || typeof b.price === 'string') return 0;
          return a.price - b.price;
        });
        break;
      case 'priceDesc':
        result.sort((a, b) => {
          if (typeof a.price === 'string' || typeof b.price === 'string') return 0;
          return b.price - a.price;
        });
        break;
    }

    setFilteredCars(result);
  }, [cars, filters, sortBy]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const openCarModal = (car: Car) => {
    setSelectedCar(car);
    setCurrentPhotoIndex(0);
  };

  const closeCarModal = () => {
    setSelectedCar(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedCar) {
      setCurrentPhotoIndex((prev) => 
        prev === selectedCar.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedCar) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? selectedCar.photos.length - 1 : prev - 1
      );
    }
  };

  const handleWhatsApp = (car: Car) => {
    const message = `${t('stock.messages.whatsappMessage')} ${car.brand} ${car.model} ${car.year}`;
    const whatsappUrl = `https://wa.me/4917669495526?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = (car: Car) => {
    const subject = `${t('stock.messages.emailSubject')} ${car.brand} ${car.model} ${car.year}`;
    const body = `${t('stock.messages.emailBody')} ${car.brand} ${car.model} ${car.year}. Please provide more information.`;
    const mailtoUrl = `mailto:Iv.exportservice@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('stock.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('stock.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <input
              type="text"
              placeholder={t('stock.filters.brand')}
              value={filters.brand}
              onChange={(e) => handleFilterChange('brand', e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="text"
              placeholder={t('stock.filters.year')}
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="text"
              placeholder={t('stock.filters.fuel')}
              value={filters.fuel}
              onChange={(e) => handleFilterChange('fuel', e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="text"
              placeholder={t('stock.filters.transmission')}
              value={filters.transmission}
              onChange={(e) => handleFilterChange('transmission', e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="newest">{t('stock.sorting.newest')}</option>
              <option value="priceAsc">{t('stock.sorting.priceAsc')}</option>
              <option value="priceDesc">{t('stock.sorting.priceDesc')}</option>
            </select>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openCarModal(car)}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">🚗 {t('stock.card.carPhoto')}</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {car.brand} {car.model}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                  <div>{t('stock.card.year')} {car.year}</div>
                  <div>{t('stock.card.mileage')} {car.mileage.toLocaleString()} km</div>
                  <div>{t('stock.card.fuel')} {car.fuel}</div>
                  <div>{t('stock.card.transmission')} {car.transmission}</div>
                </div>
                <div className="text-lg font-bold text-blue-600">
                  {typeof car.price === 'number' 
                    ? `€${car.price.toLocaleString()}` 
                    : t('stock.card.onRequest')
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('stock.card.noCarsFound')}</p>
          </div>
        )}
      </div>

      {/* Car Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedCar.brand} {selectedCar.model} {selectedCar.year}
                </h2>
                <button
                  onClick={closeCarModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Photo Gallery */}
              <div className="relative mb-6">
                <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">🚗 {t('stock.card.photo')} {currentPhotoIndex + 1}</span>
                </div>
                {selectedCar.photos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              {/* Car Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t('stock.card.specifications')}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div>{t('stock.card.brand')} {selectedCar.brand}</div>
                    <div>{t('stock.card.model')} {selectedCar.model}</div>
                    <div>{t('stock.card.year')} {selectedCar.year}</div>
                    <div>{t('stock.card.mileage')} {selectedCar.mileage.toLocaleString()} km</div>
                    <div>{t('stock.card.fuel')} {selectedCar.fuel}</div>
                    <div>{t('stock.card.transmission')} {selectedCar.transmission}</div>
                    <div>{t('stock.card.price')} {typeof selectedCar.price === 'number' 
                      ? `€${selectedCar.price.toLocaleString()}` 
                      : t('stock.card.onRequest')
                    }</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t('stock.card.description')}</h3>
                  <p className="text-gray-600">{selectedCar.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleWhatsApp(selectedCar)}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📱</span>
                  <span>{t('stock.card.whatsapp')}</span>
                </button>
                <button
                  onClick={() => handleEmail(selectedCar)}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>✉️</span>
                  <span>{t('stock.card.email')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stock;

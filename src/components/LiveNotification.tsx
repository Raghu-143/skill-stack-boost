import { useState, useEffect } from "react";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri", "Patna", "Vadodara", "Ghaziabad",
  "Surat", "Coimbatore", "Kochi", "Chandigarh", "Mysore", "Nashik", "Faridabad", "Gurgaon", "Rajkot", "Madurai"
];

const LiveNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    const showNotification = () => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setCurrentCity(randomCity);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 4500);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);
    
    // Then show every 5 seconds
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 notification-slide">
      <div className="bg-gradient-to-r from-primary to-accent backdrop-blur-xl border-2 border-white/20 rounded-2xl p-5 shadow-[var(--shadow-glow)] max-w-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-lg">🚀</span>
          </div>
          <div>
            <p className="text-base font-bold text-white">
              Someone from {currentCity}
            </p>
            <p className="text-sm text-white/90">
              just purchased this course bundle!
            </p>
            <p className="text-xs text-white/70 mt-1">
              ⏰ Limited time offer ending soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNotification;
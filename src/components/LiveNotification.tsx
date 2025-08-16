import { useState, useEffect } from "react";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", 
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Nagpur",
  "Indore", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad",
  "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot"
];

const LiveNotification = () => {
  const [visible, setVisible] = useState(false);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    const showNotification = () => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setCurrentCity(randomCity);
      setVisible(true);
      
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);
    
    // Then show every 10 seconds
    const interval = setInterval(showNotification, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 notification-slide">
      <div className="bg-card border border-border shadow-lg rounded-xl p-4 max-w-xs">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <p className="text-sm font-medium">
              🚀 Someone from <span className="text-primary font-bold">{currentCity}</span> just purchased this bundle!
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Join thousands of successful students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNotification;
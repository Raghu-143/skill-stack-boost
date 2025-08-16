import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 29,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset to 29 minutes when it reaches 0
          return { minutes: 29, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 my-6">
      <div className="text-center">
        <div className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
          ⏰ Limited Time Offer Ends In:
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold text-2xl min-w-16">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-destructive font-bold text-2xl">:</span>
          <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold text-2xl min-w-16">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="flex justify-center space-x-8 mt-2 text-xs text-muted-foreground">
          <span>MINUTES</span>
          <span>SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
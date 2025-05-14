import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating = ({ 
  initialRating = 0, 
  onRatingChange, 
  readOnly = false,
  size = 'md'
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null); // Use null to differentiate no hover
  const [hasRated, setHasRated] = useState(false); // Track if the user has already rated

  const starSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const handleClick = (newRating: number) => {
    if (readOnly || hasRated) return; // Prevent further ratings if readOnly or already rated

    setRating(newRating);
    setHasRated(true); // Mark as rated
    console.log(`User rated: ${newRating}`); // Log the rating to the console

    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleMouseEnter = (hoveredRating: number) => {
    if (readOnly || hasRated) return; // Prevent hover effect if readOnly or already rated
    setHoverRating(hoveredRating);
  };

  const handleMouseLeave = () => {
    if (readOnly || hasRated) return; // Prevent hover reset if readOnly or already rated
    setHoverRating(null); // Reset hover state
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${starSizes[size]} cursor-${readOnly ? 'default' : 'pointer'} transition-colors duration-150 ${
            (hoverRating ?? rating) >= star // Use hoverRating if present, otherwise use rating
              ? 'text-yellow-400 fill-yellow-400' 
              : 'text-gray-300'
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default StarRating;
export function HeartFav({ onFavClick, isFavorite }) {
  
  const handleClick = () => {
    onFavClick(!isFavorite)
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      viewBox="0 0 24 24"
      fill="none">
      <path d="M4 4L8 3L12 5L15 3.5L19 3L20.5 6.5L19.5 10L17 13L12 16L6.5 12.5L4 8.5V4Z"
        fill={isFavorite ? '#063162' : 'transparent'} />
      <path d="M12.1 15.5586L12 15.6458L11.89 15.5586C7.14 11.8005 4 9.31553 4 6.79564C4 5.05177 5.5 3.74387 7.5 3.74387C9.04 3.74387 10.54 4.6158 11.07 5.80164H12.93C13.46 4.6158 14.96 3.74387 16.5 3.74387C18.5 3.74387 20 5.05177 20 6.79564C20 9.31553 16.86 11.8005 12.1 15.5586ZM16.5 2C14.76 2 13.09 2.70627 12 3.81362C10.91 2.70627 9.24 2 7.5 2C4.42 2 2 4.10136 2 6.79564C2 10.0828 5.4 12.7771 10.55 16.849L12 18L13.45 16.849C18.6 12.7771 22 10.0828 22 6.79564C22 4.10136 19.58 2 16.5 2Z"
        fill="#063162" />
    </svg>
  );
}








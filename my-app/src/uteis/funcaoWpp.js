

const phoneNumber='5581987079886'

const handleClick = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
  
}
export default handleClick
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

type Product = {
  name: string;
  description: string;
  price: string;
};

interface ModalProps {
  product: Product | null;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, closeModal }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleBuyNow = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: email,
      phone_number: phone,
      message: `${message}\nQuantity: ${quantity}\nProduct: ${product?.name}`,
      to_name: 'Admin',
      product_name: product?.name,
      product_price: product?.price,
    };

    emailjs.send('service_382lde8', 'template_fvrmvzo', templateParams, 'hOgYAZ27ebGWnPFme')
      .then(() => {
        setIsClosing(true); // Start closing animation
      })
      .catch((err) => {
        alert(`Failed to send email. Error: ${err.text || err.message}`);
      });
  };

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        closeModal();
      }, 300); // Wait for animation to finish before closing
      return () => clearTimeout(timer);
    }
  }, [isClosing, closeModal]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
      <div
        className={`bg-white rounded-xl p-10 shadow-2xl w-[37rem] h-auto relative transform transition-all duration-300 ${
          isClosing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <form onSubmit={handleBuyNow} className="space-y-4">
          <label className="block">
            Quantity:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border rounded-lg p-2 mt-1 w-full"
            />
          </label>
          <label className="block">
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-lg p-2 mt-1 w-full h-20"
            />
          </label>
          <label className="block">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded-lg p-2 mt-1 w-full"
            />
          </label>
          <label className="block">
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border rounded-lg p-2 mt-1 w-full"
            />
          </label>

          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleClose} className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300">
              Cancel
            </button>
            <button type="submit" className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-400 transition duration-300">
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

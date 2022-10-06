import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function showModal() {
    setIsShowing(true);
  }
  function closeModal() {
    setIsShowing(false);
  }
  return {
    isShowing,
    showModal,
    closeModal
  };
};

export default useModal;

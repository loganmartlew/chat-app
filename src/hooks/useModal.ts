import { useState } from 'react';

type UseModal = () => [boolean, (state?: boolean | undefined) => void];

export const useModal: UseModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = (state?: boolean) => {
    if (state != null) {
      setModalOpen(state);
      return;
    }

    setModalOpen(prev => !prev);
  };

  return [modalOpen, toggleModal];
};

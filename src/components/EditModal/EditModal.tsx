import React, { useState } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';

interface EditModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: (arg: boolean) => void;
  todoEdit: (id: string, text: string) => void;
  todoText: string;
  todoId: string;
}

const EditModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  todoEdit,
  todoText,
  todoId,
}: EditModalProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (!inputValue) {
      setIsEditModalOpen(!isEditModalOpen);
      return;
    }
    todoEdit(todoId, inputValue);
    setIsEditModalOpen(!isEditModalOpen);
    setInputValue('');
  };

  return (
    <Modal
      isOpen={isEditModalOpen}
      hide={() => setIsEditModalOpen(!isEditModalOpen)}>
      <Modal.Header>Edit Todo</Modal.Header>
      <Modal.Body>
        <Input
          inputClassName="editInput"
          inputType="text"
          inputValue={inputValue}
          inputOnChange={handleOnChange}
          inputPlaceholder={todoText}
        />
        <Button
          buttonClassName={'addBtnModal'}
          buttonType={'button'}
          buttonClick={handleAdd}
          buttonText={'Add'}
        />
        <Button
          buttonClassName={'cancelBtnModal'}
          buttonType={'button'}
          buttonClick={() => setIsEditModalOpen(!isEditModalOpen)}
          buttonText={'Cancel'}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;

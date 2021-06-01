import React, { useState } from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import {
  Wrapper,
  SubHeadingWrapper,
  SubHeadingTitle,
  Field,
  Label,
  Input,
  styles,
} from './FormResources';
import { ModalHeading, ButtonsWrapper, Button } from './ModalResources';

const CapForm = ({ index, capArr, setCapArr }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { name, cap } = capArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...capArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'cap') {
      values[i].cap = e.target.value;
    }

    setCapArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = capArr.filter((cap) => capArr.indexOf(cap) !== formIndex);

    setCapArr(newArr);
  };

  // MODAL
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onConfirmDeletion = () => {
    openModal();
  };

  const onCancelDeletion = () => {
    closeModal();
  };

  const onDeleteForm = () => {
    onRemoveForm(index);
    closeModal();
  };

  return (
    <Wrapper>
      <SubHeadingWrapper>
        <SubHeadingTitle>{`Form ${index + 1}`}</SubHeadingTitle>
        <FaMinusCircle
          style={styles.delteIcon}
          size={25}
          onClick={onConfirmDeletion}
        />
      </SubHeadingWrapper>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Confirm deletion'
        closeTimeoutMS={200}
        className='Modal'
        overlayClassName='Overlay'
      >
        <ModalHeading>Delete Form?</ModalHeading>
        <ButtonsWrapper>
          <Button onClick={onDeleteForm}>YES</Button>
          <Button onClick={onCancelDeletion}>NO</Button>
        </ButtonsWrapper>
      </Modal>

      <Field>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          name='name'
          value={name}
          required
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='cap'>Cap</Label>
        <Input
          type='text'
          name='cap'
          value={cap}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
    </Wrapper>
  );
};

export default CapForm;

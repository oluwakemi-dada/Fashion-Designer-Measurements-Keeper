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

const AgbadaForm = ({ index, agbadaArr, setAgbadaArr }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { name, sleeve, length } = agbadaArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...agbadaArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'sleeve') {
      values[i].sleeve = e.target.value;
    } else if (e.target.name === 'length') {
      values[i].length = e.target.value;
    }

    setAgbadaArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = agbadaArr.filter(
      (agbada) => agbadaArr.indexOf(agbada) !== formIndex
    );

    setAgbadaArr(newArr);
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
        <Label htmlFor='sleeve'>Sleeve</Label>
        <Input
          type='text'
          name='sleeve'
          value={sleeve}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='length'>Length</Label>
        <Input
          type='text'
          name='length'
          value={length}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
    </Wrapper>
  );
};

export default AgbadaForm;

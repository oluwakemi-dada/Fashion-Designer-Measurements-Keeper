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

const TrouserForm = ({ index, trouserArr, setTrouserArr }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { name, waist, lap, length, knee, flap, hip, lowerLimb, mouthAnkle } =
    trouserArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...trouserArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'waist') {
      values[i].waist = e.target.value;
    } else if (e.target.name === 'lap') {
      values[i].lap = e.target.value;
    } else if (e.target.name === 'length') {
      values[i].length = e.target.value;
    } else if (e.target.name === 'knee') {
      values[i].knee = e.target.value;
    } else if (e.target.name === 'flap') {
      values[i].flap = e.target.value;
    } else if (e.target.name === 'hip') {
      values[i].hip = e.target.value;
    } else if (e.target.name === 'lowerLimb') {
      values[i].lowerLimb = e.target.value;
    } else if (e.target.name === 'mouthAnkle') {
      values[i].mouthAnkle = e.target.value;
    }

    setTrouserArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = trouserArr.filter(
      (trouser) => trouserArr.indexOf(trouser) !== formIndex
    );

    setTrouserArr(newArr);
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
        <Label htmlFor='waist'>Waist</Label>
        <Input
          type='text'
          name='waist'
          value={waist}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='lap'>Lap</Label>
        <Input
          type='text'
          name='lap'
          value={lap}
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
      <Field>
        <Label htmlFor='knee'>Knee</Label>
        <Input
          type='text'
          name='knee'
          value={knee}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='flap'>Flap</Label>
        <Input
          type='text'
          name='flap'
          value={flap}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='hip'>Hip</Label>
        <Input
          type='text'
          name='hip'
          value={hip}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='lowerLimb'>Lower Limb</Label>
        <Input
          type='text'
          name='lowerLimb'
          value={lowerLimb}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='mouthAnkle'>Mouth Ankle</Label>
        <Input
          type='text'
          name='mouthAnkle'
          value={mouthAnkle}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
    </Wrapper>
  );
};

export default TrouserForm;

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

const FemaleMeasurementForm = ({
  index,
  femaleMeasurementArr,
  setFemaleMeasurementArr,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // Destructure data from the current index
  const {
    name,
    shoulder,
    bust,
    underBust,
    shoulderToBust,
    stomach,
    neck,
    sleeveLength,
    roundSleeve,
    halfLength,
    hip,
    blouseLengthLong,
    blouseLengthShort,
    gownLengthLong,
    gownLengthShort,
    dressLengthLong,
    dressLengthShort,
  } = femaleMeasurementArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...femaleMeasurementArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'shoulder') {
      values[i].shoulder = e.target.value;
    } else if (e.target.name === 'bust') {
      values[i].bust = e.target.value;
    } else if (e.target.name === 'underBust') {
      values[i].underBust = e.target.value;
    } else if (e.target.name === 'shoulderToBust') {
      values[i].shoulderToBust = e.target.value;
    } else if (e.target.name === 'stomach') {
      values[i].stomach = e.target.value;
    } else if (e.target.name === 'neck') {
      values[i].neck = e.target.value;
    } else if (e.target.name === 'sleeveLength') {
      values[i].sleeveLength = e.target.value;
    } else if (e.target.name === 'roundSleeve') {
      values[i].roundSleeve = e.target.value;
    } else if (e.target.name === 'halfLength') {
      values[i].halfLength = e.target.value;
    } else if (e.target.name === 'hip') {
      values[i].hip = e.target.value;
    } else if (e.target.name === 'blouseLengthLong') {
      values[i].blouseLengthLong = e.target.value;
    } else if (e.target.name === 'blouseLengthShort') {
      values[i].blouseLengthShort = e.target.value;
    } else if (e.target.name === 'gownLengthLong') {
      values[i].gownLengthLong = e.target.value;
    } else if (e.target.name === 'gownLengthShort') {
      values[i].gownLengthShort = e.target.value;
    } else if (e.target.name === 'dressLengthLong') {
      values[i].dressLengthLong = e.target.value;
    } else if (e.target.name === 'dressLengthShort') {
      values[i].dressLengthShort = e.target.value;
    }

    setFemaleMeasurementArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = femaleMeasurementArr.filter(
      (femaleMeasurement) =>
        femaleMeasurementArr.indexOf(femaleMeasurement) !== formIndex
    );

    setFemaleMeasurementArr(newArr);
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
        <Label htmlFor='shoulder'>Shoulder</Label>
        <Input
          type='text'
          name='shoulder'
          value={shoulder}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='bust'>Bust</Label>
        <Input
          type='text'
          name='bust'
          value={bust}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='underBust'>Under Bust</Label>
        <Input
          type='text'
          name='underBust'
          value={underBust}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='shoulderToBust'>Shoulder To Bust</Label>
        <Input
          type='text'
          name='shoulderToBust'
          value={shoulderToBust}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='stomach'>Stomach</Label>
        <Input
          type='text'
          name='stomach'
          value={stomach}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='neck'>Neck</Label>
        <Input
          type='text'
          name='neck'
          value={neck}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='sleeveLength'>Sleeve Length</Label>
        <Input
          type='text'
          name='sleeveLength'
          value={sleeveLength}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='roundSleeve'>Round Sleeve</Label>
        <Input
          type='text'
          name='roundSleeve'
          value={roundSleeve}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='halfLength'>Half Length</Label>
        <Input
          type='text'
          name='halfLength'
          value={halfLength}
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
        <Label htmlFor='blouseLengthLong'>Blouse Length (Long)</Label>
        <Input
          type='text'
          name='blouseLengthLong'
          value={blouseLengthLong}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='blouseLengthShort'>Blouse Length (Short)</Label>
        <Input
          type='text'
          name='blouseLengthShort'
          value={blouseLengthShort}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='gownLengthLong'>Gown Length (Long)</Label>
        <Input
          type='text'
          name='gownLengthLong'
          value={gownLengthLong}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='gownLengthShort'>Gown Length (Short)</Label>
        <Input
          type='text'
          name='gownLengthShort'
          value={gownLengthShort}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='dressLengthLong'>Dress Length (Long)</Label>
        <Input
          type='text'
          name='dressLengthLong'
          value={dressLengthLong}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='dressLengthShort'>Dress Length (Short)</Label>
        <Input
          type='text'
          name='dressLengthShort'
          value={dressLengthShort}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
    </Wrapper>
  );
};

export default FemaleMeasurementForm;

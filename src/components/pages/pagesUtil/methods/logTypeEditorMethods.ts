import { Dispatch, RefObject, SetStateAction } from 'react';
import { LogType } from '../../../../topLevelUtil/types/LogType';

export const applyStyles = (
  selectedType: LogType,
  fontSizeInput: number,
  fontColourInput: string,
  backgroundColourInput: string,
  setSelectedType: Dispatch<SetStateAction<LogType | null>>,
) => {
  const newSelectedType = selectedType;
  newSelectedType.styles.fontSize = fontSizeInput;
  newSelectedType.styles.colour = fontColourInput;
  newSelectedType.styles.backgroundColour = backgroundColourInput;

  setSelectedType(newSelectedType);
};

export const saveStyles = (
  setTypes: Dispatch<SetStateAction<LogType[]>>,
  types: LogType[],
  selectedType: LogType,
) => {
  const index = types.findIndex((type) => {
    return type.id === selectedType.id;
  });

  const newTypes = types.map((type) => type);
  newTypes[index] = selectedType;

  setTypes(newTypes);
};

export const handlePresetChange = (
  selectedType: LogType,
  setSelectedType: Dispatch<SetStateAction<LogType | null>>,
  logTypeRef: RefObject<HTMLHeadingElement>,
  preset: string,
) => {
  if (preset === 'error') {
    const newType = selectedType;
    newType.styles = {
      fontSize: 32,
      colour: '#E74C3C',
      backgroundColour: '#FDFEFE',
    };

    if (logTypeRef.current) {
      logTypeRef.current.style.fontSize =
        newType.styles.fontSize.toString() + 'px';
      logTypeRef.current.style.color = newType.styles.colour;
      logTypeRef.current.style.backgroundColor =
        newType.styles.backgroundColour;
      setSelectedType(newType);
    }
  }
  if (preset === 'warning') {
    const newType = selectedType;
    newType.styles = {
      fontSize: 16,
      colour: '#F7DC6F',
      backgroundColour: '#FDFEFE',
    };

    if (logTypeRef.current) {
      logTypeRef.current.style.fontSize =
        newType.styles.fontSize.toString() + 'px';
      logTypeRef.current.style.color = newType.styles.colour;
      logTypeRef.current.style.backgroundColor =
        newType.styles.backgroundColour;
      setSelectedType(newType);
    }
  }
  if (preset === 'standard') {
    const newType = selectedType;
    newType.styles = {
      fontSize: 16,
      colour: '#17202A',
      backgroundColour: '#FDFEFE',
    };

    if (logTypeRef.current) {
      logTypeRef.current.style.fontSize =
        newType.styles.fontSize.toString() + 'px';
      logTypeRef.current.style.color = newType.styles.colour;
      logTypeRef.current.style.backgroundColor =
        newType.styles.backgroundColour;
      setSelectedType(newType);
    }
  }
};

export const resetInputs = (
  presetSelectRef: RefObject<HTMLSelectElement>,
  fontSizeInputRef: RefObject<HTMLInputElement>,
  colourInputRef: RefObject<HTMLInputElement>,
  backgroundColourInputRef: RefObject<HTMLInputElement>,
  logTypeRef: RefObject<HTMLHeadingElement>,
) => {
  if (presetSelectRef.current) {
    presetSelectRef.current.value = 'presets';
  }
  if (fontSizeInputRef.current) {
    fontSizeInputRef.current.value = '';
  }
  if (colourInputRef.current) {
    colourInputRef.current.value = '';
  }
  if (backgroundColourInputRef.current) {
    backgroundColourInputRef.current.value = '';
  }
  if (logTypeRef.current) {
    logTypeRef.current.style.fontSize = '';
    logTypeRef.current.style.color = '';
    logTypeRef.current.style.backgroundColor = '';
  }
};

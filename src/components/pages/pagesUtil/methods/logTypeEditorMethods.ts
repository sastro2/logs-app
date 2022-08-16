import { Dispatch, SetStateAction } from 'react';
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

  const newTypes = types;
  newTypes[index] = selectedType;

  setTypes(newTypes);
};

export const handlePresetChange = (
  selectedType: LogType,
  setSelectedType: Dispatch<SetStateAction<LogType | null>>,
  preset: string,
) => {
  if (preset === 'error') {
    const newType = selectedType;
    newType.styles = {
      fontSize: 32,
      colour: '#E74C3C',
      backgroundColour: '#FDFEFE',
    };

    setSelectedType(newType);
  }
  if (preset === 'warning') {
    const newType = selectedType;
    newType.styles = {
      fontSize: 16,
      colour: '#F7DC6F',
      backgroundColour: '#FDFEFE',
    };

    setSelectedType(newType);
  }
  if (preset === 'standard') {
    const newType = selectedType;
    newType.styles = {
      fontSize: 16,
      colour: '#17202A',
      backgroundColour: '#FDFEFE',
    };

    setSelectedType(newType);
  }
};

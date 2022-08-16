import { LogType } from '../topLevelUtil/types/LogType';

export const mockTypes: LogType[] = [
  {
    id: 0,
    name: 'error',
    projectId: 0,
    sendImmediately: true,
    styles: {
      fontSize: 32,
      colour: '#E74C3C',
      backgroundColour: '#FDFEFE',
    },
  },
  {
    id: 1,
    name: 'warning',
    projectId: 0,
    sendImmediately: false,
    styles: {
      fontSize: 16,
      colour: '#F7DC6F',
      backgroundColour: '#FDFEFE',
    },
  },
  {
    id: 2,
    name: 'standard',
    projectId: 0,
    sendImmediately: false,
    styles: {
      fontSize: 16,
      colour: '#17202A',
      backgroundColour: '#FDFEFE',
    },
  },
  {
    id: 3,
    name: 'Cute dog alert',
    projectId: 0,
    sendImmediately: true,
    styles: {
      fontSize: 48,
      colour: '#17202A',
      backgroundColour: '#FDFEFE',
    },
  },
  {
    id: 4,
    name: 'hi',
    projectId: 0,
    sendImmediately: false,
    styles: {
      fontSize: 16,
      colour: '#17202A',
      backgroundColour: '#FDFEFE',
    },
  },
];

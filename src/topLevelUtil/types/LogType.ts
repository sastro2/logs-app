export type LogType = {
  id: number;
  name: string;
  projectId: number;
  sendImmediately: boolean;
  styles: {
    fontSize: number;
    colour: string;
    backgroundColour: string;
  };
};

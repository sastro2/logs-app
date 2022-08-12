export default class LogManager {
  static inDevelopment: boolean = true;
  static selectedProject: number;

  static setSelectedProject = (projectId: number) => {
    LogManager.selectedProject = projectId;
  };
}

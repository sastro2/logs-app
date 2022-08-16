import { mockProjects } from '../../mockData/mockProjects';
import { Project } from '../../topLevelUtil/types/Project';

export default class LogManager {
  static inDevelopment: boolean = true;
  static selectedProject: Project | undefined;
  static allProjects: Project[] = mockProjects;

  static setSelectedProject = (projectId: Project | undefined) => {
    LogManager.selectedProject = projectId;
  };
}

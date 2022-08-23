import { mockProjects } from '../../mockData/mockProjects';
import { LogType } from '../../topLevelUtil/types/LogType';
import { Project } from '../../topLevelUtil/types/Project';

export default class LogManager {
  static inDevelopment: boolean = true;
  static selectedProject: Project | undefined;
  static allProjects: Project[] = mockProjects;
  static projectTypes: LogType[] | undefined;

  static Init = (project: Project | undefined, projectTypes: LogType[]) => {
    this.setSelectedProject(project);
    this.setProjectTypes(projectTypes);
  };

  static setSelectedProject = (project: Project | undefined) => {
    LogManager.selectedProject = project;
  };
  static setProjectTypes = (projectTypes: LogType[]) => {
    LogManager.projectTypes = projectTypes;
  };
}

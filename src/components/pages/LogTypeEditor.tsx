import { useEffect, useState } from 'react';
import LogManager from '../../_state/general/LogManager';
import { mockTypes } from '../../mockData/mockTypes';
import { LogType } from '../../topLevelUtil/types/LogType';
import { Project } from '../../topLevelUtil/types/Project';
import ProjectNavbar from '../general/ProjectNavbar';
import {
  handlePresetChange,
  saveStyles,
} from './pagesUtil/methods/logTypeEditorMethods';

export default function LogTypeEditor() {
  const [types, setTypes] = useState<LogType[]>(mockTypes);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    LogManager.selectedProject,
  );
  const [selectedType, setSelectedType] = useState<LogType | null>(null);
  useState<string>('');

  if (selectedProject === undefined) {
    window.location.href = 'http://localhost:3000';
  }

  return (
    <main>
      <ProjectNavbar setSelectedProject={setSelectedProject} />
      <section>
        {types.map((type) => {
          return (
            <button
              key={type.name}
              onClick={() => {
                setSelectedType(type);
              }}
            >
              {type.name}
            </button>
          );
        })}
      </section>
      {selectedType ? (
        <section>
          <p
            style={{
              fontSize: selectedType.styles.fontSize,
              color: selectedType.styles.colour,
              backgroundColor: selectedType.styles.backgroundColour,
            }}
          >
            {selectedType.name}
          </p>
          <select
            onChange={(e) =>
              handlePresetChange(
                selectedType,
                setSelectedType,
                e.currentTarget.value,
              )
            }
            defaultValue="presets"
          >
            <option value="presets">Presets</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="standard">Standard</option>
          </select>
          <input
            onChange={(e) =>
              setSelectedType({
                id: selectedType.id,
                name: selectedType.name,
                projectId: selectedType.projectId,
                sendImmediately: selectedType.sendImmediately,
                styles: {
                  fontSize: parseInt(e.currentTarget.value),
                  colour: selectedType.styles.colour,
                  backgroundColour: selectedType.styles.backgroundColour,
                },
              })
            }
            placeholder="Font size"
          />
          <input
            onChange={(e) =>
              setSelectedType({
                id: selectedType.id,
                name: selectedType.name,
                projectId: selectedType.projectId,
                sendImmediately: selectedType.sendImmediately,
                styles: {
                  fontSize: selectedType.styles.fontSize,
                  colour: e.currentTarget.value,
                  backgroundColour: selectedType.styles.backgroundColour,
                },
              })
            }
            placeholder="Font colour"
          />
          <input
            onChange={(e) =>
              setSelectedType({
                id: selectedType.id,
                name: selectedType.name,
                projectId: selectedType.projectId,
                sendImmediately: selectedType.sendImmediately,
                styles: {
                  fontSize: selectedType.styles.fontSize,
                  colour: selectedType.styles.colour,
                  backgroundColour: e.currentTarget.value,
                },
              })
            }
            placeholder="Background colour"
          />
          <button onClick={() => saveStyles(setTypes, types, selectedType)}>
            save
          </button>
        </section>
      ) : null}
    </main>
  );
}

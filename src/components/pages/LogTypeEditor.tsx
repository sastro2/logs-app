import { useRef, useState } from 'react';
import LogManager from '../../_state/general/LogManager';
import { mockTypes } from '../../mockData/mockTypes';
import { LogType } from '../../topLevelUtil/types/LogType';
import { Project } from '../../topLevelUtil/types/Project';
import ProjectNavbar from '../general/ProjectNavbar';
import {
  handlePresetChange,
  resetInputs,
  saveStyles,
} from './pagesUtil/methods/logTypeEditorMethods';

export default function LogTypeEditor() {
  const [types, setTypes] = useState<LogType[]>(mockTypes);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    LogManager.selectedProject,
  );
  const [selectedType, setSelectedType] = useState<LogType | null>(null);
  useState<string>('');

  const logTypeRef = useRef<HTMLHeadingElement>(null);
  const presetSelectRef = useRef<HTMLSelectElement>(null);
  const fontSizeInputRef = useRef<HTMLInputElement>(null);
  const colourInputRef = useRef<HTMLInputElement>(null);
  const backgroundColourInputRef = useRef<HTMLInputElement>(null);

  console.log(logTypeRef.current);

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
                console.log(type.styles);
                resetInputs(
                  presetSelectRef,
                  fontSizeInputRef,
                  colourInputRef,
                  backgroundColourInputRef,
                  logTypeRef,
                );
                setSelectedType({
                  id: type.id,
                  name: type.name,
                  projectId: type.projectId,
                  sendImmediately: type.sendImmediately,
                  styles: {
                    fontSize: type.styles.fontSize,
                    colour: type.styles.colour,
                    backgroundColour: type.styles.backgroundColour,
                  },
                });
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
            ref={logTypeRef}
            style={{
              fontSize: selectedType.styles.fontSize,
              color: selectedType.styles.colour,
              backgroundColor: selectedType.styles.backgroundColour,
            }}
          >
            {selectedType.name}
          </p>
          <select
            ref={presetSelectRef}
            onChange={(e) =>
              handlePresetChange(
                selectedType,
                setSelectedType,
                logTypeRef,
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
            ref={fontSizeInputRef}
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
            ref={colourInputRef}
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
            ref={backgroundColourInputRef}
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

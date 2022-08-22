import { LogType } from '../../topLevelUtil/types/LogType';

type LogTypeListProps = {
  types: LogType[];
};

export default function LogTypeList(props: LogTypeListProps) {
  return (
    <div>
      {props.types.map((type) => {
        return (
          <p
            key={type.name}
            style={{
              fontSize: type.styles.fontSize,
              color: type.styles.colour,
              backgroundColor: type.styles.backgroundColour,
            }}
          >
            {type.name}
          </p>
        );
      })}
    </div>
  );
}

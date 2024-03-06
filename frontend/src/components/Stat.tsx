import Input from "./atoms/Input";

type Stat = {
  label: string;
  skills: DD5.Skill[];
};
type Props = {
  stat: Stat;
  score: number;
  mod: number;
  trainings: string[];
};
export default function Stat({ stat, score, mod, trainings }: Props) {
  return (
    <li className="border-2 flex *:m-4">
      <div>
        <Input label={stat.label} type="number" value={score} />
        <p>{mod}</p>
      </div>
      <ul>
        <li>
          <input
            type="checkbox"
            disabled
            checked={trainings.includes(stat.label)}
            className="mr-2"
          />
          {stat.label} saving throws
        </li>
        {stat.skills.map((skill) => (
          <li key={skill}>
            <input
              type="checkbox"
              disabled
              checked={trainings.includes(skill)}
              className="mr-2"
            />
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
}

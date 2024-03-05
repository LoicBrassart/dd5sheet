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
    <li>
      <p>{stat.label}</p>
      <p>{score}</p>
      <p>{mod}</p>
      <ul>
        <li>
          <input
            type="checkbox"
            disabled
            checked={trainings.includes(stat.label)}
          />
          {stat.label} saving throws
        </li>
        {stat.skills.map((skill) => (
          <li key={skill}>
            <input
              type="checkbox"
              disabled
              checked={trainings.includes(skill)}
            />
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
}

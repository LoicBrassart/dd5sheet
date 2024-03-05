import StatBlock from "@/components/Stat";
import s from "../styles/Sheet.module.css";
import { Character } from "@/entities/Character";

type Skill =
  | "Athletics"
  | "Acrobatics"
  | "Sleight of Hands"
  | "Stealth"
  | "Arcana"
  | "History"
  | "Investigation"
  | "Nature"
  | "Religion"
  | "Animal Handling"
  | "Insight"
  | "Medicine"
  | "Perception"
  | "Survival"
  | "Deception"
  | "Intimidation"
  | "Performance"
  | "Persuasion";

type Stat = {
  label: string;
  skills: Skill[];
};
const stats: Stat[] = [
  {
    label: "Strength",
    skills: ["Athletics"],
  },
  {
    label: "Dexterity",
    skills: ["Acrobatics", "Sleight of Hands", "Stealth"],
  },
  {
    label: "Constitution",
    skills: [],
  },
  {
    label: "Intelligence",
    skills: ["Arcana", "History", "Investigation", "Nature", "Religion"],
  },
  {
    label: "Wisdom",
    skills: [
      "Animal Handling",
      "Insight",
      "Medicine",
      "Perception",
      "Survival",
    ],
  },
  {
    label: "Charisma",
    skills: ["Deception", "Intimidation", "Performance", "Persuasion"],
  },
];

const loic = new Character("Loic");

export default function Home() {
  return (
    <main className={s.sheet}>
      <section className={s.Head}>
        <p>Name: {loic.name}</p>
        <p>Class & Level</p>
        <p>Race</p>
        <p>Background</p>
        <p>Alignment</p>
        <p>Player Name</p>
        <p>Experience points</p>
      </section>
      <section className={s.Stats}>
        <p>Proficiency Bonus</p>
        <p>Inspiration</p>
        <p>Passive Wisdom (Perception)</p>
        <ul>
          {stats.map((stat) => {
            const [base, mod] = loic.getScore(stat.label);

            return (
              <StatBlock
                key={stat.label}
                stat={stat}
                score={base}
                mod={mod}
                trainings={loic.trainings}
              />
            );
          })}
        </ul>
      </section>
      <section className={s.Attacks}></section>
      <section className={s.Misc}>
        <p>Armor Class</p>
        <p>Initiative</p>
        <p>Speex</p>
        <p>Hit Points</p>
        <p>Temporary Hit Points</p>
        <p>Hit Dice</p>
        <p>Death Saves</p>
      </section>
      <section className={s.Features}></section>
      <section className={s.Personnality}>
        <p>Traits</p>
        <p>Ideals</p>
        <p>Bonds</p>
        <p>Flaws</p>
      </section>
      <section className={s.Proficiencies}></section>
      <section className={s.Equipment}></section>
    </main>
  );
}

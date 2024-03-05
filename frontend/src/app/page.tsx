import Stat from "@/components/Stat";
import s from "../styles/Sheet.module.css";
import { Character } from "@/entities/Character";
import {stats} from "@/rules";

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
              <Stat
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
        <p>Speed</p>
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

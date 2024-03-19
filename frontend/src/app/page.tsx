import Stat from "@/components/Stat";
import { Character } from "@/entities/Character";
import { stats } from "@/rules";

const loic = new Character("Loic");

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-3 grid-rows-4 gap-2 [&>*]:border-red-50 [&>*]:border-2">
        <section className="col-span-3">
          <p>Name: {loic.name}</p>
          <p>Class & Level</p>
          <p>Race</p>
          <p>Background</p>
          <p>Alignment</p>
          <p>Player Name</p>
          <p>Experience points</p>
        </section>
        <section className="row-span-2 row-start-2">
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
        <section className="col-start-2 row-start-3"></section>
        <section className="row-start-2 flex flex-col [&>*]:flex [&>*]:justify-evenly">
          <div>
            <p>Armor Class</p>
            <p>Initiative</p>
            <p>Speed</p>
          </div>
          <p>Hit Points</p>
          <p>Temporary Hit Points</p>
          <div>
            <p>Hit Dice</p>
            <p>Death Saves</p>
          </div>
        </section>
        <section className="col-start-3 row-start-3"></section>
        <section className="row-start-2">
          <p>Traits</p>
          <p>Ideals</p>
          <p>Bonds</p>
          <p>Flaws</p>
        </section>
        <section className="row-start-4"></section>
        <section className="col-span-2 row-start-4"></section>
      </main>
    </>
  );
}

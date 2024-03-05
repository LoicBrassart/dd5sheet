declare global {
  namespace DD5 {
    // PAS de const, class

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
  }
}
export {};

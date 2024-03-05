declare global {
  namespace DD5 {

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
}
}
export {}
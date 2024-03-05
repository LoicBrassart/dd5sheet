export class Character {
  #name;
  #str: number;
  #dex: number;
  #con: number;
  #int: number;
  #wis: number;
  #cha: number;
  #trainings: string[];

  constructor(name: string) {
    this.#name = name;
    this.#str = Math.floor(Math.random() * 18) + 1;
    this.#dex = Math.floor(Math.random() * 18) + 1;
    this.#con = Math.floor(Math.random() * 18) + 1;
    this.#int = Math.floor(Math.random() * 18) + 1;
    this.#wis = Math.floor(Math.random() * 18) + 1;
    this.#cha = Math.floor(Math.random() * 18) + 1;
    this.#trainings = ["Strength", "Dexterity", "Stealth"];
  }

  get name() {
    return this.#name;
  }

  get str() {
    return Character.scoreToMod(this.#str);
  }
  get dex() {
    return Character.scoreToMod(this.#dex);
  }
  get con() {
    return Character.scoreToMod(this.#con);
  }
  get int() {
    return Character.scoreToMod(this.#int);
  }
  get wis() {
    return Character.scoreToMod(this.#wis);
  }
  get cha() {
    return Character.scoreToMod(this.#cha);
  }
  get baseStr() {
    return this.#str;
  }
  get baseDex() {
    return this.#dex;
  }
  get baseCon() {
    return this.#con;
  }
  get baseInt() {
    return this.#int;
  }
  get baseWis() {
    return this.#wis;
  }
  get baseCha() {
    return this.#cha;
  }
  get trainings() {
    return this.#trainings;
  }

  getScore(stat: string) {
    let base = NaN;
    let mod = NaN;
    switch (stat) {
      case "Strength":
        base = this.baseStr;
        mod = this.str;
        break;
      case "Dexterity":
        base = this.baseDex;
        mod = this.dex;
        break;
      case "Constitution":
        base = this.baseCon;
        mod = this.con;
        break;
      case "Intelligence":
        base = this.baseInt;
        mod = this.int;
        break;
      case "Wisdom":
        base = this.baseWis;
        mod = this.wis;
        break;
      case "Charisma":
        base = this.baseCha;
        mod = this.cha;
        break;
    }
    return [base, mod];
  }

  isTrained(skill: string) {
    return this.#trainings.includes(skill);
  }

  static scoreToMod(score: number): number {
    return Math.floor((score - 10) / 2);
  }
}

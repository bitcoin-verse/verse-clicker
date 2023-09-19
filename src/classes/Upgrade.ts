class Upgrade {
  name: string;
  cost: number;
  desc: string;
  limit: number;
  owned: boolean;
  special?: number;

  constructor(
    name: string,
    cost: number,
    desc: string,
    limit: number,
    special?: number,
  ) {
    this.name = name;
    this.cost = cost;
    this.desc = desc;
    this.limit = limit;
    this.owned = false;
    this.special = special;
  }

  requirementMet(amount: number) {
    if (amount >= this.limit) {
      return true;
    }
  }
}
export default Upgrade;

class Player {
  cookies: number;
  cookieStats: {
    Earned: number;
    Spent: number;
    Clicked: number;
  };

  aMPF: number;
  aMPC: number;

  constructor() {
    this.cookies = 0;
    this.cookieStats = {
      Earned: 0,
      Spent: 0,
      Clicked: 0,
    };
    this.aMPF = 0;
    this.aMPC = 1;
  }

  earnCookie(amount: number) {
    this.cookies += amount;
    this.cookieStats.Earned += amount;
  }

  spendCookies(amount: number) {
    if (this.cookies >= amount) {
      this.cookies -= amount;
      this.cookieStats.Spent += amount;
      return true;
    }
  }

  clickCookie() {
    this.earnCookie(this.aMPC);
    this.cookieStats.Clicked += this.aMPC;
  }
}

export default Player;

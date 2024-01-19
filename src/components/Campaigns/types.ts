export interface BeforeCampaignJson {
  title: string;
  label1: string;
  label2: string;
  start: string;
  end: string;
  learnMore: string;
  link: string;
}
export interface DuringCampaignJson {
  title: string;
  label1: string;
  label2: string;
  end: string;
  learnMore: string;
  link: string;
  back: string;
  play: string;
}
export interface AfterCampaignJson {
  title: string;
  label2: string;
  leaderboard: string;
  leaderboardTitle: string;
}
export interface CampaignJson {
  title: string;
  before: BeforeCampaignJson;
  during: DuringCampaignJson;
  after: AfterCampaignJson;
}

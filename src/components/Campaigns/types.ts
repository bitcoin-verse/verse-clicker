export interface BeforeCampaignJson {
  title: string;
  label1: string;
  label2: string;
  start: string;
  end: string;
  learnMore: string;
}
export interface DuringCampaignJson {
  title: string;
  label1: string;
  label2: string;
  end: string;
  learnMore: string;
  back: string;
  play: string;
}
export interface AfterCampaignJson {
  title: string;
  label2: string;
  leaderboard: string;
}
export interface CampaignJson {
  title: string;
  image: string;
  before: BeforeCampaignJson;
  during: DuringCampaignJson;
  after: AfterCampaignJson;
}

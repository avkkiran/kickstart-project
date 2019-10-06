import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x627000F204ec3170b64c198D8dd537beDe7860F7"
);

export default instance;

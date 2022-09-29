const { getChainTvl } = require('../helper/getUniSubgraphTvl');

module.exports = {
  timetravel: true,
  polygon:{
    tvl: getChainTvl({
      polygon: 'https://polygon.furadao.org/subgraphs/name/quickswap'
    })('polygon')
  },
    hallmarks:[
    [1611917218, "Aavegotchi LM"],
    [1619095618, "QUICK staking - Dragon's Liar launch"],
    [1619611200, "DeFi season on Polygon PoS begun"],
    [1623851400, "Iron Finance V1 collapse"],
    [1651668418, "QUICK split by 1:1000"],
    [1652481840, "QuickSwap’s GoDaddy Domain Hijack"]
   ]
}

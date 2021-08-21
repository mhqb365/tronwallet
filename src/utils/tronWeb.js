import TronWeb from 'tronweb'

const node = window.location.hostname == 'localhost' ? 'https://api.shasta.trongrid.io' : 'https://api.trongrid.io'

const HttpProvider = TronWeb.providers.HttpProvider
const fullNode = new HttpProvider(node)
const solidityNode = new HttpProvider(node)
const eventServer = new HttpProvider(node)
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer)

export default tronWeb
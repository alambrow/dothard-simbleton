import { grabData } from "./database.js"
import { agentsList } from "./PurchasingAgents.js"

const agentSearchResults = document.querySelector(".foundAgents")

document.querySelector("#agentSearch").addEventListener(
    "keypress",
    keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const businessList = grabData()
            const enteredText = keyPressEvent.target.value.toLowerCase()

            const foundAgent = businessList.find(business => business.purchasingAgent.nameFirst.toLowerCase().includes(enteredText))

            agentSearchResults.innerHTML = agentsList(foundAgent)
        }
    }
)
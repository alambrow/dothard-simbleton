import { dataDisplay } from "./Business.js"
import { grabAgentData, grabData } from "./database.js"
import { agentsList } from "./PurchasingAgents.js"

const companySearchResults = document.querySelector(".foundCompanies")

document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
        const businessList = grabData()
        // const agentList = grabAgentData()

        const enteredText = keyPressEvent.target.value.toLowerCase()
        const foundBusiness = businessList.find(business => business.companyName.toLowerCase().includes(enteredText))
        // const foundAgent = agentList.find(agent => agent.toLowerCase().includes(enteredText))


        companySearchResults.innerHTML = dataDisplay(foundBusiness)
        // companySearchResults.innerHTML = agentsList(foundAgent)
    }
}
)



const contentTarget = document.querySelector(".database")

export const businessList = () => {
    const dataArray = grabData()
    dataArray.forEach(
        (business) => {
            contentTarget.innerHTML += dataDisplay(business)
        }
    );
}
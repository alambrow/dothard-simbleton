import { dataDisplay } from "./Business.js"
import { grabData } from "./database.js"
import { agentDisplay } from "./PurchasingAgents.js"

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


// agent search function (just done by full name)

const agentSearchResults = document.querySelector(".foundAgents")

document.querySelector("#agentSearch").addEventListener(
    "keypress",
    keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const dataArray = grabData()

            const agentsList = dataArray.map(elem => (
                {
                    fullName: elem.purchasingAgent.nameFirst + " " + elem.purchasingAgent.nameLast,
                    company: elem.companyName,
                    phoneNumber: elem.phoneWork
                }
            )
        );

        const enteredText = keyPressEvent.target.value.toLowerCase()

        const foundAgent = agentsList.find(agent => agent.fullName.toLowerCase().includes(enteredText))

        agentSearchResults.innerHTML = agentDisplay(foundAgent)
        }
    }
)
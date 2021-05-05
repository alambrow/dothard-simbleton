import { grabData } from "./database.js";

const dataArray = grabData()

const AgentDataArray = dataArray.map(elem => (
        {
            fullName: elem.purchasingAgent.nameFirst + " " + elem.purchasingAgent.nameLast,
            company: elem.companyName,
            phoneNumber: elem.phoneWork
        }
    )
);

// to display in DOM
const contentTarget = document.querySelector(".agents")

export const agentsList = () => {
    AgentDataArray.forEach(
        (agent) => {
            contentTarget.innerHTML += agentDisplay(agent)
        }
    );
}

const agentDisplay = (agent) => {
    return `
        <section class="customer">
            <h5 class="customer__type">${agent.fullName}</h5>
            <h4>${agent.company}</h4>
            <div>${agent.phoneNumber}</div>
        </section>
    `
}
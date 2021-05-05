import { dataDisplay } from "./Business.js"
import { grabData } from "./database.js"

const companySearchResults = document.querySelector(".foundCompanies")

document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
        const businessList = grabData()

        const enteredText = keyPressEvent.target.value.toLowerCase()
        const foundBusiness = businessList.find(business => business.companyName.toLowerCase().includes(enteredText))

        companySearchResults.innerHTML = dataDisplay(foundBusiness)
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
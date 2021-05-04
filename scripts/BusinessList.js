import { dataDisplay } from "./Business.js"
import { grabData } from "./database.js"

const contentTarget = document.querySelector(".database")

export const businessList = () => {
    const dataArray = grabData()
    contentTarget.innerHTML = "<h2>Customer Database</h2>"

    dataArray.forEach(
        (business) => {
            contentTarget.innerHTML += dataDisplay(business)
        }
    );
}
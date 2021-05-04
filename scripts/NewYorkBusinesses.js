import { grabData } from "./database.js";

const customerArray = grabData()

// filter method applied here to sort out NY businesses
const inNewYork = (business) => {
    if (business.addressStateCode === "NY") {
        return true
    }
    return false
}

const newYorkBusinesses = () => {
    const filteredItems = customerArray.filter(inNewYork)
    return filteredItems
}

// to display in DOM
const contentTarget = document.querySelector(".businessList--newYork")

const newYorkList = newYorkBusinesses()

export const newYorkBusinessList = () => {
    newYorkList.forEach(
        (business) => {
            contentTarget.innerHTML += newYorkDisplay(business)
        }
    );
}

const newYorkDisplay = (business) => {
    return `
        <section class="customer">
            <h2 class="customer__type">${business.companyName}</h2>
            <div>${business.addressFullStreet}</div>
            <div>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</div>
        </section>
    `
}
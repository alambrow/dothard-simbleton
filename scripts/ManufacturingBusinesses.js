import { grabData } from "./database.js";

const customerArray = grabData()

// filter() applied to array to find manufacturers
const isManu = (business) => {
    if (business.companyIndustry === "Manufacturing") {
        return true
    }
    return false
}

const manufactureBusinesses = () => {
    const filteredItems = customerArray.filter(isManu)
    return filteredItems
}

// to display in DOM
const contentTarget = document.querySelector(".businessList--manufacturing")

const manuList = manufactureBusinesses()

export const manuBusinessList = () => {
    contentTarget.innerHTML = "<h2>Customers in Manufacturing</h2>"
    manuList.forEach(
        (business) => {
        contentTarget.innerHTML += manuDisplay(business)
        }
    );
}

const manuDisplay = (business) => {
    return `
        <section class="customer">
            <h3 class="customer__type">${business.companyName}</h3>
            <div>${business.addressFullStreet}</div>
            <div>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</div>
        </section>
    `
}
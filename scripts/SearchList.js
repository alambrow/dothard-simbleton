import { dataDisplay } from "./Business.js";
import { grabData } from "./database.js";

const searchResult = document.querySelector(".foundCompanies")

const dataArray = grabData()

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */
                    // TODO
                    const foundBusiness = dataArray.find(business => business.companyName.includes(keyPressEvent.target.value))

                    searchResult.innerHTML = dataDisplay(foundBusiness)
        });
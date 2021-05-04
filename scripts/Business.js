export const dataDisplay = (business) => {
    return `
        <section class="customer">
            <h2 class="customer__type">${business.companyName}</h2>
            <div>${business.addressFullStreet}</div>
            <div>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</div>
        </section>
    `
}
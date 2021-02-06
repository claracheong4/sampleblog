export function capitalise(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getPhoneText(phone) {
    const phoneStr = phone.toString();
    return phoneStr.substr(0, phoneStr.indexOf(' '));
}

export function getCompanyBsText(companyBs) {
    return companyBs.split(" ").map(x => capitalise(x)).join(" \u2022 ");
}

export function getAddressText(address) {
    const zipText = address.zipcode + "";
    return address.street + ", "
        + address.suite + ", "
        + address.city + " "
        + zipText.substr(0, zipText.indexOf('-'));;
}
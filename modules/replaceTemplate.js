
module.exports = (htmlStr, data)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%NAME%}/g, data.customerName);
    output = output.replace(/{%ID%}/g, data.id);
    output = output.replace(/{%PHONE%}/g, data.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, data.address);
    output = output.replace(/{%AMOUNT%}/g, data.loanAmount);
    output = output.replace(/{%INTEREST%}/g, data.interest);
    output = output.replace(/{%LOANTERM%}/g, data.loanTermYears);
    output = output.replace(/{%TYPE%}/g, data.loanType);
    output = output.replace(/{%DESCRIPTION%}/g, data.description);
    output = output.replace(/{%ID%}/g, data.loanTermYears);
    output = output.replace(/{%CALCULATED%}/g, data.calculated);
    return output;
}
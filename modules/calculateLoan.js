module.exports = (loan) => {
    // compound interest formula
    let a;                      // Final Amount
    let p = loan.loanAmount;    // Initial Principle Balance 
    let r = loan.interest;      // Interest Rate
    let n = 1;                  // Number of times interest applied per period
    let t = loan.loanTermYears  // Number of time periods elapsed
    a = p * Math.pow((1 + (r/n)), n * t);
    return Math.round(a * 100) / 100;
}
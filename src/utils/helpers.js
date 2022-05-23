export const formatPrice = (number) => {
    
    // const newNumber = Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(number /100)
    // return newNumber
    return new Intl.NumberFormat("en-IN", {
       style: "currency",
       currency: "INR",
     }).format(number / 100);

}

export const getUniqueValues = () => {}

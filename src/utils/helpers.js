export const formatPrice = (number) => {
  // const newNumber = Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(number /100)
  // return newNumber
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  // console.log(unique);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

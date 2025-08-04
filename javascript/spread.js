let city = ["indore", "madras", "kulkata", "ellalahabad", "ujjain"];
// let old_city = city;
// let [...old_city] = city;
let old_city = [...city];

city[1] = "chennai";
city[2] = "kolkata";
city[3] = "prayagraj";


console.log(city);
console.log(old_city);



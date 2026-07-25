// obj case destrucuring

const band = {
    bandName: "led zepplin",
    famousSong: "ham safar",
    year : 1960,
    anatherfamousSong :"kashmir",
    

};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// bandName = "queen";
// console.log(bandName,famousSong);

const {bandName, famousSong} = band;
bandName ="queen";
console.log(bandName);

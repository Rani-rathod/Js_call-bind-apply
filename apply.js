
// const youtuber1 = {
//     name : "Thapa",
//     content : "programming",
//     feature : function(rating,support){
//         console.log(`very friendly way of teaching. ${this.name} is my fev ${this.content} channel. I will love to give ${rating} star. Please ${support} ${this.name} channel.`);
//     }
// }
// // youtuber1.feature(5,"subscribe");

// const youtuber2 = {
//     name : "Kuchbhi",
//     content : "programming&log"
// }
// youtuber1.feature.call(youtuber2,[5,"subscribe"]);



let max = Math.max(1,2,3,4);
console.log(max)


let arrMax = Math.max.apply(null,[1,2,3,4,5,6]);
console.log(arrMax)

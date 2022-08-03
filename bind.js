// bind () Method

// By this method, we can bind an object to a common function, so that the function gives diffction result when its need.

// The bind() method takes an object as an first argument and creates a new function.




const youtuber = {
    name : "thapatechnical",
    content : "programming",
    feature :function(){
        console.log(`My fav youtuber is ${this.name}.He made videos on ${this.content} topics. `)
    }
}
// youtuber.feature() 

let youtuberFun2 = youtuber.feature.bind(youtuber);
youtuberFun2()



 



// const youtuber = {
//     name : "thapatechnical1",
//     content : "programming2",
// }


// const youtuber1 = {
//     name : "thapatechnical1",
//     content : "programming2",
// }


// const youtuber2 = {
//     name : "thapatechnical1",
//     content : "programming2",
// }
// function features(rating){
//     console.log(`My fav youtuber is ${this.name}.He made videos on ${this.content} topics. I will love to give ${rating} star.`)
// }

// let you1 = features.bind(youtuber)
// you1(5);
// // features();
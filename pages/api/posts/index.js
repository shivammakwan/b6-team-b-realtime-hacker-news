// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    const post_data= {
statusCode:200,
status:"success",
message:"List of Posts",
data:[{
    id:1,
    title:"deep-dive-cors-history-how-it-works-best-practicesn ",
    postUrl:"https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/",
imageUrl:"https://ieftimov.com/back-to-the-origin-with-cors/malicious-javascript-injection.png",
description:"CORS data",
isActive:true
}]        
}
    res.status(200).json(post_data)
  }

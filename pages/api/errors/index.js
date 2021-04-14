// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    const post= {
statusCode:500,
status:"fail",
message:"Something went wrong",
data:[]        
}
    res.status(500).json(post)
  }

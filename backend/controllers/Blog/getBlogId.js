const Blog = require("../../models/Blog");

exports.getBlogbyID = async(req,res)=>{
    try{
        let {id} = req.params;
        let product = await Blog.findById({_id:id});
        console.log("Fetched successfully");
        res.send(product);
        console.log(product);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}
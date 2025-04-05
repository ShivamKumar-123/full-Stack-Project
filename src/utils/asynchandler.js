const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}




export {asyncHandler}

// const asyncHandler = ()=>{}
// const asyncHandler = (func)=>()=>{}  // pahele wale function ko dusre function me pass kar rahe hai
// const asyncHandler = (func)=>async ()=>{}


// const asyncHandler = (fn)=>async (req,res,next)=>{
//     try {
        
//     } catch (error) {
//         res.status(ree.code || 500.josn({
//             success: false,
//             message: error.message
//         }))
//     }
// }
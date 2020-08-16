const { create, getUserByUserId, getAllUsers } = require('./user.service');

module.exports ={
createUser : (req,res)=>{
                            const body = req.body;
                                create(body,  (err, results)=>{
                                    if(err){
                                        console.log(err);
                                        return res.status(500).json({
                                            success: 0,
                                            message: 'connection error'
                                        })
                                    }
                                    return res.status(200).json({
                                        success: 1,
                                        data: results
                                    })
                                })
                        },

getUserById : (req,res)=>{
                            const id = req.params.id;
                            getUserByUserId(id, (err, results)=>{
                                if(err){
                                    console.log(err)
                                    return res.status(500).json({
                                        success: 0,
                                        message: 'no data didnt get'
                                    })
                                }
                                return res.status(200).json({
                                    success: 1,
                                    data: results
                                })
                            })
                        },
getAllUsers : (req,res)=>{
                    getAllUsers((err,results)=>{
                    if(err){
                        console.log(err)
                        return res.status(500).json({
                            success : 0,
                            message: 'no data'
                        })
                    }
                        return res.status(200).json({
                            success: 1,
                            data: results
                        })
                    })
                }
}

const pool = require('../config/database');



module.exports = { 
    create: (data, callback)=>{
    pool.query(
        `insert into registration (firstname,lastname) values (?,?)`,
        //these 3 parameters are passed 1st  query, 2nd data, 3rd one function
        [
            data.firstname,
            data.lastname
        ],                                                   
            
        (error, results, fields)=>{
                if(error){
                    return callback(results);
                }
                
                return callback(null, results);
            }
        )
    },

    getUserByUserId: (id, callback)=>{
        pool.query(
            `select * from registration where id= ?`,
            [id],
            (error, results, fields) =>{
                if(error){
                    console.log(error)
                }
                return callback(null, results)
            }
            )
    
    },

    getAllUsers: (callback)=>{
            pool.query(
                `select * from registration`,
                [],
                (error, results, fields)=>{
                    if(error)
                    console.log(error)
                    return callback(null,results)
                }
            )
    }
}


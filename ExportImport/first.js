let dbObj = {}

dbObj.users = [
    {
        name:'Alvin',
        city:'Helsinki'
    },
    {
        name:'Sarah',
        city:'Amsterdam'
    }
]

dbObj.dbQuery = {
    find:(table)=> {return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city Values (${data.name}, ${data.city})`}
}

// method;
dbObj.addnum = function(a,b)
{
    return a+b;
}

//Arrow Method;
dbObj.add = (x,y) =>{return x+y}

//es5
// module.exports = dbObj

//es6
export default dbObj;
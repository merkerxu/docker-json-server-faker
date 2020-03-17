var faker = require('faker')

module.exports = () => {
    const data = {users:[], customers:[]};

    //create 20 users
    for (let i=0; i<20; i++) {
        data.users.push({id:i, name:`user${i}`})
    }

    //create 20 customers using faker.sj
    for (let id=0; id<20; id++) {
        let firstName = faker.name.firstName();
        let lastName  = faker.name.lastName();
        let phoneNumber = faker.phone.phoneNumberFormat();

        data.customers.push({
            "id": id,
            "first_name": firstName,
            "last_name": lastName,
            "phone": phoneNumber
        })
    }

    return data;
}


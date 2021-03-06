## docker-json-server-faker
[docker-json-server](https://github.com/clue/docker-json-server) provides a docker  docker image that eases setup of [json-server](https://github.com/typicode/json-server)

docker-json-server-faker adds [faker.js](https://github.com/Marak/faker.js) supprots.

### Getting Start

After getting the json-server-faker image
```
docker build -t json-server-faker .
```
#### 1. using a JSON file datasource 
Create db.json file with some data
```
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "author": "merkerxu",
      "title": "test json-server POST",
      "id": 2
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    },
    {
      "id": 2,
      "body": "some comment too",
      "postId": 2
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```
and start the server
```
docker run -d -v <your data path>:/data -p 80:80 json-server-faker -w db.json
```
You can test the service
```
curl localhost/posts/1
```
#### 2. using a dynamic datasource 
Create index.js 
```
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
```
and start the server
```
docker run -d -v <your data path>:/data -p 80:80 json-server-faker index.js
```
You can test the service
```
curl localhost/customers
```
#### 3. Add routes
Create routes.json
```
{
  "/api/*": "/$1",
  "/:resource/:id/show": "/:resource/:id"
}
```
and start the server
```
docker run -d -v <your data path>:/data -p 80:80 json-server-faker index.js --routes routes.json
```

Want more, move to [Document](https://github.com/typicode/json-server#getting-started)

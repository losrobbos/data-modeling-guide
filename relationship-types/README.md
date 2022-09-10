# Relations

There are 4 main types of relations between data items (=Entities):

- One to One
- One to Few
- One to Many
- Many to Many


## One to One 

One item has exactly one related other item.

Examples: 
- 1 User - 1 Account (one user has exactly one account)
- 1 Order - 1 Delivery Address (one order has exactly one delivery address)


Often NESTING the child data in the parent item is applied.

Example Order - Delivery Address:
```
{
  _id: "12345",
  customer: "Robert Ristock",
  deliveryAddress: {
    street: "Sesame Street",
    nr: 17,
    zipcode: "D-12345"
  }
}
```

### One to Few

One item has LIMITED related (child) items.

Often NESTING the data in the parent is used.

Example social media profile links of a user:

```
{
  "user": {
    "name": "robbos",
    "social-media": [
      { "platform": "facebook", "link": "https://facebook.com/robbos"  }
      { "platform": "twitter", "link": "https://twitter.com/robbos"  }
      { "platform": "instagram", "link": "https://instagram.com/robbos"  }
    ]
  }
}
```


### One to Many

One item can have many, potentially UNLIMITED related items of another one.

Example: A User can have many todos. But each todo only belons to one user.

Technique: Reference related items by their ID.

We can map a One to Many relation in TWO ways.

#### Relation on parent

We can link the parent to its children via an array on the parent item:

User:
```
{
  "user": {
    "_id": "u1"
    "name": "robbos",
    "todos": [ "t1", "t2", "t3", "t4", "t5 ],
  }
}
```

Implementation in Mongoose (User Schema): 
``` 
todos: [ { type: mongoose.Types.ObjectId, ref: "Todo" } ]
```

#### Relation on child

We can link each child item to its parent by placing an ID.

Todos:
```
[
  { _id: "t1", title: "Wake the dog", userId: "u1" },
  { _id: "t2", title: "Clean the dishes", userId: "u1" },
  { _id: "t3", title: "Learn Python", userId: "u1" },
  { _id: "t5", title: "Learn Relations", userId: "u1" },
]
```

Implementation in Mongoose (Todo Schema):
``` 
user: { type: mongoose.Types.ObjectId, ref: "User" } 
```

Which technique to choose?

The easier method to manage related data is to put the parent ID in the CHILD schema. In this case placing the userId in the Todo Schema.

Why? 

In case we want to add or delete a todo, we can simply remove it. We do not need to update the user model.

But in case we use the array of related todo IDs on the parent schema (=User), we always need to update the user model too after each creation / deletion of a todo. So this we we always need to do multiple database operations.


## Many to Many

Many to Many: One Item A can have MANY of the other item B AND one item B can have many items of A

Technique: Reference items by ID

Examples:
- Book and Authors => one book can be written by many authors. One author can write many books
- Product Customer => one Product can be bought by MANY customers. One customer can buy MANY products
- Employee Project => one Employee can be in many projects. One projects can have many employees
- User Todos => one user can have many todos. One todo can be shared by many users

Implementation in Mongoose - Example Employee Projects: 
```
 Employee Model:
 projects: [ { type: mongoose.Types.ObjectId, ref: "Project" } ]

 Project Model:
 employees: [ { type: mongoose.Types.ObjectId, ref: "Employee" }]
```

So here we need to create arrays of related items on both directions.

That relationship type is the hardest to manage.

Alternatively we can create another Collection where we store MAPPINGS between two items:

ProjectEmployeeSchema:
```
project: { type: mongoose.Types.ObjectId, ref: "Project" },
emmployee: { type: mongoose.Types.ObjectId, ref: "Employee }

```

In case we assign an employee to a project, we would create an entry in that mapping table, placing the ID of the project and the ID of the employee in it.

This way we can realize a many to many relationship, which is easy to maintain.

In case we wanna remove an employee from a project, we simply delete the entry from the mapping collection.

In case we close a project, we can delete all entries with that project-id from the mappings collection and release all employees this way.

In either way: We just need to touch the mapping table to manage the relations.



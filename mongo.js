const mongoose = require('mongoose')


// mongodb username = bassam password = KXkwXMyu2hROsxRs

// cmd: node mongo.js KXkwXMyu2hROsxRs

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}



const password = process.argv[2]

const name2 = process.argv[3]

const uNumber = process.argv[4]

const url = `mongodb+srv://bassam:${password}@cluster0.cbawzd4.mongodb.net/phonebookDB?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name2: String,
  date: Date,
  number: Number,
})

const Person = mongoose.model('Person', personSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    Person.find({}).then(result => {
      result.forEach(person => {
        console.log(person)
      })
      mongoose.connection.close()
    })

    // const person = new Person({
    //   name: name,
    //   date: new Date(),
    //   number: uNumber
    // })
    // person.save().then(result => {
    //     console.log(`added ${name} ${uNumber} to phonebook`)
    //     mongoose.connection.close()
    //   })
  })

  .catch((err) => console.log(err))
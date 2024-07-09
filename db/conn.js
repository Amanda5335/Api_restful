const mongoose = require("mongoose")

async function main() {
  try {
    mongoose.set("strictQuery", true)

    await mongoose.connect(
      "mongodb+srv://amanda:WmkTpNC4PJBXbW1r@cluster0.sqzs4v1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )

    console.log("Conectado ao banco!")
  } catch (error) {
    console.log(`ERRO: ${error}`)
  }
}

module.exports = main

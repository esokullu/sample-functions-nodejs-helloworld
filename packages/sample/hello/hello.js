function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Merhaba ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main

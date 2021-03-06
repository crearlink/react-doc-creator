const path = require('path')

const Command = require('./command')


const template = path.join(__dirname, '..', 'templates', 'markdown.handlebars')


exports.loadConfig = () => ({
  source: Command.args[0] ? Command.args[0] : 'src',
  extensions: Command.extension,
  ignore: Command.ignore,
  exclude: Command.exclude,
  template,
  title: Command.title,
  output: Command.out,
})

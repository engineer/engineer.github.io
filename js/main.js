// Terminal methods

var MESSAGES = {
  blog: "https://medium.com/@engineer",
  coderwall: "https://coderwall.com/casanova",
  github: "https://github.com/engineer",
  help: "available commands are blog, coderwall, github, help, linkedin, twitter, whoami",
  linkedin: "https://www.linkedin.com/in/pablocasanova",
  twitter: "https://twitter.com/csnv_",
  unknown: "command not found: ",
  whoami: "Bohemian Mexican kiddo become software engineer living in Guadalajara and Mérida. \nCurrently as a Project manager and tester at University of Guadalajara for the  government dependence project of the Secretaria of Communications and Transportation | México Conectado. \nI like play with javascript (nodejs) and many frontend stuff, born and raised with PHP also fan of Ruby & RoR"
};

var OPTIONS = {
  greetings: "type help to see available commands",
  onBlur: function() { return false; },
  prompt: "Pablo@HackBook ~ $ "
};

function help(term) {
  term.echo(MESSAGES.help);
}

function unknown(command, term) {
  term.error(MESSAGES.unknown + command);
  help(term);
}

// On document ready:

$(function() {

  // Initialize jQuery terminal
  $('body').terminal(function(command, term) {
    if (command in MESSAGES)
      term.echo(MESSAGES[command]);
    else
      unknown(command, term);
  }, OPTIONS);

});

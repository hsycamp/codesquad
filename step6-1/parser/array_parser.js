class Node {
  constructor(type, value) {
    this.type = type;
    this.value = value;
    this.child = [];
  }
}

class Tokenizer {
  tokenize(str) {
    str = str.replace(/\s/g, "");
    str = str.replace(/\[/g, "[,");
    str = str.replace(/\]/g, ",]");
    return str.split(",");
  }
}

class Lexer {}

class ArrayParser {
  constructor(tokenizer, lexer) {
    this.tokenizer = tokenizer;
    this.lexer = lexer;
  }
}

const tokenizer = new Tokenizer();
const lexer = new Lexer();
const arrayParser = new ArrayParser(tokenizer, lexer);

const str = "[123, 22, 33]";
console.log(tokenizer.tokenize(str));
// const result = arrayParser.arrayParse(str);
// console.log(JSON.stringify(result, null, 2));

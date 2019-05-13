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

class Lexer {
  lex(token) {
    if (token === "[") return new Node("array");
    if (token === "]") return new Node("endOfArray");
    return new Node("number", Number(token));
  }
}

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
// const result = arrayParser.arrayParse(str);
// console.log(JSON.stringify(result, null, 2));

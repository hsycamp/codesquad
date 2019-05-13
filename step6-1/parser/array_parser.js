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
    this.queue = [];
  }

  arrayParse(parentNode) {
    while (this.queue.length) {
      const currentNode = this.queue.shift();
      let lexedCurrentNode = this.lexer.lex(currentNode);
      if (lexedCurrentNode.type === "endOfArray") return parentNode;
      if (lexedCurrentNode.type === "array") {
        lexedCurrentNode = this.arrayParse(lexedCurrentNode);
      }
      parentNode.child.push(lexedCurrentNode);
    }
  }

  startParsing(str) {
    this.queue = tokenizer.tokenize(str);
    const rootNode = this.queue.shift();
    const lexedRootNode = this.lexer.lex(rootNode);
    return this.arrayParse(lexedRootNode);
  }
}

const tokenizer = new Tokenizer();
const lexer = new Lexer();
const arrayParser = new ArrayParser(tokenizer, lexer);

const str = "[123, 22, 33]";
const result = arrayParser.startParsing(str);
console.log(JSON.stringify(result, null, 2));

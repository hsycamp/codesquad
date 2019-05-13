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
const str1 = "[1, 2, 3, [4, 5], 6, [7, 8], 6]";
const str2 = "[1, [2, [3, [4, [5, 6], 7], 8], 9], 10]";

const result = arrayParser.startParsing(str);
const result1 = arrayParser.startParsing(str1);
const result2 = arrayParser.startParsing(str2);

console.log(JSON.stringify(result, null, 2));
console.log(JSON.stringify(result1, null, 2));
console.log(JSON.stringify(result2, null, 2));

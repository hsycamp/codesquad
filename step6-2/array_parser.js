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
    if (token === "true" || token === "false")
      return new Node("boolean", token);
    if (token === "null") return new Node("null", token);
    if (this.isString(token) && this.isValidString(token))
      return new Node("string", token);
    if (!isNaN(token)) return new Node("number", Number(token));
    throw Error(`${token}은 알수 없는 타입입니다.`);
  }
  isString(token) {
    return token.startsWith("'") && token.endsWith("'");
  }
  isValidString(token) {
    if (token.substring(1, token.length - 1).split("'").length != 1) {
      throw Error(`${token}은 올바른 문자열이 아닙니다.`);
    }
    return true;
  }
}

class ArrayParser {
  constructor() {
    this.tokenizer = new Tokenizer();
    this.lexer = new Lexer();
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
    this.queue = this.tokenizer.tokenize(str);
    const rootNode = this.queue.shift();
    const lexedRootNode = this.lexer.lex(rootNode);
    return this.arrayParse(lexedRootNode);
  }
}

const arrayParser = new ArrayParser();

const str = "[123, 22, 33]";
const str1 = "[1, 2, 3, [4, 5], 6, [7, 8], 6]";
const str2 = "[1, [2, [3, [4, [5, 6], 7], 8], 9], 10]";
const str3 = "['1a3',[null,false,['11',[112233],112],55, '99'],33, false]";
const str4 = "['1a'3',[null,false,['11',[112233],112],55, '99'],33, false]";
const str5 = "[33 ,1,['22',23,[11,[112233],112],55],'33',3d3]";

const result = arrayParser.startParsing(str);
const result1 = arrayParser.startParsing(str1);
const result2 = arrayParser.startParsing(str2);
const result3 = arrayParser.startParsing(str3);
const result4 = arrayParser.startParsing(str4);
const result5 = arrayParser.startParsing(str5);

console.log(JSON.stringify(result, null, 2));
console.log(JSON.stringify(result1, null, 2));
console.log(JSON.stringify(result2, null, 2));
console.log(JSON.stringify(result3, null, 2));
console.log(JSON.stringify(result4, null, 2));
console.log(JSON.stringify(result5, null, 2));

class CustomTokenizer {
  constructor() {
    this.vocab = {};
    this.reverseVocab = {};
    this.specialTokens = {
      PAD: "<PAD>",
      UNK: "<UNK>",
      START: "<START>",
      END: "<END>"
    };
    this.tokenIndex = 0;
    this._addSpecialTokens();
  }

  _addSpecialTokens() {
    for (const token of Object.values(this.specialTokens)) {
      this._addToken(token);
    }
  }

  _addToken(token) {
    if (!(token in this.vocab)) {
      this.vocab[token] = this.tokenIndex;
      this.reverseVocab[this.tokenIndex] = token;
      this.tokenIndex++;
    }
  }

  learnVocab(text) {
    const words = text.split(/\s+/);
    for (const word of words) {
      this._addToken(word.toLowerCase());
    }
  }

  encode(text) {
    const words = text.split(/\s+/);
    const tokens = [this.vocab[this.specialTokens.START]];
    for (const word of words) {
      const token = this.vocab[word.toLowerCase()] ?? this.vocab[this.specialTokens.UNK];
      tokens.push(token);
    }
    tokens.push(this.vocab[this.specialTokens.END]);
    return tokens;
  }

  decode(tokens) {
    const words = tokens.map(token => this.reverseVocab[token] ?? this.specialTokens.UNK);
    return words.filter(word => !Object.values(this.specialTokens).includes(word)).join(" ");
  }

  getVocab() {
    return this.vocab;
  }

  displayVocab(format = "json") {
    if (format === "json") {
      return JSON.stringify(this.vocab, null, 2);
    } else if (format === "table") {
      console.table(this.vocab);
    } else {
      for (const [word, index] of Object.entries(this.vocab)) {
        console.log(`${index}: ${word}`);
      }
    }
  }
}


/*

output : 

Encoded: [2, 9, 6, 3]
Decoded: hello tokenizer

  (index)      Values     
├─────────┼────────────────┤
│    0    │    '<PAD>'     │
│    1    │    '<UNK>'     │
│    2    │   '<START>'    │
│    3    │    '<END>'     │
│    4    │    'hello'     │
│    5    │    'world!'    │
│    6    │  'this'        │
│    7    │    'is'        │
│    8    │    'a'         │
│    9    │  'custom'      │
│   10    │ 'tokenizer.'   │
│   11    │ 'tokenizer'    │



*/
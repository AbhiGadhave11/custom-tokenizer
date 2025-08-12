Added readme

** Overview ** 
This project implements a lightweight, customizable tokenizer in JavaScript that can learn vocabulary from raw text, encode text into token sequences, decode tokens back into readable text, and handle special tokens for NLP tasks. It’s ideal for educational purposes, prototyping, and lightweight NLP applications.

🧩 API Reference
learnVocab(text: string)
Builds vocabulary from the given text.

encode(text: string): number[]
Encodes text into a list of token IDs.

decode(tokens: number[]): string
Decodes token IDs back into readable text.

getVocab(): object
Returns the current vocabulary as a key-value map.

displayVocab(format: string)
Displays vocabulary in json, table, or console format.

INput : hello tokenizer
Encoded: [2, 9, 6, 3]
Decoded: hello tokenizer

 (index)       Values     

    0    ->     '<PAD>'     
    1    ->    '<UNK>'     
    2    ->   '<START>'    
    3    ->    '<END>'     
    4    ->    'hello'     
    5    ->    'world!'    
    6    ->  'this'        
    7    ->    'is'        
    8    ->    'a'         
    9    ->  'custom'      
    10    -> 'tokenizer.'   
    11    -> 'tokenizer'    


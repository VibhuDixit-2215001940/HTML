// ✨✨// JS is single threaded or multithreaded? --> single threaded
// strictly types or dyanamically types --> lightweight
// weakly typed --> weakly typed
// interpreted compiled programming language
// <!-- It is also known as the scripting language for webpages. 

//The shortest code in js is empty file without single character in it.

//Wenever a JS code is run a gloabal execution context (GEC) is created inside that GEC we have 2 phases 
//1. MCP --> MEMORY CREATION PHASE
//2. CEP --> CODE EXCECUTION PHASE

let a = 10;
console.log(a);
function hello(){
    console.log("hii");
}
hello();

//1. MCP --> MEMORY CREATION PHASE✨✨
//Before execution of a code all code is copied to MCP(skimming out variable)--> a,hello{}     doesn't go inside f()
//Here every variable as well as function get temporary value as undefined!!

//2. CEP --> CODE EXCECUTION PHASE✨✨
//It starts when MCP ends.
//Here now from top to bottom starts executing code one by one.
//Also includes the change of value from unefined to actual value.
//Whenever a f() is called a new execution context is created with the name of the f() which also has two phases ((same as above i.e. MCP & CEP))
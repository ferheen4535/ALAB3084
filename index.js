//Use arrays to store ordered lists of data.
//Use objects to store keyed lists of data.
//Use conditional logic to process data.
//Use loops to handle repetitive tasks.
//Transform data according to specifications.

console.log("PART 1");
console.log("----")

// let csv = Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232
 let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"; 

console.log("----")
console.log("PART 2");
console.log("----")

let rows = csv.split('\n'); //split the data into rows by ,//
console.log(rows);

let head = rows[0].split(',');
console.log(head);

let numCol = head.length;
console.log('Number of columns: ${numCol}');

let twoDArray = rows.map(i => i.split(",")); //looping through the rows and splitting by commas//
let catchtwoDArray = twoDArray;
console.log(twoDArray);

console.log("----")
console.log("Part 3")
console.log("----")



//part3//

//empty object array//

let empty = []
for (let i = 1; i < twoDArray.length; i++) {
    let object = {}  
  for (let c = 0; c < numCol; c++) {
      object [head[c] ]= twoDArray [i] [c];
       
  }
   empty.push(object)

  
}
console.log(empty);

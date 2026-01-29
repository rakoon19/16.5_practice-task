const studentDetails = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90}
]

for(let student of studentDetails){
    console.log(student['name'] , 'scored', student['marks']);
}

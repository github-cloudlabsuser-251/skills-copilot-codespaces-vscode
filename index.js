// Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
  
     const data = [
      [{ name: 'John' }, { name: 'Jane' }],
      [{ name: 'Bob' }]
     ];
     const names = data.map((group) => {
       return group.map((person) => {
         return person.name;
    });
    });
    console.log(names.flat());

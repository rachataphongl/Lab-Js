const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

  //deleteTask (id)

  function deleteTask(id) {
    let foundIndex = tasks.findIndex((item) => item.id === id)

    if(foundIndex !== -1) {
        tasks.splice(foundIndex, 1);
    }
  }
  deleteTask(2);
  console.log(tasks);


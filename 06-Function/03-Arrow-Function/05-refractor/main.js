const ask = (qauestion, yes, no) => {
    if(confirm(qauestion)) {
       return yes();
    }else {
        return no();
    }
}

ask('Do you agree?', 
  function () { alert('You agreed.'); },
  function () { alert('You canceled the execution.'); }
);

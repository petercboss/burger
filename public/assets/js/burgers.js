$(() => { 
    $('.create-burger').on('click', (event) => {
        event.preventDefault();
        $.post('/api/burgers', { burger_name: $('#burger').val().trim() }, () => {
            location.reload();
        });
    });

    $('.devour').on('click', (event) => {
        let id = $(this).data('id');
        console.log(id);
        $.ajax('/api/burgers/' + id, {
            type: 'PUT', 
         }).then(() => {
            console.log('changed devoured to true');
            location.reload();
        });
      });
  
    $('.delete').on('click', (event) => {
        let id = $(this).data('id');
        console.log(id);
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
          }).then(() => {
              console.log('deleted burger', id);
              location.reload();
        });
    });
});
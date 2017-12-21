$(document).ready(function(){
    $('#submit').click(function(event){
        event.preventDefault();
        var todoText = $('#todo').val();
        addTodo(todoText);
    });

    $('')

    function addTodo(todoText) {
        if(todoText) {
          $('#todo-list').append("<li class='d-flex'><span class='flex-item-1'>" + todoText + "</span><button class ='btn btn-success btn-sm'><i class='fa fa-check'></i></button></li>");
          $('#todo').val("");
        }
    }
})//End Document ready

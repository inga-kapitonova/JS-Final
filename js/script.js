/*new task div visibility*/

$(document).ready( function() {
  
    $('.add-new').click(function(e){
      e.stopPropagation();
     if ($(this).hasClass('active')){
       $('.todo-form').fadeOut(100);
       $(this).removeClass('active');
     }     
     else {
       $('.todo-form').delay(10).fadeIn(100);
       $(this).addClass('active');
     }
     });
     
    function closeMenu(){
        $('.todo-form').fadeOut(100);
        $('.add-new').removeClass('active');  
    }
        
    $(document.body).click( function(e) {
            closeMenu();
    });
    
    $(".todo-form").click( function(e) {
        e.stopPropagation();
    });

    $(".todo-form--close").click( function(e) {
        $('.todo-form').fadeOut(100);
        $(this).removeClass('active');
    });
});

/*new task */

$(document).ready(function($) {
    $(".todo-form form").submit(function() {
        if ($(".todo-form--text").val() !== '') {
            let todoText = $(".todo-form--text").val();
            var newItem = $('<li class="listItem"><span contenteditable="true" class="listContent"><pre>' + todoText + '</pre></span><a class="mark-done" href="#"><i class="fas fa-check"></i></a><a class="mark-delete" href="#"><i class="fas fa-trash-alt"></i></a></li>');       
            $(".listContainer").prepend(newItem);

            $(".mark-done").click(function() {
                $(this).parent().addClass("done");
            });

            $(".mark-delete").click(function() {
                $(this).parent().remove();
            });

            $(".listItem").bind("contextmenu",function(e){
                return false;
            });

            $(".todo-form--text").val('');
            return false;
        }
    });
    $(".listContainer").sortable();
});

/*clear all button*/

$(".clear-all").click(reset);

function reset() {
  $(".listContainer").html("");
  i = 0;
  localStorage.clear();
}

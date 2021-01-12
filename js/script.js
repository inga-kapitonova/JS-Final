let form = $(".todo-form");

/*new task div visibility*/

$(function() {
     $(".add-new").click(function() {
        form.addClass("active");
    }); 
});

$(function() {
    $(".todo-form--close").click(function() {
        form.removeClass("active");
   });
});


/*new task */

$(function () {
    $('.todo-form--btn').click(function () {
        let todoText = $('.todo-form--text').val();

        $('<li class="listItem"><span contenteditable="true" class="listContent"><pre>' + todoText + '</pre></span><a class="mark-done" href="#"><i class="fas fa-check"></i></a><a class="mark-delete" href="#"><i class="fas fa-trash-alt"></i></a></li>').prependTo('.listContainer');


        $('.todo-form--text').val("");

        $(".mark-done").click(function() {
            $(this).parent().toggleClass("done");
        });

        $(".mark-delete").click(function() {
            $(this).parent().remove();
        });
    });   
});



/*clear all button*/

$(function() {
    $(".clear-all").click(function() {
        $(".listItem").remove();
        localStorage.clear();
    }); 
});

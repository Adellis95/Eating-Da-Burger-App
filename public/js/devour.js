// make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // Click event for adding burger.
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // Grab burger name from form field.
      // When user submits burger name, set devoured state to false.
      let newBurger = {
        burger_name: $("#newBurger")
          .val()
          .trim(),
        devoured: 0
      };
      // Send the post request using ajax
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Created New Burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
    //   Click event for "Devour me" button
    $(".eatBurger").on("click", function(event) {
      let id = $(this).data("id");
      let eat = $(this).data("eat");
  
      let newEatState = {
        devoured: 1
      };
      //    Send the PUT request using ajax
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
        // data: JSON.stringfy(newEatState),
        // contentType: "application/json"
      }).then(function() {
        console.log("changed devour to", eat);
        // Reload the page to get the updated list
        location.reload();
      });
    });
});
  
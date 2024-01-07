const disabledKeys = ["c", "C", "x", "J", "u", "I"]; // keys that will be disabled
      const showAlert = e => {
        e.preventDefault(); // preventing its default behaviour
        return alert("Sorry, you can't view or copy source codes this way! credit by: @akmalrdnn");
      }
      document.addEventListener("contextmenu", e => {
        showAlert(e); // calling showAlert() function on mouse right click
      });
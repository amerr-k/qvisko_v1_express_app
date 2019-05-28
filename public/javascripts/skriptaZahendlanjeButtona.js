// console.log("poziva se");
// document.getElementById("button_id").addEventListener("click", function(){
//     var r = new XMLHttpRequest();
//     r.open("get", "/kviz", true);
//     r.onreadystatechange = function () {
//       if (r.readyState != 4 || r.status != 200) return;
//       alert("Success: " + r.responseText);
//     };
//     r.send("banana=yellow");
//   });

// $('#button_id').on('click', function() {
//     $.ajax({
//       type: 'get',
//       url: '/kviz',
//       data: { ID: 'someid' },
//       success: function(resultData) {
//          $("#div_id").html(resultData);
//       }
//     });
// });
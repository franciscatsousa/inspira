document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var alert = document.getElementById("warning");
    var span = document.querySelector(".close");

    alert.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     var modal = document.getElementById("myModal");
//     var alert = document.getElementById("warning");
//     var span = document.querySelector(".close");

//     alert.onclick = function () {
//         modal.style.display = "block";
//         document.body.style.top = `-${window.scrollY}px`;
//         document.body.style.position = 'fixed';
//     }

//     span.onclick = function () {
//         modal.style.display = "none";
//         document.body.style.position = '';
//         document.body.style.top = '';
//         const scrollY = document.body.style.top;
//         document.body.style.position = '';
//         document.body.style.top = '';
//         window.scrollTo(0, parseInt(scrollY || '0' )* -1);
//     }

//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// });
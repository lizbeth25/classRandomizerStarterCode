$(document).ready(function(){
    var students = ["Monserrat, Adonis, Maria, Leslie, David"];
    $("#studentButton").click(function(){
        var randomStudents = Math.floor(Math.random()* students.length);
        $("#studentDisplay").html(students[randomStudents]);
});
    var teachers = ["Alyxe, Justin, Zack, Julia, Aaron"];
    $("#teacherButton").click(function(){
        var randomTeachers = Math.floor(Math.random()* teachers.length);
        $("#teacherDisplay").html(teachers[randomTeachers]);
});
});
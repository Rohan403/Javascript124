/*
var a = {};
console.log(typeof a);
var b=[];
console.log(typeof b);
*/
//STUDENT DETAILS
/*
var student = {
    'name': "Niladri Pal", 'id':1 , 'class':"December21 Web Fundamentals", 'marks':100 , 'HomeTown':"Odisha"
};
console.log(student);
console.log(student['name']);
//update
student['hometown'] = "Mumbai";
console.log(student['hometown']);
console.log(student['name'],student['id'],student['hometown'],student['class']);
//Another way to access for objects we use dot operator
console.log(student.name,student.id);
*/
var v = {
    'name':"Rohan", 'title':"Pal"
}
//Object.freeze(v);//Here we are trying to change but it not changes due to this syntax.
v.name = "hhfurgg";
console.log(v);
console.log(delete v.title);
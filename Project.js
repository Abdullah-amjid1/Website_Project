function getName()
{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementsByClassName("gender").value;
    alert("Hi, "+ firstName + " " + lastName + "\nGender: " + gender );


}
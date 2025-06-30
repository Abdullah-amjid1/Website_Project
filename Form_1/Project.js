function getName()
{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.querySelector(".gender:checked").value;

    if(firstName === " " || lastName === " " || !gender)
    {
        alert("Fill all the fields and select the gender")
    }
    else
    {
        alert("Hi, "+ firstName + " " + lastName + "\nGender: " + gender);
    }


}
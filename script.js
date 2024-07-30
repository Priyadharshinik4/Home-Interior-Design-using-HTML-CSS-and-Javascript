function validationform(){
    var firstname = document.validateform.firstname.value;
    var lastname = document.validateform.lastname.value;
    var city = document.validateform.city.value;
    var phoneno = document.validateform.phoneno.value;
    var email=document.validateform.email.value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(firstname==null || firstname=="")
    {
        window.alert("firstname can't be blank");
        return false;
    }
    else if(lastname==null || lastname=="")
    {
        window.alert("lastname can't be blank");
        return false;
    }
    else if(city==null || city=="")
    {
        window.alert("city can't be blank");
        return false;
    }
    else if(phoneno==null || phoneno=="")
    {
        window.alert("phoneno can't be blank");
        return false;
    }
    else if(email==null || email=="" || !regex.test(email))
    {
        window.alert("email can't be blank");
        return false;
    }
    else
    {
        window.alert("Form Submited Successfully");
        return true;
    }
}






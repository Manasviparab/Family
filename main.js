var images=
        ["https://drive.google.com/file/d/1cghM7gnwcoD0MDpq97rkAU0_THmzu0cd/view?usp=sharing",
        "https://web.whatsapp.com/3d3d6929-4f18-49a4-875f-04ebe5e11ce1",
        "https://web.whatsapp.com/7652fafe-9100-4ee6-b6e2-2e1725559907"];
    
        var names=["Swati Parab","Manasvi Parab","Kishor Parab"];
    
var i= 0;
function update()
{
    i++;
    var number_of_family_member_in_array =3;
    if(i > number_of_family_member_in_array)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("Family").src = updatedImage;
    document.getElementById("Familyid").innerHTML = updatedName;
}
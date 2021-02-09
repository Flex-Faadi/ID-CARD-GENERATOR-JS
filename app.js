

function PreviewData() {
    let inName=document.getElementById("inName").value;
    let inId=document.getElementById("inId").value;
    let inYear=document.getElementById("inYear").value;
    let InbirthDate=document.getElementById("InbirthDate").value;
    let Infield=document.getElementById('Infield').value;





    let name=document.getElementById("name");
    let date=document.getElementById("date")
    let year=document.getElementById("year")
    let department=document.getElementById("department")
    let id=document.getElementById("id")


    name.innerHTML=inName;
    date.innerHTML=InbirthDate;
    year.innerHTML=inYear;
    department.innerHTML=Infield;
    id.innerHTML=inId

}

function LoadImage(event){
    let image=document.getElementById("imageDisplayed");
    image.src=URL.createObjectURL(event.target.files[0]);
}


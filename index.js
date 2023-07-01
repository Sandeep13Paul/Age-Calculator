const btnEl = document.getElementById('btn')
const nam = document.getElementById('name')
const ages = document.getElementById("dates")
const res = document.getElementById('result')

function calculator() {
    const namValue = nam.value;
    const agesValue = ages.value;

    if(namValue === "" || agesValue === "") {
        alert("enter the contents properly")
    }
    else {
        const age = getage(namValue,agesValue)
    }
}
function getage(namValue,agesValue) {
    const birthdayDate = new Date(agesValue)
    const currentDate = new Date()
    if(birthdayDate.getFullYear() > currentDate.getFullYear()) {
        alert("enter the details correctly")
        setTimeout(()=> {
            window.location.reload(true)
        } ,1000)
    }
    else {
    let x = currentDate.getFullYear() - birthdayDate.getFullYear() - 1;
    if ((birthdayDate.getMonth()+1) > (currentDate.getMonth()+1)){
        let y = birthdayDate.getMonth() + currentDate.getMonth() - 1;
        res.innerHTML = namValue + "'s age is " + x + " years ";
        setTimeout(()=> {
            window.location.reload(true)
        } ,4000)
    }
    else {
        let y = currentDate.getMonth() - birthdayDate.getMonth() - 1;
        if((birthdayDate.getMonth()+1) < (currentDate.getMonth()+1)) {
            res.innerHTML = namValue + "'s age is " + (x+1) + " years";
            setTimeout(()=> {
                window.location.reload(true)
            } ,4000)
        }
        else {
            if ((birthdayDate.getDate()) > (currentDate.getDate())){
                res.innerHTML = namValue + "'s age is " + (x) + " years";
                setTimeout(()=> {
                    window.location.reload(true)
                } ,4000)
            }
            else{
                res.innerHTML = namValue + "'s age is " + (x+1) + " years";
                setTimeout(()=> {
                    window.location.reload(true)
                } ,4000)
            }
        }
        
    }
    }
}

btnEl.addEventListener("click",calculator)



const getcolor =()=>{
    const rendomcolor=Math.floor(Math.random() * 16777215);
    const rendomcode="#" + rendomcolor.toString(16);
    console.log(rendomcolor, rendomcode);
    document.getElementById('code').innerText=rendomcode;
    document.body.style.backgroundColor=rendomcode;
}

document.getElementById('btn').addEventListener('click',getcolor);



getcolor();
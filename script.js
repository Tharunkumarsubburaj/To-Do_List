document.addEventListener("DOMContentLoaded", () => {
    const addbtn = document.querySelector("#add");
    const inputValue = document.querySelector("#value");
    const list = document.querySelector(".listbox");
    const removebtnicon = '<ion-icon name="trash-outline"></ion-icon>';
    const donebtnicon = '<ion-icon name="checkmark-done-outline"></ion-icon>';

    addbtn.addEventListener("click", () => {
        if (inputValue.value.trim() === "") {
            alert("Enter a task.");
            return;
        }

        const textdiv = document.createElement("div");
        textdiv.classList.add("parabox");
        list.appendChild(textdiv);

        const para = document.createElement("p");
        para.innerText = inputValue.value;
        para.classList.add("paravalue");
        textdiv.appendChild(para);

        const logodiv = document.createElement("div");
        logodiv.classList.add("logobox");
        textdiv.appendChild(logodiv);

        const donebtn = document.createElement("button");
        donebtn.innerHTML = donebtnicon;
        donebtn.classList.add("donebtn");
        logodiv.appendChild(donebtn);

        donebtn.addEventListener("click", () => {
            para.style.textDecoration = "line-through";
            para.style.color = "gray";
            donebtn.style.backgroundColor = "gray";
            donebtn.style.pointerEvents = "none";
        });

        const removebtn = document.createElement("button");
        removebtn.innerHTML = removebtnicon;
        removebtn.classList.add("removebtn");
        logodiv.appendChild(removebtn);

        removebtn.addEventListener("click", () => {
            list.removeChild(textdiv);
        });

        inputValue.value = ""; // Clear the input field

    })

});
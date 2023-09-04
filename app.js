        let removeButton;
        let modifyButton;
        function addItem() {
            const inputField = document.querySelector(".myinput");
            const inputValue = inputField.value.trim();

            if (inputValue !== "") {
                const newItemDiv = document.createElement("div");
                newItemDiv.classList.add("cart-content-item");

                // remove but
                const removeButton = document.createElement("button");
                removeButton.innerHTML = '<i class="fas fa-times"></i>'; // Font Awesome "times" icon
                removeButton.classList.add("remove-button");
                removeButton.onclick = function() {
                cartContainer.removeChild(newItemDiv);}
                // modify but
                const modifyButton = document.createElement("button");
                modifyButton.innerHTML='<i class="fa-sharp fa-regular fa-pen-to-square" style="color: #71a3f9;"></i> ' ;
                modifyButton.classList.add("modify-button");
                modifyButton.onclick = function() {
               
                const currentItemText = newItemDiv.innerText;

   
                const inputField = document.createElement("input");
                inputField.value = currentItemText;
                newItemDiv.innerHTML = ''; 
                newItemDiv.appendChild(inputField);

   
                const saveButton = document.createElement("button");
                saveButton.textContent = "Save";
    saveButton.onclick = function() {
        const newText = inputField.value.trim();
        if (newText !== "") {
            newItemDiv.innerHTML = newText;
            newItemDiv.appendChild(modifyButton);
            newItemDiv.appendChild(removeButton);

        } else {
            alert("Please enter valid content.");
        }
    };
    newItemDiv.appendChild(saveButton);
    newItemDiv.appendChild(removeButton);
}
                newItemDiv.innerText = inputValue;
                newItemDiv.appendChild(modifyButton);
                newItemDiv.appendChild(removeButton);
           

                const cartContainer = document.querySelector(".cartcontent");
                cartContainer.appendChild(newItemDiv);

                inputField.value = "";
            } else {
                alert("Please enter a valid item.");
            }
        }

        // Start when the document is ready
        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", start);
        } else {
            start();
        }

        // =============== START ====================
        function start() {
            addEvents();
        }
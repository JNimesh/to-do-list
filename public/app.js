(function () {
    const localStorageKey = "items";
    const items = localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : [];
    const NOTIFICATION_INTERVAL = 2000;

    const itemsContainer = document.getElementById("items-container");
    const addItemButton = document.getElementById("add-item-button");
    const addItemInput = document.getElementById("add-item-input");
    const addItemNotification = document.getElementById("add-item-notification");

    function deleteItem(index) {
        items.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(items));
        renderItems();
    }

    function toggleDoneStatus(index) {
        items[index].done = !items[index].done;
        localStorage.setItem(localStorageKey, JSON.stringify(items));
        renderItems();
    }

    function handleAddItem() {
        console.log(addItemNotification);
        addItemNotification.classList.remove('success');
        addItemNotification.classList.remove('error');
        const itemValue = addItemInput.value;
        if (itemValue?.trim().length) {
            addItemNotification.classList.add('success');
            addItemNotification.innerText = `Item: "${itemValue}" added successfully.`;
            addItemInput.value = "";
            items.push({name: itemValue, done: true});
            localStorage.setItem(localStorageKey, JSON.stringify(items));
        } else {
            addItemNotification.classList.add('error');
            addItemNotification.innerText = "Please enter a valid item.";
        }
        renderItems();
        addItemNotification.classList.remove('hidden');
        setTimeout(() => {
            addItemNotification.classList.add('hidden');
        }, NOTIFICATION_INTERVAL);
    }

    function renderItems() {
        itemsContainer.innerHTML = "";

        if (items.length === 0) {
            itemsContainer.innerHTML = '<div>No items found </div>';
        } else {
            const wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'to-do-items-wrapper';

            const header = document.createElement('h2');
            header.textContent = 'Items:';
            wrapperDiv.appendChild(header);

            items.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = `to-do-item ${item.done ? 'completed' : ''}`;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'item-status-checkbox';
                checkbox.checked = item.done;
                checkbox.addEventListener('click', () => toggleDoneStatus(index));

                const itemNameDiv = document.createElement('div');
                itemNameDiv.className = 'item-name';
                itemNameDiv.textContent = item.name;

                const deleteButton = document.createElement('button');
                deleteButton.className = 'secondary';
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteItem(index));

                itemDiv.appendChild(checkbox);
                itemDiv.appendChild(itemNameDiv);
                itemDiv.appendChild(deleteButton);

                wrapperDiv.appendChild(itemDiv);
            });

            itemsContainer.appendChild(wrapperDiv);
        }
    }

    addItemButton.addEventListener("click", handleAddItem);
    addItemInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            handleAddItem();
        }
    });

    renderItems();
})();





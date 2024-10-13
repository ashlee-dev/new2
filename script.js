document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { id: 1, name: 'Rey Ortiz', age: 28, city: 'Davao' },
        { id: 2, name: 'Jane Perez', age: 32, city: 'Quezon' },
        { id: 3, name: 'Mike Ramirez', age: 45, city: 'Tubigon' },
        { id: 4, name: 'Emily Natividad', age: 22, city: 'Paranque' },
        { id: 5, name: 'Chris Ponce', age: 36, city: 'Surigao' },
        { id: 6, name: 'Katie Cruz', age: 30, city: 'Batanes' },
        { id: 7, name: 'David Dumganon', age: 40, city: 'Siquijor' },
        { id: 8, name: 'Sarah Kant', age: 29, city: 'Aklan' },
        { id: 9, name: 'James Garcia', age: 35, city: 'Dumaguete' },
        { id: 10, name: 'Laura Martinez', age: 27, city: 'Bulacan' },
    ];

    const tableBody = document.querySelector('#dataTable tbody');
    const searchInput = document.getElementById('search');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.close');
    const pushButton = document.getElementById('pushButton');

    function populateTable(data) {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.age}</td><td>${item.city}</td>`;
            tableBody.appendChild(row);
        });
    }

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const filteredData = data.filter(item => 
            item.name.toLowerCase().includes(filter) || 
            item.city.toLowerCase().includes(filter)
        );
        populateTable(filteredData);
    });

    document.getElementById('openModal').onclick = () => {
        modal.style.display = 'block';
    };

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    pushButton.onclick = () => {
        alert('Button Pressed!');
    };

    
    populateTable(data);
});

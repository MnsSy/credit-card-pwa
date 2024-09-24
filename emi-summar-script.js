document.addEventListener('DOMContentLoaded', () => {
    // Handle EMI card clicks
    const emiItems = document.querySelectorAll('.emi-item');

    // emiItems.forEach(item => {
    //     item.addEventListener('click', () => {
    //         const name = item.querySelector('.emi-name').textContent;
    //         alert(`Card clicked: ${name}`);
    //     });

    //     item.addEventListener('keydown', (e) => {
    //         if (e.key === 'Enter' || e.key === ' ') {
    //             const name = item.querySelector('.emi-name').textContent;
    //             alert(`Card clicked: ${name}`);
    //         }
    //     });
    // });

    // Handle back button
    const backButton = document.querySelector('.navbar-back');
    backButton.addEventListener('click', () => {
        window.history.back();
    });

    // Handle select change
    const cardSelect = document.getElementById('card-select');
    cardSelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        console.log(`Selected card: ${selectedValue}`);
        // Implement additional functionality as needed
    });
});

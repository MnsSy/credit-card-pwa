document.addEventListener('DOMContentLoaded', () => {
    const offerOptions = [
        { tenure: 18, processingFee: 200.00, interestRate: 18.5 },
        { tenure: 24, processingFee: 200.00, interestRate: 18.5 },
        { tenure: 12, processingFee: 200.00, interestRate: 18.5 },
        { tenure: 9, processingFee: 200.00, interestRate: 18.5 },
        { tenure: 6, processingFee: 200.00, interestRate: 18.5 },
        { tenure: 3, processingFee: 200.00, interestRate: 18.5 },
    ];

    const tableBody = document.querySelector('#offerTable tbody');
    const emiInfo = document.getElementById('emiInfo');
    const totalAmount = sessionStorage.getItem("amount"); // Total amount selected

    // Clear existing rows
    tableBody.innerHTML = '';

document.getElementById("selected-amount").innerText = totalAmount;

    offerOptions.forEach((offer, index) => {
        const row = document.createElement('tr');
        if (index === 0) {
            row.classList.add('recommended');
        }

        row.innerHTML = `
            <td>
                <input type="radio" name="offer" id="offer${index}" ${index === 0 ? 'checked' : ''}>
                <label for="offer${index}">${offer.tenure}</label>
            </td>
            <td>${offer.processingFee.toFixed(2)}</td>
            <td>${offer.interestRate.toFixed(2)}</td>
        `;

        if (index === 0) {
            const recommendedLabel = document.createElement('div');
            recommendedLabel.textContent = 'Recommended';
            recommendedLabel.classList.add('recommended-label');
            row.querySelector('td').appendChild(recommendedLabel);
        }

        tableBody.appendChild(row);
    });

    function calculateEMI(principal, tenure, interestRate) {
        const monthlyRate = interestRate / 12 / 100;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
        return Math.round(emi);
    }

    function updateEMI() {
        const selectedOffer = document.querySelector('input[name="offer"]:checked');
        if (selectedOffer) {
            const offerIndex = parseInt(selectedOffer.id.replace('offer', ''));
            const offer = offerOptions[offerIndex];
            const emi = calculateEMI(totalAmount, offer.tenure, offer.interestRate);
            emiInfo.textContent = `Your monthly EMI will be ₹${emi}`;
        }
    }

    // Add event listeners for radio buttons
    document.querySelectorAll('input[name="offer"]').forEach(radio => {
        radio.addEventListener('change', updateEMI);
    });

    // Initial EMI calculation
    updateEMI();

    // Add event listeners for buttons
    document.getElementById('backButton').addEventListener('click', () => {
        alert('Back button clicked');
    });

    document.getElementById('cancelButton').addEventListener('click', () => {
        alert('Cancel button clicked');
    });

    document.getElementById('applyButton').addEventListener('click', () => {
        alert('Apply button clicked');
    });
});
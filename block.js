const reissueText = document.getElementById('reissue-text');
const reissueDetails = document.getElementById('reissue-details');
const reissueSection = document.getElementById('reissue-section');
const reissueCheckbox = document.getElementById('reissue-checkbox');


function selectTab(tabId) {
    // Remove 'selected' class from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('selected'));

    // Add 'selected' class to the clicked tab
    document.getElementById(tabId).classList.add('selected');

    // Update the text based on the selected tab
    if (tabId === 'lost-stolen') {
        reissueText.textContent = 'Re-issue card?';
        reissueDetails.textContent = 'The new card will be sent to your registered mailing address.\nRe-issue charges will be added to your statement.';
        reissueCheckbox.classList.remove('hidden'); 
    } else if (tabId === 'damaged') {
        reissueText.textContent = 'Re-issue damaged card?';
        reissueDetails.textContent = 'Your damaged card will be replaced and sent to your mailing address.\nRe-issue charges apply.';
        reissueCheckbox.classList.remove('hidden'); 
    } else if (tabId === 'temp-block') {
        reissueText.textContent = 'Temporary block card?';
        reissueDetails.textContent = 'Your card will be temporarily blocked. You can unblock it later in the app.\nNo re-issue required.';
        reissueCheckbox.classList.add('hidden');
    }
}

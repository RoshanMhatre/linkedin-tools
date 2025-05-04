(async function unblockMembers() {
    const unblockButtons = document.querySelectorAll('button[data-test-member-blocking-unblock-button]');

    for (let button of unblockButtons) {
        button.click();
        console.log(`Clicked unblock for: ${button.innerText.trim()}`);

        await new Promise(resolve => setTimeout(resolve, 1000));

        let passwordField = document.querySelector('input[type="password"]');

        if (passwordField) {
            passwordField.value = "myPass"; // Add actual password
            passwordField.dispatchEvent(new Event('input', { bubbles: true }));
            console.log("Entered password");

            await new Promise(resolve => setTimeout(resolve, 500));

            let confirmUnblockButton = [...document.querySelectorAll('button')]
                .find(b => b.innerText.trim().toLowerCase() === 'unblock member');

            if (confirmUnblockButton) {
                confirmUnblockButton.click();
                console.log("Clicked final unblock button");
            }
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
    }
})();
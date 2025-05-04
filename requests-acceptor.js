(function autoAcceptConnections() {
  const acceptButtons = Array.from(
    document.querySelectorAll('button.invitation-card__action-btn')
  ).filter(btn => btn.innerText.trim() === 'Accept');

  let index = 0;

  function clickNext() {
    if (index >= acceptButtons.length) {
      console.log('✅ All connection requests accepted.');
      return;
    }
    acceptButtons[index].click();
    console.log(`✅ Accepted #${index + 1}`);
    index++;
    setTimeout(clickNext, 1000); // wait 1 second before next click
  }

  if (acceptButtons.length === 0) {
    console.log('⚠️ No Accept buttons found.');
  } else {
    console.log(`🔄 Found ${acceptButtons.length} connection requests. Starting to accept...`);
    clickNext();
  }
})();
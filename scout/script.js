document.getElementById("reef").onclick = function() {
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
};
document.getElementById("algae").onclick = function() {
    bubbleHapticEffect();
};
function bubbleHapticEffect() {
    // A series of vibration patterns to simulate a "bubbling" effect
    const vibrationPattern = [
      100,  // short vibration (first bubble)
      50,   // shorter pause
      150,  // longer vibration (bigger bubble)
      50,   // shorter pause
      200,  // even bigger vibration (growing bubble)
      50,   // shorter pause
      100,  // short vibration (shrinking bubble)
      50,   // shorter pause
      150,  // medium vibration
      50,   // pause
      100   // final short vibration (pop!)
    ];
  
    // Trigger the vibration pattern
    if (navigator.vibrate) {
      navigator.vibrate(vibrationPattern);
    } else {
      console.log('Vibration API is not supported in this browser.');
    }
  }
  

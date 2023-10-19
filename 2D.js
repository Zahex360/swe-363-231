(() => {
  const signatureCanvas = document.getElementById('signatureCanvas');
  const clearSignatureButton = document.getElementById('clearSignature');
  const signatureInput = document.getElementById('signatureInput');
  const hireForm = document.getElementById('hireForm');

  const context = signatureCanvas.getContext('2d');
  context.lineWidth = 2;
  context.strokeStyle = 'black';

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  signatureCanvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  signatureCanvas.addEventListener('mousemove', draw);
  signatureCanvas.addEventListener('mouseup', () => (isDrawing = false));
  signatureCanvas.addEventListener('mouseout', () => (isDrawing = false));

  clearSignatureButton.addEventListener('click', () => {
    context.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    signatureInput.value = '';
  });

  function draw(e) {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    signatureInput.value = signatureCanvas.toDataURL();
  }

  hireForm.addEventListener('submit', (e) => {
    if (!signatureInput.value) {
      alert('Please provide your signature.');
      e.preventDefault();
    }
  });
})();

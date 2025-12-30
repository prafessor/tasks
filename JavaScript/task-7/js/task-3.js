const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

const inputText = evt => {
  const text = evt.currentTarget.value.trim();
  output.textContent = text.length === 0 ? 'Anonimus' : text;
};

input.addEventListener('input', inputText);

const input = document.getElementById('input');
const copyButton = document.getElementById('copy');
const inputField = document.getElementById('input');
const outputField = document.getElementById('output');

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const input = inputField.value;

        const transformed = input
            .split(/\r?\n/)
            .map(code => code.trim())
            .filter(code => code !== '')
            .map(code => code.replace(/\s+/g, ''))
            .map(code => `'${code}'`)
            .join(',');

        outputField.value = transformed;
        copyButton.disabled = false;
    }
});

copyButton.addEventListener('click', () => {
    outputField.select()
    document.execCommand('copy')
    alert('Copied to clipboard!')
});
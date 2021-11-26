const View = {
    render({ minutes, seconds }) {
        document.body.innerHTML = `
        <p>Próxima pausa</p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}

export { View }
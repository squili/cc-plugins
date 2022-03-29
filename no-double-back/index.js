function handleEvent(e) {
    if (e.button === 3 || e.button === 4)
        e.preventDefault();
}

export default {
    onLoad: () => window.addEventListener("mouseup", handleEvent),
    onUnload: () => window.removeEventListener("mouseup", handleEvent)
}


function ControlWindow(win) {
    function toggle() {
        if (win.isVisible()) {
            win.hide()
        } else {
            show()
        }
    }
    
    function show() {
        win.show()
        win.focus()
    }

    return {
        toggle
    }
}

module.exports = ControlWindow
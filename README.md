# Indent Helper

Indentation using tab key on textarea selector

- indentation/unindentation for single/multi selected line
- IE is not supported yet

## Usage

All results of the examples below are the same.

### IndentHelper.addEventListener
    var targetElement = document.getElementById('some_textarea');

    IndentHelper.addEventListener(targetElement);
    // or
    IndentHelper.addEventListener(targetElement, 'keydown');

### IndentHelper.eventListener
    var targetElement = document.getElementById('some_textarea');
    
    targetElement.addEventListener('keydown', IndentHelper.eventListener, false);

### IndentHelper.indent
    var targetElement = document.getElementById('some_textarea'),
        listener = function(event) {
            if(event.keyCode == 9 /* TAB Key */) {
                event.preventDefault();
                IndentHelper.indent(this, event.shiftKey);
            }
        };

    targetElement.addEventListener('keydown', listener, false);

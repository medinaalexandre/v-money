import defaults from './options';

function between(min, n, max) {
    return Math.max(min, Math.min(n, max));
}

function toStr(value) {
    return value ? value.toString() : '';
}

function onlyNumbers(input, opt = defaults) {
    if (opt.allowBlank && (input === '' || input === null)) {
        return input;
    }

    return toStr(input).replace(/\D+/g, '') || null;
}

// Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed(precision) {
    return between(0, precision, 20);
}

function numbersToCurrency(numbers, precision) {
    const exp = (10 ** precision);
    const float = parseFloat(numbers) / exp;
    return float.toFixed(fixed(precision));
}

function addThousandSeparator(integer, separator) {
    return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`);
}

function currencyToIntegerAndDecimal(float) {
    return toStr(float).split('.');
}

function joinIntegerAndDecimal(integer, decimal, separator) {
    return decimal ? integer + separator + decimal : integer;
}

function setCursor(el, position) {
    const setSelectionRange = () => {
        el.setSelectionRange(position, position);
    };
    if (el === document.activeElement) {
        setSelectionRange();
        setTimeout(setSelectionRange, 1); // Android Fix
    }
}

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event(name) {
    const evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
    return evt;
}


function format(input, opt = defaults) {
    if (opt.allowBlank && (input === '' || input === null)) {
        return input;
    }

    const numbers = onlyNumbers(input);
    const currency = numbersToCurrency(numbers, opt.precision);
    const parts = toStr(currency).split('.');
    let integer = parts[0];
    const decimal = parts[1];
    integer = addThousandSeparator(integer, opt.thousands);
    return opt.prefix + joinIntegerAndDecimal(integer, decimal, opt.decimal) + opt.suffix;
}

function unformat(input, precision) {
    if (input === '' || input === null) {
        return null;
    }

    const numbers = onlyNumbers(input);
    const currency = numbersToCurrency(numbers, precision);
    return parseFloat(currency);
}

export {
    format,
    unformat,
    setCursor,
    event,
    onlyNumbers,
};

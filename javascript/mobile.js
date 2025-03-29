function onLoad() {
    let values = {};
    ['txt', 'img'].forEach((mode) => {
        let modeValues = {};
        modeValues.genResult = document.getElementById(mode + '2img_results');
        modeValues.genResultParent = modeValues.genResult.parentNode;
        modeValues.topRow = document.getElementById(mode + '2img_toprow');
        values[mode] = modeValues;
    })

    const to_mobile = (mode) => {
        values[mode].genResult.style.paddingTop = '10px';  // For progress bar
        values[mode].topRow.append(values[mode].genResult);
    };

    const undo_mobile = (mode) => {
        values[mode].genResult.style.paddingTop = '0px';
        values[mode].genResultParent.append(values[mode].genResult);
    };

    const media_query = matchMedia("(max-width:43.95em)");  // Breaking point of UI's internal resize-handle component
    if (media_query.matches) {
        ['txt', 'img'].forEach(to_mobile);
    }

    media_query.addEventListener("change", (e) => {
        if (e.matches) {
            ['txt', 'img'].forEach(to_mobile);
        } else {
            ['txt', 'img'].forEach(undo_mobile);
        }
    })
}

onUiLoaded(async () => onLoad());
function ElementAndClass(ElementName, ClassName) {

    let Element = document.createElement(ElementName);
    Element.classList.add(ClassName);

    return Element;
}

export const switche = ElementAndClass('label', 'entete__switch');
export const checkbox = ElementAndClass('input', 'checkbox');
checkbox.type = "checkbox";
export const slider = ElementAndClass('div', 'entete__switch__slider');

checkbox.addEventListener('change', function () {

    const divtxtsub = document.getElementsByClassName("container__divtxtsub")[0];
    const date = document.getElementById("date");
    const input = document.getElementById("item");
    const btn = document.getElementById("enter");
    const saveBtn = document.getElementsByClassName("update-controller__saveBtn");
    const cancelBtn = document.getElementsByClassName("update-controller__cancelBtn");
    const checkmark = document.getElementsByClassName("input-controller__checkbox__checkmark");


    if (checkbox.checked) {
        document.body.style.backgroundColor = 'rgb(45, 45, 45)';
        document.body.style.color = 'rgb(255, 255, 255)';
        divtxtsub.style.backgroundColor = 'rgb(75,75,75)';
        date.style.color = 'rgb(255,255,255)';
        input.style.backgroundColor = 'rgb(45, 45, 45)';
        btn.style.backgroundColor = 'rgb(45, 45, 45)';
        input.style.color = 'rgb(255, 255, 255)';
        btn.style.color = 'rgb(255, 255, 255)';

        Array.from(saveBtn).forEach(btn => {
            btn.style.backgroundColor = 'rgb(75, 75, 75)';
            btn.style.color = 'rgb(255, 255, 255)';
        });

        Array.from(cancelBtn).forEach(btn => {
            btn.style.backgroundColor = 'rgb(75, 75, 75)';
            btn.style.color = 'rgb(255, 255, 255)';
        });       

        Array.from(checkmark).forEach(element => {

            element.style.boxShadow = 'rgb(255, 255, 255) 0px 0px 0px 2px';
        });
    }

    else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        divtxtsub.style.backgroundColor = '';
        date.style.color = '';
        input.style.backgroundColor = '';
        btn.style.backgroundColor = '';
        input.style.color = '';
        btn.style.color = '';    
        
        Array.from(saveBtn).forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        });

        Array.from(cancelBtn).forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        });

        Array.from(checkmark).forEach(element => {

            element.style.boxShadow = '';
        });
    }
});
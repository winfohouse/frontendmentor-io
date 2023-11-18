divSteps = document.querySelectorAll('div[step]')
var lis = document.querySelectorAll('nav ul li');
lii = 1;

var st2 = document.querySelector('div[step="step-2"]');
options2 = st2.querySelectorAll('.pakeg-div');
checkBox = st2.querySelector('.check-box')

Monthly = document.querySelectorAll('.monthly')
Yearly = document.querySelectorAll('.yearly')

inpMonthly = st2.querySelector('.check-box p.Smonthly')
inpYearly = st2.querySelector('.check-box p.Syearly')
checkBoxInput = st2.querySelector('.check-box input')

var st3 = document.querySelector('div[step="step-3"]');
options3 = st3.querySelectorAll('.option')


var st4 = document.querySelector('div[step="step-4"]');
var selectedContenter = st4.querySelector('div.contenter');
SEplanC = selectedContenter.querySelector('div.plan-name div a.SEplanC')
total = st4.querySelector('div.total')

var st5 = document.querySelector('div[step="step-5"]');

var nextButt = document.querySelectorAll('button[next]')
var nextConformbutt = document.querySelectorAll('button[nextConform]')
var backButt = document.querySelectorAll('button[back]')

function totalReset() {
    selectedContenter.innerHTML = `
        <div class="plan-name">
                <div>
                    <p class="SEplan"></p>
                    <a class="SEplanC">Change</a>
                </div>
                <p class="SEprice"></p>
            </div>
            <hr>
            <div class="plan-service"></div>`;
}

options2.forEach(option => {
    option.addEventListener('click', () => {
        options2.forEach(option2 => {
            option2.classList.remove('selected')
        });
        option.classList.add('selected')

    })
});
options3.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('selected')
        option.querySelector('div.option lord-icon').setAttribute('colors', 'primary:#e4e4e4');
        option.querySelector('div.option.selected lord-icon').setAttribute('colors', 'primary:#2516c7');
    })
});

nextButt.forEach(option => {
    option.addEventListener('click', () => {
        divSteps = document.querySelectorAll('div[step]')
        divSteps.forEach(divStep => {
            divStep.classList.remove('show')
            divStep.classList.add('none')
        })

        var step = option.getAttribute('id')
        document.querySelector('div[step="' + step + '"').classList.add('show')
        document.querySelector('div[step="' + step + '"').classList.remove('none')

        if (lii < 3) {
            lis.forEach(li => {
                li.classList.remove('selected')
            })
            lii++;
            lis[lii].classList.add('selected')
        }
        else {
            lis[3].classList.add('selected')
        }
    })
})
backButt.forEach(option => {
    option.addEventListener('click', () => {
        divSteps.forEach(divStep => {
            divStep.classList.add('none')
        })

        var step = option.getAttribute('id')
        document.querySelector('div[step="' + step + '"').classList.add('show')
        document.querySelector('div[step="' + step + '"').classList.remove('none')
        if (1 < lii) {

            if (lii < 4) {
                lii--;
                lis.forEach(li => {
                    li.classList.remove('selected')
                })

            }
            lis[lii].classList.add('selected')
        }

        totalReset();
    })
})


nextConformbutt.forEach(option => {
    option.addEventListener('click', () => {

        SEplan = selectedContenter.querySelector('div.plan-name div p.SEplan')
        SEprice = selectedContenter.querySelector('div.plan-name p.SEprice')
        planService = selectedContenter.querySelector('div.plan-service')


        var selected2 = st2.querySelectorAll('div.selected')
        selected2.forEach(option => {
            var planName = option.querySelector('.p-bold').innerText
            var planNamePrice = option.querySelector('p:not(.none, .p-bold)').innerText
            var planDate = option.querySelector('p:not(.none, .p-bold)').classList[1]
            SEplan.innerText = planName + ' (' + planDate + ')'
            SEprice.innerText = planNamePrice

            let number = planNamePrice.match(/\d+/);
            total.querySelector('p.pto').innerText += planDate + ')'
            total.querySelector('p.SEprice').innerText = number
        })
        var selected3 = st3.querySelectorAll('div.selected')
        selected3.forEach(option => {
            var serviceName = option.querySelector('.p-bold').innerText
            var serviceNamePrice = option.querySelector('div.float-right:not(.none)').innerText
            planService.innerHTML += '<div class="planService"><p>' + serviceName + '</p><p class="SEprice">' + serviceNamePrice + '</p></div>'

            let numbers = serviceNamePrice.match(/\d+/);
            a = total.querySelector('p.SEprice').innerText
            c = [((a * 1) + (1 * numbers[0]))]
            total.querySelector('p.SEprice').innerText = (c)
        })
        total.querySelector('p.SEprice').innerText = '$' + total.querySelector('p.SEprice').innerText
    })
})


//select mounthly or yearl
Yearly.forEach(year => {
    year.classList.add('none')
})

SEplanC.addEventListener('click', () => {
    totalReset();
    lii = 1;
    lis.forEach(li => {
        li.classList.remove('selected')
    })
    divSteps.forEach(divStep => {
        divStep.classList.add('none')
        divStep.classList.remove('show')
    })
    lis[1].classList.add('selected')
    divSteps[1].classList.remove('none')
    divSteps[1].classList.add('show')

})

checkBoxInput.addEventListener('click', () => {
    Monthly.forEach(mounth => {
        mounth.classList.toggle('none')
    })
    Yearly.forEach(year => {
        year.classList.toggle('none')
    })

    inpMonthly.classList.toggle('true')
    inpYearly.classList.toggle('true')

})

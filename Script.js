if (localStorage.getItem('yourCollection') === null) {
    yourCollection = []
    localStorage.setItem('yourCollection', JSON.stringify(yourCollection))
}


let relicCompletedList = JSON.parse(localStorage.getItem('yourCollection'));
const categoryHeaderList = document.querySelectorAll('.categoryContainerHeader');

async function collecting() {
    const response = await fetch("RelicInfo.json");
    const relicInfo = await response.json();

    for (let i = 0; i < 19; i++) {
        createRelicContainer('ewFirstStep', relicInfo.ew[0].jobs[i].icon, relicInfo.ew[0].jobs[i].weaponName, relicInfo.ew[0].jobs[i].jobName);
        createRelicContainer('ewSecondStep', relicInfo.ew[1].jobs[i].icon, relicInfo.ew[1].jobs[i].weaponName, relicInfo.ew[1].jobs[i].jobName);
        createRelicContainer('ewThirdStep', relicInfo.ew[2].jobs[i].icon, relicInfo.ew[2].jobs[i].weaponName, relicInfo.ew[2].jobs[i].jobName);
        if(i < 17) {
            createRelicContainer('shbFirstStep', relicInfo.shb[0].jobs[i].icon, relicInfo.shb[0].jobs[i].weaponName, relicInfo.shb[0].jobs[i].jobName);
            createRelicContainer('shbSecondStep', relicInfo.shb[1].jobs[i].icon, relicInfo.shb[1].jobs[i].weaponName, relicInfo.shb[1].jobs[i].jobName);
            createRelicContainer('shbThirdStep', relicInfo.shb[2].jobs[i].icon, relicInfo.shb[2].jobs[i].weaponName, relicInfo.shb[2].jobs[i].jobName);
            createRelicContainer('shbFourthStep', relicInfo.shb[3].jobs[i].icon, relicInfo.shb[3].jobs[i].weaponName, relicInfo.shb[3].jobs[i].jobName);
            createRelicContainer('shbFifthStep', relicInfo.shb[4].jobs[i].icon, relicInfo.shb[4].jobs[i].weaponName, relicInfo.shb[4].jobs[i].jobName);
            createRelicContainer('shbSixthStep', relicInfo.shb[5].jobs[i].icon, relicInfo.shb[5].jobs[i].weaponName, relicInfo.shb[5].jobs[i].jobName);
        }
        if (i < 15) {
            createRelicContainer('stbFirstStep', relicInfo.stb[0].jobs[i].icon, relicInfo.stb[0].jobs[i].weaponName, relicInfo.stb[0].jobs[i].jobName);
            createRelicContainer('stbSecondStep', relicInfo.stb[1].jobs[i].icon, relicInfo.stb[1].jobs[i].weaponName, relicInfo.stb[1].jobs[i].jobName);
            createRelicContainer('stbThirdStep', relicInfo.stb[2].jobs[i].icon, relicInfo.stb[2].jobs[i].weaponName, relicInfo.stb[2].jobs[i].jobName);
            createRelicContainer('stbFourthStep', relicInfo.stb[3].jobs[i].icon, relicInfo.stb[3].jobs[i].weaponName, relicInfo.stb[3].jobs[i].jobName);
            createRelicContainer('stbFifthStep', relicInfo.stb[4].jobs[i].icon, relicInfo.stb[4].jobs[i].weaponName, relicInfo.stb[4].jobs[i].jobName);
            createRelicContainer('stbSixthStep', relicInfo.stb[5].jobs[i].icon, relicInfo.stb[5].jobs[i].weaponName, relicInfo.stb[5].jobs[i].jobName);
        }
        if (i < 13) {
            createRelicContainer('hwFirstStep', relicInfo.hw[0].jobs[i].icon, relicInfo.hw[0].jobs[i].weaponName, relicInfo.hw[0].jobs[i].jobName);
            createRelicContainer('hwSecondStep', relicInfo.hw[1].jobs[i].icon, relicInfo.hw[1].jobs[i].weaponName, relicInfo.hw[1].jobs[i].jobName);
            createRelicContainer('hwThirdStep', relicInfo.hw[2].jobs[i].icon, relicInfo.hw[2].jobs[i].weaponName, relicInfo.hw[2].jobs[i].jobName);
            createRelicContainer('hwFourthStep', relicInfo.hw[3].jobs[i].icon, relicInfo.hw[3].jobs[i].weaponName, relicInfo.hw[3].jobs[i].jobName);
            createRelicContainer('hwFifthStep', relicInfo.hw[4].jobs[i].icon, relicInfo.hw[4].jobs[i].weaponName, relicInfo.hw[4].jobs[i].jobName);
            createRelicContainer('hwSixthStep', relicInfo.hw[5].jobs[i].icon, relicInfo.hw[5].jobs[i].weaponName, relicInfo.hw[5].jobs[i].jobName);
            createRelicContainer('hwSeventhStep', relicInfo.hw[6].jobs[i].icon, relicInfo.hw[6].jobs[i].weaponName, relicInfo.hw[6].jobs[i].jobName);
            createRelicContainer('hwEighthStep', relicInfo.hw[7].jobs[i].icon, relicInfo.hw[7].jobs[i].weaponName, relicInfo.hw[7].jobs[i].jobName);
        }
        if (i < 10) {
            createRelicContainer('arrFirstStep', relicInfo.arr[0].jobs[i].icon, relicInfo.arr[0].jobs[i].weaponName, relicInfo.arr[0].jobs[i].jobName);
            createRelicContainer('arrSecondStep', relicInfo.arr[1].jobs[i].icon, relicInfo.arr[1].jobs[i].weaponName, relicInfo.arr[1].jobs[i].jobName);
            createRelicContainer('arrThirdStep', relicInfo.arr[2].jobs[i].icon, relicInfo.arr[2].jobs[i].weaponName, relicInfo.arr[2].jobs[i].jobName);
            createRelicContainer('arrFourthStep', relicInfo.arr[3].jobs[i].icon, relicInfo.arr[3].jobs[i].weaponName, relicInfo.arr[3].jobs[i].jobName);
            createRelicContainer('arrFifthStep', relicInfo.arr[4].jobs[i].icon, relicInfo.arr[4].jobs[i].weaponName, relicInfo.arr[4].jobs[i].jobName);
            createRelicContainer('arrSixthStep', relicInfo.arr[5].jobs[i].icon, relicInfo.arr[5].jobs[i].weaponName, relicInfo.arr[5].jobs[i].jobName);
            createRelicContainer('arrSeventhStep', relicInfo.arr[6].jobs[i].icon, relicInfo.arr[6].jobs[i].weaponName, relicInfo.arr[6].jobs[i].jobName);
            createRelicContainer('arrEighthStep', relicInfo.arr[7].jobs[i].icon, relicInfo.arr[7].jobs[i].weaponName, relicInfo.arr[7].jobs[i].jobName);
        }
    }
    gotIt()
}

collecting();

function createRelicContainer(stepContainerId, relicIcon, relicName, jobName) {
    const stepContainer = document.querySelector('#'+stepContainerId);
    const relicDiv = document.createElement('div');
    relicDiv.classList.add('relicContainer');

    const relicImg = document.createElement('img');
    relicImg.src = "/img/" + relicIcon + ".png";
    relicImg.title = relicName;
    relicImg.alt = relicName + "'s icon";
    relicImg.classList.add('relicImage');
    relicImg.classList.add('opaque');
    relicImg.setAttribute('id', relicIcon)

    const jobIcon = document.createElement('img');
    jobIcon.src = "/img/jobicon/" + jobName + ".png";
    jobIcon.alt = jobName + " job icon";
    jobIcon.classList.add('jobIcon');

    relicDiv.appendChild(relicImg);
    relicDiv.appendChild(jobIcon);
    stepContainer.appendChild(relicDiv);

    if (relicCompletedList.length) {
        relicCompletedList.forEach(relic => {
            if (relicIcon === relic) {
                relicImg.classList.toggle('opaque');
            }
        });
    }
}

function gotIt () {
    const relicImage = document.querySelectorAll(".relicImage")
    relicImage.forEach(icon => {
        icon.addEventListener('click', (event) => {
            let result = false;
            relicCompletedList.forEach(element => {
                if (element == event.target.id) {
                    let index = relicCompletedList.indexOf(element);
                    relicCompletedList.splice(index, 1);
                    event.target.classList.toggle('opaque');
                    result = true
                }
            });
            if (!result) {
                relicCompletedList.push(event.target.id);
                event.target.classList.toggle('opaque');
            }
            localStorage.setItem('yourCollection', JSON.stringify(relicCompletedList))
        })
    });
    
}

categoryHeaderList.forEach(categoryHeader => {
    categoryHeader.addEventListener('click', (event) => {
        categoryContainer = event.target.nextElementSibling;
        categoryContainer.classList.toggle('collapsable')
    })
});
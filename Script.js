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
        createRelicContainer('ewFirstStep', relicInfo.ew[0].jobs[i].icon, relicInfo.ew[0].jobs[i].weaponName);
        createRelicContainer('ewSecondStep', relicInfo.ew[1].jobs[i].icon, relicInfo.ew[1].jobs[i].weaponName);
        createRelicContainer('ewThirdStep', relicInfo.ew[2].jobs[i].icon, relicInfo.ew[2].jobs[i].weaponName);
        if(i < 17) {
            createRelicContainer('shbFirstStep', relicInfo.shb[0].jobs[i].icon, relicInfo.shb[0].jobs[i].weaponName);
            createRelicContainer('shbSecondStep', relicInfo.shb[1].jobs[i].icon, relicInfo.shb[1].jobs[i].weaponName);
            createRelicContainer('shbThirdStep', relicInfo.shb[2].jobs[i].icon, relicInfo.shb[2].jobs[i].weaponName);
            createRelicContainer('shbFourthStep', relicInfo.shb[3].jobs[i].icon, relicInfo.shb[3].jobs[i].weaponName);
            createRelicContainer('shbFifthStep', relicInfo.shb[4].jobs[i].icon, relicInfo.shb[4].jobs[i].weaponName);
            createRelicContainer('shbSixthStep', relicInfo.shb[5].jobs[i].icon, relicInfo.shb[5].jobs[i].weaponName);
        }
        
    }
    gotIt()
}

collecting();

function createRelicContainer(stepContainerId, relicIcon, relicName) {
    const stepContainer = document.querySelector('#'+stepContainerId);
    const relicDiv = document.createElement('div');
    relicDiv.classList.add('relicContainer');

    const relicImg = document.createElement('img');
    relicImg.src = "/img/" + relicIcon + ".png";
    relicImg.title = relicName;
    relicImg.alt = relicName + "'s Icon";
    relicImg.classList.add('relicImage');
    relicImg.classList.add('opaque');
    relicImg.setAttribute('id', relicIcon)

    relicDiv.appendChild(relicImg);
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
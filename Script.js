const version = '0.2';

if (localStorage.getItem('yourCollection') === null || JSON.parse(localStorage.getItem('yourCollection')).version != version) {
    //yourCollection = []
    yourCollection = {
        version: version,
        relicId: [],
        relicAmount: {
            arr : [
                    {
                        name: 'Base Zodiac',
                        acquired: 0
                    },
                    {
                        name: 'Zenith',
                        acquired: 0
                    },
                    {
                        name: 'Atma',
                        acquired: 0
                    },
                    {
                        name: 'Animus',
                        acquired: 0
                    },
                    {
                        name: 'Novus',
                        acquired: 0
                    },
                    {
                        name: 'Nexus',
                        acquired: 0
                    },
                    {
                        name: 'Zodiac',
                        acquired: 0
                    },
                    {
                        name: 'Zeta',
                        acquired: 0
                    }
                ],
            hw : [
                    {
                        name: 'Animated',
                        acquired: 0
                    },
                    {
                        name: 'Awoken',
                        acquired: 0
                    },
                    {
                        name: 'Anima',
                        acquired: 0
                    },
                    {
                        name: 'Hyperconductive',
                        acquired: 0
                    },
                    {
                        name: 'Reconditioned',
                        acquired: 0
                    },
                    {
                        name: 'Sharpened',
                        acquired: 0
                    },
                    {
                        name: 'Complete Anima',
                        acquired: 0
                    },
                    {
                        name: 'Lux Anima',
                        acquired: 0
                    }
                ],
            stb : [
                    {
                        name: 'Antiquated Artifact',
                        acquired: 0
                    },
                    {
                        name: 'Anemos',
                        acquired: 0
                    },
                    {
                        name: 'Elemental - Pagos',
                        acquired: 0
                    },
                    {
                        name: 'Pyros',
                        acquired: 0
                    },
                    {
                        name: 'Eureka - Hydatos',
                        acquired: 0
                    },
                    {
                        name: 'Physeos',
                        acquired: 0
                    }
                ],
            shb : [
                    {
                        name: 'Resistance',
                        acquired: 0
                    },
                    {
                        name: 'Augmented Resistance',
                        acquired: 0
                    },
                    {
                        name: 'Recollection',
                        acquired: 0
                    },
                    {
                        name: "Law's Order",
                        acquired: 0
                    },
                    {
                        name: "Augmented Law's Order",
                        acquired: 0
                    },
                    {
                        name: "Blade's",
                        acquired: 0
                    }
                ],
            ew : [
                    {
                        name: 'Manderville',
                        acquired: 0
                    },
                    {
                        name: 'Amazing Manderville',
                        acquired: 0
                    },
                    {
                        name: 'Majestic Manderville',
                        acquired: 0
                    },
                    {
                        name: 'Mandervilous',
                        acquired: 0
                    }
                ]
        }
    }
    localStorage.setItem('yourCollection', JSON.stringify(yourCollection))
}

let relicCollection = JSON.parse(localStorage.getItem('yourCollection'))
let relicCompletedList = relicCollection.relicId;
let relicAmountList = relicCollection.relicAmount;
const categoryHeaderList = document.querySelectorAll('.categoryContainerHeader');

async function collecting() {
    const response = await fetch("RelicInfo.json");
    const relicInfo = await response.json();

    for (let i = 0; i < 19; i++) {
        createRelicContainer('ewFirstStep', relicInfo.ew[0].jobs[i].icon, relicInfo.ew[0].jobs[i].weaponName, relicInfo.ew[0].jobs[i].jobName);
        createRelicContainer('ewSecondStep', relicInfo.ew[1].jobs[i].icon, relicInfo.ew[1].jobs[i].weaponName, relicInfo.ew[1].jobs[i].jobName);
        createRelicContainer('ewThirdStep', relicInfo.ew[2].jobs[i].icon, relicInfo.ew[2].jobs[i].weaponName, relicInfo.ew[2].jobs[i].jobName);
        createRelicContainer('ewFourthStep', relicInfo.ew[3].jobs[i].icon, relicInfo.ew[3].jobs[i].weaponName, relicInfo.ew[3].jobs[i].jobName);
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
    gotIt();
    fetchItems(relicInfo)
    //fetchCurrency(relicInfo);
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
            let relicStep = event.target.id.match(/\d+/g)[0][0]
            let relicExpansion = event.target.id.match(/[a-zA-Z]+/g)[0]
            relicCompletedList.forEach(element => {
                if (element == event.target.id) {
                    let index = relicCompletedList.indexOf(element);
                    relicCompletedList.splice(index, 1);
                    relicAmountList[relicExpansion][relicStep].acquired = relicAmountList[relicExpansion][relicStep].acquired - 1;
                    event.target.classList.toggle('opaque');
                    result = true
                }
            });
            if (!result) {
                relicCompletedList.push(event.target.id);
                relicAmountList[relicExpansion][relicStep].acquired = relicAmountList[relicExpansion][relicStep].acquired + 1;
                event.target.classList.toggle('opaque');
            }
            relicCollection.relicAmount = relicAmountList;
            relicCollection.relicId = relicCompletedList;
            localStorage.setItem('yourCollection', JSON.stringify(relicCollection))
        })
    });
    
}

categoryHeaderList.forEach(categoryHeader => {
    categoryHeader.addEventListener('click', (event) => {
        categoryContainer = event.target.nextElementSibling;
        categoryContainer.classList.toggle('collapsable')
    })
});

function fetchItems (relicInfo) {
    const expansions = Object.keys(relicAmountList)
    const currencyItemCategoryContainer = document.querySelector('#currencyItemCategory');
    expansions.forEach(expansion => {
        const stepAmount = relicInfo[expansion].length
        for (let index = 0; index < stepAmount; index++) {
            
            let stepName = relicInfo[expansion][index].stepName;
            let itemCostList = relicInfo[expansion][index].cost;
            let itemList = relicInfo[expansion][index].itemId;
            let jobAmount = relicInfo[expansion][0].jobs.length;
            let relicAmountAcquired = relicAmountList[expansion][index].acquired;
            let relicAmountNeeded = jobAmount - relicAmountAcquired;

            if (itemList && relicAmountNeeded > 0) {
                let currencyItemStepContainer = document.createElement('div');
                let currencyItemStepName = document.createElement('h3');

                currencyItemStepContainer.classList.add('stepContainer')

                currencyItemStepName.innerHTML = stepName;
                currencyItemStepContainer.appendChild(currencyItemStepName);

                for (let itemIndex = 0; itemIndex < itemList.length; itemIndex++) {
                    let item = {
                        "name" : relicInfo.items[itemList[itemIndex]].name,
                        "isCraftable" : relicInfo.items[itemList[itemIndex]].isCraftable,
                        "hqRequired" : relicInfo.items[itemList[itemIndex]].hqRequired,
                        "marketboardAvailable" : relicInfo.items[itemList[itemIndex]].marketboardAvailable,
                        "vendorAvailable" : relicInfo.items[itemList[itemIndex]].vendorAvailable,
                        "cost": relicInfo.items[itemList[itemIndex]].cost,
                        "currency": relicInfo.items[itemList[itemIndex]].currency,
                        "content": relicInfo.items[itemList[itemIndex]].content,
                        "wiki" : relicInfo.items[itemList[itemIndex]].wiki,
                        "icon" : relicInfo.items[itemList[itemIndex]].icon
                    }
     
                    let itemContainer = document.createElement('div');
                    let itemIcon = document.createElement('img');
                    let itemName = document.createElement('span');
                    let itemAmount = document.createElement('span');
                    let itemTotalAmount = document.createElement('span');
                    let itemSeparator = document.createElement('span');
                    let infoContainer = document.createElement('div');
                    let infoCraft = document.createElement('span');
                    let infoMb = document.createElement('span');
                    let infoHq = document.createElement('span');
                    let infoContent = document.createElement('span');
        
                    itemContainer.classList.add('itemContainer');
                    itemIcon.classList.add('itemIcon');
                    itemName.classList.add('itemName');
                    itemAmount.classList.add('itemAmount');
                    itemTotalAmount.classList.add('itemTotalAmount');
                    itemSeparator.classList.add('ItemSeparator');

                    infoContainer.classList.add('infoContainer');
                    infoCraft.classList.add('infoSpan');
                    infoHq.classList.add('infoSpan')
                    infoMb.classList.add('infoSpan');
                    infoContent.classList.add('infoSpan');

                    infoCraft.innerHTML = "can be crafted";
                    infoMb.innerHTML = "available on the marketboard";
                    infoHq.innerHTML = "MUST be HQ";

                    itemIcon.src = '/img/items/' + item.icon + '.png';
                    itemName.innerHTML = item.name + ' ';
                    itemSeparator.innerHTML = '&nbsp;|&nbsp;';
                    itemAmount.innerHTML = 'Each Relic: ' + itemCostList[itemIndex].toLocaleString() + 'x';
                    itemTotalAmount.innerHTML = (itemCostList[itemIndex] * relicAmountNeeded).toLocaleString() + 'x';

                    itemContainer.appendChild(itemIcon);
                    itemContainer.appendChild(itemTotalAmount);
                    itemContainer.appendChild(itemName);
                    itemContainer.appendChild(itemSeparator);
                    itemContainer.appendChild(itemAmount);

                    //currencyItemCategoryContainer.appendChild(itemContainer)
                    currencyItemStepContainer.appendChild(itemContainer)

                    if(item.vendorAvailable) {
                        for (let currencyIndex = 0; currencyIndex < item.currency.length; currencyIndex++) {
                            let currency = {
                                "name" : relicInfo.currency[item.currency[currencyIndex]].name,
                                "icon" : relicInfo.currency[item.currency[currencyIndex]].icon
                            }

                            let currencyContainer = document.createElement('div');
                            let currencyIcon = document.createElement('img');
                            let currencyName = document.createElement('span');
                            let currencyAmount = document.createElement('span');
                            let currencyTotalAmount = document.createElement('span');
                            let currencySeparator = document.createElement('span');

                            currencyContainer.classList.add('currencyContainer');
                            currencyIcon.classList.add('currencyIcon');
                            currencyName.classList.add('currencyName');
                            currencyAmount.classList.add('currencyAmount');
                            currencyTotalAmount.classList.add('currencyTotalAmount');
                            currencySeparator.classList.add('currencySeparator');

                            currencyIcon.src = '/img/items/' + currency.icon + '.png';
                            currencyName.innerHTML = currency.name;
                            currencySeparator.innerHTML = '&nbsp;|&nbsp;';
                            currencyAmount.innerHTML = 'Each Relic: ' + (item.cost[currencyIndex] * itemCostList[itemIndex]).toLocaleString();
                            currencyTotalAmount.innerHTML = (item.cost[currencyIndex] * (itemCostList[itemIndex] * relicAmountNeeded)).toLocaleString();

                            currencyContainer.appendChild(currencyIcon);
                            currencyContainer.appendChild(currencyTotalAmount);
                            currencyContainer.appendChild(currencyName);
                            currencyContainer.appendChild(currencySeparator);
                            currencyContainer.appendChild(currencyAmount);
 
                            currencyItemStepContainer.appendChild(currencyContainer);
                        }
                            
                    }

                    if (item.isCraftable) {
                        infoContainer.appendChild(infoCraft);
                        if (item.hqRequired) {
                            infoContainer.appendChild(infoHq);
                        }
                    }
                    if(item.marketboardAvailable) {
                        infoContainer.appendChild(infoMb);
                    }
                    if(item.content){
                        infoContent.innerHTML = 'Content: ' + item.content;
                        infoContainer.appendChild(infoContent);
                    }
                    currencyItemStepContainer.appendChild(infoContainer);
                }
                currencyItemCategoryContainer.appendChild(currencyItemStepContainer)
            }  
        }
        
    });
}
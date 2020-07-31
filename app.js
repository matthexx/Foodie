const id = 'ed40e7f3'
const key = '160d99d7c350e79cf4202ed6fe683dcb'
let mainContainer = document.getElementById('cardi')


paginate=()=>{
    let rhtarw = '&#xf17b;'
    fetch(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=red%20apple&app_id=49a2cc2f&app_key=1c38e8afd42d9fc79051dd17dc5b2eaa`)
    .then((res)=>{
        return res.json()
    })

   .then((data)=>{
    let newLink = document.getElementById('link')
    // newLink.innerHTML = `${data._links.next.title}`
    newLink.style.href = data._links.next.href
    document.getElementById('nextPage').style.display = "block"
    console.log(data._links.next.href)
   })
 
    
}
paginate()

mainoutput=(qUrl)=>{
    this.qUrl = qUrl

    fetch(qUrl)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let newVal = []
        newVal = data.hits
        newVal.map((val)=>{


        let label = document.createElement('h5')
        console.log(label)
        label.textContent = `${val.recipe.label}`
        label.classList.add('card-title')
        label.style.marginTop = "12px"
        // label.style.fontWeight = "bold"
        label.style.textAlign = "center"

        let cal = document.createElement('p')
        cal.classList.add('card-text')
        cal.style.fontSize = "10px"
        cal.style.textAlign = "center"
        cal.textContent = `${val.recipe.calories} calories per 100g`

        // let ingLine = document.createElement('p')
        // ingLine.classList.add('card-text')
        // ingLine.style.fontSize = "14px"
        // ingLine.style.textAlign = "center"
        // ingLine.style.maxWidth = "80%"
        // ingLine.style.marginLeft = "10%"
        // ingLine.style.marginBottom = "18px"
        // ingLine.textContent = `${val.recipe.ingredientLines}.`

        let ingLine = document.createElement('p')

        function truncateText(maxLength) {
            ingLine.classList.add('card-text')
            ingLine.style.fontSize = "14px"
            ingLine.style.textAlign = "center"
            ingLine.style.maxWidth = "80%"
            ingLine.style.marginLeft = "10%"
            ingLine.style.marginBottom = "18px"
            ingLine.textContent = `${val.recipe.ingredientLines}.`
    
        
            if (ingLine.length > maxLength) {
                ingLine = ingLine.substr(0,maxLength) 
                ingline.textContent += `...`
            }
            console.log(ingLine)
            return ingLine;
        }

       truncateText(20)


        let dLabel = document.createElement('p')
        dLabel.classList.add('card-text')
        dLabel.style.fontSize = "10px"
        dLabel.style.textAlign = "center"
        dLabel.textContent = `${val.recipe.dietLabels}`

        

        let imgel = document.createElement('img')
        imgel.src = val.recipe.image
        imgel.classList.add('imgStyle')

        let rMore = document.createElement('button')
            rMore.textContent = "See More"
            rMore.classList.add('btnStyle')
         
            let mainVal = document.createElement('div')
            mainVal.classList.add('foodStyle')
       
            mainVal.appendChild(imgel)
            mainVal.appendChild(label)
            mainVal.appendChild(cal)
            mainVal.appendChild(dLabel)
            mainVal.appendChild(ingLine)
            mainVal.appendChild(rMore)

        mainContainer.appendChild(mainVal)


            // for(i = 0; i < mainVal.length; i++){
            //     mainContainer.style.display = "flex"
            //     mainContainer.style.flexDirection = "column"

            // }
       
        // console.log(data)

        })
    })

        searchInput.value = ''
        mainContainer.textContent = ''
        
    }


//get random recipe onclick
document.getElementById('foodList').addEventListener('click', getFood=()=>{

//create random foodlist
const food = [
         
    "Legumes",
    "nuts",
    "Breads",
    "Dairy",
    "Eggs",
    "Meat",
    "Cereals",
    "Rice",
    "Seafood",
    "Staple",
    "Appetizers",
    "Condiments",
    "Confectionery",
    "Desserts",
    "pastes",
    "Dumplings",
    "Fermented" ,
    "Halal",
    "Kosher",
    "Noodles",
    "Pies",
    "Salads",
    "Sandwiches",
    "Sauces",
    "Soups",
    "Stews"


]
newFood = food[Math.floor(Math.random() * food.length)];

const randomRecipeUrl =  `https://api.edamam.com/search?q=${newFood}&app_id=${id}&app_key=${key}&from=0&to=20&calories=591-722&health=alcohol-free`

mainoutput(randomRecipeUrl)

})

//search for food recipe
let searchInput = document.getElementById('searchInput')

document.getElementById('searchBtn').addEventListener('click', findRecipe=()=>{
    if(searchInput.value != ''){
    const searchUrl =  `https://api.edamam.com/search?q=${searchInput.value}&app_id=${id}&app_key=${key}&from=0&to=20&calories=591-722&health=alcohol-free`
    mainoutput(searchUrl)
    }
    // else{
    //     mainVal.textContent = `Hey Foodie! Use the search field`
    //     mainVal.style.color = "#000"
    //     mainVal.style.textAlign = "center"
    //     mainVal.style.fontSize = "200em"
    //     mainContainer.appendChild(mainVal)

    // }
        
})

showRanger=()=>{
    document.getElementById('customSwitch1').addEventListener('click', showRanger=()=>{
    // ranger = document.getElementById('ranger').style.display = "grid"
    // ranger.style.flexDirection = "row"
     let rangers = document.querySelector('.ranger')
         rangers.classList.add('rangerStyle')
    //  ranger.style.flexDirection = "row"
    })
}
showRanger()






const id = 'ed40e7f3'
const key = '160d99d7c350e79cf4202ed6fe683dcb'
let mainContainer = document.getElementById('cardi')
let noResp = false

//get modal
let modal = document.getElementById("modalcontainer");

//get modal close buttons
// let closebtn = document.getElementsByClassName("delete");
let closeBtn = document.createElement('p');
closeBtn.innerHTML = "&times;"
let ingLine = document.createElement('p')

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
const randomRecipeUrl =  `https://api.edamam.com/search?q=${newFood}&app_id=${id}&app_key=${key}&from=0&to=21&calories=591-722&health=alcohol-free`
    
//Fetch Random Recipe on page load
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
        //      if(newVal.length == 0){
        //     noResp = true
        //     console.log(noResp)
        // }
        
        let label = document.createElement('h5')
        label.innerHTML = `Recipe<br> 
        ${val.recipe.label}`
        label.classList.add('card-title')
        label.style.marginTop = "12px"
        label.style.textAlign = "center"

        let cal = document.createElement('p')
        cal.classList.add('card-text')
        cal.style.fontSize = "10px"
        cal.style.textAlign = "center"
        cal.textContent = `${val.recipe.calories} calories per 100g`

        


        let dLabel = document.createElement('p')
        dLabel.classList.add('card-text')
        dLabel.style.fontSize = "10px"
        dLabel.style.textAlign = "center"
        dLabel.textContent = `${val.recipe.dietLabels}`

        

        let imgel = document.createElement('img')
        imgel.src = val.recipe.image
        imgel.classList.add('imgStyle')

      
        openModal=()=>{
            modal.style.display = "flex"
            modal.style.justifyContent= "center"
            modal.style.alignItems = "center"
            modal.style.minHeight = "100vh"
            ingLine.textContent = `${val.recipe.ingredientLines}.`
            modal.appendChild(ingLine)
            ingLine.style.display = "flex"
            ingLine.justifyContent = "center"
            ingLine.alignItems = "center"
            ingLine.style.fontSize = "14px"
            ingLine.style.height = "fit-content"
            ingLine.style.backgroundColor = "#fff"
            ingLine.style.padding = "20px"
            ingLine.style.textAlign = "center"
            ingLine.style.maxWidth = "50%"
            ingLine.style.marginLeft = "10%"
            ingLine.style.borderRadius = "10px"
            closeBtn.classList.add('closemodal')
            ingLine.appendChild(closeBtn)

        }

        closeBtn.addEventListener('click', closeModal=()=>{
            modal.style.display = "none"
        })

        let rMore = document.createElement('button')
            rMore.textContent = "Ingredients"
            rMore.classList.add('btnStyle')
            rMore.addEventListener('click', openModal)

           
            let mainVal = document.createElement('div')
            mainVal.classList.add('foodStyle')
       
            mainVal.appendChild(imgel)
            mainVal.appendChild(label)
            mainVal.appendChild(cal)
            mainVal.appendChild(dLabel)
            mainVal.appendChild(rMore)
            // mainVal.appendChild(modal)
          

        mainContainer.appendChild(mainVal)

         //set window click to hide modal
         window.addEventListener('click', hideWindow);
            
         //function to hide modal when window click
         function hideWindow(e){
             if(e.target == modal){
                 modal.style.display = "none";
             }
         }

     

      
         

        })
    })
    mainContainer.textContent = ''


        
    }
mainoutput(randomRecipeUrl)



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



//get random recipe onclick
document.getElementById('foodList').addEventListener('click', getFood=()=>{
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
    mainContainer.textContent = ''

})

//search for food recipe
let searchInput = document.getElementById('searchInput')


searchInput.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13 && searchInput.value != ''){
        const searchUrl =  `https://api.edamam.com/search?q=${searchInput.value}&app_id=${id}&app_key=${key}&from=0&to=21&calories=591-722&health=alcohol-free`
        // mainoutput(searchUrl)

        
            fetch(searchUrl)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                let newVal = []
                newVal = data.hits
                newVal.map((val)=>{
                //      if(newVal.length == 0){
                //     noResp = true
                //     console.log(noResp)
                // }
                
                let label = document.createElement('h5')
                label.innerHTML = `Recipe<br> 
                ${val.recipe.label}`
                label.classList.add('card-title')
                label.style.marginTop = "12px"
                label.style.textAlign = "center"
        
                let cal = document.createElement('p')
                cal.classList.add('card-text')
                cal.style.fontSize = "10px"
                cal.style.textAlign = "center"
                cal.textContent = `${val.recipe.calories} calories per 100g`
        
                
        
        
                let dLabel = document.createElement('p')
                dLabel.classList.add('card-text')
                dLabel.style.fontSize = "10px"
                dLabel.style.textAlign = "center"
                dLabel.textContent = `${val.recipe.dietLabels}`
        
                
        
                let imgel = document.createElement('img')
                imgel.src = val.recipe.image
                imgel.classList.add('imgStyle')
        
              
                openModal=()=>{
                    modal.style.display = "flex"
                    modal.style.justifyContent= "center"
                    modal.style.alignItems = "center"
                    modal.style.minHeight = "100vh"
                    ingLine.textContent = `${val.recipe.ingredientLines}.`
                    modal.appendChild(ingLine)
                    ingLine.style.display = "flex"
                    ingLine.justifyContent = "center"
                    ingLine.alignItems = "center"
                    ingLine.style.fontSize = "14px"
                    ingLine.style.height = "fit-content"
                    ingLine.style.backgroundColor = "#fff"
                    ingLine.style.padding = "20px"
                    ingLine.style.textAlign = "center"
                    ingLine.style.maxWidth = "50%"
                    ingLine.style.marginLeft = "10%"
                    ingLine.style.borderRadius = "10px"
                    closeBtn.classList.add('closemodal')
                    ingLine.appendChild(closeBtn)
        
                }
        
                closeBtn.addEventListener('click', closeModal=()=>{
                    modal.style.display = "none"
                })
        
                let rMore = document.createElement('button')
                    rMore.textContent = "Ingredients"
                    rMore.classList.add('btnStyle')
                    rMore.addEventListener('click', openModal)
        
                   
                    let mainVal = document.createElement('div')
                    mainVal.classList.add('foodStyle')
               
                    mainVal.appendChild(imgel)
                    mainVal.appendChild(label)
                    mainVal.appendChild(cal)
                    mainVal.appendChild(dLabel)
                    mainVal.appendChild(rMore)
                    // mainVal.appendChild(modal)
                  
        
                mainContainer.appendChild(mainVal)
        
                 //set window click to hide modal
                 window.addEventListener('click', hideWindow);
                    
                 //function to hide modal when window click
                 function hideWindow(e){
                     if(e.target == modal){
                         modal.style.display = "none";
                     }
                 }
                })
            })
            // mainContainer.textContent = ''
         
            }
       
        
        else if(e.keyCode === 13 && searchInput.value != '' &&  newVal.length == 0){
               document.getElementById('noResult').style.display = "block"
            console.log('nothing')
        
        }
       
})

searchInput.value = ''
mainContainer.textContent = ''





document.getElementById('searchBtn').addEventListener('click', findRecipe=()=>{
    if(searchInput.value != ''){
    const searchUrl =  `https://api.edamam.com/search?q=${searchInput.value}&app_id=${id}&app_key=${key}&from=0&to=21&calories=591-722&health=alcohol-free`
    mainoutput(searchUrl)
    }
    else if(mainContainer.innerHTML == ''){
        document.getElementById('noResult').style.display = "block"
        console.log('nothing')
       
    }
    searchInput.value = ''

})

showRanger=()=>{
    document.getElementById('customSwitch1').addEventListener('click', showRanger=()=>{
    // ranger = document.getElementById('ranger').style.display = "grid"
    // ranger.style.flexDirection = "row"
     let rangers = document.querySelector('.ranger')
     let mealRanger = document.querySelector('.mealType')

         rangers.classList.toggle('rangerStyle')
         mealRanger.classList.toggle('mealRangerStyle')

    //  ranger.style.flexDirection = "row"
    })
}
showRanger()







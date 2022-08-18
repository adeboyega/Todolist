window.addEventListener('load',(e)=>{
    e.preventDefault()
    let title = document.querySelector('#title')
    let paragraph = document.querySelector('#para')
    let submitbtn = document.querySelector('.subbtn')
    let del = document.querySelector('.delbtn')
    let count = 0
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        let grandparent = document.querySelector('.container')
        let parent = document.createElement('div')
        let titlechild = document.createElement('input')
        titlechild.type = 'text'
        titlechild.setAttribute('readonly','readonly')
        titlechild.classList.add('space')
        titlechild.value = title.value
        title.Placeholder= 'Title'
        title.value=''
        let parachild = document.createElement('input')
        parachild.type = 'text'
        parachild.value = paragraph.value
        parachild.setAttribute('readonly','readonly')
        parachild.classList.add('space')
        paragraph.Placeholder = 'Paragraph'
        paragraph.value = ''
        let delbtn = document.createElement('button')
        delbtn.textContent = 'Delete'
        delbtn.classList.add('delbtn') 
        delbtn.addEventListener('click',()=>{
            console.log('click')
            grandparent.removeChild(parent)
        })
        let editbtn = document.createElement('button')
        editbtn.textContent = 'Edit'
        editbtn.addEventListener('click',()=>{
            if(editbtn.textContent.toLocaleLowerCase()== 'edit'){
                editbtn.textContent = 'Save'
                parachild.removeAttribute('readonly')
                parachild.focus()
            }else{
                editbtn.textContent = 'Edit'
                parachild.setAttribute('readonly','readonly')
            }

        editbtn.addEventListener('click',(e)=>{
            if(editbtn.textContent.toLocaleLowerCase()== 'edit'){
                editbtn.textContent = 'Save'
                titlechild.removeAttribute('readonly')
                titlechild.focus()
            }else{
                editbtn.textContent='Edit'
                titlechild.setAttribute('readonly','readonly')

            }
        })
        })
        count++
        let num = document.createElement('p')
        num.textContent= count


        grandparent.appendChild(parent)
        parent.appendChild(num)
        parent.appendChild(titlechild)
        parent.appendChild(parachild)
        parent.appendChild(editbtn)
        parent.appendChild(delbtn)

    })
    
})
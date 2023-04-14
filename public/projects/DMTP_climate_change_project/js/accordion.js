// accordion
const accordionContent = document.querySelectorAll('.accordion_content');

accordionContent.forEach((item) => {
    const accordionLabel = item.querySelector('.accordion_label');

    accordionLabel.addEventListener('click', () =>{
        console.log('click')
        const active = document.querySelector('.active')
        toggleItem(item)
        if (active && active!== item){
            toggleItem(active)
        }
    })
})

const toggleItem = (item) =>{
    const  accordionProposalSection = item.querySelector('.content')

    if(item.classList.contains('active')){
        accordionProposalSection.removeAttribute('style')
        item.classList.remove('active')
    }
    else{
        accordionProposalSection.style.height = accordionProposalSection.scrollHeight + 'px'
        item.classList.add('active')
    }
}


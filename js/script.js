import projects from "./projects.js";

window.addEventListener('DOMContentLoaded', engage);

async function engage() {

    // mostrando o menu hamburguer (responsividade mobile)
    document.getElementById('menu').addEventListener('click', () => {
        document.querySelector('.navbar_links').classList.toggle('active');
    })

    // renderizando os projetos na tela
    const projectDiv = document.getElementById('projects_box')
    for (let i = 0; i < projects.length; i++) {
        
        if (!projects[i].released) {
            
            projectDiv.innerHTML += `
            
                <div class="project_card">
        
                    <img src="${projects[i].img}" alt="megaman_repo" class="card_img">
                    <h3 class="card_title">${projects[i].titulo}</h3>
                    <p class="card_description">${projects[i].descricao}</p>
        
                    <div class="card_links">
                        <a target="_blank" href="${projects[i].linkGitHub}">Link GitHub</a>
                    </div>
        
                </div>
            
            `;
    
        } else {
    
            projectDiv.innerHTML += `
            
                <div class="project_card">
        
                    <img src="${projects[i].img}" alt="megaman_repo" class="card_img">
                    <h3 class="card_title">${projects[i].titulo}</h3>
                    <p class="card_description">${projects[i].descricao}</p>
        
                    <div class="card_links">
                        <a target="_blank" href="${projects[i].linkGitHub}">Link GitHub</a>
                        <a target="_blank" href="${projects[i].linkVercel}">Link Vercel</a>
                    </div>
        
                </div>
            
            `;
    
        }
        
        
    }

}
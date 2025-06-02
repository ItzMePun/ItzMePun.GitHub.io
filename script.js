const closeBtn = document.querySelector('#close-menu-btn');
const openBtn = document.querySelector('#open-menu-btn');
const menu = document.querySelector('.nav_menu');

// open nav menu
openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
    menu.style.display = 'block';
})

// close nav menu


const closeNav = () => {
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
    menu.style.display = 'none';
}

closeBtn.addEventListener('click', closeNav)

if(window.innerWidth < 1024) {
    document.querySelectorAll(".nav_menu li a").forEach(navItem => {
        navItem.addEventListener('click', closeNav)
    })
}

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})



const fetchProjectSums = () => {
    let summaryContainer = document.querySelector(".portfolio_projects");
    summaryContainer.innerHTML = ''

    project_summaries.forEach(project => {
        const newProject = document.createElement('article');
        newProject.className = 'portfolio_project';
        newProject.innerHTML = `
        <span class="portfolio_project-img" target="_blank">
                <img src="${project.img}" alt="Project-img"/>
        </span>
            <div class="portfolio_project-description">
                <span>
                    <h3>${project.title}</h3>
                    <a class="btn" href="${project.link}" target="">Learn More →</a>
                </span>
                <p>
                    ${project.summary}
                </p>
            </div>`;

    summaryContainer.append(newProject);
    })
}

window.addEventListener('load', fetchProjectSums)

const fetchWorkExperience = () => {
    let descriptionContainer = document.querySelector(".workExperiences");
    descriptionContainer.innerHTML = ''

    if (window.innerWidth <= 650) {
        exp_summaries.forEach(position => {
        const newPosition = document.createElement('article');
        newPosition.className = 'position_desc';
        newPosition.innerHTML = `
        <div class="position_header">
            <span class="position_logo_img"><img src="${position.img}" alt="Position-img"></span>
            <span>
                <h3 class="position_title"><a class="btn" href="${position.link}">${position.company}</a>, ${position.title}</h3>
                <h4 class="position_dates">${position.dates}</h4>    
            </span>
        </div>
        <div class="position_description">
            <p>
                ${position.summary}
            </p>
        </div>`;
        descriptionContainer.append(newPosition);
    })

    } else {
    exp_summaries.forEach(position => {
        const newPosition = document.createElement('article');
        newPosition.className = 'position_desc';
        newPosition.innerHTML = `
        <span class="position_logo_img"><img src="${position.img}" alt="Position-img"></span>
        <div class="position_description">
            <span>
                <h3 class="position_title"><a class="btn" href="${position.link}">${position.company}</a>, ${position.title}</h3>
                <h4 class="position_dates">${position.dates}</h4>    
            </span>
            <p>
                ${position.summary}
            </p>
        </div>`;
        descriptionContainer.append(newPosition);
    })
    }
}


window.addEventListener('load', fetchWorkExperience)
window.addEventListener('resize', fetchWorkExperience)
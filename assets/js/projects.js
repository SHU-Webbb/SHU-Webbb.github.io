$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/foodNavi.jpg',
            link: 'https://github.com/SHU-Webbb/TeamProject_FoodNavi.git',
            title: 'FoodNavi',
            technologies: ['JAVA', 'Spring', 'Python', 'JavaScript', 'HTML', 'CSS', 'Oracle'],
            description: "건강한 한끼식사를 위한 신단추천 사이트",
            categories: ['featured', 'web']
        },
        {
            image: 'assets/images/campNavi.jpg',
            link: '',
            title: 'CampNavi',
            technologies: ['JAVA', 'Spring', 'Python', 'JavaScript', 'HTML', 'CSS', 'Oracle'],
            description: "캠핑추천 사이트",
            categories: ['featured', 'web']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}

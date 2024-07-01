$(document).ready(() => {
    render_projects('featured');
});

let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/campNavi.png',
            link: 'https://shu-webbb.github.io/TeamProject_CampNavi/',
            title: 'CampNavi',
            technologies: ['JAVA', 'Spring', 'Python', 'JavaScript', 'HTML', 'CSS', 'Oracle'],
            description: "Surprise Package를 이용한 캠핑장 추천 사이트",
            categories: ['featured', 'web']
        },
        {
            image: 'assets/images/foodNavi.png',
            link: 'https://shu-webbb.github.io/TeamProject_FoodNavi/',
            title: 'FoodNavi',
            technologies: ['JAVA', 'Spring', 'Python', 'JavaScript', 'HTML', 'CSS', 'Oracle'],
            description: "머신러닝기반 식단추천 사이트",
            categories: ['featured', 'web']
        },
    ];

    let projects = [];
    if (slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
};

let project_mapper = project => {
    return `
        <div class="wrapper">
            <div class="card radius shadowDepth1">
                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}" target="_blank">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>` : ''
                }
                <div class="card__content card__padding">
                    <article class="card__article">
                        <h2><a href="${project.link}" target="_blank">${project.title}</a></h2>
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}" target="_blank">Demo</a>` : ''}</p>
                    </article>
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};

let selected = (slug) => {
    render_projects(slug);
};

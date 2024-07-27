const chapterLinks = {
    science_part_1: [
        { title: 'Gravitation', url: 'https://youtube.com/playlist?list=PLj-kRueKSaznpIvm4JPZ781U7oXy_tm1J&si=V1bpz58-umvdfXsu' },
        { title: 'Periodic Classification of Element', url: 'https://youtube.com/playlist?list=PLj-kRueKSazmqHckTEZ9JhxaGioNvVflz&si=fOVMYf5dbc5B-sSP' },
        { title: 'Chemical Reactions and Equations', url: 'https://youtube.com/playlist?list=PLj-kRueKSazlICVud66dJzNq-VId5YFRC&si=YDlVxkErM_d4tdd7' },
        { title: 'Effects of Electric Current', url: 'https://youtube.com/playlist?list=PLj-kRueKSazmQllKptXppWwaIERdyh8rs&si=6cVwh6i97ANdj02_' },
        { title: 'Heat', url: 'https://youtube.com/playlist?list=PLj-kRueKSazkxhHxuyBvCjmGVxhF_dyTI&si=TkeR-trvSTcunOTC' },
        { title: 'Refraction of light', url: 'https://youtube.com/playlist?list=PLj-kRueKSazlHedAKUhGJQz3U71kFdDlY&si=fnqhUcXxoi-pgVTk' },
        { title: 'Lenses', url: 'https://youtube.com/playlist?list=PLj-kRueKSazn9dJv8O60Z86THpMsraHfY&si=YOykJ4mdQTydbDDH' },
        { title: 'Metallurgy', url: 'https://youtube.com/playlist?list=PLj-kRueKSazmiGtCSubPtm93SotBXOR8n&si=vUWsJL6GTME7B8fz' },
        { title: 'Carbon Compounds', url: 'https://youtube.com/playlist?list=PLj-kRueKSazmNCZus3omj65O3Vzju2ajn&si=rrFsoLAFo6OHo5kN' },
        { title: 'Space Missions', url: 'https://youtube.com/playlist?list=PLj-kRueKSazkX67xVsAxo8KuW6d24grMX&si=EpAW56r2L_Xm-9Zc' }
    ],
    science_part_2: [
        { title: 'Heredity and Evolution', url: 'https://youtube.com/playlist?list=PLj-kRueKSazne3AgcADCaSlvaPpBJxESj&si=2wli7qy61dM0p7XJ' },
        { title: 'Life Processes in Living Organisms part 1', url: 'https://youtube.com/playlist?list=PLj-kRueKSazktBVT4sTxzTt4j6T2uW1oj&si=deFYlFv72x9ygbK2' },
        { title: 'Life Processes in Living Organisms part 2', url: 'https://youtube.com/playlist?list=PLj-kRueKSazlTDfZ1-pNrFCPwznb2NOy9&si=zoRliidIVdigEkzi' },
        { title: 'Environmental Management', url: 'https://youtube.com/playlist?list=PLj-kRueKSazmk1RMpuKaWY_3-gDmRmXOm&si=ylT1hvdWgaI6tTUk' },
        { title: 'Towards Green Energy', url: 'https://youtube.com/playlist?list=PLj-kRueKSaznaacxceIiEYzKckvQ6hWuH&si=GQpN7XV7u6r-G5iZ' },
        { title: 'Animal Classification', url: 'https://youtube.com/playlist?list=PLj-kRueKSazlICVud66dJzNq-VId5YFRC&si=rVpKjMAKrgaDH9cH' },
        { title: 'Introduction to Microbiology', url: 'https://youtube.com/playlist?list=PLj-kRueKSazlZno7RQdaVNuoUUMB6goLD&si=IkIp850BH-T5YYH7' },
        { title: 'Cell Biology and Biotechnology', url: 'https://youtube.com/playlist?list=PLj-kRueKSazkmXbtU02FrPM_JEglUCtZZ&si=Y3Rn2d65lLP0sT0-' },
        { title: 'Social health', url: 'https://youtube.com/playlist?list=PLj-kRueKSazlqriDKN-a5V0u5g2PunKjW&si=48y9wc5YhlN57CZ2' },
        { title: 'Disaster Management', url: 'https://youtube.com/playlist?list=PLj-kRueKSazlYlNgS-x1HHY6Lu-zjwvD-&si=AKJQEQfOXNbcrwhd' }
    ],
    geography: [
        { title: 'Full Playlist', url: 'https://youtube.com/playlist?list=PLj-kRueKSazn_UEPB5grgBJAoENfOuCtE&si=0RoT0Jox_89jf8JD' }
    ],
    history: [
        { title: 'Full Playlist', url: 'https://youtube.com/playlist?list=PLj-kRueKSazn2f-uZ0IRNnKZs2XapnEOC&si=S3ok1fSieaaImRS6' }
    ],
    maths_part_1: [
        { title: 'Full Playlist', url: 'https://youtube.com/playlist?list=PLjm_mvBNlvBZ8d1EGhXxiVnviM4yPf-Uq&si=hb3ElbKkxHuCI1F5' }
    ],
    maths_part_2: [
        { title: 'Full Playlist', url: 'https://youtube.com/playlist?list=PLjm_mvBNlvBZuGzQnoMp1o_LiqqAUap1T&si=JIn0ahqSpmqOnp7a' }
    ],
};

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('expanded')) {
        menu.classList.remove('expanded');
        setTimeout(() => menu.style.display = 'none', 300); // Hide after animation
    } else {
        menu.style.display = 'block';
        setTimeout(() => menu.classList.add('expanded'), 10); // Add class after display
    }
}

function formatSubject(subject) {
    return subject.replace(/_/g, ' ').toUpperCase();
}

function loadContent(subject) {
    const content = document.getElementById('content');
    const chapters = chapterLinks[subject] || [];
    content.innerHTML = `
        <h1>${formatSubject(subject)}</h1>
        <div id="chapters">
            ${chapters.map(chapter => `
                <div class="chapter">
                    <a href="${chapter.url}" target="_blank">${chapter.title}</a>
                </div>
            `).join('')}
        </div>
    `;
    toggleMenu(); // Close menu after clicking
}

function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="home-message">
            <h1>All The Best Gauree For 10th!</h1>
            <p>Let's Do This, Target 95%++</p>
        </div>
    `;
}

// Call loadHome on page load
document.addEventListener('DOMContentLoaded', loadHome);

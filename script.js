document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const openButtons = document.querySelectorAll(".open-modal");
    const projects = [
        {
            description: "The RGUKT grade mate is a web application that helps students calculate their SGPA, CGPA, and percentages. This appliction is bulid by using complete react framework",
            link: "https://rgukt-grade-mate.vercel.app/"
        },
        {
            description: "Appointy is an efficient appointment reminder application developed by a dedicated team of four members, including myself, within a span of two days. The app is designed to help users keep track of their appointments with ease. Built using HTML, CSS, and JavaScript for the frontend, and PHP for the backend, Appointy ensures a seamless user experience and reliable functionality. The application allows users to schedule, manage, and receive reminders for their appointments, ensuring they never miss an important meeting or event.",
            link: "https://drive.google.com/file/d/1IrSZvkQYIC6LFDX_CUQU6sPnapyMBULX/view?usp=sharing"
        },
        {
            description: "Crop disease identification is a critical aspect of modern agriculture to ensure the health and yield of crops. Traditional methods of disease detection rely on manual inspection by agronomists, which can be time-consuming and prone to errors. To address this challenge, a machine learning-based approach leveraging TensorFlow and Streamlit has been developed to automate the process of identifying crop diseases.",
            link: "https://colab.research.google.com/drive/1WsIHzCOOc5l4Fs49F4xYLonNrAy4yD4d#scrollTo=yvxpkcCJOqxA"
        }
    ];

    openButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const project = this.getAttribute("data-project");
            const pid = this.getAttribute("pid");
            const projectDetails = projects[pid];

            document.getElementById("project-details").innerText = `Details about ${project}`;
            document.getElementById("project").innerText = `${projectDetails.description}`;

            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', projectDetails.link);
            linkElement.setAttribute('target', '_blank'); // Optional: open link in new tab
            linkElement.textContent = 'Learn more';

            const projectElement = document.getElementById("project");
            projectElement.appendChild(document.createElement('br')); // Optional: add a line break
            projectElement.appendChild(linkElement);

            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

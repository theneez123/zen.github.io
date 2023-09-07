    // Function to increment and display view count
    function incrementViewCount(projectId) {
        const projectViewsElement = document.getElementById(projectId + '-views');
        let views = localStorage.getItem(projectId) || 0;
        views = parseInt(views, 10) + 1;
        localStorage.setItem(projectId, views);
        projectViewsElement.textContent = views;
    }

    // Attach click event listeners to project buttons to track views
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('try-project1').addEventListener('click', function() {
            incrementViewCount('project1');
        });

        document.getElementById('try-project2').addEventListener('click', function() {
            incrementViewCount('project2');
        });

        document.getElementById('try-project3').addEventListener('click', function() {
            incrementViewCount('project3');
        });
    });
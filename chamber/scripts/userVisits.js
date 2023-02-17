const lastVisit = localStorage.getItem('lastVisit');
        if (lastVisit) {
            const daysSinceLastVisit = Math.round((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));
            document.getElementById('last-visit').textContent = `Last visit: ${daysSinceLastVisit} days ago`;
        } else {
            document.getElementById('last-visit').textContent = "This is your first visit!";
        }
        localStorage.setItem('lastVisit', Date.now());
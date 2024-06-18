document.addEventListener('DOMContentLoaded', function () {
    const checklistItems = document.querySelectorAll('.checklist li');

    // Initialisiere die Checkliste basierend auf dem gespeicherten Zustand
    checklistItems.forEach(item => {
        const itemId = item.querySelector('a').getAttribute('href').substring(1);
        const completed = localStorage.getItem(itemId);

        if (completed === 'true') {
            item.querySelector('input[type="checkbox"]').checked = true;
            item.classList.add('completed');
        }
    });

    // Füge Klick-Event für Checkliste hinzu
    checklistItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                item.classList.add('completed');
                localStorage.setItem(checkbox.id, 'true');
            } else {
                item.classList.remove('completed');
                localStorage.setItem(checkbox.id, 'false');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".menu-button");
    var navbar = document.querySelector(".navbar");

    menuButton.addEventListener("click", function () {
        navbar.classList.toggle("active");

    });
});




// script.js

// Funktion zur Steuerung des Burgermenüs
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navbarLinks = document.getElementById("navbar-links");

    // Schließe das Burgermenü, wenn auf einen Link geklickt wird
    navbarLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });
});



function copyToClipboard(index) {
    const codeboxes = document.querySelectorAll('.codebox pre');
    const code = codeboxes[index].textContent.trim();

    navigator.clipboard.writeText(code)
        .then(() => {
            showCopyMessage(index);
        })
        .catch(err => {
            console.error('Fehler beim Kopieren: ', err);
        });
}

function showCopyMessage(index) {
    const copyMessages = document.querySelectorAll('.copy-message');
    copyMessages[index].style.display = 'inline-block';

    setTimeout(() => {
        copyMessages[index].style.display = 'none';
    }, 2000);
}


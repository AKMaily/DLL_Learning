document.addEventListener('DOMContentLoaded', function() {
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
        
        checkbox.addEventListener('change', function() {
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

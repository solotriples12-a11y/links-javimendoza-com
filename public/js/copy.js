// Click en el chip de código: copia al portapapeles sin disparar la navegación
// del <a> contenedor.
document.querySelectorAll('.code-chip').forEach((chip) => {
    chip.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const code = chip.dataset.code;
        if (!code) return;

        try {
            await navigator.clipboard.writeText(code);
        } catch {
            // Fallback para navegadores sin Clipboard API (HTTP, viejos).
            const ta = document.createElement('textarea');
            ta.value = code;
            ta.setAttribute('readonly', '');
            ta.style.position = 'absolute';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); } catch {}
            document.body.removeChild(ta);
        }

        const hint = chip.querySelector('.code-chip-hint');
        const originalHint = hint ? hint.textContent : null;
        chip.classList.add('is-copied');
        if (hint) hint.textContent = 'Copiado';

        clearTimeout(chip._resetTimer);
        chip._resetTimer = setTimeout(() => {
            chip.classList.remove('is-copied');
            if (hint && originalHint !== null) hint.textContent = originalHint;
        }, 1500);
    });
});

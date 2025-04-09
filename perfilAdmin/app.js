document.addEventListener('DOMContentLoaded', () => {
    const carruseles = [
      { listaId: 'lista-staff', prevId: 'btn-prev-staff', nextId: 'btn-next-staff' },
      { listaId: 'lista-servicios', prevId: 'btn-prev-servicios', nextId: 'btn-next-servicios' },
      { listaId: 'lista-productos', prevId: 'btn-prev-productos', nextId: 'btn-next-productos' }
    ];
  
    carruseles.forEach(({ listaId, prevId, nextId }) => {
      const lista = document.getElementById(listaId);
      const prevBtn = document.getElementById(prevId);
      const nextBtn = document.getElementById(nextId);
  
      // Busca una tarjeta como ejemplo para sacar el ancho
      const tarjeta = lista.querySelector('.carta');
      if (!tarjeta) return; // Si no hay tarjetas, no hace nada
  
      const tarjetaStyle = window.getComputedStyle(tarjeta);
      const marginRight = parseInt(tarjetaStyle.marginRight) || 0;
      const tarjetaWidth = tarjeta.offsetWidth + marginRight;
  
      prevBtn.addEventListener('click', () => {
        lista.scrollBy({ left: -tarjetaWidth, behavior: 'smooth' });
      });
  
      nextBtn.addEventListener('click', () => {
        lista.scrollBy({ left: tarjetaWidth, behavior: 'smooth' });
      });
    });
  });
  
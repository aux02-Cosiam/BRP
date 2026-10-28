let menuVisible = false;

// Ocultar/Mostrar Menú en Móviles
function mostrarOcultarMenu() {
    document.getElementById("nav").classList.toggle("active");
}

function seleccionar() {
    document.getElementById("nav").classList.remove("active");
    menuVisible = false;
}

// Lógica de Acordeones
document.addEventListener("DOMContentLoaded", () => {
    const acordeones = document.querySelectorAll(".acordeon-cabecera");
    acordeones.forEach(acordeon => {
        acordeon.addEventListener("click", function() {
            this.classList.toggle("activa");
            const contenido = this.nextElementSibling;
            if (contenido.style.maxHeight) {
                contenido.style.maxHeight = null;
            } else {
                contenido.style.maxHeight = contenido.scrollHeight + "px";
            }
        });
    });
});

// Función para abrir los PDFs
function abrirPDF(event, rutaArchivo) {
    event.stopPropagation();
    window.open(rutaArchivo, '_blank');
}

// ==========================================
// INVENTARIO OFICIAL DE 43 EQUIPOS BRP
// ==========================================
const datosBRP = [
    { id: 1, equipo: "HORNO FERRO/RATIONAL MOD: iVario NS: E11PK25058091129.", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 2, equipo: "HORNO FERRO/RATIONALMOD: SCCWE201G NS:G21SH13102373213", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 3, equipo: "HORNO RATIONAL MOD: LM100DG.A NS:G11SJ22062980299", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 4, equipo: "HORNO DE CONVECCIÓN MOD: ME2205402 HB ECOMAX", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 5, equipo: "LAVALOZA TREN COMPACTO MARCA WINTERHALTER MOD: STR 110 ENERGY NS:1257146", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 6, equipo: "LAVALOZA CAPOTA MARCA ASBER MOD: GE-H500 NS:8102536349", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 7, equipo: "SARTENETA MARCA INTERTÉCNICA MOD: SG-4 NS: 8309", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 8, equipo: "SARTENETA MARCA INTERTÉCNICA MOD: SG-4 NS: 9607-2", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 9, equipo: "SARTENETA MARCA INTERTÉCNICA MOD: SG-4 NS: 9655-2", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 10, equipo: "MARMITA MARCA INTERTÉCNICA MOD: MVG-60 NS :9607-1", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 11, equipo: "MARMITA MARCA INTERTÉCNICA MOD: MVG-60 NS:9655-1", freq: "MENSUAL", serv: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X"] },
    { id: 12, equipo: "FABRICADOR DE HIELO MARCA HOSHIZAKI MOD:KML-631MAH NS:F0654QM", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 13, equipo: "CÁMARA DE CONSERVACIÓN NUEVO PTE MOD:M22L0024 PTE NS: PTE", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 14, equipo: "CONSERVACIÓN MARCA BOHN 900-06-A NS: M12L09731", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 15, equipo: "CÁMARA DE CONGELACIÓN MARCA BOHN MOD: 900-06-A NS:M12K09100", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 16, equipo: "REFRIGERADOR 2 PUERTAS TRUE,3, 900-07-C NS: 7488213", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 17, equipo: "REFRIGERADOR 2 PUERTAS TRUE, 5, 900-07-E NS: 9566245", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 18, equipo: "REFRIGERADOR 2 PUERTAS TRUE, 6, 900-07-F NS:9566223", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 19, equipo: "REFRIGERADOR 2 PUERTAS TRUE 7, 900-07-A NS: 7498206", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 20, equipo: "PLANCHA DE 48 PULG., 4 QUEMADORES MARCA CORIAT", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 21, equipo: "PLANCHA DE 48 PULG., 4 QUEMADORES MARCA CORIAT", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 22, equipo: "PLANCHA CHICA MARCA DRAGO", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 23, equipo: "PLANCHA DE 4 QUEMADORES MARCA ASBER", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 24, equipo: "PLANCHA DE 3 QUEMADORES MARCA DRAGO", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 25, equipo: "PLANCHA DE 3 QUEMADORES MARCA DRAGO", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 26, equipo: "FREIDORA IMPERIAL 900-10-B S/S", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 27, equipo: "CONSERVADOR CALIENTE MARCA TRUE MOD: STR2HPT-2S-2S NS: 8078460", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 28, equipo: "CONSERVADOR CALIENTE MARCA TRUE MOD: STR2HPT-2S-2S NS: 9586346", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 29, equipo: "CONSERVADOR CALIENTE MARCA TRUE MOD: STR2HPT-2S-2S NS: 9586347", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 30, equipo: "CONSERVADOR CALIENTE MARCA TRUE MOD: PASS-TRUE NS: 9811647", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 31, equipo: "FREIDORA MARCA DRAGO MOD: FG-20-RS-I NS: 2001000ESA220604220601036", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 32, equipo: "FREIDORA MARCA DRAGO MOD: FG-20-RS-I NS: 2001000ESA220604220601134", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 33, equipo: "ESTUFÓN 3 QUEMADORES MARCA DRAGO", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 34, equipo: "ESTUFÓN 2 QUEMADORES MARCA DRAGO MOD: GFO-002-00 NS: 844-2660-101022-227", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 35, equipo: "ESTUFÓN SENCILLO", freq: "BIMESTRAL", serv: ["✓", "", "✓", "", "X", "", "X", "", "X", "", "X", ""] },
    { id: 36, equipo: "BAÑO MARÍA", freq: "TRIMESTRAL", serv: ["✓", "", "", "✓", "", "", "X", "", "", "X", "", ""] },
    { id: 37, equipo: "BAÑO MARÍA", freq: "TRIMESTRAL", serv: ["✓", "", "", "✓", "", "", "X", "", "", "X", "", ""] },
    { id: 38, equipo: "BAÑO MARÍA", freq: "TRIMESTRAL", serv: ["✓", "", "", "✓", "", "", "X", "", "", "X", "", ""] },
    { id: 39, equipo: "BAÑO MARÍA", freq: "TRIMESTRAL", serv: ["✓", "", "", "✓", "", "", "X", "", "", "X", "", ""] },
    { id: 40, equipo: "BAÑO MARÍA", freq: "TRIMESTRAL", serv: ["✓", "", "", "✓", "", "", "X", "", "", "X", "", ""] },
    { id: 41, equipo: "PLANTA DE BATERIAS (BAÑO MARIA ELECTRICA)", freq: "TRIMESTRAL", serv: ["✓", "", "", "✓", "", "", "X", "", "", "X", "", ""] },
    { id: 42, equipo: "BARRA MARIA ELECTRICA", freq: "TRIMESTRAL", serv: ["✓", "", "", "✓", "", "", "X", "", "", "X", "", ""] },
    { id: 43, equipo: "PROCESADOR HOBART MOD: FP-4001 SERIE: 761054949", freq: "TRIMESTRAL", serv: ["✓", "", "", "✓", "", "", "X", "", "", "X", "", ""] }
];

// ==========================================
// LÓGICA DEL MODAL DE CALENDARIO
// ==========================================
function abrirCalendarioModal() {
    document.getElementById('modal-calendario').style.display = 'flex';
    const contenedor = document.getElementById('contenedor-tabla');
    generarTablaCalendario(contenedor);
}

function cerrarCalendarioModal(event) {
    if (!event || event.target.id === 'modal-calendario') {
        document.getElementById('modal-calendario').style.display = 'none';
    }
}

function generarTablaCalendario(contenedor) {
    let html = `
        <table id="tabla-calendario-datos">
            <thead id="cabecera-tabla-calendario">
                <tr>
                    <th>#</th>
                    <th style="min-width: 250px;">Modelo, Serie y Marca del Equipo</th>
                    <th>Frecuencia</th>
                    <th style="color: #28a745;">Jul 26</th>
                    <th style="color: #28a745;">Ago 26</th>
                    <th style="color: #28a745;">Sep 26</th>
                    <th style="color: #28a745;">Oct 26</th>
                    <th style="background-color: #ffcccc; color: var(--accent-red);">Nov 26</th>
                    <th>Dic 26</th>
                    <th>Ene 27</th>
                    <th>Feb 27</th>
                    <th>Mar 27</th>
                    <th>Abr 27</th>
                    <th>May 27</th>
                    <th>Jun 27</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    datosBRP.forEach(row => {
        let celdasServicios = row.serv.map((s, index) => {
            let color = s === "✓" ? "color: #28a745;" : "color: var(--accent-red);";
            let bg = index === 4 ? "background-color: #fff5f5;" : "";
            return `<td style="text-align:center; font-weight:bold; ${color} ${bg}">${s}</td>`;
        }).join('');
        
        html += `
            <tr>
                <td>${row.id}</td>
                <td style="text-align:left; font-size: 11px;">${row.equipo}</td>
                <td><span style="font-size:11px; padding:3px 6px; background:#f0f0f0; border-radius:4px;">${row.freq}</span></td>
                ${celdasServicios}
            </tr>
        `;
    });
    
    html += `</tbody></table>`;
    contenedor.innerHTML = html;
}
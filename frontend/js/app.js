const transacciones = document.getElementById("transacciones");

const descripcion = document.getElementById("descripcion");
const monto = document.getElementById("monto");
const fecha = document.getElementById("fecha");
const categoria = document.getElementById("categoria");

const btnIngreso = document.getElementById("btnIngreso");
const btnGasto = document.getElementById("btnGasto");

cargarDatos();

function cargarDatos() {

    fetch("http://localhost:3000/api/gastos")
        .then(res => {

            if (!res.ok) {
                throw new Error("Error del servidor");
            }

            return res.json();
        })

        .then(data => {

            transacciones.innerHTML = "";

            if (!Array.isArray(data)) {
                console.log(data);
                return;
            }

            data.forEach(item => {

                const fila = document.createElement("div");

                fila.className =
                    item.tipo === "INGRESO"
                    ? "fila ingresos"
                    : "fila gastos";

                fila.innerHTML = `
                    <div><strong>${item.descripcion}</strong></div>
                    <div>${item.categoria}</div>
                    <div>${item.tipo}</div>
                    <div>$ ${Number(item.monto).toLocaleString()}</div>
                    <div>${item.fecha}</div>
                `;

                transacciones.appendChild(fila);

            });

        })

        .catch(error => {
            console.error(error);
        });

}

btnIngreso.addEventListener("click", () => guardarMovimiento("INGRESO"));
btnGasto.addEventListener("click", () => guardarMovimiento("GASTO"));

function guardarMovimiento(tipo) {

    fetch("http://localhost:3000/api/gastos", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            descripcion: descripcion.value,
            monto: monto.value,
            fecha: fecha.value,
            categoria_id: categoria.value,
            tipo: tipo

        })

    })

    .then(res => res.json())

    .then(() => {

        descripcion.value = "";
        monto.value = "";
        fecha.value = "";

        cargarDatos();

    })

    .catch(console.error);

}
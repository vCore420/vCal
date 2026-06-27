
// WorkShop Planner
const stages=['✂️ Cut Job','📦 Ready For PC','🎨 At PC','🛠️ Ready For Assembly','✔️ Ready For Install'];
const classes=['cut','pc','atpc','assembly','install'];

let jobs = [];

async function save(){
    await savePlannerJobs(jobs);
    await renderPlanner();
}

async function move(id){
    let j = jobs.find(x => x.id === id);
    let i = stages.indexOf(j.status);

    if(i < 4){
        j.status = stages[i + 1];
        await save();
    }
}

async function del(id){
    jobs = jobs.filter(x => x.id !== id);
    await save();
}

async function addJob(){
    const name = document.getElementById("name");
    const product = document.getElementById("product");
    const colour = document.getElementById("colour");
    const customProduct = document.getElementById("customProduct");
    const customColour = document.getElementById("customColour");
    const date = document.getElementById("date");
    const notes = document.getElementById("notes");
    const pdf = document.getElementById("pdf");

    if(!name.value.trim()) return;

    const file = pdf.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
        jobs.push({
            id:Date.now(),
            name:name.value,
            product:product.value==='Custom'?customProduct.value:product.value,
            colour:colour.value==='Custom'?customColour.value:colour.value,date:date.value,
            notes:notes.value,pdf:file?reader.result:null,
            status:stages[0]
            }
        );
        name.value='';
        customProduct.value='';
        customColour.value='';
        date.value='';
        notes.value='';
        pdf.value='';
        await save();
    }

    if(file){
        reader.readAsDataURL(file);
    }else{
        jobs.push({id:Date.now(), name:name.value, product:product.value==='Custom'?customProduct.value:product.value, colour:colour.value==='Custom'?customColour.value:colour.value, date:date.value, notes:notes.value, pdf:null, status:stages[0]});
        await save();
    }
}

async function renderPlanner() {
    jobs = await getPlannerJobs();
    const logicContainer = document.getElementById("calculator-logic-container");
    logicContainer.innerHTML = `
    <div class="planner-container">

        <button id="return-btn" class="top-back-btn">
            ← Return
        </button>

        <div class="planner-header">
            <div class="planner-header-text">
                <h1>🏭 Workshop Production Board</h1>
                <p class="planner-subtitle">
                    Simple visual tracking for powder coating workflow
                </p>
            </div>
        </div>

        <div id="dashboard" class="planner-dashboard"></div>

        <div class="card">
            <h2>➕ Add New Job</h2>
            <div class="planner-form">
                <input
                    id="name"
                    class="planner-input"
                    placeholder="Customer Name">
                <select id="product" class="planner-input">
                    <option>Crimsafe Door</option>
                    <option>Crimsafe Slider</option>
                    <option>Crimsafe Angled Window</option>
                    <option>Crimsafe Window</option>
                    <option>Lifestyle Door</option>
                    <option>Lifestyle Slider</option>
                    <option>Lifestyle Angled Window</option>
                    <option>Lifestyle Window</option>
                    <option>Angle</option>
                    <option>Custom</option>
                </select>

                <input
                    id="customProduct"
                    class="planner-input"
                    placeholder="Custom Product">
                <select id="colour" class="planner-input">
                    <option>Matt Black</option>
                    <option>Appliance White</option>
                    <option>Arctic White</option>
                    <option>Off White</option>
                    <option>Ironsand</option>
                    <option>Flaxpod</option>
                    <option>Titania</option>
                    <option>Grey Friars</option>
                    <option>Sandstone Grey</option>
                    <option>Silver Pearl</option>
                    <option>Electric Cow</option>
                    <option>Karaka</option>
                    <option>Perm Green</option>
                    <option>Mid Bronze</option>
                    <option>Slate Blue</option>
                    <option>New Denim Blue</option>
                    <option>Canvas Cloth</option>
                    <option>Charcoal<option>
                    <option>Custom</option>
                </select>

                <input
                    id="customColour"
                    class="planner-input"
                    placeholder="Custom Colour">
                <input
                    id="date"
                    class="planner-input"
                    type="date">
                <input
                    id="pdf"
                    class="planner-input"
                    type="file"
                    accept=".pdf">
            </div>

            <div class="planner-notes">
                <textarea
                    id="notes"
                    class="planner-input"
                    placeholder="Notes">
                </textarea>
            </div>

            <button id="add" class="button">
                Add Job
            </button>
        </div>

        <div id='planner-wrapper' class='planner-wrapper'>
            <input
                id="search"
                class="planner-search"
                placeholder="🔍 Search customer names">

            <div
                id="board"
                class="planner-board">
            </div>
        </div>
    </div>
    `;

    const dashboard = document.getElementById("dashboard");
    const board = document.getElementById("board");

    const search = document.getElementById("search");
    const query = search.value.toLowerCase();

    document.getElementById("add").onclick = addJob;
    document.getElementById("return-btn").onclick = closeCalculator;
    search.oninput = renderPlanner;

    dashboard.innerHTML = "";
    board.innerHTML = "";

    stages.forEach((stage, index) => {

        // Dashboard card
        dashboard.innerHTML += `
            <div class="planner-card">
                <h3>${stage}</h3>
                <h1>${jobs.filter(j => j.status === stage).length}</h1>
            </div>
        `;

        // Column
        const column = document.createElement("div");
        column.className = `planner-column ${classes[index]}`;
        column.innerHTML = `<h3>${stage}</h3>`;
        jobs
            .filter(j =>
                j.status === stage &&
                j.name.toLowerCase().includes(query)
            )
            .forEach(job => {
                column.innerHTML += `
                    <div class="planner-job">
                        <b>👤 ${job.name}</b>
                        <p>🪟 ${job.product}</p>
                        <p>🎨 ${job.colour}</p>
                        <p>📅 ${job.date || "No date"}</p>

                        <div class="planner-small">
                            ${job.notes}
                        </div>
                        <div class="planner-actions">
                            ${
                                job.pdf
                                ? `<button onclick="window.open('${job.pdf}')">📄 PDF</button>`
                                : ""
                            }

                            <button onclick="move(${job.id})">
                                ➡ Next
                            </button>

                            <button onclick="del(${job.id})">
                                🗑 Delete
                            </button>
                        </div>
                    </div>
                `;
            });
        board.appendChild(column);
    });
}
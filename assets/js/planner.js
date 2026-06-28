
// WorkShop Planner
const stages=['✂️ Cut Job','📦 Ready For PC','🎨 At PC','🛠️ Ready For Assembly','✔️ Ready For Install'];
const classes=['cut','pc','atpc','assembly','install'];
const jobIcons = [
    "🦊","🐼","🐸","🦉","🦝","🦀",
    "🐧","🐢","🐙","🦋","🐝","🦜",
    "🐬","🦕","🐿️","🦦","🦥","🦔",
    "🐺","🐱","🐶","🐯","🦁","🐻",
    "🛡️","⚔️","🏹","🧙","🧝","🧚",
    "🐉","🦄","👑","💎","📜","🗝️",
    "🏰","⚜️","🔮","✨","🌙","☀️",
    "🦅","🧭","⚡","🔥","🔧","🔨",
    "⚙️","🔩","📐","📏","🧰","🦺",
    "🏗️","🚪","📦","🎨","🧪","🧱",
    "🚚","⚡","🔥","💡"
];

let jobs = [];
let searchQuery = "";

async function save(){
    await savePlannerJobs(jobs);
    renderBoard();
}

async function attachCalculatorToJob(calcKey, calc) {
    const jobs = await getPlannerJobs();
    const modal = document.createElement("div");
    modal.className = "planner-picker";

    modal.innerHTML = `
        <div class="planner-picker-window">
            <h2>📎 Attach Calculator Result</h2>

            <input
                id="plannerJobSearch"
                class="planner-search"
                placeholder="Search jobs...">

            <div id="plannerJobList"></div>

            <button
                class="button"
                id="closePlannerPicker">
                Cancel
            </button>
        </div>
    `;
    document.body.appendChild(modal);

    function drawJobs(filter=""){
        const list = modal.querySelector("#plannerJobList");
        list.innerHTML="";
        jobs.filter(job =>
            job.name.toLowerCase().includes(filter.toLowerCase())
        )
        .forEach(job=>{
            list.innerHTML += `
                <button
                    class="planner-job-select"
                    data-id="${job.id}">
                    ${job.icon} ${job.name}
                </button>
            `;
        });
        if (!list.innerHTML) {
            list.innerHTML = `
                <p style="text-align:center;padding:20px;opacity:.7;">
                    No matching jobs found.
                </p>
            `;
        }
        list
            .querySelectorAll(".planner-job-select")
            .forEach(button => {

                button.onclick = async () => {
                    const jobId = Number(button.dataset.id);
                    const selectedJob = jobs.find(j => j.id === jobId);

                    if (!selectedJob) return;

                    const snapshot = readCalculatorInputSnapshot(calc);
                    const result = getCopyableResultText();

                    let note = `
                    <div class="planner-note-calculation">
                        <div class="planner-note-header">
                            📐 <strong>${calc.title}</strong>
                        </div>
                        <div class="planner-note-time">
                            🕒 ${new Date().toLocaleString()}
                        </div>
                        <hr>
                        <div class="planner-note-section">
                            <strong>📥 INPUTS</strong>
                    `;

                    calc.inputs.forEach(input => {
                        const value = snapshot[input.id];
                        if (
                            value === "" ||
                            value === null ||
                            value === undefined
                        ) return;

                        let label = input.label
                            .replace(/^Enter\s+/i, "")
                            .replace(/:+$/, "")
                            .trim();

                        note += `
                            <div class="planner-note-row">
                                <span>${label}</span>
                                <strong>${value}</strong>
                            </div>
                        `;
                    });

                    note += `
                        </div>
                        <hr>
                        <div class="planner-note-section">
                            <strong>📤 RESULTS</strong>
                    `;

                    result.split("\n").forEach(line => {
                        if (!line.trim()) return;
                        note += `
                            <div class="planner-note-result">
                                ✔ ${line}
                            </div>
                        `;
                    });

                    note += `
                        </div>

                    </div>
                    `;

                    selectedJob.notes = selectedJob.notes
                        ? selectedJob.notes + "\n\n" + note
                        : note;
                    await savePlannerJobs(jobs);
                    modal.remove();
                };
            });
    }
    drawJobs();
    modal
        .querySelector("#plannerJobSearch")
        .addEventListener("input", e => {

            drawJobs(e.target.value);

        });
    modal
        .querySelector("#closePlannerPicker")
        .onclick = () => {

            modal.remove();

        };
}

async function move(id){
    let j = jobs.find(x => x.id === id);
    let i = stages.indexOf(j.status);

    if(i < 4){
        j.status = stages[i + 1];
        await save();
    }

    if(i >= 4){
        jobs = jobs.filter(x => x.id !== id);
        await save();
    }
}

async function moveBack(id){
    let j = jobs.find(x => x.id === id);
    let i = stages.indexOf(j.status);

    if(i < 4){
        j.status = stages[i - 1];
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
    const icon = jobIcons[Math.floor(Math.random() * jobIcons.length)];

    reader.onload = async () => {
        jobs.push({
            id:Date.now(),
            icon: icon,
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
        jobs.push({
            id:Date.now(), 
            name:name.value, 
            icon: icon, 
            product:product.value==='Custom'?customProduct.value:product.value, 
            colour:colour.value==='Custom'?customColour.value:colour.value, 
            date:date.value, 
            notes:notes.value, 
            pdf:null, 
            status:stages[0]});
        await save();
    }
}

function toggleJob(id){
    const job = document.getElementById(`job-${id}`);
    job.parentElement.classList.toggle("open");
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

        <div class="planner-add-job">
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
                <textarea id="notes" class="planner-input" placeholder="Notes"></textarea>
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

    document.getElementById("add").onclick = addJob;
    document.getElementById("return-btn").onclick = closeCalculator;

    const search = document.getElementById("search");
    search.value = searchQuery;

    search.oninput = () => {
        searchQuery = search.value.toLowerCase();
        renderBoard();
    };

    renderBoard();

}

function renderBoard(){

    const dashboard = document.getElementById("dashboard");
    const board = document.getElementById("board");

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
                j.name.toLowerCase().includes(searchQuery)
            )
            .forEach(job => {
                column.innerHTML += `
                    <div class="planner-job">
                        <div class="planner-job-header"
                            onclick="toggleJob(${job.id})">
                            <span>▶ ${job.icon} ${job.name}</span>
                        </div>

                        <div class="planner-job-details" id="job-${job.id}">
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

                            <button class='button' onclick="move(${job.id})">
                                ➡ Next
                            </button>

                            <button class='button' onclick="moveBack(${job.id})">
                                ⬅ Prev
                            </button>

                            <button class='button' onclick="del(${job.id})">
                                🗑 Delete
                            </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        board.appendChild(column);
    });

}
window.onload = function() {
  document.getElementById('main-title').textContent = textContent.app.title;
  document.getElementById('main-synopsis').textContent = textContent.app.synopsis;
  document.getElementById('fine-print').textContent = textContent.finePrint;
  

  // Show only the department grid on load
  showSection('department-grid');

  // Build department grid
  const grid = document.getElementById('department-grid');
  textContent.departments.forEach(dept => {
    const card = document.createElement('div');
    card.className = 'card liquid-glass';
    card.onclick = () => openModal(dept.key);

    card.innerHTML = `
      <img src="assets/img/${dept.key}.png" class="card-thumb" alt="${dept.name} Preview" />
      <div class="card-label">${dept.name}</div>
      <button class="button" onclick="event.stopPropagation(); openModal('${dept.key}')">
        ${textContent.buttons.enter}
      </button>
    `;
    grid.appendChild(card);
  });

  document.getElementById('modal-close-btn').onclick = closeModal;
};

// Utility function to show only one main section
function showSection(sectionId) {
  const sections = [
    'department-grid',
    'calculator-selection-grid',
    'calculator-logic-container'
  ];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  const active = document.getElementById(sectionId);
  if (active) active.classList.remove('hidden');
}

function openModal(deptKey) {
  const dept = textContent.departments.find(d => d.key === deptKey);
  document.getElementById('modal-img').src = `assets/img/${dept.key}.png`;
  document.getElementById('modal-title').textContent = dept.name;
  document.getElementById('modal-brief').textContent = dept.preview;
  const enterBtn = document.getElementById('modal-enter-btn');
  enterBtn.textContent = textContent.buttons.enter;
  enterBtn.onclick = function() {
    closeModal();
    enterDepartment(dept.key);
    window.scrollTo(0, 0); 
  };
  document.getElementById('deptModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('deptModal').style.display = 'none';
}

function enterDepartment(deptKey) {
  closeModal();
  showSection('calculator-selection-grid');

  const calcGrid = document.getElementById('calculator-selection-grid');
  calcGrid.innerHTML = '';

  const dept = textContent.departments.find(d => d.key === deptKey);
  if (!dept) return;

  // If department has calculators, show calculator cards
  if (dept.calculators && dept.calculators.length) {
    dept.calculators.forEach(calc => {
      const card = document.createElement('div');
      card.className = 'card liquid-glass';
      card.innerHTML = `
        <div class="card-label">${calc.name}</div>
        <p>${calc.synopsis}</p>
        <button class="button" onclick="openCalculator('${calc.key}')">
          ${textContent.buttons.enter}
        </button>
      `;
      calcGrid.appendChild(card);
    });
  }
  // If department has products, show product info cards
  else if (dept.product && dept.product.length) {
    dept.product.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'card liquid-glass';
      card.innerHTML = `
        <div class="card-label">${prod.name}</div>
        <p>${prod.synopsis}</p>
        <button class="button" onclick="openProductInfo('${prod.key}')">
          ${textContent.buttons.enter}
        </button>
      `;
      calcGrid.appendChild(card);
    });
  }

  // Remove any existing back button container
  let backBtnContainer = document.getElementById('calc-back-btn-container');
  if (backBtnContainer) backBtnContainer.remove();

  // Create and insert centered back button container after the grid
  backBtnContainer = document.createElement('div');
  backBtnContainer.id = 'calc-back-btn-container';
  backBtnContainer.className = 'centered-btn-container';

  const backBtn = document.createElement('button');
  backBtn.className = 'button';
  backBtn.textContent = textContent.buttons.back;
  backBtn.onclick = function() {
    showSection('department-grid');
    backBtnContainer.remove();
    window.scrollTo(0, 0); 
  };
  backBtnContainer.appendChild(backBtn);

  // Insert after the grid
  calcGrid.parentNode.insertBefore(backBtnContainer, calcGrid.nextSibling);
}

// Show product info
function openProductInfo(productKey) {
  showSection('calculator-logic-container');
  const logicContainer = document.getElementById('calculator-logic-container');
  const productDept = textContent.departments.find(d => d.key === 'product');
  const product = productDept.product.find(p => p.key === productKey);
 
  if (!product) {
    logicContainer.innerHTML = "<p>Product info not found.</p>";
    return;
  }

  let detailsHtml = '';
  if (product.details && product.details.length) {
    detailsHtml = product.details.map(section => `
      <section class="product-section">
        <h3>${section.heading}</h3>
        ${Array.isArray(section.content)
          ? `<ul>${section.content.map(item => `<li>${item}</li>`).join('')}</ul>`
          : `<p>${section.content}</p>`
        }
      </section>
    `).join('');
  }

  logicContainer.innerHTML = `
    <h2>${product.name}</h2>
    <div class="product-info">
      <p>${product.synopsis}</p>
      ${detailsHtml}
    </div>
    <button class="button" onclick="closeCalculator()">Back</button>
  `;
}

function openCalculator(calcKey) {
  showSection('calculator-logic-container');
  const logicContainer = document.getElementById('calculator-logic-container');
  const calc = calculators[calcKey];
  if (!calc) {
    logicContainer.innerHTML = "<p>Calculator not found.</p>";
    return;
  }

  // Build inputs
  let inputsHtml = calc.inputs.map(input => {
    if (input.type === "radio") {
      return `
        <label>${input.label}</label>
        <div class="radio-group">
          ${input.options.map(opt =>
            `<label>
              <span>${opt.label}</span>
              <input type="radio" name="${input.id}" value="${opt.value}" />
            </label>`
          ).join('')}
        </div>
      `;
    }
    if (input.type === "checkbox") {
      return `
        <div class="checkbox-group">
          <label>
            <span>${input.label}</span>
            <input type="checkbox" id="${input.id}" />
          </label>
        </div>
      `;
    }
    // Default for text/number
    return `<label for="${input.id}">${input.label}</label>
      <input id="${input.id}" type="${input.type}" min="${input.min || ''}" value="${input.default || ''}" class="input" />`;
  }).join("");

  logicContainer.innerHTML = `
    <h2>${calc.title}</h2>
    <p>${calc.description}</p>
    <form id="calcForm">${inputsHtml}
      <button type="button" class="button" id="calcRunBtn">Calculate</button>
    </form>
    <div id="calcResult"></div>
    <button class="button" onclick="closeCalculator()">Back</button>
  `;

  document.getElementById('calcRunBtn').onclick = function() {
    const values = {};
    calc.inputs.forEach(input => {
      if (input.type === "radio") {
        const checked = document.querySelector(`input[name="${input.id}"]:checked`);
        values[input.id] = checked ? checked.value : null;
      } else if (input.type === "checkbox") {
        values[input.id] = document.getElementById(input.id).checked;
      } else {
        values[input.id] = parseFloat(document.getElementById(input.id).value);
      }
    });
    document.getElementById('calcResult').innerHTML = calc.calculate(values);
  };
}

function closeCalculator() {
  showSection('calculator-selection-grid');
  window.scrollTo(0, 0); 
}


 

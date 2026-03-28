window.onload = function() {
  updateBannerForDepartment();
  document.getElementById('fine-print').textContent = textContent.finePrint;

  // Show only the department grid on load
  showSection('department-grid');

  // Build department grid
  const grid = document.getElementById('department-grid');
  textContent.departments.forEach(dept => {
    const card = document.createElement('div');
    card.className = 'card liquid-glass';
    card.onclick = () => {
      enterDepartment(dept.key);
      window.scrollTo(0, 0);
    };

    card.innerHTML = `
      <img src="assets/img/${dept.key}.png" class="card-thumb" alt="${dept.name} Preview" />
      <div class="card-label">${dept.name}</div>
      <button class="button" onclick="event.stopPropagation(); enterDepartment('${dept.key}'); window.scrollTo(0, 0);">
        ${textContent.buttons.enter}
      </button>
    `;
    grid.appendChild(card);
  });

  document.getElementById('modal-close-btn').onclick = closeModal;

  initQuickCalculator();
};

const CALCULATOR_HISTORY_KEY = 'vcal-calculator-history';
let activeDepartmentKey = null;

function updateBannerForDepartment(deptKey) {
  const titleEl = document.getElementById('main-title');
  const synopsisEl = document.getElementById('main-synopsis');
  if (!titleEl || !synopsisEl) return;

  if (!deptKey) {
    titleEl.textContent = textContent.app.title;
    synopsisEl.textContent = textContent.app.synopsis;
    return;
  }

  const dept = textContent.departments.find(function(item) {
    return item.key === deptKey;
  });

  if (!dept) {
    titleEl.textContent = textContent.app.title;
    synopsisEl.textContent = textContent.app.synopsis;
    return;
  }

  titleEl.textContent = dept.name;
  synopsisEl.textContent = dept.preview || textContent.app.synopsis;
}

function readCalculatorHistoryStore() {
  try {
    const raw = sessionStorage.getItem(CALCULATOR_HISTORY_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    console.warn('Unable to read calculator history.', error);
    return {};
  }
}

function writeCalculatorHistoryStore(store) {
  try {
    sessionStorage.setItem(CALCULATOR_HISTORY_KEY, JSON.stringify(store));
  } catch (error) {
    console.warn('Unable to save calculator history.', error);
  }
}

function getCalculatorHistory(calcKey) {
  const store = readCalculatorHistoryStore();
  return Array.isArray(store[calcKey]) ? store[calcKey] : [];
}

function saveCalculatorHistoryEntry(calcKey, calcTitle, inputSnapshot, result) {
  const store = readCalculatorHistoryStore();
  const currentHistory = Array.isArray(store[calcKey]) ? store[calcKey] : [];

  const entry = {
    id: String(Date.now()) + '-' + Math.random().toString(36).slice(2, 7),
    title: calcTitle,
    inputs: inputSnapshot,
    result: result,
    createdAt: new Date().toISOString()
  };

  store[calcKey] = [entry].concat(currentHistory).slice(0, 15);
  writeCalculatorHistoryStore(store);
}

function formatCalculatorHistoryTime(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleString([], {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function stripHtmlToText(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return (temp.textContent || temp.innerText || '').trim();
}

function buildHistoryPreview(resultHtml) {
  const text = stripHtmlToText(resultHtml);
  if (text.length <= 100) return text;
  return text.slice(0, 97) + '...';
}

function buildCalculatorHistoryMarkup(calcKey) {
  const history = getCalculatorHistory(calcKey);

  if (!history.length) {
    return (
      '<div class="calc-history">' +
        '<h3>History</h3>' +
        '<p class="calc-history-empty">No calculations saved yet for this calculator.</p>' +
      '</div>'
    );
  }

  return (
    '<div class="calc-history">' +
      '<h3>History</h3>' +
      '<div class="calc-history-list">' +
        history.map(function(entry, index) {
          return (
            '<button type="button" class="calc-history-item" data-history-index="' + index + '">' +
              '<span class="calc-history-title">' + entry.title + '</span>' +
              '<span class="calc-history-time">' + formatCalculatorHistoryTime(entry.createdAt) + '</span>' +
              '<span class="calc-history-preview">' + buildHistoryPreview(entry.result) + '</span>' +
            '</button>'
          );
        }).join('') +
      '</div>' +
    '</div>'
  );
}

function refreshCalculatorHistory(calcKey, calc) {
  const historyHost = document.getElementById('calcHistoryHost');
  if (!historyHost) return;

  historyHost.innerHTML = buildCalculatorHistoryMarkup(calcKey);
  bindCalculatorHistoryEvents(calcKey, calc);
}

function readCalculatorInputSnapshot(calc) {
  const snapshot = {};

  calc.inputs.forEach(function(input) {
    if (input.type === 'radio') {
      const checked = document.querySelector('input[name="' + input.id + '"]:checked');
      snapshot[input.id] = checked ? checked.value : '';
    } else if (input.type === 'checkbox') {
      const element = document.getElementById(input.id);
      snapshot[input.id] = element ? element.checked : false;
    } else {
      const element = document.getElementById(input.id);
      snapshot[input.id] = element ? element.value : '';
    }
  });

  return snapshot;
}

function buildCalculatorValuesFromSnapshot(calc, snapshot) {
  const values = {};

  calc.inputs.forEach(function(input) {
    if (input.type === 'radio') {
      values[input.id] = snapshot[input.id] || null;
    } else if (input.type === 'checkbox') {
      values[input.id] = Boolean(snapshot[input.id]);
    } else {
      values[input.id] = parseFloat(snapshot[input.id]);
    }
  });

  return values;
}

function restoreCalculatorHistoryEntry(calcKey, calc, index) {
  const history = getCalculatorHistory(calcKey);
  const entry = history[index];
  if (!entry) return;

  calc.inputs.forEach(function(input) {
    if (input.type === 'radio') {
      const radios = document.querySelectorAll('input[name="' + input.id + '"]');
      radios.forEach(function(radio) {
        radio.checked = radio.value === entry.inputs[input.id];
      });
    } else if (input.type === 'checkbox') {
      const element = document.getElementById(input.id);
      if (element) {
        element.checked = Boolean(entry.inputs[input.id]);
      }
    } else {
      const element = document.getElementById(input.id);
      if (element) {
        element.value = entry.inputs[input.id] || '';
      }
    }
  });

  const resultEl = document.getElementById('calcResult');
  if (resultEl) {
    resultEl.innerHTML = entry.result;
  }
}

function bindCalculatorHistoryEvents(calcKey, calc) {
  const historyHost = document.getElementById('calcHistoryHost');
  if (!historyHost) return;

  historyHost.onclick = function(event) {
    const historyItem = event.target.closest('[data-history-index]');
    if (!historyItem) return;

    const index = parseInt(historyItem.getAttribute('data-history-index'), 10);
    if (Number.isNaN(index)) return;

    restoreCalculatorHistoryEntry(calcKey, calc, index);
  };
}

function formatCalculatorResult(resultHtml) {
  const lines = resultHtml
    .split('<br>')
    .map(function(line) {
      return line.trim();
    })
    .filter(function(line) {
      return line.length > 0;
    });

  const formattedLines = lines.map(function(line) {
    const highlightedLine = line.replace(/(-?\d+(?:\.\d+)?(?:\s?-\s?\d+(?:\.\d+)?)?)(mm|m)?/g, function(match, numberPart, unitPart) {
      return '<span class="result-number">' + numberPart + '</span>' + (unitPart || '');
    });

    return '<div class="calc-result-line">' + highlightedLine + '</div>';
  });

  return '<div class="calc-result-block">' + formattedLines.join('') + '</div>';
}

function getCopyableResultText() {
  const resultEl = document.getElementById('calcResult');
  if (!resultEl) return '';

  const lines = Array.from(resultEl.querySelectorAll('.calc-result-line')).map(function(line) {
    return line.textContent.replace(/\s+/g, ' ').trim();
  }).filter(function(line) {
    return line.length > 0;
  });

  if (lines.length) {
    return lines.join('\n');
  }

  return resultEl.textContent.replace(/\s+/g, ' ').trim();
}

function initQuickCalculator() {
  const bubble = document.getElementById('quick-calc-bubble');
  const panel = document.getElementById('quick-calc-panel');
  const closeBtn = document.getElementById('quick-calc-close');
  const display = document.getElementById('quick-calc-display');

  if (!bubble || !panel || !closeBtn || !display) return;

  let current = '0';
  let previous = null;
  let operator = null;
  let shouldResetCurrent = false;

  function updateDisplay() {
    display.value = current;
  }

  function clearAll() {
    current = '0';
    previous = null;
    operator = null;
    shouldResetCurrent = false;
    updateDisplay();
  }

  function inputDigit(digit) {
    if (current === 'Error') {
      current = digit;
      shouldResetCurrent = false;
      updateDisplay();
      return;
    }

    if (shouldResetCurrent) {
      current = digit;
      shouldResetCurrent = false;
    } else {
      current = current === '0' ? digit : current + digit;
    }

    updateDisplay();
  }

  function inputDecimal() {
    if (current === 'Error') {
      current = '0.';
      shouldResetCurrent = false;
      updateDisplay();
      return;
    }

    if (shouldResetCurrent) {
      current = '0.';
      shouldResetCurrent = false;
      updateDisplay();
      return;
    }

    if (!current.includes('.')) {
      current += '.';
      updateDisplay();
    }
  }

  function backspace() {
    if (current === 'Error') {
      clearAll();
      return;
    }

    if (shouldResetCurrent) return;

    if (current.length <= 1) {
      current = '0';
    } else {
      current = current.slice(0, -1);
    }

    updateDisplay();
  }

  function calculate(left, right, op) {
    if (op === '+') return left + right;
    if (op === '-') return left - right;
    if (op === '*') return left * right;
    if (op === '/') return right === 0 ? NaN : left / right;
    return right;
  }

  function chooseOperator(nextOperator) {
    if (current === 'Error') return;

    const inputValue = Number(current);

    if (previous === null) {
      previous = inputValue;
    } else if (operator) {
      const result = calculate(previous, inputValue, operator);

      if (!Number.isFinite(result)) {
        current = 'Error';
        previous = null;
        operator = null;
        shouldResetCurrent = true;
        updateDisplay();
        return;
      }

      previous = Number(result.toFixed(10));
      current = String(previous);
      updateDisplay();
    }

    operator = nextOperator;
    shouldResetCurrent = true;
  }

  function runEquals() {
    if (current === 'Error') return;
    if (operator === null || previous === null) return;

    const inputValue = Number(current);
    const result = calculate(previous, inputValue, operator);

    if (!Number.isFinite(result)) {
      current = 'Error';
    } else {
      current = String(Number(result.toFixed(10)));
    }

    previous = null;
    operator = null;
    shouldResetCurrent = true;
    updateDisplay();
  }

  bubble.addEventListener('click', function() {
    bubble.classList.add('hidden');
    panel.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', function() {
    panel.classList.add('hidden');
    bubble.classList.remove('hidden');
  });

  panel.addEventListener('click', function(event) {
    const button = event.target.closest('[data-action]');
    if (!button) return;

    const action = button.getAttribute('data-action');
    const value = button.getAttribute('data-value');

    if (action === 'digit') inputDigit(value);
    if (action === 'decimal') inputDecimal();
    if (action === 'operator') chooseOperator(value);
    if (action === 'equals') runEquals();
    if (action === 'clear') clearAll();
    if (action === 'backspace') backspace();
  });

  updateDisplay();
}

// Utility function to show only one main section
function showSection(sectionId) {
  const sections = [
    'department-grid',
    'calculator-selection-grid',
    'calculator-logic-container'
  ];

  sections.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });

  const active = document.getElementById(sectionId);
  if (active) active.classList.remove('hidden');

  if (sectionId === 'department-grid') {
    activeDepartmentKey = null;
    updateBannerForDepartment();
  } else {
    updateBannerForDepartment(activeDepartmentKey);
  }

  updateTopBackButton(sectionId);
}

function updateTopBackButton(sectionId) {
  const topBackBtn = document.getElementById('top-back-btn');
  if (!topBackBtn) return;

  if (sectionId === 'department-grid') {
    topBackBtn.classList.add('hidden');
    topBackBtn.onclick = null;
    return;
  }

  topBackBtn.classList.remove('hidden');

  if (sectionId === 'calculator-selection-grid') {
    topBackBtn.onclick = function() {
      const backBtnContainer = document.getElementById('calc-back-btn-container');
      if (backBtnContainer) backBtnContainer.remove();

      showSection('department-grid');
      window.scrollTo(0, 0);
    };
    return;
  }

  if (sectionId === 'calculator-logic-container') {
    topBackBtn.onclick = function() {
      closeCalculator();
    };
  }
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

  activeDepartmentKey = dept.key;
  updateBannerForDepartment(activeDepartmentKey);

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
    logicContainer.innerHTML = '<p>Calculator not found.</p>';
    return;
  }

  const inputsHtml = calc.inputs.map(function(input) {
    if (input.type === 'radio') {
      return (
        '<label>' + input.label + '</label>' +
        '<div class="radio-group">' +
          input.options.map(function(opt) {
            return (
              '<label>' +
                '<span>' + opt.label + '</span>' +
                '<input type="radio" name="' + input.id + '" value="' + opt.value + '" />' +
              '</label>'
            );
          }).join('') +
        '</div>'
      );
    }

    if (input.type === 'checkbox') {
      return (
        '<div class="checkbox-group">' +
          '<label>' +
            '<span>' + input.label + '</span>' +
            '<input type="checkbox" id="' + input.id + '" />' +
          '</label>' +
        '</div>'
      );
    }

    return (
      '<label for="' + input.id + '">' + input.label + '</label>' +
      '<input id="' + input.id + '" type="' + input.type + '" min="' + (input.min || '') + '" value="' + (input.default || '') + '" class="input" />'
    );
  }).join('');

  logicContainer.innerHTML =
    '<button class="calc-close-btn" onclick="closeCalculator()">X</button>' +  
    '<h2>' + calc.title + '</h2>' +
    '<p>' + calc.description + '</p>' +
    '<form id="calcForm">' +
      inputsHtml +
      '<button type="button" class="button" id="calcRunBtn">Calculate</button>' +
    '</form>' +
    '<div class="calc-result-actions">' +
      '<button type="button" class="button calc-copy-btn" id="calcCopyBtn">Copy Result</button>' +
    '</div>' +
    '<div id="calcResult"></div>' +
    '<div id="calcHistoryHost">' + buildCalculatorHistoryMarkup(calcKey) + '</div>';

  bindCalculatorHistoryEvents(calcKey, calc);

  const copyBtn = document.getElementById('calcCopyBtn');

  if (copyBtn) {
    copyBtn.onclick = async function() {
      const textToCopy = getCopyableResultText();

      if (!textToCopy) {
        copyBtn.textContent = 'No Result Yet';
        setTimeout(function() {
          copyBtn.textContent = 'Copy Result';
        }, 1200);
        return;
      }

      try {
        await navigator.clipboard.writeText(textToCopy);
        copyBtn.textContent = 'Copied';
        setTimeout(function() {
          copyBtn.textContent = 'Copy Result';
        }, 1200);
      } catch (error) {
        console.warn('Clipboard copy failed.', error);
        copyBtn.textContent = 'Copy Failed';
        setTimeout(function() {
          copyBtn.textContent = 'Copy Result';
        }, 1200);
      }
    };
  }

  document.getElementById('calcRunBtn').onclick = function() {
    const inputSnapshot = readCalculatorInputSnapshot(calc);
    const values = buildCalculatorValuesFromSnapshot(calc, inputSnapshot);
    const result = calc.calculate(values);

    document.getElementById('calcResult').innerHTML = formatCalculatorResult(result);

    saveCalculatorHistoryEntry(calcKey, calc.title, inputSnapshot, result);
    refreshCalculatorHistory(calcKey, calc);
  };
}

function closeCalculator() {
  showSection('calculator-selection-grid');
  window.scrollTo(0, 0); 
}


 

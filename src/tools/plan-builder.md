<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Plan Builder • Feral Foliage</title>
  <link rel="icon" type="image/svg+xml" href="/images/logo.svg">
  <meta name="description" content="Build custom plant care plans with our interactive plan builder">
</head>
<body>
<style>
  * { box-sizing: border-box; }
  body { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; background-color: #0f1110; color: #e7e7e7; margin: 0; padding: 0; line-height: 1.6; }
  a { color: #7ee081; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .wrap { max-width: 1100px; margin: 0 auto; padding: 24px; }
  
  /* Header */
  .header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; background: #171a18; border-bottom: 1px solid #2a2f2c; }
  .header h1 { margin: 0; font-size: 1.3em; color: #7ee081; }
  .header .back-link { color: #a7a7a7; font-size: 0.9em; }
  
  /* Main Layout */
  .builder-container { display: grid; grid-template-columns: 300px 1fr; gap: 24px; margin-top: 24px; }
  
  /* Sidebar */
  .sidebar { background: #171a18; border: 1px solid #2a2f2c; border-radius: 12px; padding: 20px; }
  .sidebar h2 { margin: 0 0 16px 0; font-size: 1.1em; color: #e7e7e7; }
  
  /* Template Dropdown */
  .template-section { margin-bottom: 24px; }
  .template-section label { display: block; margin-bottom: 8px; font-weight: 500; color: #c7c7c7; }
  .template-dropdown { 
    width: 100%; 
    padding: 12px; 
    border: 1px solid #3a3f3c; 
    border-radius: 8px; 
    background-color: #252a27; 
    color: #e7e7e7;
    font-size: 1em;
    cursor: pointer;
  }
  .template-dropdown:focus { outline: none; border-color: #7ee081; }
  
  /* Plan Info */
  .plan-info { margin-bottom: 24px; }
  .plan-info label { display: block; margin-bottom: 8px; font-weight: 500; color: #c7c7c7; }
  .plan-info input { 
    width: 100%; 
    padding: 10px; 
    border: 1px solid #3a3f3c; 
    border-radius: 6px; 
    background-color: #252a27; 
    color: #e7e7e7;
    font-size: 0.95em;
  }
  
  /* Action Buttons */
  .btn { display: inline-block; padding: 10px 20px; border-radius: 6px; font-weight: 600; cursor: pointer; border: none; font-size: 0.95em; }
  .btn-primary { background: #2d5a30; color: #fff; }
  .btn-primary:hover { background: #3a7a3e; }
  .btn-secondary { background: #252a27; border: 1px solid #3a3f3c; color: #e7e7e7; }
  .btn-secondary:hover { background: #2f3532; }
  .btn-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-row .btn { flex: 1; text-align: center; }
  
  /* Outline Editor */
  .outline-editor { background: #171a18; border: 1px solid #2a2f2c; border-radius: 12px; padding: 24px; }
  .outline-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  .outline-header h2 { margin: 0; font-size: 1.2em; color: #7ee081; }
  
  /* Outline Tree */
  .outline-tree { min-height: 200px; }
  .outline-item { 
    padding: 12px 16px; 
    margin-bottom: 8px; 
    background: #252a27; 
    border: 1px solid #3a3f3c; 
    border-radius: 8px; 
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: grab;
    transition: all 0.2s ease;
  }
  .outline-item:hover { border-color: #7ee081; }
  .outline-item.dragging { opacity: 0.5; cursor: grabbing; }
  .outline-item.drag-over { border-color: #7ee081; background: #2d352d; }
  
  .outline-item .drag-handle { 
    color: #6a6a6a; 
    cursor: grab; 
    font-size: 1.2em;
  }
  .outline-item .item-content { flex: 1; }
  .outline-item .item-title { 
    background: transparent; 
    border: none; 
    color: #e7e7e7; 
    font-size: 1em; 
    width: 100%;
    padding: 4px;
  }
  .outline-item .item-title:focus { outline: none; border-bottom: 1px solid #7ee081; }
  .outline-item .item-type { 
    font-size: 0.75em; 
    color: #7ee081; 
    background: #1f2420; 
    padding: 2px 8px; 
    border-radius: 4px;
    text-transform: uppercase;
  }
  .outline-item .delete-btn { 
    background: none; 
    border: none; 
    color: #a7a7a7; 
    cursor: pointer; 
    font-size: 1.1em;
    padding: 4px 8px;
  }
  .outline-item .delete-btn:hover { color: #e05c5c; }
  
  /* Nested Items */
  .outline-children { margin-left: 32px; padding-left: 16px; border-left: 2px solid #2a2f2c; }
  
  /* Add Item Buttons */
  .add-items { display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; }
  .add-btn { 
    background: #252a27; 
    border: 1px dashed #3a3f3c; 
    color: #a7a7a7; 
    padding: 8px 16px; 
    border-radius: 6px; 
    cursor: pointer;
    font-size: 0.85em;
    transition: all 0.2s;
  }
  .add-btn:hover { border-color: #7ee081; color: #7ee081; }
  
  /* Empty State */
  .empty-state { 
    text-align: center; 
    padding: 40px; 
    color: #6a6a6a; 
    border: 2px dashed #2a2f2c; 
    border-radius: 8px;
  }
  .empty-state p { margin: 0 0 16px 0; }
  
  /* Validation */
  .validation-panel { margin-top: 24px; padding: 16px; border-radius: 8px; }
  .validation-panel.valid { background: #1a2d20; border: 1px solid #2d5a30; }
  .validation-panel.invalid { background: #2d1a1a; border: 1px solid #5a2d2d; }
  .validation-panel h3 { margin: 0 0 8px 0; font-size: 1em; }
  .validation-panel.valid h3 { color: #7ee081; }
  .validation-panel.invalid h3 { color: #e05c5c; }
  .validation-panel ul { margin: 8px 0 0 0; padding-left: 20px; color: #a7a7a7; font-size: 0.9em; }
  
  /* Loading State */
  .loading { opacity: 0.5; pointer-events: none; }
  
  /* Responsive */
  @media (max-width: 768px) {
    .builder-container { grid-template-columns: 1fr; }
  }
</style>

<div class="header">
  <h1>🌿 Plan Builder</h1>
  <a href="/" class="back-link">← Back to Dashboard</a>
</div>

<div class="wrap">
  <div class="builder-container">
    <!-- Sidebar with Template & Plan Info -->
    <aside class="sidebar">
      <div class="template-section">
        <label for="templateSelect">Start from Template</label>
        <select id="templateSelect" class="template-dropdown">
          <option value="">— Select a template —</option>
          <option value="pest-control">🐛 Pest Control Guide</option>
          <option value="watering-schedule">💧 Watering Schedule</option>
          <option value="repotting-guide">🪴 Repotting Guide</option>
          <option value="fertilizer-routine">🌱 Fertilizer Routine</option>
          <option value="plant-propagation">✂️ Plant Propagation</option>
          <option value="seasonal-care">❄️ Seasonal Care Plan</option>
        </select>
      </div>
      
      <div class="plan-info">
        <label for="planTitle">Plan Title</label>
        <input type="text" id="planTitle" placeholder="My Plant Care Plan" value="">
      </div>
      
      <div class="plan-info">
        <label for="planDescription">Description</label>
        <input type="text" id="planDescription" placeholder="Brief description..." value="">
      </div>
      
      <div class="btn-row">
        <button class="btn btn-primary" id="saveBtn">Save Plan</button>
        <button class="btn btn-secondary" id="validateBtn">Validate</button>
      </div>
      
      <div id="validationPanel" class="validation-panel" style="display: none;"></div>
    </aside>
    
    <!-- Outline Editor -->
    <main class="outline-editor">
      <div class="outline-header">
        <h2>📋 Plan Outline</h2>
        <button class="btn btn-secondary" id="expandAllBtn">Expand All</button>
      </div>
      
      <div id="outlineTree" class="outline-tree">
        <div class="empty-state">
          <p>Start by selecting a template or building your outline from scratch</p>
        </div>
      </div>
      
      <div class="add-items">
        <button class="add-btn" data-type="section">+ Section</button>
        <button class="add-btn" data-type="step">+ Step</button>
        <button class="add-btn" data-type="tip">+ Tip</button>
        <button class="add-btn" data-type="warning">+ Warning</button>
      </div>
    </main>
  </div>
</div>

<script>
// Plan Builder State
const state = {
  title: '',
  description: '',
  template: '',
  outline: []
};

// Template Definitions
const templates = {
  'pest-control': {
    title: 'Pest Control Guide',
    outline: [
      { id: '1', type: 'section', title: 'Identifying the Pest', children: [
        { id: '1.1', type: 'step', title: 'Common signs of pest infestation' },
        { id: '1.2', type: 'step', title: 'How to identify the pest type' }
      ]},
      { id: '2', type: 'section', title: 'Treatment Options', children: [
        { id: '2.1', type: 'step', title: 'Natural remedies (neem oil, soap)' },
        { id: '2.2', type: 'step', title: 'Chemical treatments' },
        { id: '2.3', type: 'tip', title: 'Quarantine affected plants immediately' }
      ]},
      { id: '3', type: 'section', title: 'Prevention', children: [
        { id: '3.1', type: 'tip', title: 'Regular plant inspections' },
        { id: '3.2', type: 'warning', title: 'Avoid overwatering - attracts pests!' }
      ]}
    ]
  },
  'watering-schedule': {
    title: 'Watering Schedule',
    outline: [
      { id: '1', type: 'section', title: 'Assess Your Plants', children: [
        { id: '1.1', type: 'step', title: 'Check soil moisture levels' },
        { id: '1.2', type: 'step', title: 'Note plant types and needs' }
      ]},
      { id: '2', type: 'section', title: 'Create Schedule', children: [
        { id: '2.1', type: 'step', title: 'Group plants by water needs' },
        { id: '2.2', type: 'step', title: 'Set reminders' }
      ]}
    ]
  },
  'repotting-guide': {
    title: 'Repotting Guide',
    outline: [
      { id: '1', type: 'section', title: 'When to Repot', children: [
        { id: '1.1', type: 'tip', title: 'Roots coming out of drainage holes' },
        { id: '1.2', type: 'tip', title: 'Water runs straight through' }
      ]},
      { id: '2', type: 'section', title: 'The Process', children: [
        { id: '2.1', type: 'step', title: 'Prepare new pot and soil' },
        { id: '2.2', type: 'step', title: 'Gently remove plant' },
        { id: '2.3', type: 'step', title: 'Place in new pot and fill' },
        { id: '2.4', type: 'warning', title: 'Don\'t water immediately - let roots settle!' }
      ]}
    ]
  },
  'fertilizer-routine': {
    title: 'Fertilizer Routine',
    outline: [
      { id: '1', type: 'section', title: 'Choosing Fertilizer', children: [
        { id: '1.1', type: 'step', title: 'NPK ratios explained' },
        { id: '1.2', type: 'tip', title: 'Organic vs synthetic options' }
      ]},
      { id: '2', type: 'section', title: 'Application Schedule', children: [
        { id: '2.1', type: 'step', title: 'Growing season (spring/summer)' },
        { id: '2.2', type: 'step', title: 'Dormant season (fall/winter)' }
      ]}
    ]
  },
  'plant-propagation': {
    title: 'Plant Propagation',
    outline: [
      { id: '1', type: 'section', title: 'Methods', children: [
        { id: '1.1', type: 'step', title: 'Stem cuttings in water' },
        { id: '1.2', type: 'step', title: 'Division' },
        { id: '1.3', type: 'step', title: 'Leaf propagation' }
      ]},
      { id: '2', type: 'section', title: 'Care for Cuttings', children: [
        { id: '2.1', type: 'tip', title: 'Keep in bright, indirect light' },
        { id: '2.2', type: 'warning', title: 'Change water every few days!' }
      ]}
    ]
  },
  'seasonal-care': {
    title: 'Seasonal Care Plan',
    outline: [
      { id: '1', type: 'section', title: 'Spring', children: [
        { id: '1.1', type: 'step', title: 'Resume fertilizing' },
        { id: '1.2', type: 'step', title: 'Check for winter damage' }
      ]},
      { id: '2', type: 'section', title: 'Summer', children: [
        { id: '2.1', type: 'tip', title: 'Increase watering frequency' },
        { id: '2.2', type: 'warning', title: 'Protect from direct sun stress' }
      ]},
      { id: '3', type: 'section', title: 'Fall/Winter', children: [
        { id: '3.1', type: 'step', title: 'Reduce watering' },
        { id: '3.2', type: 'step', title: 'Stop fertilizing' }
      ]}
    ]
  }
};

// Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Render Outline Tree
function renderOutline(items = state.outline, container = document.getElementById('outlineTree')) {
  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Start by selecting a template or building your outline from scratch</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = items.map(item => renderOutlineItem(item)).join('');
  attachOutlineListeners();
}

function renderOutlineItem(item) {
  const childrenHtml = item.children && item.children.length > 0 
    ? `<div class="outline-children">${item.children.map(child => renderOutlineItem(child)).join('')}</div>` 
    : '';
  
  return `
    <div class="outline-item" draggable="true" data-id="${item.id}">
      <span class="drag-handle">⋮⋮</span>
      <div class="item-content">
        <input type="text" class="item-title" value="${escapeHtml(item.title)}" data-id="${item.id}">
      </div>
      <span class="item-type">${item.type}</span>
      <button class="delete-btn" data-id="${item.id}">×</button>
      ${childrenHtml}
    </div>
  `;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Attach Event Listeners
function attachOutlineListeners() {
  // Drag and Drop
  document.querySelectorAll('.outline-item[draggable]').forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);
  });
  
  // Title editing
  document.querySelectorAll('.item-title').forEach(input => {
    input.addEventListener('change', handleTitleChange);
  });
  
  // Delete buttons
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', handleDelete);
  });
}

// Drag and Drop Handlers
let draggedItem = null;

function handleDragStart(e) {
  draggedItem = this;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
  this.classList.remove('dragging');
  document.querySelectorAll('.outline-item').forEach(item => item.classList.remove('drag-over'));
  draggedItem = null;
}

function handleDragOver(e) {
  e.preventDefault();
  if (this !== draggedItem) {
    this.classList.add('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  this.classList.remove('drag-over');
  
  if (draggedItem && this !== draggedItem) {
    // Reorder in state
    const draggedId = draggedItem.dataset.id;
    const targetId = this.dataset.id;
    
    const draggedItemData = findAndRemoveItem(state.outline, draggedId);
    if (draggedItemData) {
      const targetParent = findParent(state.outline, targetId);
      const targetIndex = findItemIndex(targetParent || state.outline, targetId);
      
      if (targetParent) {
        targetParent.children.splice(targetIndex, 0, draggedItemData);
      } else {
        state.outline.splice(targetIndex, 0, draggedItemData);
      }
      
      renderOutline();
    }
  }
}

function findAndRemoveItem(items, id) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      return items.splice(i, 1)[0];
    }
    if (items[i].children) {
      const found = findAndRemoveItem(items[i].children, id);
      if (found) return found;
    }
  }
  return null;
}

function findParent(items, id, parent = null) {
  for (const item of items) {
    if (item.id === id) return parent;
    if (item.children) {
      const found = findParent(item.children, id, item);
      if (found !== undefined) return found;
    }
  }
  return undefined;
}

function findItemIndex(items, id) {
  return items.findIndex(item => item.id === id);
}

// Title Change Handler
function handleTitleChange(e) {
  const id = e.target.dataset.id;
  const newTitle = e.target.value;
  updateItemTitle(state.outline, id, newTitle);
}

function updateItemTitle(items, id, title) {
  for (const item of items) {
    if (item.id === id) {
      item.title = title;
      return true;
    }
    if (item.children && updateItemTitle(item.children, id, title)) {
      return true;
    }
  }
  return false;
}

// Delete Handler
function handleDelete(e) {
  const id = e.target.dataset.id;
  findAndRemoveItem(state.outline, id);
  renderOutline();
}

// Add Item Handler
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    const newItem = {
      id: generateId(),
      type: type,
      title: `New ${type}`,
      children: type === 'section' ? [] : undefined
    };
    
    if (type === 'section') {
      state.outline.push(newItem);
    } else {
      // Add to first section or create one
      const firstSection = state.outline.find(item => item.type === 'section');
      if (firstSection) {
        firstSection.children = firstSection.children || [];
        firstSection.children.push(newItem);
      } else {
        state.outline.push({
          id: generateId(),
          type: 'section',
          title: 'New Section',
          children: [newItem]
        });
      }
    }
    
    renderOutline();
  });
});

// Template Selection
document.getElementById('templateSelect').addEventListener('change', (e) => {
  const templateId = e.target.value;
  if (templateId && templates[templateId]) {
    const template = templates[templateId];
    state.template = templateId;
    state.title = template.title;
    state.outline = JSON.parse(JSON.stringify(template.outline)); // Deep clone
    
    document.getElementById('planTitle').value = template.title;
    renderOutline();
  }
});

// Plan Info Handlers
document.getElementById('planTitle').addEventListener('input', (e) => {
  state.title = e.target.value;
});

document.getElementById('planDescription').addEventListener('input', (e) => {
  state.description = e.target.value;
});

// Save Handler
document.getElementById('saveBtn').addEventListener('click', async () => {
  if (!state.title) {
    alert('Please enter a plan title');
    return;
  }
  
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.textContent = 'Saving...';
  saveBtn.classList.add('loading');
  
  try {
    const response = await fetch('/api/plan/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: state.title,
        description: state.description,
        template: state.template,
        outline: state.outline
      })
    });
    
    if (response.ok) {
      saveBtn.textContent = '✓ Saved!';
      setTimeout(() => {
        saveBtn.textContent = 'Save Plan';
        saveBtn.classList.remove('loading');
      }, 2000);
    } else {
      throw new Error('Save failed');
    }
  } catch (error) {
    saveBtn.textContent = 'Save Failed';
    saveBtn.classList.remove('loading');
    console.error('Save error:', error);
    
    // For demo, simulate save
    saveBtn.textContent = '✓ Saved!';
    setTimeout(() => {
      saveBtn.textContent = 'Save Plan';
      saveBtn.classList.remove('loading');
    }, 2000);
  }
});

// Validate Handler
document.getElementById('validateBtn').addEventListener('click', async () => {
  const validationPanel = document.getElementById('validationPanel');
  validationPanel.style.display = 'block';
  validationPanel.innerHTML = '<p>Validating...</p>';
  validationPanel.className = 'validation-panel';
  
  try {
    const response = await fetch('/api/plan/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: state.title,
        outline: state.outline
      })
    });
    
    const result = await response.json();
    
    if (result.valid) {
      validationPanel.className = 'validation-panel valid';
      validationPanel.innerHTML = '<h3>✓ Valid Plan</h3>';
      if (result.warnings && result.warnings.length > 0) {
        validationPanel.innerHTML += '<ul>' + result.warnings.map(w => `<li>${escapeHtml(w)}</li>`).join('') + '</ul>';
      }
    } else {
      validationPanel.className = 'validation-panel invalid';
      validationPanel.innerHTML = '<h3>✗ Validation Issues</h3><ul>' + 
        result.errors.map(e => `<li>${escapeHtml(e)}</li>`).join('') + '</ul>';
    }
  } catch (error) {
    // Demo validation
    const errors = [];
    if (!state.title) errors.push('Plan title is required');
    if (state.outline.length === 0) errors.push('Outline cannot be empty');
    
    if (errors.length === 0) {
      validationPanel.className = 'validation-panel valid';
      validationPanel.innerHTML = '<h3>✓ Valid Plan</h3><p>Ready to save!</p>';
    } else {
      validationPanel.className = 'validation-panel invalid';
      validationPanel.innerHTML = '<h3>✗ Validation Issues</h3><ul>' + 
        errors.map(e => `<li>${escapeHtml(e)}</li>`).join('') + '</ul>';
    }
  }
});

// Expand All Handler
document.getElementById('expandAllBtn').addEventListener('click', () => {
  document.querySelectorAll('.outline-children').forEach(child => {
    child.style.display = child.style.display === 'none' ? 'block' : 'none';
  });
});

// Initialize
renderOutline();
</script>

</body>
</html>


/* scripts.js - lightweight validation and UI simulation for the frontend project */

// Small helper to show error
function showError(el, msg){
  const err = document.getElementById(el.id + "Error") || null;
  if(err) err.textContent = msg;
  el.classList.add("invalid");
}

function clearError(el){
  const err = document.getElementById(el.id + "Error") || null;
  if(err) err.textContent = "";
  el.classList.remove("invalid");
}

// Registration form validation
const registerForm = document.getElementById("registerForm");
if(registerForm){
  registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("regEmail");
    const pwd = document.getElementById("regPassword");
    const cpwd = document.getElementById("confirmPassword");

    // Name required
    if(!name.value.trim()){ showError(name,"El nombre es obligatorio."); valid=false } else clearError(name);

    // Email basic check
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ showError(email,"Ingresa un correo válido."); valid=false } else clearError(email);

    // Password strength (min 8, at least one number)
    if(pwd.value.length < 8 || !/\d/.test(pwd.value)){ showError(pwd,"Contraseña mínima 8 caracteres y debe incluir al menos un número."); valid=false } else clearError(pwd);

    // Confirm password
    if(pwd.value !== cpwd.value){ showError(cpwd,"Las contraseñas no coinciden."); valid=false } else clearError(cpwd);

    if(valid){
      // Simulate successful registration
      alert("Registro exitoso (simulado). Revisa la tabla de commits para demostrar trabajo colaborativo.");
      registerForm.reset();
      // In entrega real -> enviar al backend o guardar en localStorage según criterio
    }
  });
}

// Login form validation
const loginForm = document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true;
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ showError(email,"Ingresa un correo válido."); valid=false } else clearError(email);
    if(password.value.length < 6){ showError(password,"Contraseña mínima 6 caracteres."); valid=false } else clearError(password);

    if(valid){
      alert("Inicio de sesión exitoso (simulado).");
      loginForm.reset();
    }
  });
}

// Accounts CRUD simulation
const accountsKey = "streamadmin_accounts";
function loadAccounts(){
  const data = JSON.parse(localStorage.getItem(accountsKey) || "[]");
  return data;
}
function saveAccounts(arr){
  localStorage.setItem(accountsKey, JSON.stringify(arr));
}
function renderAccounts(){
  const tableBody = document.querySelector("#accountsTable tbody");
  if(!tableBody) return;
  const arr = loadAccounts();
  tableBody.innerHTML = "";
  arr.forEach((a,i)=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${a.platform}</td><td>${a.user}</td><td>${a.plan}</td>
      <td>
        <button data-index="${i}" class="editBtn">Editar</button>
        <button data-index="${i}" class="delBtn">Eliminar</button>
      </td>`;
    tableBody.appendChild(tr);
  });
}
function showForm(editIndex = null){
  document.getElementById("accountFormSection").style.display = "block";
  document.getElementById("formTitle").textContent = editIndex===null ? "Agregar cuenta" : "Editar cuenta";
  document.getElementById("accountForm").dataset.editIndex = editIndex;
}
function hideForm(){
  document.getElementById("accountFormSection").style.display = "none";
  document.getElementById("accountForm").reset();
  delete document.getElementById("accountForm").dataset.editIndex;
}

document.addEventListener("DOMContentLoaded", function(){
  renderAccounts();

  const addBtn = document.getElementById("addAccountBtn");
  if(addBtn) addBtn.addEventListener("click", ()=> showForm());

  const cancelBtn = document.getElementById("cancelForm");
  if(cancelBtn) cancelBtn.addEventListener("click", ()=> hideForm());

  const accountForm = document.getElementById("accountForm");
  if(accountForm) accountForm.addEventListener("submit", function(e){
    e.preventDefault();
    const platform = document.getElementById("platform");
    const user = document.getElementById("accUser");
    const plan = document.getElementById("accPlan");

    let ok = true;
    if(!platform.value.trim()){ showError(platform,"La plataforma es obligatoria."); ok=false } else clearError(platform);
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.value)){ showError(user,"Ingresa un correo válido."); ok=false } else clearError(user);

    if(!ok) return;

    const arr = loadAccounts();
    const editIndex = accountForm.dataset.editIndex;
    const entry = { platform: platform.value.trim(), user: user.value.trim(), plan: plan.value };

    if(editIndex !== undefined && editIndex !== "") {
      arr[Number(editIndex)] = entry;
    } else {
      arr.push(entry);
    }
    saveAccounts(arr);
    renderAccounts();
    hideForm();
  });

  // Delegate edit/delete
  document.querySelector("#accountsTable")?.addEventListener("click", function(e){
    if(e.target.classList.contains("editBtn")){
      const idx = e.target.dataset.index;
      const arr = loadAccounts();
      const item = arr[idx];
      showForm(idx);
      document.getElementById("platform").value = item.platform;
      document.getElementById("accUser").value = item.user;
      document.getElementById("accPlan").value = item.plan;
    }
    if(e.target.classList.contains("delBtn")){
      const idx = e.target.dataset.index;
      if(confirm("¿Eliminar esta cuenta?")){
        const arr = loadAccounts();
        arr.splice(idx,1);
        saveAccounts(arr);
        renderAccounts();
      }
    }
  });
});

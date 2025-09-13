# 🎬 Streaming Lab

Streaming Lab es un proyecto web que simula un **servicio de administración de cuentas de streaming**.  
El objetivo es centralizar la gestión de usuarios, cuentas y planes de suscripción en una sola aplicación sencilla y atractiva.

---

## 🚀 Funcionalidades principales

### 🔑 Autenticación
- Registro de nuevos usuarios.
- Inicio de sesión con correo y contraseña.
- Recuperación de contraseña (en desarrollo).
- Cierre de sesión seguro.

### 👤 Gestión de cuentas
- Agregar, editar y eliminar cuentas de distintas plataformas de streaming.
- Visualización de las cuentas en una tabla ordenada.
- Formulario para administrar datos de cada cuenta (correo, plan, plataforma).

### 📊 Planes de suscripción
- Visualización de planes **Individual, Familiar y Corporativo**.
- Cada plan tiene imagen, descripción y precio.
- Opción de seleccionar un plan desde la interfaz.
- Video explicativo de funcionamiento.

### 🖥️ Dashboard
- Pantalla principal con **vista previa de un panel de administración**.
- Texto destacado con efecto neón para mayor impacto visual.

---

## 🏗️ Estructura del proyecto



StreamingLab/
│── index.html # Página de inicio (hero con banner + secciones de features)
│── login.html # Página de inicio de sesión
│── register.html # Página de registro de usuarios
│── plans.html # Página de planes disponibles
│── account.html # Página de gestión de cuentas de streaming
│
├── css/
│ └── styles.css # Estilos principales (colores, tipografía, responsive)
│
├── js/
│ └── scripts.js # Funcionalidades dinámicas (validaciones, interactividad)
│
└── img/ # Carpeta con imágenes y capturas usadas en las páginas



## 🎨 Diseño y estilo

- Paleta basada en tonos **morado y rosado**, con fondos oscuros.
- Títulos principales con **efecto de neón** (logo + hero).
- Tarjetas claras para features, planes y formularios.
- Botones con degradado violeta → rosado.
- Interfaz responsiva (adaptada a dispositivos móviles y escritorio).

---

## 👥 Actores relacionados

- **Visitante**: Puede ver la página inicial y los planes, pero no gestionar cuentas.  
- **Usuario registrado**: Puede autenticarse, gestionar cuentas y suscribirse a planes.  
- **Administrador (futuro)**: Encargado del mantenimiento del sistema.  

---

## ⚙️ Requerimientos técnicos

- HTML5, CSS3 y JavaScript básico.
- Compatible con navegadores modernos (Chrome, Firefox, Edge, Safari).
- Diseño **responsivo** con CSS Grid y Flexbox.
- Código organizado siguiendo buenas prácticas.

---

## 📌 Notas

Este proyecto es una maqueta funcional para fines académicos (**DSY1104**).  
No gestiona datos reales ni incluye integración con pasarelas de pago.  
Su objetivo es demostrar **estructuración web, diseño visual y organización de requisitos de software**.

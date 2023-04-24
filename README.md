## Presentación

**Hola**, mi nombre es **Angélica Ocampo**, Frontend Developer y felizmente estoy aspirando a tener un cupo en el gran equipo que es **MELI.** A continuación podran encontrar detalles sobre la implementación de la prueba técnica, espero les sea de su agrado. Muchas gracias.

##Recursos

- Backend
- Frontend

##Backend
El backend está implementado en JavaScript con **Node** y **Express**. Para una mejor implementación y apoyo en la lógica se destacan las siguientes librerías:

- `hapi/boom`: para el manejo de errores y quedaran de una manera mucho más comprensible.
- `axios`: para el cliente HTTP.

### Directorio del proyecto

    backend/
            middleware/
    			errorHandler
    			queryParams
            routes/
    			index
    			items
            services/
    			items
            app
            index

##Frontend
El frontend está implementado con JavaScript y React. Dentro de su implementación se destacan las siguientes librerías:

- `material-ui`: como la biblioteca de componentes de interfaz de usuario.
- `react-query`: que en base a unos hooks, permitió hacer llamadas al API y gestionar la cache.
  `axios`: para el cliente HTTP.
  `i18n`: para el manejo de lenguajes y traducciones en la aplicación.
  `scss`: para darle el mejor diseño a los elementos visuales de la aplicación.
  `react-router-dom`: para gestionar la nagevación en la aplicación.

### Directorio del proyecto

    frontend/
    	public/
    		locales/
    			es/
    				translation
    				...
        src/
    		api/
    			...
    		assets/
    			...
            components/
    			...
    		libs/
    			...
    		pages/
    			...
    		utils/
    			...
            App
    		i18n
    		index
    		...

##Instalación
Clona todo este repo, cuando lo hayas clonado, ingresa a cada directorio del front y back correspondiente, situados en la raiz de cada directorio, solo ejecuta `npm i` y listo 🥰. Aquí te va un ejemplo:
`user/front-meli/ npm i`
`user/back-meli/ npm i`

Despues de instalar todas las dependecias, en cada directorio correspondiente corre el proyecto. Asi:
`user/front-meli/ npm run start`
`user/back-meli/ npm run dev`

Gracias por esta increible oportunidad de demostrar que puedo ser parte de todo el equipo MELI 🟡.

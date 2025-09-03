# 🌍 Share a Place

> A JavaScript web application that lets users **find, share, and view places on an interactive map** using addresses or their current location.

---

## 📖 About

**Share a Place** is a lightweight web app where users can:
- Enter an address to find its location on a map.
- Use the browser’s **geolocation API** to detect their current position.
- Share a location with a **unique link** that others can open to view the same place.

The project uses **Webpack** for bundling, modern JavaScript (ES6 modules), and the **OpenLayers (ol.js)** library to render interactive maps.

---

## ✨ Features

- 🔎 **Search by Address**: Convert addresses into coordinates and display them on the map.  
- 📍 **Locate Me**: Use the browser’s built-in Geolocation API to detect the user’s position.  
- 🗺 **Interactive Map Rendering**: Maps are powered by **OpenLayers** with OpenStreetMap tiles.  
- 🔗 **Share Places**: Generate a shareable link with latitude, longitude, and address embedded.   
- 🖥 **Responsive UI**: Clean design with modals, loaders, and share controls.  


---

## 🗺 Maps Library (OpenLayers)

This project uses **[OpenLayers](https://openlayers.org/)** (`ol.js`) to handle map rendering.

- **OpenLayers** is a powerful open-source JavaScript library for displaying maps.  
- It supports layers, projections, markers, and interactions.  
- In this project, it is used to:
  - Display OpenStreetMap tiles.  
  - Center the map at given coordinates.  
  - Dynamically render different user-selected or shared locations.  

---

## 🛠 Installation

Clone and install dependencies:

```bash
git clone https://github.com/suffianakhtar/Share-Place-App.git
cd Share-Place-App
npm install
```

---

## 🚀 Usage

### Development Server
```bash
npm run build:dev
```

This starts `webpack-dev-server` with hot reloading.  

### Production Build
```bash
npm run build:prod
```

This generates optimized JS bundles inside `dist/`.

Then, open the `index.html` file in your browser to use the app.

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork the repo  
2. Create your feature branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/my-feature`)  
5. Open a Pull Request  

---

## 📜 License

Distributed under the **ISC License**. See [LICENSE](LICENSE) for details.

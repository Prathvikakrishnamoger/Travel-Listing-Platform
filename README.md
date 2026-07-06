# 🌍 Travel Listing Platform

A full-stack travel listing platform that enables users to explore, create, update, and manage accommodation listings. The application features secure user authentication, cloud-based image uploads, interactive maps, and review functionality using modern web technologies.

---

## ✨ Features

- 🔐 User Authentication and Authorization using Passport.js
- 🏠 Create, Update, Delete, and Explore Travel Listings
- 📍 Interactive maps powered by Mapbox GL JS
- 🗺️ Automatic location geocoding using Mapbox Geocoding API
- 🖼️ Image upload and cloud storage with Cloudinary
- ⭐ Add and manage reviews and ratings
- ✅ Server-side validation using Joi
- 💬 Flash messages for user feedback
- 🔒 Session management with Express Session and Connect-Mongo
- 📱 Responsive user interface built with Bootstrap
- 🏗️ MVC architecture for clean and maintainable code

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- EJS
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local
- Passport Local Mongoose

### Cloud Storage
- Cloudinary
- Multer
- Multer Storage Cloudinary

### Maps
- Mapbox GL JS
- Mapbox Geocoding API

### Validation & Sessions
- Joi
- Express Session
- Connect-Mongo
- Connect Flash

### Additional Tools
- dotenv
- method-override
- ejs-mate

---

## 📂 Project Structure

```text
Travel-Listing-Platform
│
├── controllers/
├── init/
├── models/
├── public/
│   ├── css/
│   └── js/
├── routes/
├── utils/
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
├── middleware.js
├── cloudConfig.js
├── schema.js
├── app.js
└── package.json
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Prathvikakrishnamoger/Travel-Listing-Platform.git
```

### Navigate to the project

```bash
cd Travel-Listing-Platform
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

### Run the application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Visit:

```
http://localhost:8080
```

---

## 🔮 Future Enhancements

- Advanced Search and Filtering
- Wishlist/Favorites
- Booking Functionality
- Online Payment Integration
- User Profiles
- Pagination
- Email Notifications

---


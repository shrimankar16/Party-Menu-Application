# 🎉 Party Menu Application

A modern, responsive web application for browsing and managing party menu items. Built with React 19, React Router DOM 7, and Vite 6.

## 🚀 Features

- **User Authentication**: Secure sign-in system with JWT token management
- **Protected Routes**: Menu page accessible only to authenticated users
- **Browse Menu**: View a curated collection of party dishes
- **Advanced Filtering**: Filter dishes by category (Starter, Main, Sides, Desert) and diet (Veg, Non-Veg)
- **Search Functionality**: Search dishes by name with case-insensitive matching
- **Dish Details**: View comprehensive information including ingredients, servings, and descriptions
- **Save Recipes**: Save favorite dishes with persistent localStorage storage
- **Responsive Design**: Fully responsive UI that works on all devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **React 19**: Latest React with modern hooks and features
- **React Router DOM 7**: Client-side routing with protected routes
- **Vite 6**: Lightning-fast build tool and dev server
- **Plain CSS**: Custom styling without external CSS frameworks
- **LocalStorage**: Persistent data storage for authentication and saved recipes

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd party-menu-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🔑 Test Credentials

Use these credentials to sign in:

- **Email**: admin@example.com
- **Password**: admin123

## 📁 Project Structure

```
party-menu-app/
├── src/
│   ├── components/
│   │   ├── FoodCard.jsx          # Reusable food card component
│   │   ├── FoodCard.css
│   │   └── ProtectedRoute.jsx    # Route protection wrapper
│   ├── context/
│   │   └── AuthContext.jsx       # Authentication context provider
│   ├── data/
│   │   └── menuData.js           # Static menu data and filter functions
│   ├── pages/
│   │   ├── SignIn.jsx            # Sign-in page
│   │   ├── SignIn.css
│   │   ├── Menu.jsx              # Main menu page (protected)
│   │   ├── Menu.css
│   │   ├── FoodDetail.jsx        # Dish detail page
│   │   ├── FoodDetail.css
│   │   ├── SavedRecipes.jsx      # Saved recipes page
│   │   ├── SavedRecipes.css
│   │   ├── NotFound.jsx          # 404 page
│   │   └── NotFound.css
│   ├── App.jsx                   # Main app component with routing
│   ├── App.css
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── package.json
└── README.md
```

## 🎯 Application Flow

1. **Sign In**: Users authenticate using the provided credentials
2. **Menu Access**: After successful login, users are redirected to the protected menu page
3. **Browse & Filter**: Users can filter dishes by category, diet type, or search by name
4. **View Details**: Clicking a dish card opens a detailed view with full description and ingredients
5. **Save Recipes**: Users can save/unsave recipes, which persist in localStorage
6. **Logout**: Logging out clears the session and redirects to the sign-in page

## 🔒 Security Features

- JWT token-based authentication
- Protected routes requiring valid authentication
- Secure API communication
- Token and user data stored in localStorage
- Automatic session management

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌐 API Integration

The application uses the following authentication API:

**Endpoint**: `https://serverless-api-teal.vercel.app/api/auth/signin`

**Method**: POST

**Request Body**:
```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

## 💾 LocalStorage Keys

- `party_menu_token`: Authentication token
- `party_menu_user`: User information
- `party_menu_saved_recipes`: Array of saved recipe objects

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Deployment

The application can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## 🧪 Features Checklist

- ✅ User authentication with API integration
- ✅ Protected routes
- ✅ Menu browsing with responsive grid layout
- ✅ Category filtering (All, Starter, Main, Sides, Desert)
- ✅ Diet filtering (All, Veg, Non-Veg)
- ✅ Name-based search functionality
- ✅ Detailed dish view with ingredients
- ✅ Save/unsave recipes functionality
- ✅ Persistent storage with localStorage
- ✅ Saved recipes page with remove functionality
- ✅ 404 Not Found page
- ✅ Responsive design for all screen sizes
- ✅ Loading states and error handling
- ✅ Clean, modern UI with smooth transitions

## 🎨 Design Highlights

- Gradient backgrounds for engaging visuals
- Card-based layouts for content organization
- Hover effects and smooth transitions
- Badge system for diet and category indicators
- Empty states with helpful messaging
- Intuitive navigation and user flows

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue in the repository.

---

Built with ❤️ using React, Vite, and modern web technologies.

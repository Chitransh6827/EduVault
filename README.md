# EduVault - Instructions

This document provides essential context for AI agents working with the EduVault codebase.

## Project Overview

EduVault is a full-stack educational resource sharing platform built with:
- Frontend: React + TypeScript + Vite
- Backend: Express.js
- State Management: Zustand
- Styling: Tailwind CSS

## Architecture

### Frontend Structure
- `src/pages/` - Page components following a flat hierarchy
- `src/components/` - Reusable UI components
- `src/store/` - Zustand stores for state management
  - `authStore.ts` - Authentication state and methods
  - `resourceStore.ts` - Educational resource management

### Backend Structure
- `backend/routes/` - Express route handlers
  - `auth.js` - Authentication routes (Google OAuth)
  - `otp.js` - Email verification endpoints
- `backend/models/` - MongoDB schemas
- `backend/utils/` - Shared utilities

## Key Patterns

### Authentication Flow
1. Google OAuth authentication via `backend/routes/auth.js`
2. JWT token generation and verification
3. Email verification using OTP system
4. State management through `authStore.ts`

Example auth implementation:
```typescript
// src/store/authStore.ts
export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  // ... other state
}));
```

### Resource Management
- Resources are educational materials (documents, videos, etc.)
- CRUD operations handled through `resourceStore.ts`
- Search and filtering implemented in `SearchAndFilter.tsx`

### UI Conventions
- Dark theme with gradient backgrounds (from-gray-900 via-gray-950 to-slate-950)
- Consistent text colors: text-gray-100 for headers, text-gray-400 for body
- Components use Tailwind's spacing and typography scales

## Development Workflow

### Setup
1. Install dependencies for both frontend and backend:
   ```bash
   npm install        # Root directory for frontend
   cd backend && npm install
   ```

2. Environment Variables:
   - Frontend: None required
   - Backend: JWT_SECRET, MONGODB_URI, EMAIL_SERVICE credentials

### Development Commands
- Frontend: `npm run dev` - Starts Vite dev server
- Backend: `npm run dev` - Starts Express server with nodemon

## Common Tasks

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.tsx`
3. Update navigation in `Navbar.tsx`

### Authentication Changes
- Update `authStore.ts` for new auth features
- Modify `ProtectedRoute.tsx` for route protection
- Backend changes in `auth.js` and `otp.js`

### Resource Management
1. Update `Form.js` model for new fields
2. Add endpoints in `server.js`
3. Update `resourceStore.ts` for frontend state
4. Modify `ResourceCard.tsx` and `ResourceGrid.tsx` for display

## Testing & Quality

- No established testing patterns yet (area for improvement)
- Manual testing through UI interaction
- Server endpoint testing via Postman/cURL

## Notes

- Project uses TypeScript for frontend only
- Backend relies on CommonJS modules
- Authentication flow combines Google OAuth with email verification

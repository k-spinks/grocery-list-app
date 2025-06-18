# 🛒 Grocery List App – User Stories & Feature Tracker

This document tracks the user stories and features planned or implemented in the Grocery List App. The goal is to go beyond a basic CRUD app and showcase thoughtful design, advanced front-end skills, and mobile readiness.

---

## ✅ Phase 1 – Core Features (MVP)

- [x] **Add Items**
      _As a user, I want to type an item name and optional quantity into an input field so I can add it to my grocery list._

- [ ] **Strike-Through Completed Items**
      _As a user, I want to click an item to mark it as complete so I can track which items I've already picked up._

- [ ] **Edit Items**
      _As a user, I want to click an edit icon next to a list item so I can change its name or quantity._

- [x] **Delete Items**
      _As a user, I want to click a trash icon so I can remove items I no longer need._

- [x] **Persistent Storage**
      _As a user, I want to see my grocery list saved across sessions so I don’t lose my list when I close the browser._

---

## 🚧 Phase 2 – Enhanced UX & Usability

- [ ] **Autocomplete Suggestions**
      _As a user, I want to see suggestions as I type so I can add items faster without typos._

- [ ] **Smart Quantity Parsing**
      _As a user, I want to type “2 apples” and have the app separate the quantity and item so I can add items more naturally._

- [ ] **Dark Mode**
      _As a user, I want to toggle between light and dark mode so I can use the app comfortably in different lighting conditions._

- [ ] **Responsive Design**
      _As a user, I want to use the app easily on mobile and desktop so I can add items on-the-go._

- [ ] **Reorder Items (Drag & Drop)**
      _As a user, I want to reorder items in my list so I can prioritize how I shop._

---

## 🔮 Phase 3 – Advanced & Showcase Features

- [ ] **Voice Input (Speech to Text)**
      _As a user, I want to speak the item I want to add so I can build my list hands-free._

- [ ] **Item Categories**
      _As a user, I want to categorize items (e.g., produce, dairy) so I can shop more efficiently._

- [ ] **List Templates**
      _As a user, I want to save and reuse shopping lists so I don’t have to recreate them every week._

- [ ] **Offline Mode**
      _As a user, I want to access my list even without internet so I can use it anywhere._

- [ ] **Collaborate in Real-Time**
      _As a user, I want to share my list and edit it with someone else live so we can shop together more effectively._

---

## 📱 Mobile App Considerations (Future Planning)

- [ ] Abstract logic and UI components to prep for React Native
- [ ] Use a scalable state manager (Zustand, Redux Toolkit)
- [ ] Design with mobile-first in mind
- [ ] Consider Expo for fast native builds
- [ ] Offline-first using service workers (PWA support)

---

## 📌 Backlog / Nice-to-Haves

- [ ] Barcode scanner to auto-fill item info
- [ ] Grocery aisle sorting logic
- [ ] Price tracking or budgeting features
- [ ] Gamification: streaks for using the app consistently

---

## 🗂 Notes

- Built with: _React / Next.js, Tailwind CSS, Zustand/Redux (TBD)_
- Storage: _LocalStorage (MVP), upgradeable to Firebase/Supabase_
- Testing: _Add unit/component tests using React Testing Library and/or Cypress_

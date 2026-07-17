# 🧪 Testing Guide - Party Menu Application

This document provides comprehensive testing instructions to ensure the application works correctly.

## 📋 Pre-Testing Checklist

Before starting tests:
- ✅ Application is running (`npm run dev`)
- ✅ No console errors on startup
- ✅ Build completes successfully (`npm run build`)

---

## 🔐 Authentication Testing

### Test 1: Sign In - Success Flow
**Steps:**
1. Navigate to http://localhost:5173
2. Enter email: `admin@example.com`
3. Enter password: `admin123`
4. Click "Sign In"

**Expected Result:**
- Button shows "Signing in..." while loading
- User is redirected to Menu page
- Welcome message displays "Welcome, Admin User!"
- No error messages

### Test 2: Sign In - Invalid Credentials
**Steps:**
1. Navigate to /signin
2. Enter email: `wrong@example.com`
3. Enter password: `wrongpass`
4. Click "Sign In"

**Expected Result:**
- Error banner displays "Invalid email or password"
- User remains on sign-in page
- Form fields remain editable

### Test 3: Sign In - Already Authenticated
**Steps:**
1. Sign in successfully
2. Navigate to /signin directly

**Expected Result:**
- User is automatically redirected to Menu page
- Sign-in form is not displayed

### Test 4: Logout
**Steps:**
1. Sign in successfully
2. Click "Logout" button in header

**Expected Result:**
- User is redirected to sign-in page
- Authentication token is cleared
- Accessing / redirects to /signin

---

## 🍽️ Menu Page Testing

### Test 5: Menu Display
**Steps:**
1. Sign in successfully
2. Observe the menu page

**Expected Result:**
- Header shows "Party Menu" and welcome message
- All 16 menu items are displayed
- Items count shows "16 items found"
- Cards display properly with images, badges, and details

### Test 6: Category Filtering
**Steps:**
1. Click "Starter" category chip
2. Observe filtered results
3. Click "Main" category chip
4. Click "Sides" category chip
5. Click "Desert" category chip
6. Click "All" category chip

**Expected Result:**
- Starter: Shows 4 items (Paneer Tikka, Chicken Wings, Spring Rolls, Fish Fingers)
- Main: Shows 4 items (Butter Chicken, Palak Paneer, Grilled Salmon, Vegetable Biryani)
- Sides: Shows 4 items (Garlic Bread, Caesar Salad, French Fries, Coleslaw)
- Desert: Shows 4 items (Chocolate Lava Cake, Tiramisu, Gulab Jamun, Cheesecake)
- All: Shows all 16 items
- Items count updates correctly
- Active chip is highlighted

### Test 7: Diet Filtering
**Steps:**
1. Click "Veg" diet chip
2. Observe filtered results
3. Click "Non-Veg" diet chip
4. Click "All" diet chip

**Expected Result:**
- Veg: Shows only vegetarian items (green badge)
- Non-Veg: Shows only non-vegetarian items (red badge)
- All: Shows all items
- Items count updates correctly

### Test 8: Combined Filtering
**Steps:**
1. Select "Starter" category
2. Select "Veg" diet

**Expected Result:**
- Shows only vegetarian starters (Paneer Tikka, Spring Rolls)
- Items count shows correct number
- All displayed items match both filters

### Test 9: Search Functionality
**Steps:**
1. Type "chicken" in search bar
2. Click "Search" button
3. Clear search and type "tikka"
4. Press Enter key

**Expected Result:**
- First search shows Butter Chicken and Chicken Wings
- Second search shows Paneer Tikka
- Items count updates correctly
- Search is case-insensitive

### Test 10: Empty State
**Steps:**
1. Select "Starter" category
2. Type "salmon" in search (which is a main dish)
3. Click "Search"

**Expected Result:**
- Empty state message displays
- Shows "No dishes found"
- Suggestion text: "Try different filters or search terms"
- Items count shows "0 items found"

---

## 📄 Food Detail Page Testing

### Test 11: View Food Details
**Steps:**
1. From menu page, click any food card
2. Observe the detail page

**Expected Result:**
- URL changes to /menu/:id
- Hero image displays correctly
- Category and diet badges show in top-right
- Dish name, servings, and description display
- Ingredients list shows with quantities
- Back to Menu and Saved Recipes links are visible
- Save Recipe button is present

### Test 12: Save Recipe
**Steps:**
1. Navigate to a food detail page
2. Click "Save Recipe" button
3. Return to menu
4. Check "Saved Recipes" badge in header

**Expected Result:**
- Button changes to "✓ Saved" with green color
- Saved Recipes badge in header shows count (1)
- Recipe persists in localStorage

### Test 13: Unsave Recipe
**Steps:**
1. Navigate to a saved recipe's detail page
2. Click "✓ Saved" button

**Expected Result:**
- Button changes back to "+ Save Recipe"
- Saved Recipes count decreases
- Recipe removed from localStorage

---

## 💾 Saved Recipes Page Testing

### Test 14: View Saved Recipes
**Steps:**
1. Save 2-3 recipes
2. Click "Saved Recipes" link in header
3. Observe the page

**Expected Result:**
- URL is /saved-recipes
- Page title shows "Saved Recipes"
- Subtitle shows correct count
- All saved recipes display as cards
- Each card has a "Remove" button

### Test 15: Remove from Saved
**Steps:**
1. On Saved Recipes page
2. Click "Remove" button on a card

**Expected Result:**
- Card is immediately removed from view
- Count updates
- localStorage is updated
- Change persists on page refresh

### Test 16: Empty Saved Recipes
**Steps:**
1. Remove all saved recipes
2. Observe the page

**Expected Result:**
- Empty state displays
- Shows "No saved recipes yet" message
- "Browse Menu" link is present
- Clicking link navigates to menu

### Test 17: Navigate to Detail from Saved
**Steps:**
1. On Saved Recipes page
2. Click on a recipe card (not Remove button)

**Expected Result:**
- Navigates to detail page for that recipe
- Detail page shows correct information
- "✓ Saved" button is displayed

---

## 🚫 Error Handling Testing

### Test 18: 404 Page
**Steps:**
1. Navigate to /invalid-route
2. Observe the page

**Expected Result:**
- 404 page displays
- Shows "Page Not Found" message
- Link to menu or sign-in is present
- Link destination depends on authentication status

### Test 19: Invalid Menu Item ID
**Steps:**
1. Navigate to /menu/9999 (non-existent ID)

**Expected Result:**
- Redirects to 404 page

### Test 20: Protected Route Access
**Steps:**
1. Clear localStorage (browser dev tools)
2. Navigate to / directly

**Expected Result:**
- Redirects to /signin
- Cannot access menu without authentication

---

## 📱 Responsive Design Testing

### Test 21: Mobile View (< 768px)
**Steps:**
1. Open browser dev tools
2. Toggle device toolbar
3. Select mobile device (iPhone, Pixel, etc.)
4. Test all pages

**Expected Result:**
- Menu grid shows 1 column
- Header elements stack properly
- Buttons remain accessible
- No horizontal scroll
- Text remains readable
- Images scale appropriately

### Test 22: Tablet View (768px - 1199px)
**Steps:**
1. Set viewport to 800px width
2. Test all pages

**Expected Result:**
- Menu grid adjusts to 2 columns
- Layout remains balanced
- All functionality works

### Test 23: Desktop View (1200px+)
**Steps:**
1. Set viewport to 1400px width
2. Test all pages

**Expected Result:**
- Menu grid shows 3-4 columns
- Maximum width container centers content
- Images display at optimal size

---

## 🌐 Browser Compatibility Testing

### Test 24: Cross-Browser Testing
Test the application in:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari

**Expected Result:**
- All features work consistently
- Styles render correctly
- No browser-specific issues

---

## 💾 LocalStorage Testing

### Test 25: Data Persistence
**Steps:**
1. Sign in
2. Save 2-3 recipes
3. Close browser tab
4. Reopen application

**Expected Result:**
- User remains authenticated
- Saved recipes are still present
- Filters reset to defaults

### Test 26: Clear Data
**Steps:**
1. Open browser dev tools
2. Application → Local Storage
3. Clear all keys
4. Refresh page

**Expected Result:**
- User is logged out
- Saved recipes are cleared
- Redirected to sign-in page

---

## 🔄 Navigation Testing

### Test 27: Back Button Behavior
**Steps:**
1. Sign in → Menu
2. Click a food item → Detail
3. Click browser back button

**Expected Result:**
- Returns to menu page
- Filters maintained (if any were set)

### Test 28: Direct URL Access
**Steps:**
1. Copy a detail page URL (/menu/5)
2. Open in new tab

**Expected Result:**
- Page loads correctly
- Navigation works
- Can return to menu

---

## ⚡ Performance Testing

### Test 29: Build Size
**Steps:**
```bash
npm run build
```

**Expected Result:**
- Build completes in < 5 seconds
- Total bundle size < 300KB (gzipped < 100KB)
- No critical warnings

### Test 30: Load Time
**Steps:**
1. Clear browser cache
2. Navigate to application
3. Check Network tab in dev tools

**Expected Result:**
- Initial page load < 2 seconds
- No failed requests
- Images load progressively

---

## 🐛 Bug Testing Scenarios

### Test 31: Rapid Clicking
**Steps:**
1. Rapidly click "Sign In" multiple times
2. Rapidly click "Save Recipe" multiple times
3. Rapidly toggle filters

**Expected Result:**
- No duplicate requests
- No UI breaking
- State remains consistent

### Test 32: Empty Search
**Steps:**
1. Leave search field empty
2. Click Search button

**Expected Result:**
- Shows all items (same as clearing filters)
- No errors

### Test 33: Special Characters
**Steps:**
1. Type special characters in search: `@#$%^&*()`
2. Click Search

**Expected Result:**
- Returns no results gracefully
- No console errors
- Empty state displays

---

## ✅ Final Production Checklist

Before deployment:
- [ ] All tests pass
- [ ] No console errors
- [ ] No console warnings (except known ESLint warnings)
- [ ] Build succeeds: `npm run build`
- [ ] Lint passes: `npm run lint`
- [ ] All images load correctly
- [ ] Authentication works
- [ ] All routes accessible
- [ ] LocalStorage works correctly
- [ ] Responsive on all screen sizes
- [ ] Works in all major browsers
- [ ] README is complete
- [ ] Environment variables configured (if any)

---

## 🎉 Success Criteria

The application passes testing when:
✅ All 33 tests pass successfully
✅ No critical bugs found
✅ User experience is smooth and intuitive
✅ Performance is acceptable
✅ Code quality meets standards

---

## 📝 Test Results Template

```
Date: __________
Tester: __________

Authentication Tests (1-4): [ ] Pass [ ] Fail
Menu Tests (5-10): [ ] Pass [ ] Fail
Detail Page Tests (11-13): [ ] Pass [ ] Fail
Saved Recipes Tests (14-17): [ ] Pass [ ] Fail
Error Handling Tests (18-20): [ ] Pass [ ] Fail
Responsive Tests (21-23): [ ] Pass [ ] Fail
Browser Tests (24): [ ] Pass [ ] Fail
LocalStorage Tests (25-26): [ ] Pass [ ] Fail
Navigation Tests (27-28): [ ] Pass [ ] Fail
Performance Tests (29-30): [ ] Pass [ ] Fail
Bug Scenarios (31-33): [ ] Pass [ ] Fail

Notes: _______________________________________________
```

---

For issues found during testing, please document:
- Test number
- Steps to reproduce
- Expected vs actual result
- Browser/device information
- Screenshots if applicable

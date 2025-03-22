# sennik.dev Style Guide

## 1. Typography
- **Font Family:** Poppins (Sans-serif)
- **Headers, Captions, Labels:** Use sans-serif fonts consistently.
- **Font Size:**
  - Headers: 2rem
  - Subheaders: 1.5rem
  - Body text: 1.2rem
  - Buttons & Labels: 1.2rem

## 2. Colors
### Primary Palette
- **Primary Color:** #6a0572 (Buttons, Highlights)
- **Secondary Color:** #240046 (Navbar, Section Backgrounds)
- **Dark Background:** #10002b (Main Background)
- **Text Color:** #e0e0e0
- **Hover State:** #82008b (Button Hover)

## 3. Layout
- **Max Content Width:** 900px (Ensures readability on wide screens)
- **Content Centering:** Apply `margin: 0 auto;` to keep sections aligned centrally.

## 4. Background
- **Gradient Background:** Use `linear-gradient(to bottom, #10002b, #240046)`
- **Avoid Separate Background Component:** Implement background styles directly into `body` or `#root`.

## 5. UI Components
- **Buttons:**
  - Padding: 12px 24px
  - Rounded Corners: 10px
  - Hover Effect: Darker shade with smooth transition
- **Text Inputs:**
  - Background: Dark theme (#10002b)
  - Borders: 2px solid primary color (#6a0572)
  - Font Size: 1.1rem

## 6. Animations
- **Loading Spinner:**
  - Border animation with primary color
  - `animation: spin 1s linear infinite;`

## 7. Accessibility
- Ensure color contrast meets WCAG guidelines.
- Use larger fonts for readability.
- Maintain responsive design principles for all screen sizes.

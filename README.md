# Orderly Delight

Build a professional, modern, responsive Product Ordering Application based on the requirements below.

The application should look like a real-world production application suitable for a frontend developer technical assignment. Do NOT make it look like a basic CRUD/demo project.

1. Technology

Use:

React

TypeScript

Vite

Tailwind CSS

React Router

Lucide React icons

Local state / Context API where appropriate

No backend is required

Use static/hardcoded authentication credentials

Use local product/category data

Use clean reusable components

Keep the code modular and maintainable.

2. Overall Design Direction

Create a premium modern food/product ordering UI.

Color palette

Use a sophisticated color system:

Primary: Deep Indigo / Violet

Secondary Accent: Warm Orange / Coral

Background: Very light warm gray

Cards: White

Main text: Dark charcoal

Secondary text: Muted gray

Success: Green

Error: Red

The primary color should be used for navigation, active states and important UI elements.

The orange/coral accent should be used for:

Prices

Add buttons

Checkout/order CTA

Quantity highlights

Important interactive elements

Do not use too many colors. Keep the interface elegant and consistent.

3. Typography

Use a modern font such as:

Inter or Poppins

Create a clear hierarchy:

Large bold page headings

Medium-weight section headings

Comfortable body text

Clearly visible prices

Small muted supporting text

Avoid overly large text that wastes screen space.

4. Global UI Style

Use:

Rounded cards

Soft shadows

Subtle borders

Clean spacing

Smooth transitions

Modern iconography

High-quality product imagery

Consistent button styles

Cards should have subtle hover effects rather than aggressive animations.

Use glassmorphism only where it genuinely improves the design. Do not overuse it.

5. PAGE 1 — LOGIN

Create a beautiful split-screen login page.

Desktop

Left side:

Attractive food/product image or visual illustration

Dark gradient overlay

Application branding

Short marketing statement

Example:

"Good food. Simple ordering."

Supporting text:

"Discover your favorites, build your order and enjoy a seamless ordering experience."

Right side:

Application logo

"Welcome Back" heading

Email/Username input

Password input

Show/hide password icon

Login button

Error message area

Login behavior

Use static credentials.

For example:

Username:
admin

Password:
admin123

When the user enters valid credentials:

→ redirect to /menu

When credentials are invalid:

Show a clean inline error:

"Invalid username or password. Please try again."

Do NOT use browser alerts.

Add subtle validation animations.

The login button should have:

Hover animation

Press animation

Loading state if appropriate

6. PAGE 2 — MENU

After login, redirect to the Menu page.

Create a polished application layout.

Header

Create a sticky top navigation bar containing:

Logo

"Menu"

"My Order"

Optional search icon/input

User/profile icon

Logout button

The header should have a subtle shadow or border when scrolling.

7. MENU HERO SECTION

At the top of the menu page create a visually attractive hero section.

Example:

"Find your favorite"

"Choose from our delicious selection and build your perfect order."

Include an attractive product/food image.

Add a subtle gradient background.

Use a gentle entrance animation when the page loads.

8. CATEGORY SECTION

Create a horizontally scrollable category selector.

Example categories:

All

Burgers

Pizza

Pasta

Snacks

Desserts

Drinks

Each category should contain:

Circular or rounded image/icon

Category name

Active state

When a category is selected:

Highlight the selected category

Smoothly transition the product list

Filter products belonging to that category

Do not reload the page.

Use smooth animated transitions when switching categories.

9. PRODUCT GRID

Display products using responsive cards.

Desktop:

4 cards per row where appropriate.

Tablet:

2–3 cards.

Mobile:

1–2 cards depending on screen width.

Each product card should contain:

Product image

Category

Product name

Short description

Price

Add button

Optional rating indicator

Example:

Classic Chicken Burger

"Grilled chicken, lettuce, tomato and special sauce."

₹249

[ + Add ]

Product hover animation

On hover:

Slight upward movement

Image subtle zoom

Shadow becomes slightly stronger

Add button becomes more prominent

Keep the animation smooth and professional.

10. ADD TO ORDER

When the user clicks "Add":

Product should be added to the order/cart

Cart count should update

Button should provide visual feedback

Do not add duplicate cart rows; increase quantity instead

Example:

Burger x 2

Pizza x 1

11. ORDER / CART SECTION

Create a professional order summary section.

Desktop

Display it as a sticky sidebar on the right side of the menu.

Example:

MY ORDER

Classic Burger
₹249

[-] 2 [+]

Pizza Margherita
₹299

[-] 1 [+]

Subtotal ₹797
Tax ₹40

TOTAL ₹837

[ Place Order ]

Mobile

Do NOT keep a large sidebar.

Instead:

Create a fixed bottom cart bar:

"3 Items ₹837 View Order →"

When clicked, open an animated bottom sheet/modal containing the full order.

12. QUANTITY CONTROLS

Each selected product must have:

[-] quantity [+]

When + is clicked:

→ increase quantity

When - is clicked:

→ decrease quantity

If quantity reaches 0:

→ remove the product from the order.

The total amount must update immediately.

Use smooth number/state transitions where possible.

13. TOTAL CALCULATION

Automatically calculate:

Subtotal

Tax/service charge if included

Grand Total

Example calculation:

Product price × quantity

Then:

Subtotal = sum of all products

Tax = percentage of subtotal

Grand Total = subtotal + tax

Make the calculation completely dynamic.

Never hardcode the displayed total.

14. EMPTY CART STATE

When no products are selected, show a beautiful empty state.

Example:

🛒

"Your order is empty"

"Start exploring the menu and add something delicious."

[ Explore Menu ]

Do not show a blank white section.

15. ORDER CONFIRMATION

When the user clicks:

"Place Order"

show a polished confirmation modal.

Example:

✓

"Order Placed Successfully!"

"Your order has been added successfully."

Display:

Order number

Number of items

Total amount

Button:

"Continue Shopping"

No backend/payment functionality is required.

16. ANIMATIONS

Animations are important.

Use subtle, professional animations throughout the application.

Page animations

On page load:

Fade in

Slight upward movement

Category animations

When changing category:

Smooth transition

Product cards fade/slide into view

Product cards

On hover:

translateY(-4px)

image scale slightly

shadow transition

Add to cart

When adding:

Button feedback animation

Cart count briefly scales/bounces

Cart

When quantity changes:

Smooth number transition

Modal

Use:

Fade-in backdrop

Scale/slide-up modal

Scroll animations

Implement subtle scroll reveal animations for major sections.

Elements should:

Fade in

Move upward slightly

Appear progressively

Do NOT make animations excessive.

The application must remain fast and professional.

Use CSS transitions and lightweight animation techniques. Avoid unnecessary heavy animation libraries unless needed.

17. HOVER EFFECTS

Add polished hover states to:

Category cards

Product cards

Add buttons

Navigation links

Cart buttons

Quantity buttons

Primary CTA buttons

Use transitions around 200–300ms.

Avoid flashy or distracting effects.

18. RESPONSIVE DESIGN

The application must work perfectly on:

Desktop

Laptop

Tablet

Mobile

Pay special attention to:

Mobile

Header should remain compact

Category list horizontally scrollable

Product cards should fit properly

Cart should become a bottom sticky bar

Order summary should become a bottom sheet/modal

Buttons should be touch-friendly

No horizontal page overflow

19. DATA

Create realistic static data.

Create at least:

Categories

All

Burgers

Pizza

Pasta

Snacks

Desserts

Drinks

Create at least 4 products per major category.

Each product should have:

id

name

category

description

price

image

optional rating

Use high-quality publicly available food/product images.

Make sure image URLs are reliable.

20. COMPONENT ARCHITECTURE

Create reusable components such as:

LoginForm

Navbar

HeroSection

CategoryList

CategoryCard

ProductGrid

ProductCard

Cart

CartItem

QuantityControl

OrderSummary

EmptyCart

OrderConfirmationModal

Keep components small and reusable.

21. ROUTING

Implement:

/

→ Login page

/menu

→ Menu page

If the user is not authenticated:

→ redirect to login.

Use localStorage for the simple static authentication state.

Logout should:

Clear authentication state

Redirect to login

22. UX REQUIREMENTS

The application should feel intuitive.

Important actions should be visually obvious.

Use:

Clear CTA buttons

Proper spacing

Consistent icons

Meaningful empty states

Helpful error messages

Smooth transitions

Proper loading/feedback states

Do not use unnecessary popups.

Do not use browser alert().

23. ACCESSIBILITY

Include:

Proper button labels

Accessible form labels

Keyboard-friendly interactions

Good color contrast

Focus states

Alt text for images

24. IMPORTANT VISUAL QUALITY REQUIREMENT

The final result should look like a real professional frontend project, not an AI-generated template.

Avoid:

Excessive gradients

Excessive glassmorphism

Huge rounded containers

Random colors

Excessive animations

Generic placeholder UI

Inconsistent spacing

Cluttered layouts

Prioritize:

clean + premium + modern + functional + responsive

The application should immediately demonstrate strong knowledge of:

React

Component architecture

State management

Conditional rendering

Array filtering

Cart logic

Dynamic calculations

Responsive UI

UX design

CSS/Tailwind

Routing

25. FINAL EXPECTED USER FLOW

The complete flow should be:

Login Page

↓

Validate credentials

↓

Menu Page

↓

Select Category

↓

Display filtered products

↓

Add Product

↓

Product appears in Cart

↓

Increase / decrease quantity

↓

Total updates automatically

↓

Place Order

↓

Order Confirmation

FINAL INSTRUCTION

Build the complete frontend now.

Prioritize functionality first and visual polish second, but both should be production quality.

Make the UI visually impressive enough for a technical assignment/demo.

Ensure there are no broken buttons, empty sections, console errors, TypeScript errors, or non-functional interactions.

After implementation, verify the complete user flow from login → menu → category → products → cart → quantity updates → total calculation → order confirmation.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/43179f30-d385-4535-bab7-1365ebd4726c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

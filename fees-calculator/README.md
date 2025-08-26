# Fees Calculator

A comprehensive React application for calculating fees and total costs with ease. Built with TypeScript and modern CSS styling.

![Fees Calculator Screenshot](https://github.com/user-attachments/assets/83776e2c-83bc-4085-8a96-1ded7ddedc44)

## Features

### 📊 **Smart Fee Calculations**
- **Base Amount Input**: Enter any base amount for calculations
- **Percentage Fees**: Automatically calculates percentage-based fees (e.g., 2.5% processing fee)
- **Fixed Fees**: Supports fixed dollar amount fees (e.g., $15 service fee)
- **Real-time Updates**: Calculations update instantly as you modify inputs

### 🔧 **Customizable Fee Management**
- **Pre-configured Fees**: Comes with common fees like processing, service, transaction, convenience, and platform fees
- **Custom Fee Addition**: Add your own fees with custom descriptions and amounts
- **Fee Type Selection**: Choose between fixed dollar amounts or percentage-based fees
- **Fee Removal**: Easily remove unwanted fees from calculations

### 📈 **Detailed Results**
- **Clear Breakdown**: Shows subtotal, total fees, and grand total
- **Itemized View**: Detailed breakdown of each selected fee
- **Copy Functionality**: Copy results to clipboard for sharing
- **Clear All**: Reset all inputs with one click

### 🎨 **Modern UI/UX**
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Beautiful Gradient Background**: Eye-catching purple gradient design
- **Card-based Layout**: Clean, organized interface with cards
- **Intuitive Controls**: Easy-to-use checkboxes, inputs, and buttons

## Demo

### Basic Usage Example:
1. **Enter Base Amount**: $1,000
2. **Select Fees**: 
   - Processing Fee (2.5%) = $25.00
   - Service Fee ($15) = $15.00
3. **Results**:
   - Subtotal: $1,000.00
   - Total Fees: $40.00
   - **Grand Total: $1,040.00**

![Working Demo](https://github.com/user-attachments/assets/09e67dab-c582-4c77-a0ca-d2eeaaad8ab9)

## Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
Creates optimized build in the `build` folder.

## Deployment Options

### 🚀 Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in this directory
3. Follow the prompts for instant deployment

### 🌐 Netlify
1. Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for continuous deployment

### 📄 GitHub Pages
1. The repository includes a GitHub Actions workflow
2. Push to main branch to trigger automatic deployment

## Technical Details

### Built With
- **React 18** with TypeScript
- **Create React App** for build tooling
- **Modern CSS** with inline styles for optimal performance
- **Responsive Grid Layout**
- **Local State Management** with React hooks

### Key Components
- **FeesCalculator**: Main component with all functionality
- **Fee Interface**: TypeScript interfaces for type safety
- **Calculation Logic**: Real-time fee calculations with React hooks

## Use Cases

### 💼 **Business Applications**
- E-commerce checkout fee calculations
- Service provider cost estimates
- Payment processing fee breakdowns
- Subscription pricing with add-ons

### 🏦 **Financial Services**
- Loan origination fees
- Investment account fees
- Banking service charges
- Transaction cost analysis

### 📋 **General Purpose**
- Event planning cost breakdowns
- Project budget estimations
- Invoice generation with fees
- Cost comparison analysis

---

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

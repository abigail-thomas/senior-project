## Cost of Living
**CSC 4899 Senior Project**

**_Authors: Abigail Thomas, Peter Woodard, Trevor Davis_**
## MVP
A personalized cost-of-living and planning platform that helps users determine where they can most affordably live based on their income, spending habits, lifestyle preferences, and financial goals.

## Key Features
1. Personalized Affordability Analysis
2. Price Trends
3. Budgeting & Goal Forecasting
4. Location Comparisons & Exploration
5. City Affordability Score

## Tech Stack 
### Frontend
- React
- Tailwind

### Backend
- Django
- Authentication

### Database
- SQLite

### APIs & Libraries
- MapLibre GL JS
- Cost of Living
    - @(https://github.com/zackharley/cost-of-living-api)

## Post-MVP Ideas
Future features may include: 
1. "Vacation/Travel" mode for trip planning
2. Adding friends for group goals and affordability with roommate
3. Gamification such as streaks and awards
4. Interactive affordability heat map

## How to Run
### 1. Clone this repo 
This project also uses @https://github.com/zackharley/cost-of-living-api 

Clone that repo separately and follow the installation and setup instructions in its README
### 2. Install the required dependencies

  Navigate to the frontend directory:
```bash
  cd frontend
  npm install
```
### 3. Create the virtual environment

  Navigate to the backend directory:
```bash
cd ../backend
python -m venv venv
```
### 4. Activate virtual environment
**macOS / Linus:**
  ```bash
    source venv/bin/activate
  ```
**Windows:**
  ```bash
    source venv/Scripts/activate
  ```
### 5. Install backend packages
```pip install -r requirements.txt```
   
### 6. Run the project
**Start the Backend:**
  ```
    python manage.py runserver
  ```
**Start the Frontend:**
```bash
   cd ../frontend
   npm run dev
   ```

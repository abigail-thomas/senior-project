## MVP
A personalized cost-of-living and planning platform that helps users determine where they can most affordably live based on their income, spending habits, lifestyle preferences, and financial goals.

## Key Features
1. Personalized affordability analysis
2. Price trends
3. Budgeting & goal forecasting
4. Location comparisons/recommendations & exploration
5. Unique affordability score per city

## Tech Stack
`
┌─────────────────────┐
                 │      Frontend       │
                 │                     │
                 │ React / Vue / HTMX  │
                 └──────────┬──────────┘
                            │
                         REST API
                            │
                 ┌──────────▼──────────┐
                 │       Django        │
                 │                     │
                 │ Authentication      │
                 │ Budget Engine       │
                 │ Recommendation      │
                 │ Goal Engine         │
                 │ Location API        │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │       SQLite        │
                 │                     │
                 │ Users               │
                 │ Budgets             │
                 │ Expenses            │
                 │ Goals               │
                 │ Locations           │
                 │ Cost Data           │
                 │ Historical Data     │
                 └─────────────────────┘
`

## Post-MVP Ideas
1. "Vacation/Travel" mode for trip planning
2. Adding friends for group goals and affordability with roommate
3. Gamification such as streaks and awards
4. Interactive affordability heat map

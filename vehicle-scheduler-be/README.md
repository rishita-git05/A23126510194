## Vehicle Scheduler Backend

This project is a backend microservice that helps decide which vehicle maintenance tasks should be done at different depots, based on available mechanic hours and task importance.

The main idea is to get the maximum possible “impact” from the available time without exceeding capacity.

---

## What this project does

Each depot has a limited number of mechanic hours available.  
Each vehicle task takes some time and has an importance score.

The goal is to pick the best combination of tasks so that:
- We do not exceed available hours
- The total importance score is as high as possible

---

## How it works (simple explanation)

I treated this as a classic **0/1 Knapsack problem**.

For every depot:
- I take all available vehicle tasks
- I run a dynamic programming solution to find the best combination of tasks
- I also track which tasks were selected, not just the score

So the output tells both:
- total impact achieved
- list of selected tasks

---

## APIs used

The data is fetched from these two APIs:

- Depots:
http://4.224.186.213/evaluation-service/depots

- Vehicles:
http://4.224.186.213/evaluation-service/vehicles

Both APIs require a Bearer token for authentication.

---

## Tech used

- Node.js
- Express
- Axios
- JavaScript

---

## API endpoint

### GET `/schedule`

This endpoint returns the optimized schedule for all depots.

### Example response:

```json
[
  {
    "depotID": "D1",
    "totalImpact": 120,
    "tasks": ["T2", "T5", "T9"]
  }
]
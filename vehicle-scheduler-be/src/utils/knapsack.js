function knapsack(tasks, capacity) {
  const n = tasks.length;

  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const wt = Number(tasks[i - 1].Duration || 0);
    const val = Number(tasks[i - 1].Impact || 0);

    for (let w = 0; w <= capacity; w++) {
      if (wt <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          val + dp[i - 1][w - wt]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let w = capacity;
  const selected = [];

  for (let i = n; i > 0; i--) {
    const wt = Number(tasks[i - 1].Duration || 0);

    if (dp[i][w] !== dp[i - 1][w]) {
      selected.push(tasks[i - 1].TaskID);
      w -= wt;
    }
  }

  return {
    maxImpact: dp[n][capacity],
    selectedTasks: selected.reverse()
  };
}

module.exports = knapsack;